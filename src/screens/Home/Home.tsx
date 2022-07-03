import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import TopToolBar from "components/TopToolBar/TopToolBar";
import { DescriptionBox } from "components/DescriptionBox/DescriptionBox";

// Context

// CSS
import "./Home.css";

// Static
const presentText = `Hi, I’m Rafaela Vinotti. This website is in transition – and
so am I.`;

const description = ` I’m a multidisciplinary designer based between London and
Sao Paulo. I have been working as an independent consultant
with studios and clients on a wide range of projects and
brands. A new website is coming, but if you are interested
in my work, feel free to contact me =)`;

const Home = () => {
    return (
        <main className="body">
            <TopToolBar path={"/about"} linkText={"about me"} />
            <DescriptionBox component={"home"} />
        </main>
    );
};

export default Home;
