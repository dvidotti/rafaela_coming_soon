import "./DescriptionBox.css";

// Static
const presentText = `Hi, I’m Rafaela Vinotti. This website is in transition – and
so am I.`;

const description = ` I’m a multidisciplinary designer based between London and
Sao Paulo. I have been working as an independent consultant
with studios and clients on a wide range of projects and
brands. A new website is coming, but if you are interested
in my work, feel free to contact me =)`;

export function DescriptionBox({ component }) {
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
                <>
                    <section className="slogan-box">
                        <span className="huge-text">{presentText}</span>
                    </section>
                    <section className="maxW1030">
                        <h3 className="large-text">{description}</h3>
                    </section>
                </>
            )}
        </>
    );
}
