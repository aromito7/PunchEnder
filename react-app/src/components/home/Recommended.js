import React from "react";
import SingleRec from "./SingleRec";

const Recommended = ({projects}) => {
    projects = projects.slice(3)
    return (
        <div className="featured-wrapper2">
            <div className="featured-title">
                    RECOMMENDED FOR YOU
            </div>

            {
                [...Array(3).keys()].map(num => (
                    <div>
                        <SingleRec project={num < projects.length ? projects[num] : projects[0]}/>
                    </div>
                ))
            }
        </div>
    );
    }

export default Recommended;
