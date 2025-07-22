"use client";
import React from "react";
import "@/app/globals.css";
import * as features from "./features";
import { Context, useAnimetion, usePageLoader } from "@/context/Context";
import { LoadingScreen, ThemeBtn } from "./features";

type Props = {
    children?: React.ReactNode;
};

const ClientLayout: React.FC<Props> = ({ children }) => {
    return (
        <Context>
            <InnerLayout>{children}</InnerLayout>
        </Context>
    );
};

const InnerLayout: React.FC<Props> = ({ children }) => {
    const { progress, isFadingOut, isVisible } = usePageLoader(); // Context内で呼び出し

    return (
        <>
            <LoadingScreen progress={progress} isFadingOut={isFadingOut} isVisible={isVisible} />

            <InnerContents>{children}</InnerContents>
        </>
    );
};

const InnerContents: React.FC<Props> = ({ children }) => {
    const { isOpen, handleClick } = useAnimetion();

    return (
        <div>
            <div className="themeBtnWrapper">
                <ThemeBtn />
            </div>
            <div className="hamburgerBtnWrapper">
                <features.HamburgerBtn isOpen={isOpen} onClick={handleClick} />
            </div>
            <features.Header
                className={`transition-transform duration-300 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
            />
            <div className="sideNav">
                <features.SideNavL
                    className={`transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                />
                <main>{children}</main>
                <features.SideNavR
                    className={`transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                />
            </div>
            <features.Fotter />

            <features.ScrollTopButton />
        </div>
    );
};

export default ClientLayout;
