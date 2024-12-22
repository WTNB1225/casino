"use client"
import bars from "../../public/bars-solid.svg";
import Image from "next/image";
import { useState } from "react";
import { useSidebar } from "@/hooks/useSidebar";
import { useWindowSize } from "@/hooks/useWindowSize";
import "../app/globals.css"
import Sidebar from "./sidebar";
import NavSidebar from "./navSidebar";

export default function Navbar() {
    const { open, toggleSidebar } = useSidebar();
    const { width } = useWindowSize();
    const isMobile = width < 768;
    console.log(open)
    return (
        <div className="w-full items-center flex flex-col touch-none h-[60px]">
            <div className="h-full w-full flex items-center">
                {open == true && isMobile == true ? (
                    <NavSidebar />
                ) : (
                    <>
                        <div className="flex justify-start items-center ml-3">
                            <button className="flex justify-center items-center cursor-pointer md:hidden" onClick={toggleSidebar}>
                                <Image src={bars} width={20} height={20} alt="img" priority />
                            </button>
                        </div>
                        <div className="flex justify-start items-center ml-3">
                            <button className="flex justify-center items-center cursor-pointer">
                                Illegal Casino
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}