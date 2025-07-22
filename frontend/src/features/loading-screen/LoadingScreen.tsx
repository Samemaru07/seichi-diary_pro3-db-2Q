"use client";
import React, { useEffect, useState } from "react";

type Props = {
    progress: number;
    isFadingOut: boolean;
    isVisible: boolean;
};

const LoadingScreen = ({ progress, isFadingOut, isVisible }: Props) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // localStorageとOS設定からダークモード判定
        const saved = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
        const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const theme = (saved as "light" | "dark") || (prefersDark ? "dark" : "light");
        setIsDark(theme === "dark");
        // 変更検知
        const listener = (e: MediaQueryListEvent) => {
            setIsDark(e.matches || localStorage.getItem("theme") === "dark");
        };
        if (typeof window !== 'undefined') {
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", listener);
            }
        };
    }, []);

    if (!isVisible) return null;

    // ダークモード用スタイル
    const overlayStyle = {
        ...styles.overlay,
        background: isDark ? "#111" : "#fff",
        opacity: isFadingOut ? 0 : 1,
        transition: "opacity 0.8s ease",
    };
    const barWrapperStyle = {
        ...styles.barWrapper,
        background: isDark ? "#333" : "#ddd",
    };
    const barStyle = {
        ...styles.bar,
        background: isDark ? "#fff" : "#000",
    };
    const textStyle = {
        ...styles.text,
        color: isDark ? "#fff" : "#000",
    };

    return (
        <div style={overlayStyle}>
            <div style={styles.container}>
                <div style={barWrapperStyle}>
                    <div style={{ ...barStyle, width: `${progress}%` }} />
                </div>
                <div style={textStyle}>{Math.floor(progress)}%</div>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        flexDirection: "column",
    },
    container: {
        width: "300px",
        textAlign: "center",
    },
    barWrapper: {
        width: "100%",
        height: "10px",
        background: "#ddd",
        borderRadius: "5px",
        overflow: "hidden",
        marginBottom: "1rem",
    },
    bar: {
        height: "100%",
        background: "#000",
        transition: "width 0.2s ease",
    },
    text: {
        fontSize: "1.5rem",
        fontFamily: "sans-serif",
    },
};

export default LoadingScreen;
