import React from 'react';
import styles from "./HeaderNav.module.css";
import "@/app/globals.css";
import Link from 'next/link';

const HeaderNav = () => {
    return (
        <div className={styles.headerNav}>
            <ul className={styles.ul}>
                <Link href="/" className={styles.a}>トップ</Link>
                <Link href="/blog" className={styles.a}>ブログ</Link>
                <Link href="/profile" className={styles.a}>プロフィール</Link>
            </ul>
        </div>
    )
}

export default HeaderNav;