
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import "../css/NavBar.css"

function SearchResults({ projects }) {
    console.log(projects)
    return (
        <div className="results-container">
            {Object.values(projects).map(project => (
                <div key={project.id}>
                    <div>
                        {project.name}

                    </div>
                </div>
            ))}
        </div>
    )

}

export default SearchResults
