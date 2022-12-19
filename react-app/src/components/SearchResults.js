import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../css/NavBar.css"

function SearchResults() {
  const [results, setResults] = useState(null)

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/projects/search/${query}`);
      const data = await response.json();
      setResults(data.results);
      //console.log(results)
    })();
  }, [query]);

  return (
    <div className="search-container">
      <div className="search-push-right">
        <h1>Search Results</h1>
      </div>
      <div className="search-wrapper">
        {results && results.map(result => (
          <div key={result.id}>
            <div className="search-width">
              <NavLink to={`/projects/${result.id}`} className={"test1234"}>
                    <div className="search-image">
                        <img src={`${result.preview_image}`}
                        width="200em" height="150em"></img>
                    </div>
                    <div className="search-name">
                        {result.name}
                    </div>
                    <div className="search-name2">
                        {result.short_description}
                    </div>
                    <div className="search-name3">
                    by {result.owner.firstname} {result.owner.lastname}
                    </div>
              </NavLink>
              </div>
          </div>
        ))}
        {!results && <div>No results found</div>}
      </div>
    </div>
  );
  }

export default SearchResults;
