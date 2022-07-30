import React from "react";
import "./rightbar.css";

function Rightbar() {
    return (
        <div className="rightbar-container">
            <div className="rightbar">
                <div className="rightbar-icon">
                    <i className="bi bi-bootstrap-reboot"></i>
                </div>
                <p>refresh</p>
                <div className="rightbar-icon">
                    <i className="bi bi-person"></i>
                </div>
                <p>add student</p>
                <div className="rightbar-icon">
                    <i className="bi bi-clipboard-data"></i>
                </div>
                <p>data migration</p>
                <div className="rightbar-icon">
                    <i className="bi bi-people"></i>
                </div>
                <p>by cohort</p>
                <div className="rightbar-border-line"></div>
            </div>
        </div>
    );
}

export default Rightbar;
