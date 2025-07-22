"use client";
import ContentsLayout from '@/features/ContentsLayout';
import Link from 'next/link';
import styles from "./prefecture.module.css";
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type Post = {
    post_id?: number;
    title?: string;
    anime_name: string;
};

const Prefecture = () => {
    const params = useParams<{ id: string }>();
    const id = Number(params.id);
    const [posts, setPosts] = useState<Post[] | null>(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/animes/prefecture/${id}`)
            .then((res) => res.json())
            .then((data) => setPosts(data.posts))
            .catch((error) => {
                console.log("データ取得エラー:", error);
                setPosts([]);
            });
    }, [id]);

    if (posts === null) {
        return <h3>読み込み中...</h3>
    }

    if (posts.length === 0) {
        return <h3>まだブログはありません</h3>
    }

    return (
        <div>
            <ContentsLayout
                title="記事一覧"
            />

            <div>
                {posts.map((post) => (
                    <Link key={post.title} href={`/blog/${post.post_id}`} className={styles.link} >
                        {post.title} ({post.anime_name})
                    </Link>
                ))}
            </div>
        </div >
    )
}

export default Prefecture;