"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';

type Props = {
    children: React.ReactNode;
};

type AnimetionInfo = {
    isOpen: boolean;
    handleClick: () => void;
};

const AnimetionContext = createContext<AnimetionInfo | undefined>(undefined);

// 親コンポーネントから渡される子要素(=中身=器)を受け取る
const Context: React.FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {

    });

    return (
        // 受け取ったchildrenをそのまま表示
        <AnimetionContext.Provider value={{ isOpen, handleClick }}>
            {children}
        </AnimetionContext.Provider>
    );
};

// カスタムフック useAnimetion(コンテキスト(isOpenの展開))
const useAnimetion = (): AnimetionInfo => {
    const context = useContext(AnimetionContext);

    if (context) {
        return context;
    } else {
        throw new Error("useAnimetion must be used within <Context>");
    }

};

const usePageLoader = () => {
    const [progress, setProgress] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let current = 0;
        let completed = false;

        const interval = setInterval(() => {
            if (document.readyState === "complete") {
                completed = true;
            }

            if (!completed) {
                current += Math.random() * 6 + 10; // 進みを速く
                if (current > 92) current = 92;
            } else {
                current += (100 - current) * 0.35; // 収束も速く
                if (current >= 99.5) {
                    current = 100;
                    clearInterval(interval);

                    setTimeout(() => {
                        setIsFadingOut(true); // フェードアウト開始
                        setTimeout(() => setIsVisible(false), 800); // 0.8s後にDOMを非表示
                    }, 300); // 少しだけ100%見せる
                }
            }

            setProgress(Math.floor(current));
        }, 30); // 30msごとに更新

        return () => clearInterval(interval);
    }, []);

    return { progress, isVisible, isFadingOut };
};

export default usePageLoader;

export { Context, useAnimetion, usePageLoader };