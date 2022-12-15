import React from "react";
import { NavLink } from "react-router-dom";

const Updates = () => {
    return (
        <div>
            <div>
                <img src="https://ksr-static.imgix.net/ksr-KeyVisual_PreviewImage-2560x1080-HP-LP-e1dab35.jpg?ixlib=rb-4.0.2&s=33a924ff55ee02b192cbc046a151ca0c" alt="updates" />
                <h2>
                    Kickstarter Project Updates
                </h2>
                <p>
                    A destination for news, tips, and inspiration, and home to our new monthly video series, Kickstarter Project Updates shares everything you need to know about what’s happening at Kickstarter.
                </p>
                <NavLink to="/updates">Explore</NavLink>
            </div>
        </div>
    );
}

export default Updates;
