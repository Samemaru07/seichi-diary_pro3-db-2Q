"use client";
import React from 'react';
import "@/app/globals.css";
import ContentsLayout from '@/features/ContentsLayout';
import styles from "./contact.module.css";

const ContactPage = () => {
    return (
        <div>
            <ContentsLayout
                title="お問い合わせページ"
                firstParagraph={
                    <>
                        何か気になることがあれば、お気軽にお問い合わせください
                    </>
                }
            >
            </ContentsLayout>

            <form action="https://formspree.io/f/xgvygayl" method="POST">
                <div className={styles.labelWrapper}>
                    <label className={styles.nameWrapper}><span className={styles.labelName}>おなまえ</span>
                        <input type="text" name="name" className={styles.nameBox} />
                    </label>

                    <label className={styles.passwordWrapper}><span className={styles.labelName}>e-mail</span>
                        <input type="email" name="mail" required className={styles.mailBox} />
                    </label>
                </div>

                <label><span className={styles.contactLabel}>お問い合わせ内容</span>
                    <textarea name="content" className={styles.commentBox}>
                    </textarea>
                </label>

                <button type="submit" className={styles.submitBtn}>送信</button>
            </form>
        </div>
    )
}

export default ContactPage;