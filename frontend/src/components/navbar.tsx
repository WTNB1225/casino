"use client"
import bars from "../../public/bars-solid.svg";
import Image from "next/image";
import { useState } from "react";
import { useSidebar } from "@/hooks/useSidebar";
import { useWindowSize } from "@/hooks/useWindowSize";
import "../app/globals.css"

export default function Navbar({
    className
}: {
    className?: string;
}) {
    const { open, toggleSidebar } = useSidebar();
    const { width } = useWindowSize();
    const isMobile = width < 768;
    return (
        <header>
            <div className="container flex h-14 items-center">
                {!open &&
                    <button className={`ml-6 mr-6  ${isMobile && !open ? 'block' : 'hidden'}`} onClick={toggleSidebar}>
                        <Image src={bars} width={30} height={30} alt="img" priority />
                    </button>
                }
                <a className="font-semibold tracking-tight text-2xl" href="/">Casino Site</a>
            </div>
        </header>
    )
}