"use client";

import React, { useEffect, useState } from 'react';
import ContentsLayout from '@/features/ContentsLayout';
import Link from 'next/link';
import styles from "./tagtop.module.css";
import { API_ENDPOINTS } from '@/lib/config';

type Tag = {
    tag_id: string;
    tag_name: string;
};

const TagTopPage = () => {
    const [tags, setTags] = useState<Tag[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(API_ENDPOINTS.TAGS.ALL)
            .then((res) => {
                if (!res.ok) throw new Error("サーバーエラー");
                return res.json();
            })
            .then((data) => {
                setTags(data.tags);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("データ取得エラー:", err);
                setError("タグの取得に失敗しました");
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <h3>読み込み中...</h3>;
    }

    if (error) {
        return <h3>{error}</h3>;
    }

    if (!tags || tags.length === 0) {
        return <h3>タグが見つかりませんでした。</h3>;
    }

    return (
        <div>
            <ContentsLayout title="タグ一覧" />
            <ul className={styles.tagsWrapper}>
                {tags.map((tag) => (
                    <li key={tag.tag_id}>
                        <Link href={`/blog/tag/${tag.tag_id}`} className={`btn ${styles.btn}`}>
                            <span className={`btnText ${styles.btnText}`}>{tag.tag_name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TagTopPage;
