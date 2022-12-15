
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom"
import "../css/NavBar.css"

function SearchResults({ projects }) {
    console.log(projects)
    return (
        <div className="results-container">
            {Object.values(projects).map(project => (
                <div key={project.id}>
                    <Link to={`/projects/${project.id}`}><div>{project.name}</div></Link>
                </div>
            ))
            }
        </div >
    )

}

export default SearchResults
