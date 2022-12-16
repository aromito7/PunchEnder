import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
    })();
  }, [query]);

  return (
    <div className="results-container">
      {results && results.map(result => (
        <div key={result.id}>
          <a to={`/projects/${result.id}`}>
            <div>{result.name}</div>
          </a>
        </div>
      ))}
      {!results && <div>No results found</div>}
    </div>
  );
  }

export default SearchResults;
