import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { thunkGetAllProjects } from '../../store/allProjects'

function AllProjects() {
    const projects = useSelector(state => state.projects)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkGetAllProjects())
    }, [dispatch])

    return (
        <div>test</div>
    )
}

export default AllProjects
