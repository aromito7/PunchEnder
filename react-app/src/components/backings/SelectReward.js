import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { thunkGetAllProjects } from "../../store/allProjects";
import { actionClearRewards, thunkGetRewards } from "../../store/reward";
import SingleReward from "./SingleReward";
import { thunkGetAllBackings } from "../../store/userBackings";
import './Backings.css'

const SelectRewards = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { projectId } = useParams()
    const rewards = useSelector(state => state.rewards)
    const project = useSelector(state => state.projects[projectId])
    const user = useSelector(state => state.session.user)
    const userRewards = useSelector(state => state.userBackings)

    useEffect(() => {
        Object.values(userRewards).map(reward => {
            if (reward.project_id === parseInt(projectId)) {
                history.push({
                    pathname: `/backings/projects/${projectId}/edit`,
                    state: { currentRewardId: reward.reward_id }
                })
            }
            return null
        })
    })

    useEffect(() => {
        dispatch(thunkGetAllBackings(user.id))
        dispatch(actionClearRewards())
        dispatch(thunkGetRewards(projectId))
        dispatch(thunkGetAllProjects())
    }, [projectId, user.id, dispatch])

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
                    <h2>Select your reward</h2>
                    {Object.values(rewards).map((reward, i) => (
                        <SingleReward key={i} reward={reward} />
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
    )
}

export default SelectRewards
