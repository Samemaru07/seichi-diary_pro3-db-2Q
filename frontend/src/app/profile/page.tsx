"use client";
import React from 'react';
import "@/app/globals.css";
import styles from "./profile.module.css";
import Image from 'next/image';
import Link from 'next/link';
import ContentsLayout from '@/features/ContentsLayout';

const ProfilePage = () => {
    return (
        <div>
            <ContentsLayout
                title={
                    <>
                        さめまる について
                    </>
                }
                firstParagraph={
                    <>
                        地方の高専3年・電子情報工学科に通う<br className="phBr" />「さめまる」と申します。
                    </>
                }
                secondParagraph={
                    <>
                        普段はWeb, ネットワーク, セキュリティ,<br className="phBr" /> 資格試験の勉強などに励み、<br className="pcBr" />
                    </>
                }
                thirdParagraph={
                    <>
                        趣味は、<br className="phBr" />「アニメ鑑賞しながらプラモデルを作ること」<br className="phBr" />です。<br className="phBr" /><br className="pcBr" />
                        特に好きなアニメはガンダムシリーズです！
                    </>
                }
            />

            <div className={`pageMain ${styles.pageMain}`}>
                <Link href="/profile/sns" >
                    <div className={`btn ${styles.btnWrapper}`}>
                        <button className={`btnText ${styles.goToSNSPage}`}>SNSページ</button>
                    </div>
                </Link>

                <div className={styles.images}>
                    <figure>
                        <div className={styles.barbatosWrapper}>
                            <Image
                                src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/%E3%83%90%E3%83%AB%E3%83%90%E3%83%88%E3%82%B9.jpeg"
                                alt="バルバトスルプスレクス"
                                width={300}
                                height={200}
                                className={styles.barbatos}
                            />
                            <figcaption>バルバトスルプスレクス</figcaption>
                        </div>
                    </figure>
                    <figure>
                        <div className={styles.destinyWrapper}>
                            <Image
                                src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/%E3%82%BC%E3%82%A6%E3%82%B9%E3%83%87%E3%82%B9%E3%83%86%E3%82%A3%E3%83%8B%E3%83%BC.jpg"
                                alt="デスティニーガンダムSPECⅡ"
                                width={300}
                                height={200}
                                className={styles.destiny}
                            />
                            <figcaption className={styles.destinyDetail}>デスティニーガンダムSPECⅡ<br className="pcBr" />&<br className="pcBr" />ゼウスシルエット</figcaption>
                        </div>
                    </figure>
                    <figure>
                        <div className={styles.kongoWrapper}>
                            <Image
                                src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/%E9%87%91%E5%89%9B.jpeg"
                                alt="戦艦金剛"
                                width={300}
                                height={200}
                                className={styles.kongo}
                            />
                            <figcaption>戦艦金剛</figcaption>
                        </div>
                    </figure>
                    <figure>
                        <div className={styles.aresWrapper}>
                            <Image
                                src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/%E3%83%9E%E3%83%BC%E3%82%AF%E3%82%A2%E3%83%AC%E3%82%B9.jpeg"
                                alt="ファフナー マーク・アレス"
                                width={300}
                                height={200}
                                className={styles.ares}
                            />
                            <figcaption>ファフナー マーク・アレス</figcaption>
                        </div>
                    </figure>
                </div>
            </div>
        </div >
    )
}

export default ProfilePage;