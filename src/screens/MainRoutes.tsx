import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "screens/Home/Home";
import About from "screens/About/About";

export default function MainRoutes() {
    let location = useLocation();

    const screens = [
        {
            path: "/",
            screen: <Home />,
            title: "Home | Rafaela Vinotti",
        },
        {
            path: "/about",
            screen: <About />,
            title: "About | Rafaela Vinotti",
        },
    ];

    useEffect(() => {
        let newTitle = screens.find(
            (screen) => screen.path === location.pathname
        )?.title;

        document.title = newTitle || "Rafaela Vinotti";
    }, [location]);

    return (
        <Routes>
            {screens.map((screen) => (
                <Route
                    path={screen.path}
                    key={screen.path}
                    element={screen.screen}
                />
            ))}
        </Routes>
    );
}
