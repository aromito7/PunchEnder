import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { thunkDeleteBacking, thunkGetAllBackings } from '../../store/userBackings'
import Backing from './Backing'
import "./Backings.css"



function UserBackings() {
    const user = useSelector(state => state.session.user)
    const backings = useSelector(state => state.userBackings)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkGetAllBackings(user.id))
    }, [dispatch])

    if (!user) return null
    if (!backings) return null

    const deleteBacking = (projectId, rewardId) => {
        dispatch(thunkDeleteBacking(projectId, rewardId))
        dispatch(thunkGetAllBackings(user.id))
    }

    return (
        <>
            {Object.keys(backings).length

                ? <>
                    <h1 style={{ marginTop: "100px" }}>Projects You Back</h1>

                    <div className='backings-container'>
                        {Object.values(backings).map((backing, i) => (
                            <Backing key={i} backing={backing} deleteBacking={deleteBacking} />
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
