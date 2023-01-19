import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link, Redirect, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { thunkDeleteProject } from '../../store/allProjects'


function UserProjects() {
    const [toggleDelete, setToggleDelete] = useState(false)
    const user = useSelector(state => state.session.user)
    const [projects, setProjects] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/projects`);
            const data = await res.json();

            //console.log("THE PROJECT DATA ----------> ", data)
            setProjects(data.projects);
        })();
    }, []);


    if (!user) return null
    if (!Object.values(projects).length) return null

    const deleteProject = (projectId) => {
        dispatch(thunkDeleteProject(projectId))
        setToggleDelete(!toggleDelete)
        //console.log(projects)
        setProjects(projects.filter(project => project.id !== projectId))
    }

    return (
        <>
            <h1 style={{ marginTop: "100px" }}>Projects You Own</h1>

            <div className='projects-container'>
                {projects.filter(project => project.owner_id == user.id).map((project, i) => (
                    <div id='project' key={i}>
                        <div className='project-img-div'><img id='project-img' src={project.preview_image}></img></div>
                        <div><Link to={`/projects/${project.id}`}><div id="project-name">{project.name}</div></Link></div>
                        <div id="price">${project.current_amount}</div>
                        <span className='hover-green'><Link to={`/projects/${project.id}/update`} id='edit'>Edit Project</Link></span>
                        <span className='hover-green'><button onClick={() => deleteProject(project.id)} id='delete'>Delete Project</button></span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default UserProjects;
