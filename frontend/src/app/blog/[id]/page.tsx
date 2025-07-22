import React from "react";
import BlogLayout from "@/layout/BlogLayout";
import { API_ENDPOINTS } from "@/lib/config";

export async function generateStaticParams(): Promise<{ id: string }[]> {
    const res = await fetch(API_ENDPOINTS.POSTS.ALL, { next: { revalidate: 3600 } });
    const data = await res.json();

    return data.posts.map((post: { post_id: number }) => ({
        id: String(post.post_id),
    }));
}

const Page = ({ params }: { params: { id: string } }) => {
    return <BlogLayout id={params.id} />;
};

export default Page;