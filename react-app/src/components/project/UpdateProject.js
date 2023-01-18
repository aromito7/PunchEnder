import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
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

    const [errors, setErrors] = useState([]);
    const [nameError, setNameError] = useState('');
    const [goalError, setGoalError] = useState('');
    const [currentError, setCurrentError] = useState('')
    const [shortDescriptionError, setShortDescriptionError] = useState('');
    const [longDescriptionError, setLongDescriptionError] = useState('');
    const [previewImageError, setPreviewImageError] = useState('');
    const [cityError, setCityError] = useState('');
    const [stateError, setStateError] = useState('');

    const [hasSubmitted, setHasSubmitted] = useState(false)

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const validationErrors = []


        if (name.length < 2) { setNameError("Name must be at least 2 characters"); validationErrors.push(nameError) }//validationErrors.push("Name must be at least 2 characters")
        else if (name.length > 50) { setNameError("Name must be at most 50 characters"); validationErrors.push(nameError) }//validationErrors.push("Name must be 50 characters at most")
        else setNameError('')

        if (Number(goal_amount) < 1) { setGoalError("Goal must be a positive number"); validationErrors.push(goalError) } //validationErrors.push("Goal must be a positive number")
        else setGoalError('')

        if (Number(current_amount) < 0) { setCurrentError("Current amount cannot be negative"); validationErrors.push(currentError) }//validationErrors.push("Current amount must be a positive number")
        else if (Number(current_amount) >= Number(goal_amount)) { setCurrentError("Current amount must be less than the goal"); validationErrors.push(currentError) } //validationErrors.push("Current amount must be less than the goal")
        else setCurrentError('')

        if (short_description.length < 50) { setShortDescriptionError("Short description must be at least 50 characters"); validationErrors.push(shortDescriptionError) }//validationErrors.push("Short description must be at least 50 characters")
        else setShortDescriptionError('')

        if (long_description.length < 100) { setLongDescriptionError("Long description must be at least 100 characters"); validationErrors.push(longDescriptionError) }//validationErrors.push("Long description must be at least 100 characters")
        else setLongDescriptionError('')

        if (!preview_image.match(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/)) { setPreviewImageError("Preview image must be a valid URL"); validationErrors.push(previewImageError) }//validationErrors.push("Preview image must be a valid URL")
        else setPreviewImageError('')

        if (!city) { setCityError("Please enter a city"); validationErrors.push(cityError) }
        else setCityError('')

        if (!state.match(/^[a-zA-Z]{2}$/)) { setStateError("Please enter your state's two letter abbreviation"); validationErrors.push(stateError) }
        else setStateError('')

        setErrors(validationErrors)
    }, [name, goal_amount, current_amount, short_description, long_description, preview_image, city, state])



    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true)
        if (errors.length > 0) return
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


        history.push(`/projects/${data.id}`)

    };

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/projects/${id}`);
            const data = await res.json();
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

    useEffect(() => {
        const validationErrors = []


        if (name.length < 2) { setNameError("Name must be at least 2 characters"); validationErrors.push(nameError) }//validationErrors.push("Name must be at least 2 characters")
        else if (name.length > 50) { setNameError("Name must be at most 50 characters"); validationErrors.push(nameError) }//validationErrors.push("Name must be 50 characters at most")
        else setNameError('')

        if (Number(goal_amount) < 1) { setGoalError("Goal must be a positive number"); validationErrors.push(goalError) } //validationErrors.push("Goal must be a positive number")
        else setGoalError('')

        if (Number(current_amount) < 0) { setCurrentError("Current amount can not be negative"); validationErrors.push(currentError) }//validationErrors.push("Current amount must be a positive number")
        else if (Number(current_amount) >= Number(goal_amount)) { setCurrentError("Current amount must be less than the goal"); validationErrors.push(currentError) } //validationErrors.push("Current amount must be less than the goal")
        else setCurrentError('')

        if (short_description.length < 50) { setShortDescriptionError("Short description must be at least 50 characters"); validationErrors.push(shortDescriptionError) }//validationErrors.push("Short description must be at least 50 characters")
        else setShortDescriptionError('')

        if (long_description.length < 100) { setLongDescriptionError("Long description must be at least 100 characters"); validationErrors.push(longDescriptionError) }//validationErrors.push("Long description must be at least 100 characters")
        else setLongDescriptionError('')

        if (!preview_image.match(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/)) { setPreviewImageError("Preview image must be a valid URL"); validationErrors.push(previewImageError) }//validationErrors.push("Preview image must be a valid URL")
        else setPreviewImageError('')

        if (!city) { setCityError("Please enter a city"); validationErrors.push(cityError) }
        else setCityError('')

        if (!state.match(/^[a-zA-Z]{2}$/)) { setStateError("Please enter your state's two letter abbreviation"); validationErrors.push(stateError) }
        else setStateError('')

        setErrors(validationErrors)
    }, [name, goal_amount, current_amount, short_description, long_description, preview_image, city, state])


    return (
        <div>
            <IconBar />
            <div className="create-project-page__main-container">
                <div className="create-project-form__header">
                    <h1 className="h1-helper">Need to make changes?</h1>
                    <h2 className="h2-helper">Make your edits below.</h2>
                </div>
                <div className="create-project-form__header">
                    <form onSubmit={handleSubmit} noValidate>
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
                                    {hasSubmitted && nameError && <p className="error-message">{nameError}</p>}
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
                                    {hasSubmitted && shortDescriptionError && <p className="error-message">{shortDescriptionError}</p>}
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
                                    {hasSubmitted && cityError && <p className="error-message">{cityError}</p>}
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
                                    {hasSubmitted && stateError && <p className="error-message">{stateError}</p>}
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
                                    {hasSubmitted && previewImageError && <p className="error-message">{previewImageError}</p>}
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
                                    {hasSubmitted && goalError && <p className="error-message">{goalError}</p>}
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
                                    {hasSubmitted && currentError && <p className="error-message">{currentError}</p>}
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
                                    {hasSubmitted && longDescriptionError && <p className="error-message">{longDescriptionError}</p>}
                                    <textarea
                                        type="text"
                                        value={long_description}
                                        className='long-desc-input'
                                        placeholder="Write about your project like you're explaining it to a friend..."
                                        onChange={(e) => setLongDescription(e.target.value)}
                                        required
                                    />
                                </label>
                                {errors.length > 0 && hasSubmitted && (
                                    <ul className='error-message'>
                                        {errors.map(error => (<li>{error}</li>))}
                                    </ul>
                                )}
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
