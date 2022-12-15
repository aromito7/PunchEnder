import React from "react";
import { NavLink } from "react-router-dom";
import RecPart from "./RecPart";
import RecPart2 from "./RecPart2";
import RecPart3 from "./RecPart3";

const Recommended = () => {
    return (
        <div className="featured-wrapper2">
            <div className="featured-title">
                    RECOMMENDED FOR YOU
            </div>
            <div>
                <RecPart />
            </div>
            <div>
                <RecPart2 />
            </div>
            <div>
                <RecPart3 />
            </div>
        </div>
    );
    }

export default Recommended;
