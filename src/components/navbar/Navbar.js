import React from "react";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar-container">
            <div className="navbar">
                <h1 className="nav-logo">logo</h1>
                <p className="nav-para">infotopia</p>
                <p className="nav-para second">campus</p>
                <hr className="navbar-hr" />
                <ul className="navbar-list">
                    <li>
                        <a href="/">
                            <i class="bi bi-laptop"></i>
                            <span>overview</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i class="bi bi-mortarboard"></i>
                            <span>courses</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i class="bi bi-calendar-event"></i>
                            <span>calendar</span>
                        </a>
                    </li>
                    <li className="navbar-active">
                        <a href="/">
                            <i class="bi bi-people"></i>
                            <span>people</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i class="bi bi-collection"></i>
                            <span>library</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i class="bi bi-graph-up-arrow"></i>
                            <span>reports</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i class="bi bi-bar-chart-line"></i>
                            <span>analytics</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i class="bi bi-person-rolodex"></i>
                            <span>coaching</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i class="bi bi-sliders"></i>
                            <span>settings</span>
                        </a>
                    </li>
                </ul>
                <hr className="navbar-hr navbar-hr-second" />
                <ul className="navbar-list navbar-list-second">
                    <li>
                        <a href="/">
                            <i class="bi bi-journal"></i>
                            <span>manual</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i class="bi bi-headset"></i>
                            <span>support</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
