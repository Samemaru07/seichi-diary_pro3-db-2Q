"use client"
import React, { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { useAnimetion } from "@/context/Context"
import { usePathname } from "next/navigation"
import styles from "./MenuOverlay.module.css"
import { API_ENDPOINTS } from "@/lib/config"

type Tag = {
    tag_id?: number
    tag_name?: string
}

const MenuOverlay = () => {
    const { handleClick, isOpen } = useAnimetion()
    const [tags, setTags] = useState<Tag[] | null>(null)
    const pathname = usePathname()
    const prevPath = useRef(pathname)

    useEffect(() => {
        if (prevPath.current !== pathname && !isOpen) {
            handleClick()
        }
        prevPath.current = pathname
    }, [pathname, isOpen, handleClick])

    useEffect(() => {
        fetch(API_ENDPOINTS.TAGS.ALL)
            .then((res) => res.json())
            .then((data) => setTags(data.tags))
    }, [])

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>📍地図</div>
                    <div className={styles.linkContainer}>
                        <Link href="/blog/region/1" className={styles.link}>北海道</Link>
                        <Link href="/blog/region/2" className={styles.link}>東北地方</Link>
                        <Link href="/blog/region/3" className={styles.link}>関東地方</Link>
                        <Link href="/blog/region/4" className={styles.link}>中部地方</Link>
                        <Link href="/blog/region/5" className={styles.link}>近畿地方</Link>
                        <Link href="/blog/region/6" className={styles.link}>中国地方</Link>
                        <Link href="/blog/region/7" className={styles.link}>九州地方</Link>
                        <Link href="/blog/region/8" className={styles.link}>沖縄県</Link>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>🎊アニメ</div>
                    <div className={styles.linkContainer}>
                        <Link href="/blog/read/1" onClick={handleClick} className={styles.link}>あ行</Link>
                        <Link href="/blog/read/2" onClick={handleClick} className={styles.link}>か行</Link>
                        <Link href="/blog/read/3" onClick={handleClick} className={styles.link}>さ行</Link>
                        <Link href="/blog/read/4" onClick={handleClick} className={styles.link}>た行</Link>
                        <Link href="/blog/read/5" onClick={handleClick} className={styles.link}>な行</Link>
                        <Link href="/blog/read/6" onClick={handleClick} className={styles.link}>は行</Link>
                        <Link href="/blog/read/7" onClick={handleClick} className={styles.link}>ま行</Link>
                        <Link href="/blog/read/8" onClick={handleClick} className={styles.link}>や行</Link>
                        <Link href="/blog/read/9" onClick={handleClick} className={styles.link}>ら行</Link>
                        <Link href="/blog/read/10" onClick={handleClick} className={styles.link}>わ行</Link>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>🏷タグ(上位6件)</div>
                    <div className={styles.linkContainer}>
                        {tags === null ? (
                            <span className={styles.loading}>読み込み中...</span>
                        ) : (
                            tags.map((tag) => (
                                <span key={tag.tag_id}>#{tag.tag_name}</span>
                            ))
                        )}
                    </div>
                    <div className={styles.tagLink}>
                        <Link href="/blog/tag">タグ一覧はこちら</Link>
                    </div>
                </div>
                <div className={styles.sitemapContainer}>
                    <Link href="/sitemap" className={styles.sitemapButton}>サイトマップ</Link>
                </div>
            </div>
        </div>
    )
}

export default MenuOverlay 