import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { thunkAddBacking, thunkGetAllBackings } from '../../store/userBackings';
import './RewardComponent.css';

const RewardComponent = ({ reward }) => {
    const { id } = useParams()
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const history = useHistory()

    const addBacking = async (rewardId) => {
        console.log(rewardId)
        dispatch(thunkAddBacking(id, rewardId))
        dispatch(thunkGetAllBackings(user.id))
        history.push(`/users/${user.id}/backings`)
    }


    if (!reward) return `Hello, reward`
    const remaining = reward.quantity - reward.users
    const includes = reward.includes.split(', ')
    return (
        <div className="reward-component">
            <p>Pledge ${reward.price_threshold}</p>
            <p className="reward-name">
                {reward.name}
            </p>
            <p className="grey">
                {reward.description}
            </p>
            <p className="grey rewards-includes-title">INCLUDES:</p>
            <ul className="includes-list">
                {includes.map((item, i) => {
                    return (
                        <li key={i}>
                            &#x2022;{item}
                        </li>
                    )
                })}
            </ul>
            <div id="rewards-delivery">
                <div id="rewards-delivery-left">
                    <p className="grey rewards-delivery-title">
                        ESTIMATED DELIVERY
                    </p>
                    <p className="rewards-delivery-value">
                        {reward.shipping_date.split(' ').slice(2, 4).join(' ')}
                    </p>
                </div>
                <div id="rewards-delivery-right">
                    <p className="grey rewards-delivery-title">
                        SHIPS TO
                    </p>
                    <p className="rewards-delivery-value">
                        {reward.ships_to}
                    </p>
                </div>
            </div>
            <div id="rewards-boxen">
                <p id="rewards-backers-box">{`${reward.users} backer` + (reward.users === 1 ? '' : 's')}</p>
                {remaining <= 50 && remaining < reward.quantity && (
                    <p id="rewards-remaining-box">
                        {`Limited (${remaining} left out of ${reward.quantity})`}
                    </p>
                )}
            </div>
            <button onClick={() => addBacking(reward.id)} className='choose-reward cursor-pointer'>Select this reward!</button>
        </div>
    );
}

export default RewardComponent;
