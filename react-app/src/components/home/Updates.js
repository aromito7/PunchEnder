import React from "react";
import { NavLink } from "react-router-dom";

const Updates = () => {
    return (
        <div className="updates-wrapper">
            <div className="updates-format">
                <div className="update-image-resize">
                    <NavLink to="/updates">
                        <img src="https://ksr-static.imgix.net/ksr-KeyVisual_PreviewImage-2560x1080-HP-LP-e1dab35.jpg?ixlib=rb-4.0.2&s=33a924ff55ee02b192cbc046a151ca0c"
                        width="100%" height="90%" alt="updates" />
                    </NavLink>
                </div>
                <div className="updates-indent">
                    <div className="green-left-border">
                        <NavLink to="/updates">
                            <h2 className="updates-title">
                                Punchender Project Updates
                            </h2>
                        </NavLink>
                        <NavLink to="/updates">
                            <p className="updates-paragraph">
                                A destination for news, tips, and inspiration, and home to our new monthly video series, Kickstarter Project Updates shares everything you need to know about what’s happening at Kickstarter.
                            </p>
                        </NavLink>
                    </div>
                    <div className="explore-blue-color">
                        <NavLink className="updates-link" to="/updates">Explore</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Updates;
