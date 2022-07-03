// Components
import TopToolBar from "components/TopToolBar/TopToolBar";
import LinksBox from "./components/LinksBox/LinksBox";

import { blockList } from "./components/ListWithTitle/blockList";
import ListWithTitle from "./components/ListWithTitle/ListWithTitle";

// Context
import { useWindowSize } from "context/WindowSize.context";

// CSS
import "./About.css";
import Portrait from "./components/Portrait/Portrait";
import { DescriptionBox } from "components/DescriptionBox/DescriptionBox";

const About = () => {
    const { screenType } = useWindowSize();
    return (
        <main className="body">
            <TopToolBar path={"/"} linkText={"home"} />

            {/* Desktop */}
            {(screenType === "desktop" || screenType === "tablet") && (
                <section className="body-about">
                    <section className="left-container-about">
                        <div className="left-inner-container-about">
                            <Portrait />
                            <div className="list-outer-container ">
                                <LinksBox />
                            </div>
                        </div>
                    </section>
                    <section className="about-container">
                        <div className="about-scroll-section">
                            <div className="width50">
                                <DescriptionBox component={"about"} />
                                <div className="list-block">
                                    {blockList.map((i, idx) => (
                                        <ListWithTitle key={idx} block={i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            )}

            {/* Mobile */}
            {screenType === "mobile" && (
                <section className="body-about">
                    <section className="about-container">
                        <div className="about-scroll-section">
                            <div className="width50">
                                <Portrait />
                                <DescriptionBox component={"about"} />
                                <div className="list-block">
                                    {blockList.map((i, idx) => (
                                        <ListWithTitle key={idx} block={i} />
                                    ))}
                                </div>
                                <div className="left-inner-container-about ">
                                    <LinksBox />
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            )}
        </main>
    );
};

export default About;
