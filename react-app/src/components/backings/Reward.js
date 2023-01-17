import React from "react";
import { useDispatch } from "react-redux";
import { thunkUpdateBacking } from "../../store/userBackings";
import { thunkGetAllProjects } from "../../store/allProjects";

const Reward = ({ currentRewardId, reward, projectId, mountEditBacking, setMountEditBacking }) => {
    const dispatch = useDispatch()

    const handleClick = (newRewardId, prevRewardId) => {
        dispatch(thunkUpdateBacking(projectId, newRewardId, prevRewardId))
        dispatch(thunkGetAllProjects())
        setMountEditBacking(!mountEditBacking)
    }

    return (
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
            <button onClick={() => handleClick(reward.id, currentRewardId)} id='select-reward'>Select</button>
        </div>
    )
}

export default Reward
