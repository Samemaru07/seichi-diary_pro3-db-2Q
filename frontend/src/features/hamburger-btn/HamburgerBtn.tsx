import styles from "./HamburgerBtn.module.css";

import React from 'react';

type Props = {
    isOpen: boolean;
    onClick: () => void;
};

const HamburgerBtn: React.FC<Props> = ({ isOpen, onClick }) => {
    return (
        <div className={styles.hamburgerBtnWrapper}>
            <button className={styles.hamburgerBtn} onClick={onClick} aria-label={isOpen ? "メニューを開く" : "メニューを閉じる"}>
                {isOpen ? "≡" : "×"}
            </button>
        </div>
    )
}

export default HamburgerBtn;