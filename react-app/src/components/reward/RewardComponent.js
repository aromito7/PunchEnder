import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import '../../css/RewardComponent.css';

const RewardComponent = ({id}) => {
    const {rewardId} = useParams()
    if(!id) id = rewardId
    const [reward, setReward] = useState(null)
    useEffect(() => {
        if (!rewardId) {
            return;
            }
            (async () => {
            const response = await fetch(`/api/rewards/${id}`);
            const {rewards} = await response.json();
            setReward(rewards[0]);
            })();

        }, [rewardId]);

    if(!reward) return "Hello, null!"
    const includes = reward.includes.split(', ')
    console.log(reward)
    return (
        <div className="reward-component">
            <p>Pledge ${reward.price_threshold}</p>
            <p className="reward-name">
                {reward.name}
            </p>
            <p className="grey">
                {reward.description}
            </p>
            <p className="grey rewards-includes-title">Includes:</p>
            <ul className="includes-list">
                {includes.map((item, i) => {
                    return(
                        <li key={i}>
                            {item}
                        </li>
                    )
                })}
            </ul>
            <p class="grey estimated_delivery_title">
                Estimated Delivery
            </p>
            <p class="estimated-delivery-date">
                {reward.shipping_date.split(' ').slice(2, 4).join(' ')}
            </p>
        </div>
        );
    }

export default RewardComponent;
