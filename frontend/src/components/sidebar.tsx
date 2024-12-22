"use client";
import "@/styles/sidebar.css";
import bars from "../../public/bars-solid.svg";
import { useSidebar } from "@/hooks/useSidebar";
import { useWindowSize } from "@/hooks/useWindowSize";
import Image from "next/image";

export default function Sidebar() {
  const { open, toggleSidebar } = useSidebar();
  const { width } = useWindowSize();

  const isMobile = width < 768;

  return (
<div className="z-50 h-full w-[240px]">
  <div className="header flex touch-none h-[60px]">
    <button className="flex justify-center items-center cursor-pointer min-w-12 min-h-12">
      <Image src={bars} width={20} height={20} alt="img" priority />
    </button>
    <div className="flex justify-center items-center gap-2 w-full">
      <a href="/casino" className="w-[78px] flex justify-center">Casino</a>
      <a href="/sports" className="w-[78px] flex justify-center">Sports</a>
    </div>
  </div>
  <div className="content h-[calc(100vh-60px)] overscroll-contain pr-6 flex flex-col gap-2 overflow-y-auto overflow-x-hidden">
    <div className="pl-6">hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
    <div>hogehoge</div>
  </div>
</div>
  );
}