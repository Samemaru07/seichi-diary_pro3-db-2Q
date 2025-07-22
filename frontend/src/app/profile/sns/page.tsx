"use client";
import React from 'react';
import "@/app/globals.css"
import Link from 'next/link';
import styles from "./sns.module.css";
import ContentsLayout from '@/features/ContentsLayout';

const SNSPage = () => {
    const links = [
        { name: "Twitter(現X)", path: "https://x.com/Samemaru07_0830" },
        { name: "技術記事はこちら", path: "/profile/sns/tech-blog" },
        { name: "Instagram", path: "https://www.instagram.com/same._.0830/" }
    ];

    return (
        <div className={styles.body}>
            <ContentsLayout
                title={
                    <div className={styles.title}>
                        さめまる について
                    </div>
                }
                firstParagraph={
                    <>
                        さめまるのSNSリンク集です
                    </>
                }
                secondParagraph={
                    <>
                        独り言をつぶやいたり、アニメ・ガンプラなどの発信を行っています。<br className="pcBr" />
                    </>
                }
                thirdParagraph={
                    <>
                        最近は勉強が忙しいので、底浮上気味です...
                    </>
                }
            />

            <div className={styles.btnWrapper}>
                <ul className={styles.btns}>
                    {links.map((link) => (
                        <li key={link.name} className={styles.li}>
                            <Link href={link.path} target={link.name === "技術記事はこちら" ? "" : "_brank"} className={`btn ${styles[`${link.name}Btn`]}`}>
                                <button className="btnText">
                                    {link.name}
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <Link href="./" className={styles.backBtnWrapper}>
                <button className={styles.backBtn}>戻る</button>
            </Link>
        </div >
    )
}

export default SNSPage;