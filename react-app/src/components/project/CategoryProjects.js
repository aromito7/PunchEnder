import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { thunkGetAllProjects } from '../../store/allProjects'
import './CategoryProjects.css'
import projectupdates from '../../images/projectupdates.png'
import { NavLink, useParams, useHistory } from 'react-router-dom'


function CategoryProjects() {
    const {category} = useParams()
    const descriptions = {
    1: "Discover the artists and organizations using Kickstarter to realize ambitious projects in visual art and performance.",
    2: "Explore fantastical worlds and original characters from Kickstarter’s community of comics creators and illustrators.",
    3: "From fine design to innovative tech, discover projects from creators working to build a more beautiful future.",
    4: "Join forces with the intrepid filmmakers and festival creators changing the way stories get told on screen.",
    5: "See how artisans and entrepreneurs are using Kickstarter to break new ground in food, fashion, and crafts.",
    6: "From tabletop adventures to beloved revivals, discover the projects forging the future of gameplay.",
    7: "Discover new albums, performances, and independent venues from creators using Kickstarter to shape the future of sound.",
    8: "Explore how writers and publishers are using Kickstarter to bring new literature, periodicals, podcasts, and more to life."
    }

    const history = useHistory()
    const [categories, setCategories] = useState({})
    const [projects, setProjects] = useState([])
    const fakeProject = {
        description: "Explore fantasical worlds and original characters from Punchender's community of comics and illustrators.",
        name: "X365: A Graphic Novel by Neill Cameron",
        owner: {firstname: "Neill",
                lastname: "Cameron"},
        preview_image: 'https://i.pinimg.com/originals/a5/90/8c/a5908c706c030ef3f94c2ad98e23b286.jpg'
    }


    const clickProject = (id) => {
        if(id) history.push(`/projects/${id}`)
    }

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/projects/categories`);
            const data = await res.json();
            //console.log("THE PROJECT DATA ----------> ", data)
            const tempCategory = data.categories.find(cat => cat.name.split(' & ').join('') == category)
            setCategories(tempCategory);
            setProjects(tempCategory.projects);
            })();
    }, [category])
    // console.log("categories")
    // console.log(categories)
    // console.log("projects")
    // console.log(projects)
    if(projects.length == 0) return null
    categories.description = descriptions[categories.id]
    const featuredProject = projects.length > 0 ? projects[0] : fakeProject
    const project1 = projects.length > 1 ? projects[1] : featuredProject
    const project2 = projects.length > 2 ? projects[2] : featuredProject
    const project3 = projects.length > 3 ? projects[3] : featuredProject
    //console.log(featuredProject)

    if(!categories.name) return null
    return (
        <div className='categoryPage'>
            <div className='categoryTopInfo'>
                <h1 id='categoryTopTitle'>{categories.name ? categories.name : "Comics & Illustration"}</h1>
                {true && <h2 id='categoryTopDesc'>{categories?.description ? categories.description : "Explore fantasical worlds and original characters from Punchender's community of comics and illustrators."}</h2>}
            </div>

            <div id='categoryMiddleInfo'>
                <div className='categoryFeaturedProject cursor-pointer' onClick={() => clickProject(featuredProject.id)}>
                    <div>
                        <span id='categoryFeatureTitle'>Featured project</span>
                    </div>
                    <div>
                        <img id='categoryFeaturedImage' src={featuredProject.preview_image ? featuredProject.preview_image : 'https://i.pinimg.com/originals/a5/90/8c/a5908c706c030ef3f94c2ad98e23b286.jpg'} />
                    </div>
                    <div>
                        <p id='categoryFeatureName'>
                            {featuredProject.name ? featuredProject.name : "X365: A Graphic Novel by Neill Cameron"}
                        </p>
                        <p id='categoryFeatureDesc'>
                            {featuredProject.short_description ? featuredProject.short_description : "I made a comic, one panel a day, for a whole year. This is what happened."}
                        </p>
                        <p id='categoryFeatureAuthor'>
                            By {featuredProject.owner ? `${featuredProject.owner.firstname} ${featuredProject.owner.lastname}` : "Neill Cameron"}
                        </p>
                    </div>
                </div>

                <div className='categoryRecommendProjects'>
                    <p id='categoryRecommendTitle'>
                        Recommended for you
                    </p>
                    <div className='recommendWrappers cursor-pointer' onClick={() => clickProject(project1.id)}>
                        <img className='categoryRecommendImgs' src={project1.preview_image ? project1.preview_image: 'https://i.pinimg.com/originals/a5/90/8c/a5908c706c030ef3f94c2ad98e23b286.jpg'} />
                        <div className='categoryRecDesc'>
                            <p>
                                {project1.name ? project1.name : "X365: A Graphic Novel by Neill Cameron"}
                            </p>
                            <p className='categoryRecAuthor'>
                                By {project1.owner ? [project1.owner.firstname, project1.owner.lastname].join(' ') : "Neill Cameron"}
                            </p>
                        </div>
                    </div>
                    <div className='recommendWrappers cursor-pointer' onClick={() => clickProject(project2.id)}>
                        <img className='categoryRecommendImgs' src={project2.preview_image ? project2.preview_image: 'https://i.pinimg.com/originals/a5/90/8c/a5908c706c030ef3f94c2ad98e23b286.jpg'} />
                        <div className='categoryRecDesc'>
                            <p>
                                {project2.name ? project2.name : "X365: A Graphic Novel by Neill Cameron"}
                            </p>
                            <p className='categoryRecAuthor'>
                                By {project2.owner ? [project2.owner.firstname, project2.owner.lastname].join(' ') : "Neill Cameron"}
                            </p>
                        </div>
                    </div>
                    <div className='recommendWrappers cursor-pointer' onClick={() => clickProject(project3.id)}>
                        <img className='categoryRecommendImgs' src={project3.preview_image ? project3.preview_image: 'https://i.pinimg.com/originals/a5/90/8c/a5908c706c030ef3f94c2ad98e23b286.jpg'} />
                        <div className='categoryRecDesc'>
                            <p>
                                {project3.name ? project3.name : "X365: A Graphic Novel by Neill Cameron"}
                            </p>
                            <p className='categoryRecAuthor'>
                                By {project3.owner ? [project3.owner.firstname, project3.owner.lastname].join(' ') : "Neill Cameron"}
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

export default CategoryProjects
