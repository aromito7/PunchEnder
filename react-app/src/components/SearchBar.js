import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import "../css/NavBar.css"
import SearchResults from "./SearchResults";

function SearchBar() {
    const [searchParams, setSearchParams] = useState('')
    const [results, setResults] = useState(null)
    const [mountResults, setMountResults] = useState(false)

    const history = useHistory()

    const queryMaker = (searchString) => {
        const searchArr = searchString.split(' ')
        const queryStr = searchArr.join('+')
        console.log(queryStr)
        return queryStr
    }

    const handleSubmit = async () => {
        console.log(searchParams)
        const response = await fetch(`/api/projects/search`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                searchParams
            })
        })
        const data = await response.json()
        setResults(data)
        setMountResults(true)
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
    }, [searchParams])



    console.log(searchParams)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className="search-bar"
                    type="text"
                    name="searchParams"
                    value={searchParams}
                    placeholder="Search by project owner or project name"
                    onChange={e => setSearchParams(e.target.value)}
                />
            </form>
            {
                mountResults && (
                    <SearchResults projects={results} />
                )
            }
        </>

    )
}

export default SearchBar
