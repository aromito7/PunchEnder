import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import "../css/NavBar.css"
function SearchBar() {
    const [searchParams, setSearchParams] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    console.log(searchParams)
    return (
        <form onSubmit={handleSubmit}>
            <textarea
                className="search-bar"
                type="text"
                value={searchParams}
                placeholder="Search by user name or project"
                onChange={e => setSearchParams(e.target.value)}
            />
        </form>

    )
}

export default SearchBar
