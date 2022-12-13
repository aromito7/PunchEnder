import React from "react";
import { NavLink } from "react-router-dom";

const FeaturedProduct = () => {
    return (
        <div>
        <NavLink to="/projects/1" photoURL="https://www.kickstarter.com/projects/compassonstage/compass-0?ref=section-homepage-featured-project">Featured Project</NavLink>
        {/* Need to add name and short description */}
        </div>
    );
    }

export default FeaturedProduct;
