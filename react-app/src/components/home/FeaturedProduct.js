import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const FeaturedProduct = ({projects}) => {
    if(projects.length == 0) return null
    const project = projects[0]
    // const [project, setProject] = useState({});

    // useEffect(() => {
    //     (async () => {
    //     const res = await fetch(`/api/projects/1`);
    //     const data = await res.json();
    //     //console.log("THE PROJECT DATA ----------> ", data)
    //     setProject(data);
    //     })();
    // }, []);


    return (
        <div className="featured-wrapper">
            <NavLink to={`/projects/${project.id}`}>
                <div className="featured-title">
                    FEATURED PROJECT
                </div>
                <div className="featured-image">
                    <img src={project.preview_image || "https://ksr-ugc.imgix.net/assets/038/978/341/0601b5cc655b7625b2337fe29e8c735e_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1666301780&gif-q=50&lossless=true&s=1e4e364707870e8edadc887f1f128779"}
                    width="250em" height="150em" alt="test"></img>
                </div>
                <div className="featured-name">
                    {project.name}
                </div>
                <div className="featured-name2">
                    {project.short_description}
                </div>
                <div className="featured-name3">
                by {project.owner ? `${project.owner.firstname} ${project.owner.lastname}`:''}
                </div>
            </NavLink>
        </div>
    );
    }

export default FeaturedProduct;
