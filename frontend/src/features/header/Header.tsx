import React from 'react';
import styles from "./header.module.css";
import * as features from "@/features/features";
import Link from 'next/link';

type Props = {
    className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
    return (
        <div className={`header ${className}`}>
            <header className={styles.header}>
                <h1 className={`font-yusei ${styles.rotateName}`}>さめまるの</h1>
                <Link href="/" className={`font-yusei ${styles.mainTitle}`}>聖地巡礼日記ブログ</Link>
                <features.HeaderNav />
            </header>
        </div>
    )
}

export default Header;