import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const TrendingCard1 = () => {
    const [project, setProject] = useState({});

    useEffect(() => {
        (async () => {
        const res = await fetch(`/api/projects/1`);
        const data = await res.json();
        setProject(data);
        })();
    }, []);

    return (
        <div>
            <NavLink to={`/projects/1`}>
                <div>
                    <img src={project.name ? project.preview_image : "https://ksr-ugc.imgix.net/assets/039/120/895/bdac65807093785ba2d12419f33b9595_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1667473938&gif-q=50&lossless=true&s=db5094847de845fae3f8515784b50463"}
                    alt="test" width="100%" height="300px"/>
                </div>
                <div className="update-name">
                    {project.name}
                </div>
                <div className="update-name2">
                    {project.short_description}
                </div>
                <div className="explore-blue-color update-name3">
                    Explore
                </div>
            </NavLink>
        </div>
    );
}

export default TrendingCard1;
