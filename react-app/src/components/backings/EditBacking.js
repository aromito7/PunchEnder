import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllProjects } from '../../store/allProjects';
import "./Backings.css"
import { thunkUpdateBacking } from '../../store/userBackings';

const EditRewards = () => {
    const { id } = useParams()
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    const project = useSelector(state => state.projects[id])
    const dispatch = useDispatch()

    const projectRewards = project.rewards
    const userRewards = user.rewards

    const userRewardIds = []
    let prevRewardId;

    Object.values(userRewards).map(reward => {
        userRewardIds.push(reward.id)
    })

    Object.values(projectRewards).map(reward => {
        if (userRewardIds.includes(reward.id)) {
            prevRewardId = reward.id
        }
    })

    const availableRewards = []

    Object.values(projectRewards).map(reward => {
        if (!userRewardIds.includes(reward.id)) {
            availableRewards.push(reward)
        }
    })


    const handleClick = async (newRewardId, prevRewardId) => {
        dispatch(thunkUpdateBacking(id, newRewardId, prevRewardId))
        history.push(`/users/${user.id}/backings`)
    }

    useEffect(() => {
        dispatch(thunkGetAllProjects())
    }, [dispatch])

    if (!project) return null
    if (!user) return null
    if (!projectRewards) return null

    return (
        <>
            <h1 id='rewards-header'>Select a different reward:</h1>
            <div className='edit-rewards-container'>
                {Object.values(availableRewards).map(reward => (
                    <div className='reward'>
                        <ul>
                            <li style={{ fontWeight: "bold" }}>
                                {reward.name}
                            </li>
                            <li>
                                {reward.quantity} left!
                            </li>
                            <li>
                                ${reward.price_threshold}
                            </li>
                            <li>
                                Includes: {reward.includes}
                            </li>
                            <li>
                                {reward.description}
                            </li>
                        </ul>
                        <button onClick={() => handleClick(reward.id, prevRewardId)} id='select-reward'>Select</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default EditRewards;
