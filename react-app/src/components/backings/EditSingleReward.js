import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { thunkGetAllBackings, thunkUpdateBacking } from "../../store/userBackings";
import { thunkGetAllProjects } from "../../store/allProjects";


const EditSingleReward = ({ reward, currentRewardId }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    const { projectId } = useParams()

    const handleClick = (newRewardId) => {
        dispatch(thunkUpdateBacking(projectId, newRewardId, currentRewardId))
        dispatch(thunkGetAllProjects())
        dispatch(thunkGetAllBackings(user.id))
        history.push(`/users/${user.id}/backings`)
    }

    return (
        <div className='reward'>
            <div className="rewards-list-container">
                <ul className="rewards-list">
                    <li id="reward-pledge-amount">
                        Pledge ${reward.price_threshold}
                    </li>
                    <li style={{ fontWeight: "bold" }}>
                        {reward.name}
                    </li>
                    <li>
                        {reward.description}
                    </li>
                    <li>
                        Includes: {reward.includes}
                    </li>
                </ul>
                <div id="shipping-date-container">
                    <p id="shipping-date-header">Estimated Shipping Date</p>
                    <p id="shipping-date">{reward.shipping_date.split(' ').slice(2, 4).join(' ')}</p>
                </div>
            </div>
            <button onClick={() => handleClick(reward.id)} className='choose-reward cursor-pointer'>Pledge ${reward.price_threshold}</button>
        </div>
    )
}

export default EditSingleReward
