import React from "react";
import "./loader.css";

/*Web-page preloader component*/
function Preloader(props) {
    return (
    <div className="loader-area">
        <div className="loader">
            <div className="dot"></div>
        </div>
    </div>
    )
}

export default Preloader;