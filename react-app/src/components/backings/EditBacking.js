import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRewards } from '../../store/reward';
import "./Backings.css"
import { thunkUpdateBacking } from '../../store/userBackings';

const EditRewards = () => {
    const [rewards, setRewards] = useState([])
    const user = useSelector(state => state.session.user)
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()


    useEffect(async () => {
        const response = await fetch(`/api/rewards/projects/${id}`);
        const { rewards } = await response.json();
        setRewards(rewards);
    }, []);

    // const handleClick = async (projectId, rewardId) => {
    //     await dispatch(thunkUpdateBacking(projectId, rewardId))
    //         .then(history.push(`/users/${user.id}/backings`))
    // }

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
                        {/* <button onClick={handleClick(id, reward.id)} id='select-reward'>Select</button> */}
                    </div>
                ))}
            </div>
        </>
    );
}

export default EditRewards;
