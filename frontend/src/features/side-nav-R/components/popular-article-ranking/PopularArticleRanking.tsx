"use client";
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { API_ENDPOINTS } from "@/lib/config"
import "@/app/globals.css";
import styles from "./PopularArticleranking.module.css";
import Image from 'next/image';

type Props = {
    className?: string;
};

type Post = {
    post_id: number;
    title: string;
};

const PopularArticleRanking = ({ className }: Props) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPopularPosts = async (): Promise<Post[]> => {
            try {
                const res = await fetch(API_ENDPOINTS.POSTS.POPULAR);
                const data = await res.json();
                return data.posts || [];
            } catch (error) {
                console.log("データ取得エラー:", error);
                return [];
            }
        };

        const fetchPosts = async () => {
            const fetchedPosts = await getPopularPosts();
            setPosts(fetchedPosts);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <h3>読み込み中...</h3>
    }

    return (
        <div className={className}>
            <div className={`navTitle ${styles.navTitle}`}>
                <Image
                    src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/fashion019.png"
                    alt='👑'
                    width={30}
                    height={50}
                    style={{ height: 'auto' }}
                />
                <h1 className={`navTitleText ${styles.navTitleText}`}>人気記事ランキング</h1>
            </div>

            <ul className={styles.rankignWrapper}>
                {posts.map((post: Post, index: number) => (
                    <li key={post.post_id} className={styles[`rank${index + 1}`]}>
                        <Link href={`/blog/${post.post_id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default PopularArticleRanking;