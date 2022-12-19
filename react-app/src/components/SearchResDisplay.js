import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SearchResDisplay = () => {
    const [project, setProject] = useState({});
    const { id } = useParams();

    useEffect(() => {
        (async () => {
        const res = await fetch(`/api/projects/${id}`);
        const data = await res.json();
        setProject(data);
        })();
    }, []);

    return (
        <div className="featured-wrapper">
            <NavLink to="/projects/1">
                <div className="featured-title">
                    FEATURED PROJECT
                </div>
                <div className="featured-image">
                    <img src=""
                    width="250em" height="150em" alt="test"></img>
                </div>
                <div className="featured-name">
                    {project.name}
                </div>
                <div className="featured-name2">
                    {project.short_description}
                </div>
                <div className="featured-name3">
                by {project.owner_id}
                </div>
            </NavLink>
        </div>
    );
    }

export default SearchResDisplay;
