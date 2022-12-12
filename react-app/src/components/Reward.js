import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Reward = () => {
    const [reward, setReward] = useState(null)
    const { rewardId } = useParams()
    useEffect(async() => {

        if (!rewardId) {
            return;
            }
            (async () => {
            const response = await fetch(`/api/rewards/${rewardId}`);
            const {rewards} = await response.json();
            setReward(rewards[0]);
            })();
        }, [rewardId]);

    if(!reward) return null
    return (
        <>
            <h1>Hello, Reward {rewardId}!</h1>
            <ul>
                <li>
                    Project Id: {reward.project_id}
                </li>
                <li>
                    Name: {reward.name}
                </li>
                <li>
                    Quantity: {reward.quantity}
                </li>
                <li>
                    Required Donation: {reward.price_threshold}
                </li>
                <li>
                    Estimated Shipping Date: {reward.shipping_date}
                </li>
            </ul>
        </>
        );
    }

export default Reward;
