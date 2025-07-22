"use client";
import React from 'react';
import "@/app/globals.css";
import ContentsLayout from '@/features/ContentsLayout';
import Link from 'next/link';
import styles from "./sitemap.module.css";

const SiteMap = () => {
    return (
        <div className={styles.sitemap}>
            <ContentsLayout
                title="サイトマップ"
                firstParagraph={
                    <>
                        本サイトのサイトマップのページです。<br className="pcBr" />
                        ピンク色のものはクリックで、お気軽にジャンプできます。
                    </>
                }
            />

            <div className={styles.sitemapWrapper}>
                <div className={styles.btnWrapper}>
                    <ul>
                        <li><Link href="/" className={`btn ${styles.topBtn}`}><span className={`btnText ${styles.btnText}`}>トップページ</span></Link></li>
                        <li><Link href="/blog" className={`btn ${styles.blogBtn}`}><span className={`btnText ${styles.btnText}`}>ブログ</span></Link></li>
                        <li><Link href="/tag" className={`btn ${styles.tagBtn}`}><span className={`btnText ${styles.btnText}`}>タグ一覧</span></Link></li>
                        <li><p className={`btn ${styles.readBtn}`}><span className={`btnText ${styles.btnText}`}>各行のアニメ一覧</span></p></li>
                        <li><p className={`btn ${styles.regionBtn}`}><span className={`btnText ${styles.btnText}`}>地方ごとの都道府県一覧</span></p></li>
                        <li><p className={`btn ${styles.articleBtn}`}><span className={`btnText ${styles.btnText}`}>各ブログ記事</span></p></li>
                        <li><Link href="/profile" className={`btn ${styles.profBtn}`}><span className={`btnText ${styles.btnText}`}>プロフィール</span></Link></li>
                        <li><Link href="/profile/sns" className={`btn ${styles.snsBtn}`}><span className={`btnText ${styles.btnText}`}>SNSリンク集</span></Link></li>
                        <li><Link href="/profile/sns/tech-blog" className={`btn ${styles.techBtn}`}><span className={`btnText ${styles.btnText}`}>技術ブログ</span></Link></li>
                        <li><Link href="#" className={`btn ${styles.contactBtn}`}><span className={`btnText ${styles.btnText}`}>お問い合わせ<br className={styles.pcBr} />ページ</span></Link></li>
                        <li><Link href="/sitemap" className={`btn ${styles.sitemapBtn}`}><span className={`btnText ${styles.btnText}`}>サイトマップ</span></Link></li>
                    </ul>
                </div>

                <div className="lineWrapper">
                    <span className={styles.line1}></span>
                    <span className={styles.line2}></span>
                    <span className={styles.line3}></span>
                    <span className={styles.line4}></span>
                    <span className={styles.line5}></span>
                    <span className={styles.line6}></span>
                    <span className={styles.line7}></span>
                    <span className={styles.line8}></span>
                    <span className={styles.line9}></span>
                    <span className={styles.line10}></span>
                    <span className={styles.line11}></span>
                    <span className={styles.line12}></span>
                    <span className={styles.line13}></span>
                    <span className={styles.triangle}></span>
                    <span className={styles.now}>現在地</span>
                </div>
            </div>
        </div>
    );
};

export default SiteMap;