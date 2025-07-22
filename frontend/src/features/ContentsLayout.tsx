"use Client";

import React from 'react';
import "@/app/globals.css";
import { useAnimetion } from '@/context/Context';

type Props = {
    title: React.ReactNode;
    firstParagraph?: React.ReactNode;
    secondParagraph?: React.ReactNode;
    thirdParagraph?: React.ReactNode;
};

const ContentsLayout: React.FC<Props> = ({ title, firstParagraph, secondParagraph, thirdParagraph }) => {
    const { isOpen } = useAnimetion();

    return (
        <div className="pageMain">
            <h1
                className={`pageTitle font-pageTitle transform transition-all duration-500 text-[35px] mt-[30px]
                ${isOpen ? "translate-y-0" : "-translate-y-8 text-[35px]"}`}>
                {title}
            </h1>

            <div className="paragraph font-pageParagraph">
                <p
                    className={`firstP transform transition-all duration-500
                    ${isOpen ? "translate-y-0 text-[20px]" : "-translate-y-1 text-[23px]"}`}
                >
                    {firstParagraph}
                </p>

                <p
                    className={`secondP transform transition-all duration-500
                        ${isOpen ? "translate-y-0 text-[20px]" : "translate-y-5 text-[23px]"}`}
                >
                    {secondParagraph}
                </p>

                <p
                    className={`thirdP transform transition-all duration-500
                    ${isOpen ? "translate-y-0 text-[20px] mb-[20px]" : "translate-y-7 text-[23px] mb-[23px]"}`}>
                    {thirdParagraph}
                </p>
            </div>
        </div>
    )
}

export default ContentsLayout;