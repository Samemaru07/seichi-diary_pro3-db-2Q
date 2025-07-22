import React from 'react';
import "@/app/globals.css";
import styles from "./Footer.module.css";
import Link from 'next/link';
import Image from 'next/image';

type props = {
    className?: string;
}

const Fotter: React.FC<props> = ({ className }) => {
    return (
        <div className={className}>
            <div className="footer">
                <div className={styles.footer}>
                    <Link href="/contact" className={`font-pageParagraph ${styles.letter}`}>
                        🄫 2025 さめまる All rights reserve <br className="pcBr" />
                        お問い合わせはこちらから
                    </Link>
                </div>

                <div className={styles.phoneWrapper}>
                    <Link href="/" className={styles.topBtn}>
                        <Image src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/%E3%83%88%E3%83%83%E3%83%97.png" alt="トップ" width={20} height={20} />
                    </Link>
                    <Link href="/blog" className={styles.blogBtn}>
                        <Image src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/%E3%83%96%E3%83%AD%E3%82%B0.png" alt="ブログ" width={20} height={20} />
                    </Link>
                    <Link href="/profile" className={styles.profBtn}>
                        <Image src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB.png" alt="プロフィール" width={20} height={20} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Fotter;