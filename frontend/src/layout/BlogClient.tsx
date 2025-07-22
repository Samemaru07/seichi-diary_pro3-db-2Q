"use client";

import React, { useState } from "react";
import { Post, Comment } from "@/layout/BlogLayout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ContentsLayout from "@/features/ContentsLayout";
import { API_ENDPOINTS } from "@/lib/config";
import styles from "@/app/blog/[id]/article.module.css";

interface BlogClientProps {
    post: Post;
    comments: Comment[];
}

const BlogClient: React.FC<BlogClientProps> = ({ post, comments: initialComments }) => {
    const id = String(post.id);

    const [liked, setLiked] = useState<boolean>(false);
    const [goodNumber, setGoodNumber] = useState<number>(post.good_number || 0);
    const [comments, setComments] = useState<Comment[]>(initialComments);
    const [commentText, setCommentText] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [replyFormsVisible, setReplyFormsVisible] = useState<Record<number, boolean>>({});
    const [replyTexts, setReplyTexts] = useState<Record<number, string>>({});
    const [replyNames, setReplyNames] = useState<Record<number, string>>({});

    const formatDateTime = (isoString: string): string => {
        const date = new Date(isoString);
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const dd = String(date.getDate()).padStart(2, "0");
        const hh = String(date.getHours()).padStart(2, "0");
        const min = String(date.getMinutes()).padStart(2, "0");
        return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
    };

    const toggleLike = async () => {
        const newLiked = !liked;
        setLiked(newLiked);
        setGoodNumber(newLiked ? goodNumber + 1 : goodNumber - 1);

        await fetch(API_ENDPOINTS.POSTS.LIKE(id), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ liked: newLiked })
        });
    };

    const submitComment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!commentText || !userName) return;

        const res = await fetch(API_ENDPOINTS.POSTS.COMMENTS(id), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_name: userName, content: commentText })
        });

        if (res.ok) {
            const data = await res.json();
            setComments((prev) => [...prev, data.comment as Comment]);
            setCommentText("");
            setUserName("");
        }
    };

    const toggleReplyForm = (commentId: number) => {
        setReplyFormsVisible((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
    };

    const submitReply = async (commentId: number) => {
        const name = replyNames[commentId];
        const text = replyTexts[commentId];
        if (!name || !text) return;

        const res = await fetch(API_ENDPOINTS.POSTS.COMMENTS_REPLIES(id), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ parent_id: commentId, user_name: name, content: text })
        });

        if (res.ok) {
            const updatedRes = await fetch(API_ENDPOINTS.POSTS.COMMENTS(id));
            const updatedData = await updatedRes.json();
            setComments(updatedData.comments as Comment[]);
            setReplyNames((prev) => ({ ...prev, [commentId]: "" }));
            setReplyTexts((prev) => ({ ...prev, [commentId]: "" }));
            setReplyFormsVisible((prev) => ({ ...prev, [commentId]: false }));
        }
    };

    return (
        <div className="blogContents">
            <ContentsLayout title={post.title} />

            <div className={`${styles.markdownWrapper} prose max-w-none`}>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    skipHtml={true}
                >
                    {post.content}
                </ReactMarkdown>
            </div>

            <div className={styles.good}>
                <button
                    onClick={toggleLike}
                    className={`${styles.goodBtn} ${liked ? "bg-red-500 text-white hover:bg-red-600" : "bg-pink-400 text-white hover:bg-pink-500"}`}
                >
                    {liked ? "いいね解除" : "いいね"}
                </button>
                <p>👍 {goodNumber}</p>
            </div>

            <div>
                <h3 className={styles.commentH3}>コメント一覧</h3>
                {comments.length === 0 ? (
                    <p>コメントはまだありません</p>
                ) : (
                    <ul className={styles.comment}>
                        {comments.map((comment) => (
                            <li key={comment.comment_id}>
                                <div className={styles.commentTopWrapper}>
                                    <p className={styles.userName}>{comment.user_name}</p>
                                    <p className={styles.date}>{comment.created_at ? formatDateTime(comment.created_at) : "日時不明"}</p>
                                </div>

                                <p className={styles.commentContent}>{comment.content}</p>

                                {comment.replies?.map((reply) => (
                                    <div key={reply.comment_id} className={styles.replyWrapper}>
                                        <div className={styles.commentTopWrapper}>
                                            <p className={styles.userName}>{reply.user_name}</p>
                                            <p className={styles.date}>{reply.created_at ? formatDateTime(reply.created_at) : "日時不明"}</p>
                                        </div>
                                        <p className={styles.commentContent}>{reply.content}</p>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    className={styles.replyToggleBtn}
                                    onClick={() => toggleReplyForm(comment.comment_id!)}
                                >
                                    {replyFormsVisible[comment.comment_id!] ? "返信を閉じる" : "返信する"}
                                </button>

                                {replyFormsVisible[comment.comment_id!] && (
                                    <div className={styles.replyForm}>
                                        <input
                                            type="text"
                                            placeholder="おなまえ"
                                            className={styles.replyNameInput}
                                            value={replyNames[comment.comment_id!] || ""}
                                            onChange={(e) =>
                                                setReplyNames((prev) => ({
                                                    ...prev,
                                                    [comment.comment_id!]: e.target.value,
                                                }))
                                            }
                                        />
                                        <textarea
                                            placeholder="返信内容"
                                            className={styles.replyTextarea}
                                            value={replyTexts[comment.comment_id!] || ""}
                                            onChange={(e) =>
                                                setReplyTexts((prev) => ({
                                                    ...prev,
                                                    [comment.comment_id!]: e.target.value,
                                                }))
                                            }
                                        />
                                        <button
                                            type="button"
                                            className={styles.replySubmitBtn}
                                            onClick={() => submitReply(comment.comment_id!)}
                                        >
                                            返信
                                        </button>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div>
                <h4>コメントを追加</h4>
                <form method="POST" onSubmit={submitComment}>
                    <label className={styles.newUsername}>
                        おなまえ
                        <input
                            type="text"
                            name="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className={styles.newUsernameInput}
                        />
                    </label>

                    <div className={styles.commentContainer}>
                        <textarea
                            placeholder="コメントを入力"
                            className={styles.newComment}
                            name="content"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                        />
                        <button type="submit" className={styles.submitBtn}>
                            送信
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogClient;
