import React, { useEffect, useState } from "react";
import { useParams, NavLink, useHistory } from "react-router-dom";
import './SingleProject.css'
import reminder from '../../images/reminder.png'
import nav1 from '../../images/nav1.png'
import nav2 from '../../images/nav2.png'
import nav3 from '../../images/nav3.png'
import RewardComponent from '../reward/RewardComponent'
import { useSelector } from "react-redux";

const SingleProject = () => {
    const { id } = useParams();
    const history = useHistory();
    const currentUser = useSelector(state => state.session.user);
    const [project, setProject] = useState({});


    useEffect(() => {
        (async () => {
        const res = await fetch(`/api/projects/${id}`);
        const data = await res.json();
        //console.log("THE PROJECT DATA ----------> ", data)
        setProject(data);
        })();
    }, [id]);

    const toCreateReward = (e) => {
        history.push(`/projects/${id}/rewards/create`)
    }

    if(Object.keys(project).length < 1) return null
    return (
        <div className='singleProject'>
            <div className='singleProjectTopInfo'>
                <h1 id='singleProjectTitle'>{project.name ? project.name : 'Placeholder'}</h1>
                <h2 id='singleProjectShoDesc'>{project.short_description ? project.short_description : 'This is a great project'}</h2>
            </div>

            <div className='singleProjectMiddleCards'>
                <div className='projectImage'>
                    <div className='actualImageBox'>
                        <img id='actualImage' src={project.preview_img ? project.preview_img : 'https://i.pinimg.com/originals/a5/90/8c/a5908c706c030ef3f94c2ad98e23b286.jpg'} />
                    </div>
                    <div className='actualImageBoxLower'>
                        <span id='singleProjectLocation'>{project.city ? project.city : "Los Angeles"}, {project.state ? project.state : "CA"}</span>
                    </div>
                </div>
                <div className='pledgeSummary'>
                    <div className='pledgeAmount'>
                        <span id='pledgeGreen'>${project.current_amount ? project.current_amount : '10000'}</span>
                        <span id='pledgeGrey'>{' '} pledged of ${project.goal_amount ? project.goal_amount : '50000'} goal</span>
                    </div>
                    <div>
                        <span>Ends: {project.end_date ? project.end_date.split('T')[0] : '12/02/23'}</span>
                    </div>
                    <div>
                        {currentUser && currentUser.id == project.owner_id?
                        <button id='singleProjectPledge' className="cursor-pointer" onClick={toCreateReward}>Create a new reward</button>:
                        <button id='singleProjectPledge'>Back this project</button>}
                    </div>
                    <div id='reminderButtonWrapper'>
                        <button id='singleProjectReminder'><img id='buttonReminder' src={reminder} />Remind me</button>
                    </div>
                    <div className='pledgeSummLow'>
                        <span id='singleProjectAllNone'>All or nothing. {' '}</span>
                        <span>This project will only be funded if it reaches its goal by {project.end_date}</span>
                    </div>
                </div>
            </div>

            <div className='singleProjectLowerMiddleInfo'>
                <div className='lowerMiddleWrapper'>
                    <img className='lowerMiddleIcons' src={nav1} />
                    <p>
                        Kickstarter connects creators with backers to fund projects.
                    </p>
                </div>
                <div className='lowerMiddleWrapper'>
                    <img className='lowerMiddleIcons' src={nav2} />
                    <p>
                        Rewards aren't guaranteed, but creators must regularly update backers.
                    </p>
                </div>
                <div className='lowerMiddleWrapper'>
                    <img className='lowerMiddleIcons' src={nav3} />
                    <p>
                        You're only charged if the project meets its funding goal by the campaign deadline.
                    </p>
                </div>
            </div>

            <div className='singleProjectLowerNavBar'>
                <div className='lowerNavBarTabs'>
                    <p>Campaign</p>
                    <p>FAQ</p>
                    <p>Updates</p>
                    <p>Comments</p>
                    <p>Community</p>
                </div>
                <div className='lowerNavBarButtons'>
                    <button id='lowerPledgeButton'>Back this project</button>
                    <button id='lowerRemindButton'><img id='lowerButtonReminder' src={reminder} />Remind me</button>
                </div>
            </div>

            <div className='singleProjectBottomInfo'>
                <div className=''>
                    <p id='singleProjectLonDesc'>{project.long_description ? project.long_description : "Amazing project"}</p>
                </div>
                <div className='singleProjectSidebar'>
                    {false && <div className='ownerBox'>
                        <p>
                            {project.owner ? project.owner : "Bob"}
                        </p>
                        <p>
                            First Created &#x2022; 9 backed
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>}
                    <h2>Support</h2>
                    <div className='pledgeComponent'>
                        {project.rewards.map((reward, i) => {
                            return <RewardComponent reward={reward} key={i}/>
                        })}
                        {false && <RewardComponent reward={project.rewards[0]}/>}
                    </div>
                </div>
            </div>


        </div>
    );
}

export default SingleProject;
