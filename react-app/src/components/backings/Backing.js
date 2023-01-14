import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link, Redirect, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { thunkDeleteBacking, thunkGetAllBackings } from '../../store/userBackings'
import EditBacking from './EditBacking'
import "./Backings.css"

const Backing = ({ backing, deleteBacking }) => {
    const [currentRewardId, setCurrentRewardId] = useState(null)
    const [mountEditBacking, setMountEditBacking] = useState(false)
    console.log(backing)
    const mountEdit = (rewardId) => {
        setCurrentRewardId(rewardId)
        setMountEditBacking(!mountEditBacking)
    }
    return (
        <>
            {mountEditBacking
                ? <EditBacking
                    backing={backing}
                    mountEditBacking={mountEditBacking}
                    setMountEditBacking={setMountEditBacking}
                    currentRewardId={currentRewardId}
                    projectId={backing.project_id}
                />
                : <div id='backing' key={backing.project_id}>
                    <div className='backing-img-div'><img id='backing-img' src={backing.image}></img></div>
                    <div><Link to={`/projects/${backing.project_id}`}><div id="project-name" key={backing.projectName}>{backing.project_name}</div></Link></div>
                    <div id="price" key={backing.price}>${backing.backing_value}</div>
                    <div id="reward" key={backing.reward}>Reward: {backing.reward}</div>
                    <span className='hover-green'><button onClick={() => mountEdit(backing.reward_id)} id='edit'>Edit Pledge</button></span>
                    <span className='hover-green'><button onClick={() => deleteBacking(backing.project_id, backing.reward_id)} id='delete'>Delete Pledge</button></span>
                </div>
            }
            {/* {!mountEditBacking &&
                <div id='backing' key={backing.project_id}>
                    <div className='backing-img-div'><img id='backing-img' src={backing.image}></img></div>
                    <div><Link to={`/projects/${backing.project_id}`}><div id="project-name" key={backing.projectName}>{backing.project_name}</div></Link></div>
                    <div id="price" key={backing.price}>${backing.backing_value}</div>
                    <div id="reward" key={backing.reward}>Reward: {backing.reward}</div>
                    <span className='hover-green'><button onClick={() => mountEdit(backing.reward_id)} id='edit'>Edit Pledge</button></span>
                    <span className='hover-green'><button onClick={() => deleteBacking(backing.project_id, backing.reward_id)} id='delete'>Delete Pledge</button></span>
                </div>
            } */}
        </>
    )
}

export default Backing
