import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getRewards } from '../../store/reward';

const ProjectRewards = () => {
    const [rewards, setRewards] = useState([])
    const { projectId } = useParams()
    useEffect(async() => {

        if (!projectId) {
            return;
            }
            (async () => {
            const response = await fetch(`/api/rewards/projects/${projectId}`);
            const {rewards} = await response.json();
            setRewards(rewards);
            })();

        }, [projectId]);

    if(rewards.length < 1) return "Hello, world!"
    return (
        <>
        <h1>Hello, Project {projectId}!</h1>
        {rewards.map(reward => {

            return(
                <>
                    <ul>
                        <li>
                            Reward Id: {reward.id}
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
                            Includes: {reward.includes}
                        </li>
                        <li>
                            Description: {reward.description}
                        </li>
                        <li>
                            Estimated Shipping Date: {reward.shipping_date}
                        </li>
                        <li>
                            Ships to: {reward.ships_to}
                        </li>
                    </ul>
                </>
            )
        })}
        </>
        );
    }

export default ProjectRewards;
