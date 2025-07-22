import React from 'react';
import "@/app/globals.css";
import styles from "./Profile.module.css";
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    className?: string;
}

const Profile: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Link href="/profile" className={styles.profBody}>
                <div className={`navTitle ${styles.navTitle}`}>
                    <Image
                        src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png"
                        alt="ユーザ"
                        width={45}
                        height={45}
                        className={styles.profileIcon}
                    />

                    <h1 className={`navTitleText ${styles.navTitleText}`}>プロフィール</h1>
                </div>

                <div className={styles.body}>
                    <div className={styles.main}>
                        <div className={styles.mainTitle}>
                            <Image
                                src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.jpg"
                                alt="ﾊﾛﾊﾛ"
                                width={50}
                                height={50}
                                className={styles.halo}
                            />

                            <h2 className={styles.samemaru}>さめまる</h2>
                        </div>

                        <p className={styles.contents}>
                            17歳。高専で勉強中<br className={styles.pcBr} />
                            趣味はアニメを見ながら<br className={styles.pcBr} />プラモデルを作ること
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Profile;