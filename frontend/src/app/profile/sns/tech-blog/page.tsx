"use client";
import React from 'react';
import "@/app/globals.css";
import styles from "./tech-blog.module.css";
import ContentsLayout from '@/features/ContentsLayout';
import Link from 'next/link';

const BlogPage = () => {
    const links = [
        { name: "Qiita", path: "https://qiita.com/osame083007" },
        { name: "GitHub", path: "https://github.com/Samemaru07/" },
        { name: "Zenn", path: "https://zenn.dev/samemaru07" }
    ];

    return (
        <div>
            <ContentsLayout
                title={
                    <>
                        技術記事
                    </>
                }
                firstParagraph={
                    <>
                        高専で学んだことだけじゃなく、日ごろの勉強でわかったことなどを、<br className="pcBr" />
                        「誰かの役に立てたらな」という思いで技術記事を発信中♪
                    </>
                }
                secondParagraph={
                    <>
                        また、私が作ったオタク味あふれるWebアプリなどの<br className="pcBr" />プログラミング作品も作成・紹介しています！
                    </>
                }
            ></ContentsLayout>

                <div className={styles.btnWrapper}>
                    <ul className={styles.btns}>
                        {links.map((link) => (
                            <li key={link.name} className={styles.li}>
                                <Link href={link.path} target='_blank' className={`btn ${styles[`${link.name}Btn`]}`}>
                                    <button className={`btnText ${styles.btnText}`}>
                                        {link.name}
                                    </button>
                                </Link>
                            </li>
                        ))}
                    </ul>

                <Link href="./" className={styles.backBtnWrapper}>
                    <button className={styles.backBtn}>戻る</button>
                </Link>
            </div>
        </div>
    )
}

export default BlogPage;