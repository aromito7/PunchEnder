import React from "react";
import { NavLink } from "react-router-dom";
import TrendingCard1 from "./TrendingCard1";
import TrendingCard3 from "./TrendingCard3";
import TrendingCard4 from "./TrendingCard4";
import TrendingCard5 from "./TrendingCard5";

const Trending = () => {
    // use FeaturedProduct as a template and iterate over all the products in the database
    return (
        <div className="trending-wrapper">
            <div>
                TRENDING
            </div>
            <div className="trending-article">
                <div className="trending-rows">
                    <div className="trending-spacing">
                        <TrendingCard1 />
                    </div>
                    <div className="trending-spacing trending-spacing2">
                        <TrendingCard3 />
                    </div>
                    <div className="trending-spacing trending-spacing3">
                        <TrendingCard4 />
                    </div>
                    <div className="trending-spacing">
                        <TrendingCard5 />
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Trending;
