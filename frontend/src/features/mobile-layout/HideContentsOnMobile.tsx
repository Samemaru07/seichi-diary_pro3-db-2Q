"use client";
import React, { useEffect, useState } from "react";
import { useAnimetion } from "@/context/Context";

type Props = {
    children: React.ReactNode;
};

const HideContentsOnMobile: React.FC<Props> = ({ children }) => {
    const { isOpen } = useAnimetion();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 480);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (isMobile && !isOpen) {
        return null;
    }

    return <>{children}</>;
};

export default HideContentsOnMobile; 