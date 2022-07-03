import { createContext, useContext, useEffect, useState } from "react";
const WindowSizeContext = createContext<any>({});

export function WindowSizeProvider({ children }) {
    const [screenType, setScreeType] = useState("desktop");
    const [windowDimensions, setWindowDimensions] = useState({
        width: 0,
        height: 0,
    });

    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    };

    useEffect(() => {
        // set window size at load
        setWindowDimensions(getWindowDimensions());

        // handle window resizing
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        // clean event listener
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        defineScreenType();
    }, [windowDimensions]);

    const defineScreenType = () => {
        let screenType = "desktop";
        if (windowDimensions.width < 480) screenType = "mobile";
        if (windowDimensions.width > 480 && windowDimensions.width < 1028)
            screenType = "tablet";
        setScreeType(screenType);
    };

    return (
        <WindowSizeContext.Provider
            value={{
                screenType,
                windowDimensions,
            }}
        >
            {children}
        </WindowSizeContext.Provider>
    );
}

export const useWindowSize = () => useContext(WindowSizeContext);
