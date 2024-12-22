"use client";
import { useState, useContext, createContext, ReactNode} from "react";

interface SidebarContextType {
    open: boolean;
    toggleSidebar: () => void;
}

const getCookies = () : boolean => {
    let sidebarOpen = false;
    document.cookie.split(";").forEach((cookie) => {
        if (cookie.includes("sidebar")) {
            sidebarOpen = cookie.split("=")[1] === "true";
        }
    });
    return sidebarOpen;
}

const setCookie = (isOpen: boolean) => {
    document.cookie = `sidebar=${isOpen}`;
}

const SidebarContext = createContext({} as SidebarContextType);

export const SidebarProvider = ({ children } : { children : ReactNode}) => {
    const [open, setOpen] = useState(getCookies());

    const toggleSidebar = () => {
        setOpen((prev) => !prev);
        setCookie(!open);
    };

    return (
        <SidebarContext.Provider value={{ open, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => {
    return useContext(SidebarContext);
}