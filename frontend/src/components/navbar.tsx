"use client"
import bars from "../../public/bars-solid.svg";
import Image from "next/image";
import { useState } from "react";
import { useSidebar } from "@/hooks/useSidebar";
import { useWindowSize } from "@/hooks/useWindowSize";
import "../app/globals.css"

export default function Navba() {
    const { open, toggleSidebar } = useSidebar();
    const { width } = useWindowSize();
    const isMobile = width < 768;
    return (
        <div className="w-full items-center flex flex-col touch-none h-[60px]">
            <div className="h-full w-full flex items-center">
                <div className="flex justify-start items-center ml-3">
                    <button className="flex justify-center items-center cursor-pointer" onClick={toggleSidebar}>
                       Illegal Casino
                    </button>
                </div>
    
            </div>
        </div>
    )
}