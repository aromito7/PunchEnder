import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SingleProject = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        (async () => {
        const res = await fetch(`/api/projects/${id}`);
        const data = await res.json();
        setProject(data);
        })();
    }, [id]);

    return (
        <div>
        <h1>{project.name}</h1>
        <h2>{project.short_description}</h2>
        <p>{project.long_description}</p>
        </div>
    );
}

export default SingleProject;
