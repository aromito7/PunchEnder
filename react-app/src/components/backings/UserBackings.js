import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link, Redirect, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { thunkDeleteBacking, thunkGetAllBackings } from '../../store/userBackings'
import Backing from './Backing'
import "./Backings.css"



function UserBackings() {
    const [toggleDelete, setToggleDelete] = useState(false)
    const user = useSelector(state => state.session.user)
    const backings = useSelector(state => state.userBackings)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkGetAllBackings(user.id))
    }, [user, toggleDelete])

    if (!user) return null
    if (!backings) return null

    const deleteBacking = (projectId, rewardId) => {
        dispatch(thunkDeleteBacking(projectId, rewardId))
        setToggleDelete(!toggleDelete)
    }



    return (
        <>
            <h1 style={{ marginTop: "100px" }}>Projects You Back</h1>

            <div className='backings-container'>
                {Object.values(backings).map(backing => (
                    <Backing backing={backing} deleteBacking={deleteBacking} />
                ))}
            </div>
        </>
    )
}

export default UserBackings;
