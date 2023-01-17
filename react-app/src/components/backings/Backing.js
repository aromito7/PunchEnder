import React from 'react'
import { Link } from 'react-router-dom'
import "./Backings.css"

const Backing = ({ backing, deleteBacking }) => {

    return (
        <>
            <div id='backing' key={backing.project_id}>
                <div className='backing-img-div'><img id='backing-img' src={backing.image}></img></div>
                <div><Link to={`/projects/${backing.project_id}`}><div id="project-name" key={backing.projectName}>{backing.project_name}</div></Link></div>
                <div id="price" key={backing.price}>${backing.backing_value}</div>
                <div id="reward" key={backing.reward}>Reward: {backing.reward}</div>
                <div>
                    <span ><Link to={{ pathname: `/backings/projects/${backing.project_id}/edit`, state: { currentRewardId: backing.reward_id } }} id='edit'><i className="fa-solid fa-pen-to-square"></i></Link></span>
                    <span ><button onClick={() => deleteBacking(backing.project_id, backing.reward_id)} id='delete'><i className="fa-solid fa-trash"></i></button></span>
                </div>
            </div>

        </>
    )
}

export default Backing
