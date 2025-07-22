"use client";
import ContentsLayout from '@/features/ContentsLayout';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from "./blog.module.css";
import { API_ENDPOINTS } from "@/lib/config";

type Anime = {
    anime_id: number;
    anime_name: string;
};

type Post = {
    post_id: number;
    title: string;
    anime?: Anime | null;
    content: string;
    created_at: string;
    good_number: number;
};

const BlogPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [keyword, setKeyword] = useState("");
    const [sort, setSort] = useState('new');

    useEffect(() => {
        const params = new URLSearchParams();
        if (keyword) {
            params.append("keyword", keyword);
        }
        if (sort) {
            params.append("sort", sort);
        }

        fetch(`${API_ENDPOINTS.POSTS.ALL}?${params.toString()}`)
            .then((res) => res.json())
            .then((data) => setPosts(data.posts))
            .catch((error) => {
                console.log("データ取得エラー:", error);
            })
    }, [keyword, sort]);

    return (
        <div>
            <ContentsLayout
                title="ブログ"
                firstParagraph={
                    <>
                        ブログ一覧のページです。クリックでご覧になれます。
                    </>
                }
                secondParagraph={
                    <>
                        都道府県・アニメごとに検索したい場合は、左のナビからクリックで飛べます。<br className="pcBr" />
                        (左上の≡ボタンから、サイドナビを開閉できます♪)
                    </>
                }
            />

            <div className={styles.controls}>
                <input
                    type="text"
                    placeholder="キーワード検索..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className={styles.input}
                />
                <select value={sort} onChange={(e) => setSort(e.target.value)} className={styles.select}>
                    <option value="new">新しい順</option>
                    <option value="old">古い順</option>
                    <option value="good">いいね数順</option>
                </select>
            </div>

            <div className={styles.posts}>
                {posts.map((post) => (
                    <Link key={post.post_id} href={`/blog/${post.post_id}`} className={styles.link}>
                        {post.title}
                        {post.anime && `（${post.anime.anime_name}）`}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
