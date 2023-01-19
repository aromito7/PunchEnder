import React, { useState, useEffect } from "react";
import TrendingCard from "./TrendingCard";

const Trending = () => {
    // use FeaturedProduct as a template and iterate over all the products in the database
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        (async () => {
        const res = await fetch(`/api/projects`);
        const data = await res.json();
        setProjects(data.projects);
        })();
    }, []);
    if(projects.length < 1) return null
    return (
        <div className="trending-wrapper">
            <div>
                TRENDING
            </div>
            <div className="trending-article">
                <div className="trending-rows">
                    {
                        [...Array(4).keys()].map( num => {

                            return(
                            <div className={`trending-spacing${num%3 == 0 ? '' : ` trending-spaceing${num + 1}`}`} key={num}>
                                <TrendingCard project={num < projects.length ? projects[num] : projects[0]}/>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
    }

export default Trending;
