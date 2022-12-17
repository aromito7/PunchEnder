import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link, Redirect, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { thunkDeleteBacking, thunkGetAllBackings } from '../../store/userBackings'
import "./Backings.css"



function UserBackings() {
    const [toggleDelete, setToggleDelete] = useState(false)
    const user = useSelector(state => state.session.user)
    const backings = useSelector(state => state.userBackings)
    console.log(backings)
    const dispatch = useDispatch()

    const deleteBacking = (projectId, rewardId) => {
        dispatch(thunkDeleteBacking(projectId, rewardId))
        setToggleDelete(!toggleDelete)
        // dispatch(thunkGetAllBackings(user.id))
        console.log(rewardId)
    }

    useEffect(() => {
        dispatch(thunkGetAllBackings(user.id))
    }, [dispatch, user])

    if (!user) return null
    if (!backings) return null
    return (
        <>
            <h1 style={{ marginTop: "100px" }}>Projects You Back</h1>

            <div className='backings-container'>
                {Object.values(backings).map(backing => (
                    <div id='backing' key={backing.project_id}>
                        <div className='backing-img-div'><img id='backing-img' src={backing.image}></img></div>
                        <div><Link to={`/projects/${backing.project_id}`}><div id="project-name" key={backing.projectName}>{backing.project_name}</div></Link></div>
                        <div id="price" key={backing.price}>${backing.backing_value}</div>
                        <div id="reward" key={backing.reward}>Reward: {backing.reward}</div>
                        <span><Link to={`/backings/projects/${backing.project_id}/edit`} id='edit'>Edit Pledge</Link></span>
                        <span><button onClick={() => deleteBacking(backing.project_id, backing.reward_id)} id='delete'>Delete Pledge</button></span>
                    </div>
                ))}
            </div>
        </>
    )
}


export default UserBackings;
