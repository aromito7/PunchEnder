import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import "../css/NavBar.css"
function SearchBar() {
    const [searchParams, setSearchParams] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        history.push({
            pathname: '/discover',
            search: `?${searchParams}`
        })
    }

    useEffect(() => {
        const enterSubmit = e => {
            if (e.code === "Enter") {
                e.preventDefault()
                handleSubmit()
            }
        }
        document.addEventListener('keydown', enterSubmit)
        return () => document.removeEventListener('keydown', enterSubmit)
    }, [])


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
