import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const CreateReward = () => {
    const {projectId} = useParams()
    const history = useHistory();
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [errors, setErrors] = useState([])
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price_threshold, setPriceThreshold] = useState(0);
    const [includes, setIncludes] = useState("");
    const [description, setDescription] = useState("");
    const [shipping_date, setShippingDate] = useState(Date.now());
    const [ships_to, setShipsTo] = useState("United States");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        console.log("Hello, create reward!")
        if(errors.length > 1) return
        const res = await fetch(`/api/rewards/projects/${projectId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            quantity,
            price_threshold,
            includes,
            description,
            shipping_date,
            ships_to,
        }),
        });
        const data = await res.json();
        window.print("DATA ---------------> ", data)

        history.push(`/projects/${projectId}/rewards/`)

    };

    useEffect(() => {
        const errors = []
        if(name.length < 2) errors.push("Name must be at least 2 characters")
        else if(name.length > 50) errors.push("Name can be at most 50 characters")
        if(quantity < 1) errors.push("Quantity must be a positive number")
        if(price_threshold < 1) errors.push("Donation price must be a positive number")
        if(!includes) errors.push("Must include something in reward")
        if(description.length < 50) errors.push("Description must be at least 50 characters")
        else if(description.length > 50000) errors.push("Description must be less than 50,000 characters")
        if(new Date(shipping_date) - new Date() < 0) errors.push("Estimated shipping date must be in the future")
        setErrors(errors)
        //console.log(new Date(shipping_date), new Date(), new Date(shipping_date) - new Date())
    },[name, quantity, price_threshold, price_threshold, includes, description, shipping_date])

    return (
        <div id="create-project-reward-main-container">
            <div className="create-project-form-header">
            </div>
            <div className="create-project-form-header">
                <form onSubmit={handleSubmit} noValidate>
                    <div className="float-container">
                    <div className="float-child">
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
                            Quantity
                            <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            required
                            />
                        </label>
                        <label>
                            Donation Price
                            <input
                            type="number"
                            value={price_threshold}
                            onChange={(e) => setPriceThreshold(e.target.value)}
                            required
                            />
                        </label>
                    </div>
                    <label>
                        What this includes
                        <input
                        type="text"
                        value={includes}
                        onChange={(e) => setIncludes(e.target.value)}
                        required
                        />
                    </label>
                    <label>
                        Description
                        <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        />
                    </label>
                    <label>
                        Estimated shipping date
                        <input
                        type="date"
                        value={shipping_date}
                        onChange={(e) => setShippingDate(e.target.value)}
                        required
                        />
                    </label>
                    <label>
                        Ships to
                        <select
                        value={ships_to}
                        onChange={(e) => setShipsTo(e.target.value)}
                        required
                        >
                            <option>United States</option>
                            <option>Anywhere in the world</option>
                        </select>
                    </label>
                    {hasSubmitted && errors.length > 0 &&
                        <ul>
                            {errors.map(error => {
                                return(
                                    <li>{error}</li>
                                    )
                                })}
                        </ul>
                    }
                    </div>
                <button type="submit">Create Reward</button>
                </form>
            </div>
        </div>
    );
}

export default CreateReward;
