// Components
import TopToolBar from "components/TopToolBar/TopToolBar";
import LinksBox from "./components/LinksBox/LinksBox";
import Portrait from "./components/Portrait/Portrait";

import { blockList } from "./components/ListWithTitle/blockList";
import ListWithTitle from "./components/ListWithTitle/ListWithTitle";

// CSS
import "./About.css";

const text =
    "I’m an Italian-Brazilian Designer with a focus on creative strategy, brand design and user experience design.";

const text2 =
    "I have been working as a designer for 14+ years focused mainly on branding and on the digital world. As a consultant, I explored various professional possibilities and tried to bring a wide range of artistic crafts into my work, including storytelling and sometimes a sense of humour. I can design experiences for brands, services and users. I like working with people and projects I identify with and using my skills as tools to impact the world positively.";

const About = () => {
    return (
        <main className="body">
            <TopToolBar path={"/"} linkText={"home"} />
            <section className="body-layout">
                <section>
                    <div className="stamp-container">
                        <div className="stamp-box">
                            <img
                                className="image-rotation"
                                src="images/RV_STAMP_WEBDESK.svg"
                            />
                        </div>
                    </div>
                    <section className="about-container">
                        <div className="left-block">
                            <p className="big-text mb">{text}</p>
                            <p className="large-text pt">{text2}</p>
                        </div>
                        <div className="right-block">
                            <Portrait />
                            <div style={{ height: "50px" }}></div>
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
