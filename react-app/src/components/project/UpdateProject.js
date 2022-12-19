import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import actionAddProject from '../../store/allProjects'
import IconBar from "./IconBar";

function UpdateProject() {
    const [project, setProject] = useState({});
    const [name, setName] = useState("");
    const [goal_amount, setGoalAmount] = useState(0);
    const [current_amount, setCurrentAmount] = useState(0);
    const [end_date, setEndDate] = useState("");
    const [short_description, setShortDescription] = useState("");
    const [long_description, setLongDescription] = useState("");
    const [preview_image, setPreviewImage] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");


    const history = useHistory();
    const dispatch = useDispatch()
    const { id } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/projects/${id}/update`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                goal_amount,
                current_amount,
                end_date,
                short_description,
                long_description,
                preview_image,
                city,
                state
            }),
        });
        const data = await res.json();
        // dispatch(actionAddProject(data))

        history.push(`/projects/${data.id}`)

    };

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/projects/${id}`);
            const data = await res.json();
            //console.log("THE PROJECT DATA ----------> ", data)
            setProject(data);
            setName(data.name);
            setShortDescription(data.short_description);
            setCity(data.city);
            setState(data.state);
            setPreviewImage(data.preview_image);
            setGoalAmount(data.goal_amount);
            setCurrentAmount(data.current_amount);
            setLongDescription(data.long_description);
        })();
    }, [id]);

    return (
        <div>
            <IconBar />
            <div className="create-project-page__main-container">
                <div className="create-project-form__header">
                    <h1 className="h1-helper">Need to make changes?</h1>
                    <h2 className="h2-helper">Make your edits below.</h2>
                </div>
                <div className="create-project-form__header">
                    <form onSubmit={handleSubmit}>
                        <div className="float-container">
                            <div className="float-child">
                                <h2>
                                    Project Title
                                </h2>
                                <h3>
                                    Write a clear, brief title and subtitle to help people quickly understand your project. Both will appear on your project and pre-launch pages.
                                </h3>
                                <h3>
                                    Potential backers will also see them if your project appears on category pages, search results, or in emails we send to our community.
                                </h3>
                            </div>
                            <div className="float-child">
                                <label className="title-label">
                                    Title
                                    <input
                                        type="text"
                                        value={name}
                                        className='title-input'
                                        placeholder="Queen of Pain: A Roller Derby Documentary"
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </label>
                                <label className="title-label">
                                    Subtitle
                                    <textarea
                                        type="text"
                                        value={short_description}
                                        className="short-desc-input"
                                        placeholder="A feature-length documentary film following Suzy Hotrod and the fun, fearless women of Gotham Girls Roller Derby in NYC."
                                        onChange={(e) => setShortDescription(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="float-container2">
                            <div className="float-child">
                                <h2>
                                    Project Location
                                </h2>
                                <h3>
                                    Enter the location that best describes where your project is based.
                                </h3>
                            </div>
                            <div className="float-child">
                                <label>
                                    City
                                    <input
                                        type="text"
                                        value={city}
                                        className='title-input'
                                        placeholder="App State"
                                        onChange={(e) => setCity(e.target.value)}
                                        required
                                    />
                                </label>
                                <label>
                                    State
                                    <input
                                        type="text"
                                        className='title-input'
                                        value={state}
                                        placeholder="Academy Country"
                                        onChange={(e) => setState(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="float-container">
                            <div className="float-child">
                                <h2>
                                    Project Image
                                </h2>
                                <h3>
                                    Add an image that clearly represents your project. Choose one that looks good at different sizes—it’ll appear on your project page, across the Punchender website and mobile apps, and (when shared) on social channels.
                                </h3>
                                <h3>
                                    Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.
                                </h3>
                                <h3>
                                    Avoid images with banners, badges, or text—they are illegible at smaller sizes, can be penalized by the Facebook algorithm, and decrease your chances of getting Punchender homepage and newsletter features.
                                </h3>
                            </div>
                            <div className="float-child">
                                <label>
                                    Preview Image URL
                                    <input
                                        type="text"
                                        value={preview_image}
                                        className='title-input'
                                        placeholder="https://www.google.com/cute_puppy/photo.jpg"
                                        onChange={(e) => setPreviewImage(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="create-project-form__header">
                            <h1 className="h1-help2">Let’s talk about money</h1>
                            <h2 className="h2-help2">Plan and manage your project’s finances.</h2>
                        </div>
                        <div className="float-container">
                            <div className="float-child">
                                <h2>
                                    Project Budget
                                </h2>
                                <h3>
                                    Determine the various costs to bring your project to life.
                                </h3>
                            </div>
                            <div className="float-child">
                                <label>
                                    Goal Amount
                                    <input
                                        type="number"
                                        value={goal_amount}
                                        className='title-input'
                                        placeholder="0"
                                        onChange={(e) => setGoalAmount(e.target.value)}
                                        required
                                    />
                                </label>
                                <label>
                                    Current Amount
                                    <input
                                        type="number"
                                        value={current_amount}
                                        className='title-input'
                                        placeholder="0"
                                        onChange={(e) => setCurrentAmount(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="create-project-form__header">
                            <h1 className="h1-help3">Introduce your project</h1>
                            <h2 className="h2-help3">Tell people why they should be excited about your project. Get specific but be clear and be brief.</h2>
                        </div>
                        <div className="float-container">
                            <div className="float-child">
                                <h2>
                                    Project Description
                                </h2>
                                <h3>
                                    Describe what you're raising funds to do, why you care about it, how you plan to make it happen,
                                    and who you are. Your description should tell backers everything they need to know. If possible,
                                    include images to show them what your project is all about and what rewards look like.
                                </h3>
                            </div>
                            <div className="float-child">
                                <label>
                                    Description
                                    <textarea
                                        type="text"
                                        value={long_description}
                                        className='long-desc-input'
                                        placeholder="Write about your project like you're explaining it to a friend..."
                                        onChange={(e) => setLongDescription(e.target.value)}
                                        required
                                    />
                                </label>
                                <button className="create-project-form__submit-button2" type="submit">Add Rewards</button>
                            </div>
                        </div>
                        <button className="create-project-form__submit-button" type="submit">Add Rewards</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateProject;
