"use client"
import React, { useEffect, useState } from "react"
import HideContentsOnMobile from "./HideContentsOnMobile"
import MenuOverlay from "./MenuOverlay"
import { useAnimetion } from "@/context/Context"
import HamburgerBtn from "@/features/hamburger-btn/HamburgerBtn"
import Fotter from "@/features/footer/Footer"

type Props = {
    children: React.ReactNode
}

const AppClientLayout: React.FC<Props> = ({ children }) => {
    const { isOpen, handleClick } = useAnimetion()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 480)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    if (isMobile && !isOpen) {
        return (
            <>
                <MenuOverlay />
                <div style={{
                    position: "fixed",
                    top: 16,
                    left: 16,
                    zIndex: 300
                }}>
                    <HamburgerBtn isOpen={isOpen} onClick={handleClick} />
                </div>
                <Fotter />
            </>
        )
    }

    return <HideContentsOnMobile>{children}</HideContentsOnMobile>
}

export default AppClientLayout 