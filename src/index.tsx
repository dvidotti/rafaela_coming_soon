import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./fonts/Graphik/GraphikRegular.otf";
import "./fonts/Graphik/GraphikBold.otf";
import "./fonts/Graphik/GraphikLight.otf";
import "./fonts/Graphik/GraphikMedium.otf";
import "./fonts/Graphik/GraphikSemibold.otf";
import "./fonts/Graphik/GraphikThin.otf";

// Context
import Context from "./context/context";

ReactDOM.render(
    <React.StrictMode>
        <Context>
            <App />
        </Context>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
