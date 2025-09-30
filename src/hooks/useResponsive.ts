import { useState, useLayoutEffect } from "react";

const BREAKPOINTS = { mobile: 768, tablet: 1024 };

type Responsive = {
    width: number;
    height: number;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
};

export const useResponsive = (): Responsive => {
    const [windowSize, setWindowSize] = useState<Responsive>({
        width: 0,
        height: 0,
        isMobile: false,
        isTablet: false,
        isDesktop: false,
    });

    useLayoutEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            setWindowSize({
                width,
                height,
                isMobile: width < BREAKPOINTS.mobile,
                isTablet: width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet,
                isDesktop: width >= BREAKPOINTS.tablet,
            });
        };

        handleResize(); // Get initial size
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};
