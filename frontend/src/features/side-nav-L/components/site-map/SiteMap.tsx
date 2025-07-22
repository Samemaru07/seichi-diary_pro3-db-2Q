import React from 'react';
import "@/app/globals.css";
import styles from "./SiteMap.module.css";
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    className?: string;
}

const SiteMap: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <div className={`navTitle ${styles.navTitle}`}>
                <Image
                    src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/%E3%82%B5%E3%82%A4%E3%83%88%E3%83%9E%E3%83%83%E3%83%97%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B33.png"
                    alt="サイトマップ"
                    width={30}
                    height={30}
                />

                <Link href="/sitemap" className={`navTitleText ${styles.navTitleText}`}>サイトマップ</Link>
            </div>
        </div>
    )
}

export default SiteMap;