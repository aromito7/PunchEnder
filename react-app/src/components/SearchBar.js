import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import "../css/NavBar.css"

function SearchBar() {
  const [searchParams, setSearchParams] = useState('')
  const [results, setResults] = useState(null)

  const history = useHistory()

  const queryMaker = (searchString) => {
    const searchArr = searchString.split(' ')
    const queryStr = searchArr.join('+')
    return queryStr
  }

  const handleSubmit = async () => {
    const query = queryMaker(searchParams)
    history.push(`/search?query=${query}`)
    // try {
    //   const response = await fetch(`/api/projects/search/${query}`)
    //   const data = await response.json()
    //   setResults(data.results)
    // } catch (error) {
    //   console.error(error)
    // }
    // console.log('hello test tsetsets tes s')
  }

  useEffect(() => {
    const query = queryMaker(searchParams)
    const enterSubmit = e => {
      if (e.code === "Enter") {
        e.preventDefault()
        handleSubmit()
      }
    }
    document.addEventListener('keydown', enterSubmit)
    return () => document.removeEventListener('keydown', enterSubmit)
  }, [searchParams])

  return (
    <>
      <textarea
        className="search-bar"
        type="text"
        name="searchParams"
        value={searchParams}
        placeholder="Search for a project"
        onChange={e => setSearchParams(e.target.value)}
      />
    </>
  )
}

export default SearchBar;
