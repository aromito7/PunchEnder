import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateProject() {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/projects/create", {
        method: "POST",
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
            state,
        }),
        });
        const data = await res.json();
        window.print("DATA ---------------> ", data)

        history.push(`/projects/${data.id}`)

    };

    return (
        <>
        <form onSubmit={handleSubmit}>
        <label>
            Name
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        </label>
        <label>
            Goal Amount
            <input
            type="number"
            value={goal_amount}
            onChange={(e) => setGoalAmount(e.target.value)}
            required
            />
        </label>
        <label>
            Current Amount
            <input
            type="number"
            value={current_amount}
            onChange={(e) => setCurrentAmount(e.target.value)}
            required
            />
        </label>
        <label>
            Short Description
            <input
            type="text"
            value={short_description}
            onChange={(e) => setShortDescription(e.target.value)}
            required
            />
        </label>
        <label>
            Long Description
            <input
            type="text"
            value={long_description}
            onChange={(e) => setLongDescription(e.target.value)}
            required
            />
        </label>
        <label>
            Preview Image
            <input
            type="text"
            value={preview_image}
            onChange={(e) => setPreviewImage(e.target.value)}
            required
            />
        </label>
        <label>
            City
            <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            />
        </label>
        <label>
            State
            <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            />
        </label>
        <button type="submit">Create Project</button>
        </form>
        </>
    );
}

export default CreateProject;
