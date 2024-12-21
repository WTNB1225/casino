"use client";
import { useState, useContext, createContext, ReactNode} from "react";

interface SidebarContextType {
    open: boolean;
    toggleSidebar: () => void;
}

const SidebarContext = createContext({} as SidebarContextType);

export const SidebarProvider = ({ children } : { children : ReactNode}) => {
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen((prev) => !prev);
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