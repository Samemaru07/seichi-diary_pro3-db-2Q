"use client";
import React, { useEffect, useState } from "react";
import styles from "./scrolltopbtn.module.css";

const ScrollTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button onClick={scrollToTop} className={styles.scrollTopButton}>
            👆
        </button>
    );
};

export default ScrollTopButton;