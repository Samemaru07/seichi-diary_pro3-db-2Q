import React from 'react';
import * as components from "./components/components";
import "@/app/globals.css";

type props = {
    className?: string;
};

const SideNavL: React.FC<props> = ({ className }) => {
    return (
        <div className={className}>
            <div className="sideNavL">
                <components.Map />
                <components.AnimeName />
                <components.SiteMap />
                <components.AdminBtn />
            </div>
        </div>
    )
}

export default SideNavL;