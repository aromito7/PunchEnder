import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { thunkGetAllProjects } from '../../store/allProjects'
import './CategoryProjects.css'
import projectupdates from '../../images/projectupdates.png'
import { NavLink } from 'react-router-dom'

function AllProjects() {
    const projects = useSelector(state => state.projects)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkGetAllProjects())
    }, [dispatch])

    return (
        <div className='categoryPage'>
            <div className='categoryTopInfo'>
                <h1 id='categoryTopTitle'>{projects.category ? projects.category : "Comics & Illustration"}</h1>
                <h2 id='categoryTopDesc'>{projects.category?.description ? projects.category.description : "Explore fantasical worlds and original characters from Punchender's community of comics and illustrators."}</h2>
            </div>

            <div id='categoryMiddleInfo'>
                <div className='categoryFeaturedProject'>
                    <div>
                        <span id='categoryFeatureTitle'>Featured project</span>
                    </div>
                    <div>
                        <img id='categoryFeaturedImage' src={projects.preview_image ? projects.preview_image: 'https://i.pinimg.com/originals/a5/90/8c/a5908c706c030ef3f94c2ad98e23b286.jpg'} />
                    </div>
                    <div>
                        <p id='categoryFeatureName'>
                            {projects.name ? projects.name : "X365: A Graphic Novel by Neill Cameron"}
                        </p>
                        <p id='categoryFeatureDesc'>
                            {projects.description ? projects.description : "I made a comic, one panel a day, for a whole year. This is what happened."}
                        </p>
                        <p id='categoryFeatureAuthor'>
                            By {projects.owner ? projects.owner : "Neill Cameron"}
                        </p>
                    </div>
                </div>

                <div className='categoryRecommendProjects'>
                    <p id='categoryRecommendTitle'>
                        Recommended for you
                    </p>
                    <div className='recommendWrappers'>
                        <img className='categoryRecommendImgs' src={projects.preview_image ? projects.preview_image: 'https://i.pinimg.com/originals/a5/90/8c/a5908c706c030ef3f94c2ad98e23b286.jpg'} />
                        <div className='categoryRecDesc'>
                            <p>
                                {projects.name ? projects.name : "X365: A Graphic Novel by Neill Cameron"}
                            </p>
                            <p className='categoryRecAuthor'>
                                By {projects.owner ? projects.owner : "Neill Cameron"}
                            </p>
                        </div>
                    </div>
                    <div className='recommendWrappers'>
                        <img className='categoryRecommendImgs' src={projects.preview_image ? projects.preview_image: 'https://i.pinimg.com/originals/a5/90/8c/a5908c706c030ef3f94c2ad98e23b286.jpg'} />
                        <div className='categoryRecDesc'>
                            <p>
                                {projects.name ? projects.name : "X365: A Graphic Novel by Neill Cameron"}
                            </p>
                            <p className='categoryRecAuthor'>
                                By {projects.owner ? projects.owner : "Neill Cameron"}
                            </p>
                        </div>
                    </div>
                    <div className='recommendWrappers'>
                        <img className='categoryRecommendImgs' src={projects.preview_image ? projects.preview_image: 'https://i.pinimg.com/originals/a5/90/8c/a5908c706c030ef3f94c2ad98e23b286.jpg'} />
                        <div className='categoryRecDesc'>
                            <p>
                                {projects.name ? projects.name : "X365: A Graphic Novel by Neill Cameron"}
                            </p>
                            <p className='categoryRecAuthor'>
                                By {projects.owner ? projects.owner : "Neill Cameron"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='categoryProjectUpdates'>
                <img src={projectupdates} />
                <div className='categoryUpdateDesc'>
                    <p id='categoryUpdateTitle'>
                        Punchender Project Updates
                    </p>
                    <p id='categoryUpdateBody'>
                        A destination for news, tips, and inspiration, and home to our new montly video series, Punchender Project Updates shares everything you need to know about what's happening at Punchender.
                    </p>
                </div>
            </div>

            <div className='categoryExploreWrapper'>
                <div className='categoryExpWrapper'>
                    <div className='categoryExploreTitle'>
                        <p>
                            Explore {projects.category ? projects.category : 'Design'}
                        </p>
                    </div>
                    <div>
                        <NavLink to='/discover' id='categoryDiscover'>Discover more</NavLink>
                    </div>
                </div>
                <div className='categoryExploreProjs'>
                    {/* <div className='categoryExploreCategory'> */}
                        <p id='categoryExploreCat'>
                            {projects.category ? projects.category : "Games"}
                        </p>
                    {/* </div> */}
                    <div className='exploreWrappers'>
                            <img className='categoryExploreImgs' src={projects.preview_image ? projects.preview_image: 'https://i.pinimg.com/originals/a5/90/8c/a5908c706c030ef3f94c2ad98e23b286.jpg'} />
                            <div className='categoryExploreDesc'>
                                <p className='categoryExpTitle'>
                                    {projects.name ? projects.name : "X365: A Graphic Novel by Neill Cameron"}
                                </p>
                                <p id='categoryExpDesc'>
                                    {projects.description ? projects.description : "I made a comic, one panel a day, for a whole year. This is what happened."}
                                </p>
                                <p className='categoryRecAuthor'>
                                    By {projects.owner ? projects.owner : "Neill Cameron"}
                                </p>
                            </div>
                        </div>
                    <div className='exploreWrappers'>
                            <img className='categoryExploreImgs' src={projects.preview_image ? projects.preview_image: 'https://i.pinimg.com/originals/a5/90/8c/a5908c706c030ef3f94c2ad98e23b286.jpg'} />
                            <div className='categoryExploreDesc'>
                                <p className='categoryExpTitle'>
                                    {projects.name ? projects.name : "X365: A Graphic Novel by Neill Cameron"}
                                </p>
                                <p id='categoryExpDesc'>
                                    {projects.description ? projects.description : "I made a comic, one panel a day, for a whole year. This is what happened."}
                                </p>
                                <p className='categoryRecAuthor'>
                                    By {projects.owner ? projects.owner : "Neill Cameron"}
                                </p>
                            </div>
                        </div>
                    <div className='exploreWrappers'>
                        <img className='categoryExploreImgs' src={projects.preview_image ? projects.preview_image: 'https://i.pinimg.com/originals/a5/90/8c/a5908c706c030ef3f94c2ad98e23b286.jpg'} />
                        <div className='categoryExploreDesc'>
                            <p className='categoryExpTitle'>
                                {projects.name ? projects.name : "X365: A Graphic Novel by Neill Cameron"}
                            </p>
                            <p id='categoryExpDesc'>
                                    {projects.description ? projects.description : "I made a comic, one panel a day, for a whole year. This is what happened."}
                                </p>
                            <p className='categoryRecAuthor'>
                                By {projects.owner ? projects.owner : "Neill Cameron"}
                            </p>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default AllProjects
