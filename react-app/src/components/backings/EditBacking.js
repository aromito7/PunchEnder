import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllProjects } from '../../store/allProjects';
import { actionClearRewards, thunkGetRewards } from '../../store/reward';
import { thunkGetAllBackings, thunkUpdateBacking } from '../../store/userBackings';
import Reward from './Reward';
import "./Backings.css"

const EditBacking = ({ backing, currentRewardId, projectId, mountEditBacking, setMountEditBacking }) => {
    const dispatch = useDispatch()
    // const project = useSelector(state => state.projects[projectId])
    const rewards = useSelector(state => state.rewards)

    const [availableRewards, setAvailableRewards] = useState({})

    useEffect(() => {
        dispatch(actionClearRewards())
        dispatch(thunkGetRewards(projectId))
        // dispatch(thunkGetAllProjects())

        console.log(currentRewardId)
        console.log(projectId)
        console.log(availableRewards)
    }, [projectId])

    useEffect(() => {
        let availableRewardsObj = {}

        Object.values(rewards).map(reward => {
            if (reward.id !== currentRewardId) {
                availableRewardsObj[reward.id] = reward
            }
            return setAvailableRewards(availableRewardsObj)
        })

        // setAvailableRewards(availableRewardsObj)
    }, [rewards])

    // const handleClick = (newRewardId, prevRewardId) => {
    //     dispatch(thunkUpdateBacking(projectId, newRewardId, prevRewardId))
    //     dispatch(thunkGetAllProjects())
    //     setMountEditBacking(!mountEditBacking)
    // }

    return (
        <>
            <h1 id='rewards-header'>Select a different reward:</h1>
            <div id='backing' key={backing.project_id}>
                <div id='edit-container'>
                    <div id='backing-project-info' >
                        <div className='backing-img-div'><img id='backing-img' src={backing.image}></img></div>
                        <div><Link to={`/projects/${backing.project_id}`}><div id="project-name" key={backing.projectName}>{backing.project_name}</div></Link></div>
                    </div>
                    <div className='edit-rewards-container'>
                        {Object.values(availableRewards).map(reward => (
                            <Reward
                                reward={reward}
                                mountEditBacking={mountEditBacking}
                                setMountEditBacking={setMountEditBacking}
                                currentRewardId={currentRewardId}
                                projectId={projectId}
                            />
                            // <div className='reward'>
                            //     <ul>
                            //         <li style={{ fontWeight: "bold" }}>
                            //             {reward.name}
                            //         </li>
                            //         <li>
                            //             {reward.quantity} left!
                            //         </li>
                            //         <li>
                            //             ${reward.price_threshold}
                            //         </li>
                            //         <li>
                            //             Includes: {reward.includes}
                            //         </li>
                            //         <li>
                            //             {reward.description}
                            //         </li>
                            //     </ul>
                            //     <button onClick={() => handleClick(reward.id, currentRewardId)} id='select-reward'>Select</button>
                            // </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}

export default EditBacking;
