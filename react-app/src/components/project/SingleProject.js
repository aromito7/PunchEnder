import React, { useEffect, useState } from "react";
import { useParams, NavLink, useHistory } from "react-router-dom";
import './SingleProject.css'


const SingleProject = () => {
    const { id } = useParams();
    const history = useHistory();

    const [project, setProject] = useState({});

    useEffect(() => {
        (async () => {
        const res = await fetch(`/api/projects/${id}`);
        const data = await res.json();
        console.log("THE PROJECT DATA ----------> ", data)
        setProject(data);
        })();
    }, [id]);

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
                    <span>{project.current_amount ? project.current_amount : '10000'} pledged of ${project.goal_amount ? project.goal_amount : '50000'}</span>
                    <span>{project.end_date ? project.end_date : '12/02/23'}</span>
                    <button id='singleProjectPledge'>Back this project</button>
                    <button id='singleProjectReminder'>Remind me</button>
                    <span id='singleProjectAllNone'>All or nothing. <span>This project will only be funded if it reaches its goal by {project.end_date}</span></span>
                </div>
            </div>

            <div className='singleProjectLowerMiddleInfo'>
                <p>
                    Kickstarter connects creators with backers to fund projects.
                </p>
                <p>
                    Rewards aren't guaranteed, but creators must regularly update backers.
                </p>
                <p>
                    You're only charged if the project meets its funding goal by the campaign deadline.
                </p>
            </div>

            <div className='singleProjectLowerNavBar'>
                <div className='lowerNavBarTabs'>
                    <span>Campaign</span>
                    <span>FAQ</span>
                    <span>Updates</span>
                    <span>Comments</span>
                    <span>Community</span>
                </div>
                <div className='lowerNavBarButtons'>
                    <button id='lowerPledgeButton'>Back this project</button>
                    <button id='lowerRemindButton'>Remind me</button>
                </div>
            </div>

            <div className='singleProjectStory'>
                <p id='singleProjectLonDesc'>{project.long_description ? project.long_description : "Amazing project"}</p>
            </div>

            <div className='singleProjectSidebar'>
                <div className='ownerBox'>
                    <span>{project.owner ? project.owner : "Bob"}</span>
                </div>
                <div className='pledgeComponent'>
                    {/* INSERT PLEDGE COMPONENT HERE */}
                </div>
            </div>


        </div>
    );
}

export default SingleProject;
