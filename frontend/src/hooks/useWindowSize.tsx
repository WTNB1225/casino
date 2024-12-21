import { useState, useEffect } from 'react';

type WindowSize = {
    width: number;
    height: number;
}
export function useWindowSize() : WindowSize {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const resize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', resize);

        return () => window.removeEventListener('resize', resize);
    }, []);

    return windowSize;
}