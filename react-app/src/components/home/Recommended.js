import React from "react";
import { NavLink } from "react-router-dom";
import RecPart from "./RecPart";
import RecPart2 from "./RecPart2";
import RecPart3 from "./RecPart3";

const Recommended = ({projects}) => {
    return (
        <div className="featured-wrapper2">
            <div className="featured-title">
                    RECOMMENDED FOR YOU
            </div>
            <div>
                <RecPart projects={projects}/>
            </div>
            <div>
                <RecPart2 projects={projects}/>
            </div>
            <div>
                <RecPart3 projects={projects}/>
            </div>
        </div>
    );
    }

export default Recommended;
