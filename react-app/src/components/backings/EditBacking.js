import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllProjects } from '../../store/allProjects';
import { actionClearRewards, thunkGetRewards } from '../../store/reward';
import EditSingleReward from './EditSingleReward';
import "./Backings.css"

const EditBacking = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const { projectId } = useParams()
    const { currentRewardId } = location.state
    const rewards = useSelector(state => state.rewards)
    const project = useSelector(state => state.projects[projectId])
    const [availableRewards, setAvailableRewards] = useState({})

    useEffect(() => {
        dispatch(actionClearRewards())
        dispatch(thunkGetRewards(projectId))
        dispatch(thunkGetAllProjects())
    }, [dispatch, projectId])


    useEffect(() => {
        let availableRewardsObj = {}
        Object.values(rewards).map(reward => {
            if (reward.id !== currentRewardId) {
                availableRewardsObj[reward.id] = reward
            }

            return setAvailableRewards(availableRewardsObj)
        })

    }, [rewards, currentRewardId])


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
                    {Object.keys(availableRewards).length
                        ? <>
                            <h2>You've already backed this project.</h2>
                            <h2>Select a different reward:</h2>
                            {Object.values(availableRewards).map((reward, i) => (
                                <EditSingleReward key={i} reward={reward} currentRewardId={currentRewardId} />
                            ))
                            }
                        </>
                        : <>
                            <h2>You've already backed this project.</h2>
                            <h2>Unfortunately, this project has no additional rewards to choose from at this time.</h2>
                            <Link to={`/projects/${projectId}`}><button id='singleProjectPledge'>Back to Project</button></Link>
                        </>
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
