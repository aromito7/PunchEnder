import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionClearBackings, thunkDeleteBacking, thunkGetAllBackings } from '../../store/userBackings'
import Backing from './Backing'
import "./Backings.css"



function UserBackings() {
    const user = useSelector(state => state.session.user)
    const backings = useSelector(state => state.userBackings)
    const [toggleDelete, setToggleDelete] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkGetAllBackings(user.id))
    }, [dispatch])

    // useEffect(() => {
    //     dispatch(thunkGetAllBackings(user.id))
    // }, [])

    // const deleteBacking = (projectId, rewardId) => {
    //     console.log("projectId", projectId)
    //     dispatch(thunkDeleteBacking(projectId, rewardId))
    //     // dispatch(actionClearBackings())
    //     // dispatch(thunkGetAllBackings(user.id))
    //     setToggleDelete(!toggleDelete)
    // }
    if (!user) return null
    if (!backings) return null

    return (
        <>
            {Object.keys(backings).length

                ? <>
                    <h1 style={{ marginTop: "100px" }}>Projects You Back</h1>

                    <div className='backings-container'>
                        {Object.values(backings).map((backing, i) => (
                            <Backing key={i} backing={backing} toggleDelete={toggleDelete} setToggleDelete={setToggleDelete} />
                        ))}
                    </div>
                </>
                : <>
                    <h1 style={{ marginTop: "100px" }}>Uh oh! It looks like you haven't backed any projects!</h1>
                    <Link to={`/discover`}><button id='discover-button'>Browse Projects</button></Link>
                </>
            }
        </>
    )
}

export default UserBackings;
