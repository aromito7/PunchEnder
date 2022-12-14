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
        <div>
            <div>
                Featured Product
            </div>
        <NavLink to="/projects/1">
            <img src="https://ksr-ugc.imgix.net/assets/039/359/210/ecde97b50494f1ac56df06ef17a4de10_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=16698268
            19&gif-q=50&q=92&s=91599c28af28e843daae40c20d2f31a2" alt="test" width="600em" height="300em"></img>
            <div>
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
