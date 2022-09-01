import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import TopToolBar from "components/TopToolBar/TopToolBar";
import { DescriptionBox } from "components/DescriptionBox/DescriptionBox";

// Context
import { useWindowSize } from "context/WindowSize.context";

import { useState } from "react";

// CSS
import "./Home.css";

// Components
import VideoBox from "components/VideoBox/VideoBox";
import VideoOverlayClick from "components/VideoOverlayClick/VideoOverlayClick";

const Home = () => {
    const { screenType } = useWindowSize();
    const [fullScreen, setFullScreen] = useState(false);

    return (
        <main className="body">
            <TopToolBar path={"/about"} linkText={"about me"} />
            <div className="body-layout" style={{ position: "relative" }}>
                <VideoOverlayClick
                    fullScreen={fullScreen}
                    handleFullScreen={setFullScreen}
                />
                <VideoBox
                    fullScreen={fullScreen}
                    handleFullScreen={setFullScreen}
                />
                <DescriptionBox component={"home"} />
            </div>
        </main>
    );
};

export default Home;
