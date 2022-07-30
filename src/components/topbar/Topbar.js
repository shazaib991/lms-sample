import React from "react";
import "./topbar.css";

function Topbar() {
    return (
        <div className="topbar-container">
            <div className="topbar">
                <div className="topbar-heading">
                    <h1>people</h1>
                </div>
                <div className="topbar-status">
                    <div className="icon-container">
                        <i className="bi bi-envelope"></i>
                        <div className="icon-notification"></div>
                    </div>
                    <div className="icon-container">
                        <i className="bi bi-megaphone"></i>
                    </div>
                    <div className="icon-container">
                        <i className="bi bi-bell"></i>
                        <div className="icon-notification icon-notification-bell"></div>
                    </div>
                    <div className="topbar-line"></div>
                    <div className="topbar-profile">
                        <p>roberto</p>
                        <i className="bi bi-person"></i>
                    </div>
                    <p className="topbar-login-status">sign out</p>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
