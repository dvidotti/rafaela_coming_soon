export default function LinksBox() {
    let linkList = [
        {
            target: null,
            href: "mailto:hello@rafaelavinotti.com",
            classType: "link",
            text: "hello@rafaelavinotti.com",
        },
        {
            target: "_blank",
            href: "https://www.linkedin.com/in/rafaelavinotti/?originalSubdomain=uk",
            classType: "link",
            text: "Linkedin",
        },
        {
            target: "_blank",
            href: "https://www.instagram.com/rafavinotti/",
            classType: "link",
            text: "Instagram",
        },
        {
            target: "_blank",
            href: "https://cz.pinterest.com/rafaelavinotti/",
            classType: "link",
            text: "Pinterest",
        },
    ];
    return (
        <div className="list-outer-container">
            <div className="list-inner-container">
                {linkList.map((item) => (
                    <div className="links-rows">
                        <a
                            target={item.target}
                            href={item.href}
                            className={item.classType}
                        >
                            {item.text}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
