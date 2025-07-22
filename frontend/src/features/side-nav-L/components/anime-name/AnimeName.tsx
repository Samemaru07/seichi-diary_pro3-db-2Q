import React from 'react';
import styles from "./AnimeName.module.css";
import "@/app/globals.css";
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    className?: string;
}

const AnimeName: React.FC<Props> = ({ className }) => {
    const animeNames = [
        { name: "あ行", path: "/blog/read/1" },
        { name: "か行", path: "/blog/read/2" },
        { name: "さ行", path: "/blog/read/3" },
        { name: "た行", path: "/blog/read/4" },
        { name: "な行", path: "/blog/read/5" },
        { name: "は行", path: "/blog/read/6" },
        { name: "ま行", path: "/blog/read/7" },
        { name: "や行", path: "/blog/read/8" },
        { name: "ら行", path: "/blog/read/9" },
        { name: "わ行", path: "/blog/read/10" }
    ];

    return (
        <div className={className}>
            <div className={`navTitle ${styles.navTitle}`}>
                <Image
                    src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/%E8%81%96%E5%9C%B0%E5%B7%A1%E7%A4%BC.png"
                    alt='聖地巡礼'
                    width={40}
                    height={40}
                />
                <h1 className={`navTitleText ${styles.navTitleText}`}>アニメ</h1>
            </div>

            <ul className={styles.animeList}>
                {animeNames.map((animeName) => (
                    <li key={animeName.name} className={styles.animeItem}>
                        <Link href={animeName.path} className={styles.animeNameLink}>
                            <span>{animeName.name}</span>
                            <span >&gt;</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default AnimeName;