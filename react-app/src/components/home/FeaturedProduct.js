import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const FeaturedProduct = () => {
    const [project, setProject] = useState({});

    useEffect(() => {
        (async () => {
        const res = await fetch(`/api/projects/1`);
        const data = await res.json();
        console.log("THE PROJECT DATA ----------> ", data)
        setProject(data);
        })();
    }, []);

    return (
        <div className="featured-wrapper">
            <NavLink to="/projects/1">
                <div className="featured-title">
                    FEATURED PROJECT
                </div>
                <img src="https://ksr-ugc.imgix.net/assets/038/978/341/0601b5cc655b7625b2337fe29e8c735e_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1666301780&gif-q=50&lossless=true&s=1e4e364707870e8edadc887f1f128779"
                alt="test" width="165%" height="60%"></img>
                <div className="featured-name">
                    {project.name}
                </div>
                <div>
                    {project.short_description}
                </div>
                <div>
                by {project.owner_id}
                </div>
            </NavLink>
        {/* Need to add name and short description */}
        </div>
    );
    }

export default FeaturedProduct;
