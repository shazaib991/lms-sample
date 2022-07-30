import { DateRange } from "@mui/icons-material";
import React from "react";
import "./mainSection.css";

function MainSection() {
    const handleStarToggle = (e) => {
        e.target.classList.toggle("active");
    };

    return (
        <div className="main-section-container">
            <div className="main-section">
                <div className="main-section-search">
                    <p>students: 100</p>
                    <div className="search-container">
                        <input type="text" placeholder="search by name" />
                        <i className="bi bi-search"></i>
                    </div>
                </div>
                <div className="main-section-nav">
                    <div className="main-section-nav-links">
                        <p>students</p>
                        <p>educators</p>
                        <p>admins</p>
                    </div>
                    <div className="main-section-nav-line">
                        <div></div>
                    </div>
                </div>
                <div className="main-section-filters">
                    <div className="main-section-filters-btn-container">
                        <div className="main-section-filters-btn-all">
                            <p>all</p>
                        </div>
                        <div className="main-section-filters-btn-online">
                            <p>online</p>
                            <i className="bi bi-chevron-down"></i>
                        </div>
                        <div className="main-section-filters-btn-long">
                            <p>enrolled</p>
                        </div>
                        <div className="main-section-filters-btn-long">
                            <p>favourite</p>
                        </div>
                    </div>
                    <div className="main-section-filters-btn-container-second">
                        <div className="main-section-filters-btn-container-second-1">
                            <i className="bi bi-person-video"></i>
                        </div>
                        <div className="main-section-filters-btn-container-second-2">
                            <i className="bi bi-list-ul"></i>
                        </div>
                    </div>
                </div>
                <div className="main-section-people-list-container">
                    <div className="main-section-people-list">
                        <div className="main-section-people-list-card">
                            <div className="main-section-people-list-card-icon-container">
                                <div className="main-section-people-list-card-icon">
                                    <i className="bi bi-person"></i>
                                </div>
                                <div className="main-section-people-list-card-icon-dot"></div>
                            </div>
                            <h1 className="main-section-people-list-card-name">
                                roberto saliba
                            </h1>
                            <p className="main-section-people-list-card-rollno">
                                s001
                            </p>
                            <div className="main-section-people-list-card-btn">
                                <p>enrolled</p>
                            </div>
                            <i
                                className="bi bi-star-fill main-section-people-list-card-star"
                                onClick={handleStarToggle}
                            ></i>
                        </div>
                        <div className="main-section-people-list-card">
                            <div className="main-section-people-list-card-icon-container">
                                <div className="main-section-people-list-card-icon">
                                    <i className="bi bi-person"></i>
                                </div>
                                <div className="main-section-people-list-card-icon-dot"></div>
                            </div>
                            <h1 className="main-section-people-list-card-name">
                                leon sandoval
                            </h1>
                            <p className="main-section-people-list-card-rollno">
                                s002
                            </p>
                            <div className="main-section-people-list-card-btn">
                                <p>enrolled</p>
                            </div>
                            <i
                                className="bi bi-star-fill main-section-people-list-card-star"
                                onClick={handleStarToggle}
                            ></i>
                        </div>
                        <div className="main-section-people-list-card">
                            <div className="main-section-people-list-card-icon-container">
                                <div className="main-section-people-list-card-icon">
                                    <i className="bi bi-person"></i>
                                </div>
                                <div className="main-section-people-list-card-icon-dot"></div>
                            </div>
                            <h1 className="main-section-people-list-card-name">
                                rafael mack
                            </h1>
                            <p className="main-section-people-list-card-rollno">
                                s003
                            </p>
                            <div className="main-section-people-list-card-btn">
                                <p>enrolled</p>
                            </div>
                            <i
                                className="bi bi-star-fill main-section-people-list-card-star"
                                onClick={handleStarToggle}
                            ></i>
                        </div>
                        <div className="main-section-people-list-card">
                            <div className="main-section-people-list-card-icon-container">
                                <div className="main-section-people-list-card-icon">
                                    <i className="bi bi-person"></i>
                                </div>
                                <div className="main-section-people-list-card-icon-dot"></div>
                            </div>
                            <h1 className="main-section-people-list-card-name">
                                sidney goodman
                            </h1>
                            <p className="main-section-people-list-card-rollno">
                                s004
                            </p>
                            <div className="main-section-people-list-card-btn">
                                <p>enrolled</p>
                            </div>
                            <i
                                className="bi bi-star-fill main-section-people-list-card-star"
                                onClick={handleStarToggle}
                            ></i>
                        </div>
                        <div className="main-section-people-list-card">
                            <div className="main-section-people-list-card-icon-container">
                                <div className="main-section-people-list-card-icon">
                                    <i className="bi bi-person"></i>
                                </div>
                                <div className="main-section-people-list-card-icon-dot"></div>
                            </div>
                            <h1 className="main-section-people-list-card-name">
                                claudia mathis
                            </h1>
                            <p className="main-section-people-list-card-rollno">
                                s005
                            </p>
                            <div className="main-section-people-list-card-btn">
                                <p>enrolled</p>
                            </div>
                            <i
                                className="bi bi-star-fill main-section-people-list-card-star"
                                onClick={handleStarToggle}
                            ></i>
                        </div>
                        <div className="main-section-people-list-card">
                            <div className="main-section-people-list-card-icon-container">
                                <div className="main-section-people-list-card-icon">
                                    <i className="bi bi-person"></i>
                                </div>
                                <div className="main-section-people-list-card-icon-dot"></div>
                            </div>
                            <h1 className="main-section-people-list-card-name">
                                christy boyd
                            </h1>
                            <p className="main-section-people-list-card-rollno">
                                s006
                            </p>
                            <div className="main-section-people-list-card-btn">
                                <p>enrolled</p>
                            </div>
                            <i
                                className="bi bi-star-fill main-section-people-list-card-star"
                                onClick={handleStarToggle}
                            ></i>
                        </div>
                        <div className="main-section-people-list-card">
                            <div className="main-section-people-list-card-icon-container">
                                <div className="main-section-people-list-card-icon">
                                    <i className="bi bi-person"></i>
                                </div>
                                <div className="main-section-people-list-card-icon-dot"></div>
                            </div>
                            <h1 className="main-section-people-list-card-name">
                                pauline robbins
                            </h1>
                            <p className="main-section-people-list-card-rollno">
                                s007
                            </p>
                            <div className="main-section-people-list-card-btn">
                                <p>enrolled</p>
                            </div>
                            <i
                                className="bi bi-star-fill main-section-people-list-card-star"
                                onClick={handleStarToggle}
                            ></i>
                        </div>
                        <div className="main-section-people-list-card">
                            <div className="main-section-people-list-card-icon-container">
                                <div className="main-section-people-list-card-icon">
                                    <i className="bi bi-person"></i>
                                </div>
                                <div className="main-section-people-list-card-icon-dot"></div>
                            </div>
                            <h1 className="main-section-people-list-card-name">
                                jenny alfons
                            </h1>
                            <p className="main-section-people-list-card-rollno">
                                s008
                            </p>
                            <div className="main-section-people-list-card-btn">
                                <p>enrolled</p>
                            </div>
                            <i
                                className="bi bi-star-fill main-section-people-list-card-star"
                                onClick={handleStarToggle}
                            ></i>
                        </div>
                        <div className="main-section-people-list-card">
                            <div className="main-section-people-list-card-icon-container">
                                <div className="main-section-people-list-card-icon">
                                    <i className="bi bi-person"></i>
                                </div>
                                <div className="main-section-people-list-card-icon-dot"></div>
                            </div>
                            <h1 className="main-section-people-list-card-name">
                                rosie osborne
                            </h1>
                            <p className="main-section-people-list-card-rollno">
                                s009
                            </p>
                            <div className="main-section-people-list-card-btn">
                                <p>enrolled</p>
                            </div>
                            <i
                                className="bi bi-star-fill main-section-people-list-card-star"
                                onClick={handleStarToggle}
                            ></i>
                        </div>
                        <div className="main-section-people-list-card">
                            <div className="main-section-people-list-card-icon-container">
                                <div className="main-section-people-list-card-icon">
                                    <i className="bi bi-person"></i>
                                </div>
                                <div className="main-section-people-list-card-icon-dot"></div>
                            </div>
                            <h1 className="main-section-people-list-card-name">
                                shelly logan
                            </h1>
                            <p className="main-section-people-list-card-rollno">
                                s010
                            </p>
                            <div className="main-section-people-list-card-btn">
                                <p>enrolled</p>
                            </div>
                            <i
                                className="bi bi-star-fill main-section-people-list-card-star"
                                onClick={handleStarToggle}
                            ></i>
                        </div>
                    </div>
                </div>
                <div className="main-section-people-page-nav-container">
                    <div className="main-section-people-page-nav">
                        <div className="main-section-people-page-nav-left">
                            <i className="bi bi-chevron-bar-left"></i>
                            <div className="main-section-people-page-nav-left-prev">
                                <i className="bi bi-chevron-left"></i>
                                <p>prev</p>
                            </div>
                            <div className="main-section-people-page-nav-left-pagenum active">
                                1
                            </div>
                            <div className="main-section-people-page-nav-left-pagenum">
                                2
                            </div>
                            <div className="main-section-people-page-nav-left-pagenum">
                                3
                            </div>
                            <div className="main-section-people-page-nav-left-pagenum">
                                4
                            </div>
                            <div className="main-section-people-page-nav-left-pagenum">
                                5
                            </div>
                            <div className="main-section-people-page-nav-left-pagenum">
                                6
                            </div>
                            <div className="main-section-people-page-nav-left-pagenum">
                                7
                            </div>
                            <div className="main-section-people-page-nav-left-pagenum">
                                8
                            </div>
                            <div className="main-section-people-page-nav-left-pagenum">
                                9
                            </div>
                            <div className="main-section-people-page-nav-left-pagenum">
                                10
                            </div>
                            <div className="main-section-people-page-nav-left-next">
                                <p>next</p>
                                <i className="bi bi-chevron-right"></i>
                            </div>
                            <i className="bi bi-chevron-bar-right"></i>
                        </div>
                        <div className="main-section-people-page-nav-right">
                            <div className="main-section-people-page-nav-right-btn">
                                <p>10</p>
                                <i className="bi bi-chevron-down"></i>
                            </div>
                            <p className="main-section-people-page-nav-right-para">
                                per page
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="main-section-hr" />
                <div className="main-section-footer">
                    <div className="main-section-footer-left">
                        <p>Terms of Use</p>
                        <p>Privacy</p>
                    </div>
                    <div className="main-section-footer-right">
                        <p>
                            &copy; {new Date().getFullYear()} -
                            <span>infotopia solutions</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSection;
