"use client";
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { API_ENDPOINTS } from "@/lib/config"
import "@/app/globals.css";
import styles from "./TagList.module.css";
import Image from 'next/image';

type Props = {
    className?: string;
}

type Tag = {
    tag_id: number;
    tag_name: string;
    usage_count?: string;
};

const TagList: React.FC<Props> = ({ className }: Props) => {
    const [tags, setTags] = useState<Tag[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTagList = async (): Promise<Tag[]> => {
            try {
                const res = await fetch(API_ENDPOINTS.TAGS.ALL);
                const data = await res.json();
                return data.tags || [];
            } catch (error) {
                console.log("データ取得エラー:", error);
                return [];
            }
        };

        const fetchTags = async () => {
            const fetchedTags = await getTagList();
            setTags(fetchedTags);
            setLoading(false);
        };

        fetchTags();
    }, []);

    if (loading) {
        return <p>読み込み中...</p>
    }

    return (
        <div className={className}>
            <div className={`navTitle ${styles.navTitle}`}>
                <Image
                    src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/tag.png"
                    alt="#"
                    width={30}
                    height={30}
                    style={{ height: 'auto' }}
                />
                <h1 className={`navTitleText ${styles.navTitleText}`}>タグ(上位6件)</h1>
            </div>

            <div className={styles.main}>
                <ul className={styles.tagList}>
                    {tags.map((tag) => (
                        <li key={tag.tag_name}>
                            <Link href={`/blog/tag/${tag.tag_id}`} className={styles.tag}>
                                {tag.tag_name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link href="/blog/tag" className={styles.goToTag}>タグ一覧はこちら</Link>
            </div>
        </div>
    )
}

export default TagList;