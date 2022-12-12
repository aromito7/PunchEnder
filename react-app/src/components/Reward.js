import React, {useEffect, useState, useParams} from 'react';

const Reward = () => {
    const {rewardId} = useParams()
    const [reward, setReward] = useState(null)
    useEffect(() => {
        const searchProduct = async () => {
            try {
                const reward = fetch(`/api/rewards/1`)
                setReward(reward);
            } catch (error) {
                error = error;
            }
            };
           }, []);

    //if(!reward) return null
    return (
        <>
            <h1>Hello, world!</h1>
            <ul>
                <li>
                    {reward?.name}
                </li>
                <li>
                    {reward?.quantity}
                </li>
                <li>
                    {reward?.price_threshold}
                </li>
                <li>

                </li>
                <li>

                </li>
            </ul>
        </>
        );
    }

export default Reward;
