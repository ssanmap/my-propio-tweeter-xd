import React from "react";
import tweet from "../../assets/img/original.png";

import "./Header.scss";

export default function Header() {
    return (
        <div className="header">
            <img src={tweet} alt="tweeet" />
            <h1> Mi tweeterereer</h1>
        </div>
    );
}