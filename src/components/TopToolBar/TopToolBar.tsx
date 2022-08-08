import { useNavigate } from "react-router-dom";

import "./TopToolBar.css";

export default function TopToolBar({ path, linkText }) {
    let navigate = useNavigate();

    const navigateTo = (path: string): void => {
        navigate(path);
    };

    return (
        <section className="navbar">
            <div onClick={() => navigateTo("/")} className="logo">
                <span className="nav-link white">RV</span>
            </div>
            <div
                onClick={() => navigateTo(path)}
                className="side-nav nav-container"
            >
                <span className="nav-link sec-nav-link pad-mob padTop10">
                    {linkText}
                </span>
            </div>
        </section>
    );
}
