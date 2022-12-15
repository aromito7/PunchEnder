import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRewards } from '../../store/reward';
import { thunkUpdateBacking } from '../../store/userBackings';
import "./Backings.css"

const EditRewards = () => {
    const [rewards, setRewards] = useState([])
    const [rewardId, setRewardId] = useState(null)
    const user = useSelector(state => state.session.user)
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    // const getRewardId = (reward_id) => {
    //     // if (!rewardId) return
    //     setRewardId(reward_id)
    // }

    // const handleSubmit = () => {
    //     dispatch(thunkUpdateBacking(id, rewardId))
    // }

    useEffect(async () => {
        const response = await fetch(`/api/rewards/projects/${id}`);
        const { rewards } = await response.json();
        setRewards(rewards);
    }, []);

    return (
        <>
            <h1 id='rewards-header'>Select a different reward:</h1>
            <div className='edit-rewards-container'>
                {Object.values(rewards).map(reward => (
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
                        <button id='select-reward'>Select</button>
                        {/* <button onClick={toggleClick(reward.id)} id='select-reward'>Select</button> */}
                    </div>
                ))}
            </div>
        </>
    );
}

export default EditRewards;
