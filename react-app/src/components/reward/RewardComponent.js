import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './RewardComponent.css';

const RewardComponent = ({reward}) => {
    // const {rewardId} = useParams()
    // if(!id) id = rewardId
    // const [reward, setReward] = useState(reward)
    // useEffect(() => {
    //     if (!rewardId) {
    //         return;
    //         }
    //         (async () => {
    //         const response = await fetch(`/api/rewards/${id}`);
    //         const {rewards} = await response.json();
    //         console.log(rewards)
    //         setReward(rewards[0]);
    //         })();

    //     }, [rewardId]);

    if(!reward) return `Hello, reward`
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
                    return(
                        <li key={i}>
                            {item}
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
                <p id="rewards-backers-box">{`${reward.users} backer` + (reward.users == 1 ? '' : 's')}</p>
                {remaining <= 50 && (
                    <p id="rewards-remaining-box">
                        {`Limited (${remaining} left out of ${reward.quantity})`}
                    </p>
                )}
            </div>
        </div>
        );
    }

export default RewardComponent;