import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import './CreateReward.css';
import reward from '../../images/reward.png';

const CreateReward = () => {
    const {projectId} = useParams()
    const history = useHistory();
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [errors, setErrors] = useState([])
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [quantityError, setQuantityError] = useState("")
    const [priceThreshold, setPriceThreshold] = useState(0);
    const [priceThresholdError, setPriceThresholdError] = useState("");
    const [includes, setIncludes] = useState("");
    const [includesError, setIncludesError] = useState("");
    const [description, setDescription] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [shippingDate, setShippingDate] = useState(Date.now());
    const [shippingDateError, setShippingDateError] = useState("");
    const [shipsTo, setShipsTo] = useState("United States");
    const [shipsToError, setShipsToError] = useState("");

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
            price_threshold: priceThreshold,
            includes,
            description,
            shipping_date: shippingDate,
            ships_to: shipsTo,
        }),
        });
        const data = await res.json();
        console.log("DATA ---------------> ", data)

        history.push(`/projects/${projectId}/`)

    };

    useEffect(() => {
        // const errors = []
        if(name.length < 2) setNameError("Name must be at least 2 characters")
        else if(name.length > 50) setNameError("Name can be at most 50 characters")
        else setNameError("")

        if(quantity < 1) setQuantityError("Quantity must be a positive number")
        else setQuantityError("")

        if(priceThreshold < 1) setPriceThresholdError("Donation price must be a positive number")
        else setPriceThresholdError("")

        if(!includes) setIncludesError("Must include something in reward")
        else setIncludesError("")

        if(description.length < 50) setDescriptionError("Description must be at least 50 characters")
        else if(description.length > 50000) setDescriptionError("Description must be less than 50,000 characters")
        else setDescriptionError("")

        if(new Date(shippingDate) - new Date() < 0) setShippingDateError("Estimated shipping date must be in the future")
        else setShippingDateError("")
        // setErrors(errors)
        //console.log(new Date(shippingDate), new Date(), new Date(shippingDate) - new Date())
    },[name, quantity, priceThreshold, includes, description, shippingDate])

    return (
        <div>
            <div className='creRewTitleWrap'>
                <h1 id='creRewTitle'>
                    Add your rewards
                </h1>
                <h2 id='creRewDesc'>
                Offer simple, meaningful ways to bring backers closer to your project and celebrate it coming to life.
                </h2>
            </div>
            <div className='creRewFormUpper'>
                <div id='rewardTiers'>
                    <img id='rewardIcon' src={reward} />
                    <span id='actualRewardTiers'>
                        Reward Tiers
                    </span>
                </div>
            </div>
            <div className='creRewUppDesc'>
                Most creators offer 3-10 reward tiers, which can be physical items or special experiences. Make sure to set reasonable backer expectations.
            </div>
            <form className='createRewardWrapper' onSubmit={handleSubmit} noValidate>
                <label className='creRewLabels'>
                    Title
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                    {hasSubmitted && nameError &&
                        <p className="error-message">
                            {nameError}
                        </p>
                    }
                </label>
                <label className='creRewLabels'>
                    Quantity
                    <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                    />
                    {hasSubmitted && quantityError &&
                        <p className="error-message">
                            {quantityError}
                        </p>
                    }
                </label>
                <label className='creRewLabels'>
                    Donation Price
                    <input
                    type="number"
                    value={priceThreshold}
                    onChange={(e) => setPriceThreshold(e.target.value)}
                    required
                    />
                    {hasSubmitted && priceThresholdError &&
                        <p className="error-message">
                            {priceThresholdError}
                        </p>
                    }
                </label>
                <label className='creRewLabels'>
                    What this includes
                    <input
                    type="text"
                    value={includes}
                    onChange={(e) => setIncludes(e.target.value)}
                    required
                    />
                    {hasSubmitted && includesError &&
                        <p className="error-message">
                            {includesError}
                        </p>
                    }
                </label>
                <label className='creRewLabels'>
                    Description
                    <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    />
                    {hasSubmitted && descriptionError &&
                        <p className="error-message">
                            {descriptionError}
                        </p>
                    }
                </label>
                <label className='creRewLabels'>
                    Estimated shipping date
                    <input className='creRewTextArea'
                    type="date"
                    value={shippingDate}
                    onChange={(e) => setShippingDate(e.target.value)}
                    required
                    />
                    {hasSubmitted && shippingDateError &&
                        <p className="error-message">
                            {shippingDateError}
                        </p>
                    }
                </label>
                <label className='creRewLabels'>
                    Ships to
                    <select
                    value={shipsTo}
                    onChange={(e) => setShipsTo(e.target.value)}
                    required
                    >
                        <option>United States</option>
                        <option>Anywhere in the world</option>
                    </select>
                    {hasSubmitted && shipsToError &&
                        <p className="error-message">
                            {shipsToError}
                        </p>
                    }
                </label>
                {/* {hasSubmitted && errors.length > 0 &&
                    <ul>
                        {errors.map((error, i) => {
                            return(
                                <li key={i} className="error-message">{error}</li>
                            )
                        })}
                    </ul>
                } */}
            <button id='creRewSubmitButton' type="submit" formNoValidate="formnovalidate">Save Reward</button>
            </form>

        </div>
    );
}

export default CreateReward;
