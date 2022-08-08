import "./DescriptionBox.css";

// Static
const presentText = `Hi, I’m Rafaela Vinotti. This website is in transition – and
so am I.`;

const description = `I’m a multidisciplinary designer working from London to everywhere. A new website is coming, but if you want to see my full portfolio, just send me a request, feel free to contact me by email =)`;

// Context
// import { useWindowSize } from "context/WindowSize.context";

export function DescriptionBox({ component }) {
    // const { screenType } = useWindowSize();r

    return (
        <>
            {component === "about" && (
                <>
                    <div className="bottom-space bottom-right-desktop">
                        <span className="big-text">{presentText}</span>
                    </div>
                    <div className="bottom-space">
                        <span className="medium-text">{description}</span>
                    </div>
                </>
            )}
            {component === "home" && (
                <div className="home-title-box">
                    <section className="slogan-box">
                        <p className="huge-text">Hi, I’m Rafaela Vinotti.</p>
                        <p className="huge-text">This website is in</p>
                        <p className="huge-text"> transition – and so am I.</p>
                        {/* <span className="huge-text">{presentText}</span> */}
                    </section>
                    <section className="home-text-container ">
                        <div className="large-text">
                            I’m a multidisciplinary designer working from London
                            to everywhere. A new website is coming, but if you
                            want to see my full portfolio, just send me a
                            request, feel free to contact me by{" "}
                            <a
                                className="link"
                                href="mailto:hello@rafaelavinotti.com"
                            >
                                email
                            </a>{" "}
                            =)
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}
