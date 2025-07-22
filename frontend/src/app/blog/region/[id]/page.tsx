"use client";
import ContentsLayout from '@/features/ContentsLayout';
import { useParams } from 'next/navigation';
import styles from "./region.module.css";
import Link from 'next/link';

type Prefecture = {
    name: string;
    region_id: number;
    path: string;
};

const regionNameMap: Record<string, string> = {
    "1": "北海道",
    "2": "東北地方",
    "3": "関東地方",
    "4": "中部地方",
    "5": "近畿地方",
    "6": "中国地方",
    "7": "四国地方",
    "8": "九州地方",
    "9": "沖縄地方",
};

const prefectures: Prefecture[] = [
    // 北海道地方 (1)
    { name: '北海道', region_id: 1, path: "/blog/region/prefecture/1" },

    // 東北地方 (2)
    { name: '青森県', region_id: 2, path: "/blog/region/prefecture/2" },
    { name: '岩手県', region_id: 2, path: "/blog/region/prefecture/3" },
    { name: '宮城県', region_id: 2, path: "/blog/region/prefecture/4" },
    { name: '秋田県', region_id: 2, path: "/blog/region/prefecture/5" },
    { name: '山形県', region_id: 2, path: "/blog/region/prefecture/6" },
    { name: '福島県', region_id: 2, path: "/blog/region/prefecture/7" },

    // 関東地方 (3)
    { name: '茨城県', region_id: 3, path: "/blog/region/prefecture/8" },
    { name: '栃木県', region_id: 3, path: "/blog/region/prefecture/9" },
    { name: '群馬県', region_id: 3, path: "/blog/region/prefecture/10" },
    { name: '埼玉県', region_id: 3, path: "/blog/region/prefecture/11" },
    { name: '千葉県', region_id: 3, path: "/blog/region/prefecture/12" },
    { name: '東京都', region_id: 3, path: "/blog/region/prefecture/13" },
    { name: '神奈川県', region_id: 3, path: "/blog/region/prefecture/14" },

    // 中部地方 (4)
    { name: '新潟県', region_id: 4, path: "/blog/region/prefecture/15" },
    { name: '富山県', region_id: 4, path: "/blog/region/prefecture/16" },
    { name: '石川県', region_id: 4, path: "/blog/region/prefecture/17" },
    { name: '福井県', region_id: 4, path: "/blog/region/prefecture/18" },
    { name: '山梨県', region_id: 4, path: "/blog/region/prefecture/19" },
    { name: '長野県', region_id: 4, path: "/blog/region/prefecture/20" },
    { name: '岐阜県', region_id: 4, path: "/blog/region/prefecture/21" },
    { name: '静岡県', region_id: 4, path: "/blog/region/prefecture/22" },
    { name: '愛知県', region_id: 4, path: "/blog/region/prefecture/23" },

    // 近畿地方 (5)
    { name: '三重県', region_id: 5, path: "/blog/region/prefecture/24" },
    { name: '滋賀県', region_id: 5, path: "/blog/region/prefecture/25" },
    { name: '京都府', region_id: 5, path: "/blog/region/prefecture/26" },
    { name: '大阪府', region_id: 5, path: "/blog/region/prefecture/27" },
    { name: '兵庫県', region_id: 5, path: "/blog/region/prefecture/28" },
    { name: '奈良県', region_id: 5, path: "/blog/region/prefecture/29" },
    { name: '和歌山県', region_id: 5, path: "/blog/region/prefecture/30" },

    // 中国地方 (6)
    { name: '鳥取県', region_id: 6, path: "/blog/region/prefecture/31" },
    { name: '島根県', region_id: 6, path: "/blog/region/prefecture/32" },
    { name: '岡山県', region_id: 6, path: "/blog/region/prefecture/33" },
    { name: '広島県', region_id: 6, path: "/blog/region/prefecture/34" },
    { name: '山口県', region_id: 6, path: "/blog/region/prefecture/35" },

    // 四国地方 (7)
    { name: '徳島県', region_id: 7, path: "/blog/region/prefecture/36" },
    { name: '香川県', region_id: 7, path: "/blog/region/prefecture/37" },
    { name: '愛媛県', region_id: 7, path: "/blog/region/prefecture/38" },
    { name: '高知県', region_id: 7, path: "/blog/region/prefecture/39" },

    // 九州地方 (8)
    { name: '福岡県', region_id: 8, path: "/blog/region/prefecture/40" },
    { name: '佐賀県', region_id: 8, path: "/blog/region/prefecture/41" },
    { name: '長崎県', region_id: 8, path: "/blog/region/prefecture/42" },
    { name: '熊本県', region_id: 8, path: "/blog/region/prefecture/43" },
    { name: '大分県', region_id: 8, path: "/blog/region/prefecture/44" },
    { name: '宮崎県', region_id: 8, path: "/blog/region/prefecture/45" },
    { name: '鹿児島県', region_id: 8, path: "/blog/region/prefecture/46" },

    // 沖縄地方 (9)
    { name: '沖縄県', region_id: 9, path: "/blog/region/prefecture/47" }
];



const RegionTop = () => {
    const params = useParams<{ id: string }>();
    const id = parseInt(params.id);
    const regionName = regionNameMap[id];
    const regionPrefectures = prefectures.filter(prefecture => prefecture.region_id === id);

    return (
        <div>
            <ContentsLayout
                title={
                    <>
                        {regionName} 一覧
                    </>
                }
            >
            </ContentsLayout>

            <div className={styles.btnWrapper}>
                {regionPrefectures.map((prefecture) => (
                    <div key={prefecture.name} >
                        <Link href={prefecture.path} className={`btn ${styles.btn}`}>
                            <span className={`btnText ${styles.btnText}`}>{prefecture.name}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RegionTop