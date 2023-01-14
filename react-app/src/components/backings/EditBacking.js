import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllProjects } from '../../store/allProjects';
import { actionClearRewards, thunkGetRewards } from '../../store/reward';
import { thunkGetAllBackings, thunkUpdateBacking } from '../../store/userBackings';
import EditSingleReward from './EditSingleReward';
import Reward from './Reward';
import "./Backings.css"

const EditBacking = ({ backing, mountEditBacking, setMountEditBacking }) => {
    const dispatch = useDispatch()
    const location = useLocation()
    // const project = useSelector(state => state.projects[projectId])
    // const rewards = useSelector(state => state.rewards)

    const { projectId } = useParams()
    const { currentRewardId } = location.state
    console.log(currentRewardId)
    const rewards = useSelector(state => state.rewards)
    const project = useSelector(state => state.projects[projectId])
    const [availableRewards, setAvailableRewards] = useState({})

    useEffect(() => {
        dispatch(actionClearRewards())
        dispatch(thunkGetRewards(projectId))
        dispatch(thunkGetAllProjects())
    }, [projectId])


    useEffect(() => {
        let availableRewardsObj = {}
        Object.values(rewards).map(reward => {
            if (reward.id !== currentRewardId) {
                availableRewardsObj[reward.id] = reward
            }
            // return setAvailableRewards(availableRewardsObj)
        })

        setAvailableRewards(availableRewardsObj)
    }, [rewards])

    // const handleClick = (newRewardId, prevRewardId) => {
    //     dispatch(thunkUpdateBacking(projectId, newRewardId, prevRewardId))
    //     dispatch(thunkGetAllProjects())
    //     setMountEditBacking(!mountEditBacking)
    // }

    if (!project) return null
    return (
        <>
            <div className="select-reward-header-container">
                <div id="select-reward-header">
                    <h1>{project.name}</h1>
                    <h2>{project.owner.name}</h2>
                </div>
            </div>
            <div className="rewards-container">
                <div className="select-rewards">
                    <h2>Select a different reward</h2>
                    {Object.values(availableRewards).map(reward => (
                        <EditSingleReward reward={reward} currentRewardId={currentRewardId} />
                    ))
                    }
                </div>
                <div className="rewards-disclaimer">
                    <p>Your pledge will support an ambitious creative project that has yet to be developed.
                        There’s a risk that, despite a creator’s best efforts, your reward will not be fulfilled,
                        and we urge you to consider this risk prior to pledging.
                        Punchender is not responsible for project claims or reward fulfillment.</p>
                </div>
            </div>

        </>
    );
}

export default EditBacking;
