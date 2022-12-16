import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/NavBar.css"

function SearchResults(props) {
    return (
      <div className="results-container">
        {props.projects && props.projects.map(result => (
          <div key={result.id}>
            <a to={`/projects/${result.id}`}>
              <div>{result.name}</div>
            </a>
          </div>
        ))}
        {!props.projects && <div>No results found</div>}
      </div>
    );
  }

export default SearchResults;
