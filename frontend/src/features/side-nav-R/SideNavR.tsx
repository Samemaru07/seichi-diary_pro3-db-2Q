import React from 'react';
import * as components from "./components/components";
import "@/app/globals.css"
import styles from "./SideNavR.module.css";


type props = {
    className?: string;
}

const SideNavR: React.FC<props> = ({ className }) => {
    return (
        <div className={className}>
            <div className={`sideNavR ${styles.sideNavR}`}>
                <components.PopularArticleRanking />
                <components.TagList />
                <components.LatestBlog />
                <components.Profile />
            </div>
        </div>
    )
}

export default SideNavR;