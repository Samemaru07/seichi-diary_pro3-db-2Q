"use client";
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { API_ENDPOINTS } from "@/lib/config"
import "@/app/globals.css";
import styles from "./LatestBlog.module.css";
import Image from 'next/image';

type Props = {
    className?: string;
};

type Post = {
    post_id: number;
    title: string;
};

const LatestBlog: React.FC<Props> = ({ className }: Props) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getLatestPosts = async (): Promise<Post[]> => {
            try {
                const res = await fetch(API_ENDPOINTS.POSTS.LATEST);
                const data = await res.json();
                return data.posts || [];
            } catch (error) {
                console.log("データ取得エラー:", error);
                return [];
            }
        };

        const fetchPosts = async () => {
            const fetchedPosts = await getLatestPosts();
            setPosts(fetchedPosts);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <h3>読み込み中...</h3>
    };

    return (
        <div className={className}>
            <div className={`navTitle ${styles.navTitle}`}>
                <Image
                    src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC.png"
                    alt="📅"
                    width={35}
                    height={35}
                />

                <h1 className={`navTitleText ${styles.navTitleText}`}>最近の投稿</h1>
            </div>

            <div className={styles.body}>
                <ul>
                    {posts.map((post: Post) => (
                        <li key={post.post_id} className={styles.latestBlogList}>
                            <Link href={`/blog/${post.post_id}`} className={styles.latestBlog}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default LatestBlog;