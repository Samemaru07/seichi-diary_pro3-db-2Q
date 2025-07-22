"use client";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type Post = {
    post_id: number;
    title: string;
};

const AnimeBlog = () => {
    const params = useParams<{ id: string }>();
    const id = params.id;
    const [posts, setPosts] = useState<Post[] | null>(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/animes/blog/${id}`)
            .then((res) => res.json())
            .then((data) => setPosts(data.posts));
    });

    if (posts === null) {
        return <h3>読み込み中...</h3>
    }

    if (posts.length === 0) {
        return <h3>ブログはありません</h3>
    }

    return (
        <div>
            <h1>これは、アニメごとの記事一覧ページです</h1>

            {posts.map((post) => (
                <Link href={`/blog/${post.post_id}`} key={post.title}>
                    {post.title}
                </Link>
            ))}
        </div>
    )
}

export default AnimeBlog;