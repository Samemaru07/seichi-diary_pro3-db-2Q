"use client";
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ContentsLayout from '@/features/ContentsLayout';
import Link from 'next/link';
import styles from "./read.module.css";
import "@/app/globals.css";

type Anime = {
    anime_id?: number;
    anime_name?: string;
}

const reads: Record<string, string> = {
    "1": "あ行",
    "2": "か行",
    "3": "さ行",
    "4": "た行",
    "5": "な行",
    "6": "は行",
    "7": "ま行",
    "8": "や行",
    "9": "ら行",
    "10": "わ行"
};

const ReadPage = () => {
    const params = useParams<{ id: string }>();
    const id = params.id;
    const read = reads[id];
    const [animes, setAnimes] = useState<Anime[] | null>(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/animes/by-read?id=${id}`)
            .then((res) => res.json())
            .then((data) => setAnimes(data.animes));
    }, [id]);

    if (animes === null) {
        return <h3>読み込み中...</h3>
    }

    if (animes.length === 0) {
        return <h3 className={styles.noBlog}>まだブログはありません</h3>
    }

    return (
        <div>
            <ContentsLayout
                title={
                    <>
                        {read} 一覧
                    </>
                }
            >
            </ContentsLayout>

            <div>
                {animes.map((anime) => (
                    <Link key={anime.anime_name} href={`/blog/read/anime/${anime.anime_id}`} className={styles.link}>
                        {anime.anime_name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ReadPage;
