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
    <div className={`z-50 h-full w-[240px] pl-3 bg-gray-800 text-white hidden md:block`}>
      <div className="header flex touch-none h-[60px]">
        <div className="flex justify-start items-center gap-1 w-full">
          <a href="/casino" className="w-[78px] flex justify-center">Casino</a>
          <a href="/sports" className="w-[78px] flex justify-center">Sports</a>
        </div>
      </div>
      <div className="content h-[calc(100vh-60px)] overscroll-contain pr-6 flex flex-col gap-2 overflow-y-auto overflow-x-hidden">
        <div className="sidebar-content">
          <div>
            <div>
              <a className="flex flex-col p-3" href="#">Top Sports</a>
            </div>
            <div>
              <hr className="h-[2px] w-full pb-2" />
            </div>
            <div>
              <div className="sidebar-text">
                Soccer
              </div>
            </div>
            <div>
              <div className="sidebar-text">
                American Football
              </div>
            </div>
            <div className="sidebar-text">
              <div>
                Basketball
              </div>
            </div>
            <div>
              <div className="sidebar-text">
                Criket
              </div>
            </div>
            <div>
              <div className="sidebar-text">
                Racing
              </div>
            </div>
            <div className="sidebar-text">
              <div>
                Tennis
              </div>
            </div>
            <div>
              <div className="sidebar-text">
                Darts
              </div>
            </div>
            <div className="sidebar-text">
              <div>
                Ice Hockey
              </div>
            </div>
            <div>
              <div className="sidebar-text">
                Kabaddi
              </div>
            </div>
            <div className="sidebar-text">
              <div>
                Volleyball
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-content">
          <div className="">
            <div className="flex flex-col p-3">
              All Sports
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}