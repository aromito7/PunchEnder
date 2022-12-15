import React from "react";
import { NavLink } from "react-router-dom";

const CategoryBar = () => {
    return (
        <div className="quick-select">
            <div className="quick-select__container">
                <div className="quick-select__content-wrapper">
                    <nav className="quick-select__navigation">
                        <ul className="quick-select__navigation-list">
                            <li className="quick-select__navigation-link">
                                <NavLink to="/projects/categories/arts" className="quick-select__navigation-navlink">Arts</NavLink>
                            </li>
                            <li className="quick-select__navigation-link">
                                <NavLink to="/projects/categories/comicsillustration" className="quick-select__navigation-navlink">Comics & Illustration</NavLink>
                            </li>
                            <li className="quick-select__navigation-link">
                                <NavLink to="/projects/categories/designtech" className="quick-select__navigation-navlink">Design & Tech</NavLink>
                            </li>
                            <li className="quick-select__navigation-link">
                                <NavLink to="/projects/categories/film" className="quick-select__navigation-navlink">Film</NavLink>
                            </li>
                            <li className="quick-select__navigation-link">
                                <NavLink to="/projects/categories/foodcraft" className="quick-select__navigation-navlink">Food & Craft</NavLink>
                            </li>
                            <li className="quick-select__navigation-link">
                                <NavLink to="/projects/categories/games" className="quick-select__navigation-navlink">Games</NavLink>
                            </li>
                            <li className="quick-select__navigation-link">
                                <NavLink to="/projects/categories/music" className="quick-select__navigation-navlink">Music</NavLink>
                            </li>
                            <li className="quick-select__navigation-link">
                                <NavLink to="/projects/categories/publishing" className="quick-select__navigation-navlink">Publishing</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
    }

export default CategoryBar;
