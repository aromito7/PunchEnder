import React from "react";
import InfoBar from "./InfoBar";
import CategoryBar from "./CategoryBar";
import FeaturedProduct from "./FeaturedProduct";
import Recommended from "./Recommended";
import Updates from "./Updates";
import Trending from "./Trending";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <CategoryBar />
            <div className="landing-title">
                <h1>Bring a creative project to life.</h1>
            </div>
            <div className="landing-subtitle">
                <h3>ON PUNCHENDER:</h3>
            </div>
            <InfoBar />
            <div className="landing-helper">
                <FeaturedProduct />
                <Recommended />
            </div>
            <div>
                <NavLink to="/updates">
                    <Updates />
                </NavLink>
            </div>
            <Trending />
        </div>
    );
    };

export default LandingPage;
