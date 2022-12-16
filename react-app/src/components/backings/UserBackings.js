import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link, Redirect, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { thunkDeleteBacking, thunkGetAllBackings } from '../../store/userBackings'
import "./Backings.css"



function UserBackings() {
    const user = useSelector(state => state.session.user)


    let backings = [];
    Object.values(user.rewards).map(reward => {
        const backing = {}
        backing["projectId"] = reward.project_id
        backing["price"] = reward.price_threshold
        backing["reward"] = reward.name
        backing["projectName"] = reward.project.name
        backing["previewImage"] = reward.project.preview_image
        backing["rewardId"] = reward.id
        backings.push(backing)
    })

    const deleteBacking = async (projectId, rewardId) => {
        const response = await fetch(`/api/backings/project/${projectId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                rewardId
            })
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data
        }
    }

    useEffect(() => {
    }, [user])

    return (
        <>
            <h1 style={{ marginTop: "100px" }}>Projects You Back</h1>

            <div className='backings-container'>
                {Object.values(backings).map(backing => (
                    <div id='backing' key={backing.projectId}>
                        <div className='backing-img-div'><img id='backing-img' src={backing.previewImage}></img></div>
                        <div><Link to={`/projects/${backing.projectId}`}><div id="project-name" key={backing.projectName}>{backing.projectName}</div></Link></div>
                        <div id="price" key={backing.price}>${backing.price}</div>
                        <div id="reward" key={backing.reward}>Reward: {backing.reward}</div>
                        <span><NavLink to={`/projects/${backing.projectId}/rewards/edit`} id='edit'>Edit Pledge</NavLink></span>
                        <span><button onClick={() => deleteBacking(backing.projectId, backing.rewardId)} id='delete'>Delete Pledge</button></span>
                    </div>
                ))}
            </div>
        </>
    )
}


export default UserBackings;
