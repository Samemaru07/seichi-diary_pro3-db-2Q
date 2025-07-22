import React from 'react';
import "@/app/globals.css";
import styles from "./AdminBtn.module.css";
import Link from 'next/link';

type Props = {
    className?: string;
}
const adminUrl = "https://seichi-diary.com/admin";

const AdminBtn: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <div className={`navTitle ${styles.navTitle}`}>
                <Link href={adminUrl} className={`navTitleText ${styles.navTitleText}`}>管理者用ページ</Link>
            </div>
        </div>
    )
}

export default AdminBtn;