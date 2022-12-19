import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const RecPart3 = ({projects}) => {
    if(projects.length < 4) return null
    const project = projects[3]
    // const [project, setProject] = useState({});

    // useEffect(() => {
    //     (async () => {
    //     const res = await fetch(`/api/projects/4`);
    //     const data = await res.json();
    //     setProject(data);
    //     })();
    // }, []);

    return (
        <div className="rec-wrapper2">
            <div className="rec-child1">
                <NavLink to={`/projects/${project.id}`}>
                    <img alt="test" width="175em" height="125em" src={project.preview_image ? project.preview_image : 'https://i.pinimg.com/originals/a5/90/8c/a5908c706c030ef3f94c2ad98e23b286.jpg'}></img>
                </NavLink>
            </div>
            <div className="rec-child2">
                <div className="rec-no-wrap">
                    <NavLink to={`/projects/${project.id}`}>
                        {project.name}
                    </NavLink>
                </div>
                <div className="rec-green-small">
                        {(Math.trunc(project.current_amount * 100/ project.goal_amount)).toLocaleString('en', {useGrouping:true})}% funded
                </div>
                <div className="rec-no-wrap rec-small">
                        by: {`${project.owner.firstname} ${project.owner.lastname}`}
                </div>
                <div className="rec-no-wrap rec-small">
                    Ends: {project.end_date.split('T')[0]}
                </div>
            </div>
        </div>
    );
}

export default RecPart3;
