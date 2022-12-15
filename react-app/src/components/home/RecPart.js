import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const RecPart = () => {
    const [project, setProject] = useState({});

    useEffect(() => {
        (async () => {
        const res = await fetch(`/api/projects/2`);
        const data = await res.json();
        setProject(data);
        })();
    }, []);

    return (
        <div className="rec-wrapper">
            <div className="rec-child1">
                <NavLink to="/projects/2">
                    <img alt="test" width="125em" height="125em" src={project.preview_img ? project.preview_img : 'https://i.pinimg.com/originals/a5/90/8c/a5908c706c030ef3f94c2ad98e23b286.jpg'}></img>
                </NavLink>
            </div>
            <div className="rec-child2">
                <div className="rec-no-wrap">
                    <NavLink to="/projects/2">
                        {project.name}
                    </NavLink>
                </div>
                <div className="rec-no-wrap">
                        {Math.trunc(project.current_amount / project.goal_amount) * 100}% funded
                </div>
                <div className="rec-no-wrap">
                    <NavLink to="/projects/2">
                        By {project.owner_id}
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default RecPart;
