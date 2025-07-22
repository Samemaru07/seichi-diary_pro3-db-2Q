import React from "react";
import { API_ENDPOINTS } from "@/lib/config";
import BlogClient from "@/layout/BlogClient";

export type Post = {
    id: number;
    title: string;
    content: string;
    good_number?: number;
};

export type Comment = {
    comment_id?: number;
    user_name?: string;
    content?: string;
    created_at?: string;
    replies?: Comment[];
};

type Props = {
    id: string;
};

export default async function BlogLayout({ id }: Props) {
    const postRes = await fetch(API_ENDPOINTS.POSTS.BY_ID(id), {
        next: { revalidate: 60 },
    });
    const postData = await postRes.json();

    const commentRes = await fetch(API_ENDPOINTS.POSTS.COMMENTS(id), {
        next: { revalidate: 3600 },
    });
    const commentData = await commentRes.json();

    const post: Post = postData.posts;
    const comments: Comment[] = commentData.comments;

    return <BlogClient post={post} comments={comments} />;
}
