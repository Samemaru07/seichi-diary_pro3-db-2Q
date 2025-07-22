"use client";
import React, { useEffect, useState } from "react";
import styles from "./theme.module.css";

type Props = {
    children?: React.ReactNode;
};

const ThemeBtn: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState<"light" | "dark" | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = (saved as "light" | "dark") || (prefersDark ? "dark" : "light");

        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
        if (!saved) {
            localStorage.setItem("theme", initialTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    if (theme === null) {
        return null;
    }

    return (
        <div className={styles.toggleBtnWrapper}>
            <button
                onClick={toggleTheme}
                className={`${styles.toggleBtn} ${theme === "dark" ? styles.dark : styles.light}`}
                aria-label="Toggle theme"
            >
                <div className={styles.circle}>{theme === "dark" ? "🌙" : "☀️"}</div>
            </button>
            {children}
        </div>

    );
};

export default ThemeBtn;
