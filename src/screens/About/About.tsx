import { useEffect, useRef, useState } from "react";

// Components
import TopToolBar from "components/TopToolBar/TopToolBar";
import LinksBox from "./components/LinksBox/LinksBox";
import Portrait from "./components/Portrait/Portrait";
import Stamp from "./components/Stamp/Stamp";

import { blockList } from "./components/ListWithTitle/blockList";
import ListWithTitle from "./components/ListWithTitle/ListWithTitle";

// Context
import { useWindowSize } from "context/WindowSize.context";

// CSS
import "./About.css";

const text =
    "I’m an Italian-Brazilian Designer with a focus on creative strategy, brand design and user experience design.";

const text2 =
    "I have been working as a designer for 14+ years focused mainly on branding and on the digital world. As a consultant, I explored various professional possibilities and tried to bring a wide range of artistic crafts into my work, including storytelling and sometimes a sense of humour. I can design experiences for brands, services and users. I like working with people and projects I identify with and using my skills as tools to impact the world positively.";

const About = () => {
    const [offset, setOffset] = useState(1);
    const [timer, setTimer] = useState(0);
    const [imageSrc, setImageSrc] = useState(1);
    const { screenType } = useWindowSize();

    let stampImg = useRef<any>(null);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const t = setInterval(() => {
            setTimer((t) => (t += 1));
        }, 1500);
        return () => clearInterval(t);
    }, []);

    useEffect(() => {
        if (timer % 2 === 0) {
            setImageSrc(3);
            // } else if (timer % 3 === 0) {
            //     setImageSrc(3);
        } else {
            setImageSrc(2);
        }
    }, [timer]);

    return (
        <main className="body">
            <TopToolBar path={"/"} linkText={"home"} />
            <section className="body-layout">
                <section ref={stampImg}>
                    <div className="stamp-container">
                        <div className={"stamp-box"}>
                            <Stamp
                                offset={offset}
                                screen={screenType}
                                imageSrc={imageSrc}
                            />
                        </div>
                    </div>
                    <section className="about-container">
                        <div className="left-block">
                            <p className="big-text-about mb pr40">{text}</p>
                            <p className="large-text pt">{text2}</p>
                        </div>
                        <div className="right-block">
                            <Portrait offset={offset} />
                            {/* <div style={{ height: "30px" }}></div> */}
                        </div>
                    </section>

                    <section className="lists-container">
                        {blockList.map((i, idx) => (
                            <ListWithTitle key={idx} block={i} />
                        ))}
                    </section>

                    <section className="top-footer">
                        <div className="email-me-box">
                            <p className="footer-text noMgBottom">Email Me!</p>
                            <p className="footer-text  noMgTop ">
                                Reach me out for work inquiries and commissions
                            </p>
                        </div>
                        <div>
                            <LinksBox />
                        </div>
                    </section>
                </section>

                <footer className="footer-container">
                    <p className="large-text">RV - @2021</p>
                </footer>
            </section>
        </main>
    );
};

export default About;
