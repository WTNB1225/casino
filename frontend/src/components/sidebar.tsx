"use client";
import "@/styles/sidebar.css";
import { useSidebar } from "@/hooks/useSidebar";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function Sidebar() {
  const { open, toggleSidebar } = useSidebar();
  const { width } = useWindowSize();

  const isMobile = width < 768;

  return (
    <aside className={`border h-[calc(100vh-3.6rem)] absolute z-30 ${isMobile && !open ? 'hidden' : 'block'}`}>
      <div className="h-full overflow-auto no-scrollbar pt-8 pb-8 pr-4">
        {open && isMobile && <button className="absolute top-4 right-4" onClick={toggleSidebar}>Close</button>}
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehogehogehogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
        <h4>hogehoge</h4>
      </div>
    </aside>
  );
}