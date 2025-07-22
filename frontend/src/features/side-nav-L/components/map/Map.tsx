import React from 'react';
import "@/app/globals.css";
import styles from "./Map.module.css";
import Image from 'next/image';
import LINK from 'next/link';

type Props = {
    className?: string;
}

const Map: React.FC<Props> = ({ className }) => {
    const regions = [
        { id: 1, name: "北海道", path: "/blog/region/1" },
        { id: 2, name: "東北地方", path: "/blog/region/2" },
        { id: 3, name: "関東地方", path: "/blog/region/3" },
        { id: 4, name: "中部地方", path: "/blog/region/4" },
        { id: 5, name: "近畿地方", path: "/blog/region/5" },
        { id: 6, name: "中国地方", path: "/blog/region/6" },
        { id: 7, name: "四国地方", path: "/blog/region/7" },
        { id: 8, name: "九州地方", path: "/blog/region/8" },
        { id: 9, name: "沖縄県", path: "/blog/region/9" }
    ];

    return (
        <div className={className}>
            <div className="map">
                <div className={` navTitle ${styles.navTitle}`}>
                    <Image
                        src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/%E3%83%9E%E3%83%83%E3%83%97%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png"
                        alt="📍"
                        width={22}
                        height={22}
                    />
                    <h1 className={`navTitleText ${styles.navTitleText}`}>地図</h1>
                </div>

                {regions.map((region) => (
                    <li key={region.name} className={styles.li} >
                        <LINK href={region.path} className={styles.regionLink}>
                            <div className={styles.regionName}>
                                <span>{region.name}</span>
                                <span>&gt;</span>
                            </div>
                        </LINK>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Map;