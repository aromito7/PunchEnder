import React from "react";
import { NavLink } from "react-router-dom";

const CategoryBar = () => {
    return (
        <div>
        <NavLink to="/projects/categories/art">Art</NavLink>
        <NavLink to="/projects/categories/comicsillustration">Comics & Illustration</NavLink>
        <NavLink to="/projects/categories/designtech">Design & Tech</NavLink>
        <NavLink to="/projects/categories/film">Film</NavLink>
        <NavLink to="/projects/categories/foodcraft">Food & Craft</NavLink>
        <NavLink to="/projects/categories/games">Games</NavLink>
        <NavLink to="/projects/categories/music">Music</NavLink>
        <NavLink to="/projects/categories/publishing">Publishing</NavLink>
        </div>
    );
    }

export default CategoryBar;
