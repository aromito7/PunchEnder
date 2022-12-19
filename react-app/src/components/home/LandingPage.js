import React from "react";
import InfoBar from "./InfoBar";
import CategoryBar from "./CategoryBar";
import FeaturedProduct from "./FeaturedProduct";
import Recommended from "./Recommended";
import Updates from "./Updates";
import Trending from "./Trending";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const LandingPage = () => {
    const [projects, setProjects] = useState('');

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/projects');
            const data = await res.json();
            //console.log("THE PROJECT DATA --> ", data)
            setProjects(data.projects);
        })();
    }, []);
    if(!projects) return null
    return (
        <div>
            <CategoryBar />
            <div className="landing-title">
                <h1>Bring a creative project to life.</h1>
            </div>
            <div className="landing-subtitle">
                <h3>ON PUNCHENDER:</h3>
            </div>
            <InfoBar projects={projects}/>
            <div className="landing-helper">
                <FeaturedProduct projects={projects}/>
                <Recommended projects={projects}/>
            </div>
            <div>
                <Updates />
            </div>
            <Trending />
        </div>
    );
    };

export default LandingPage;
