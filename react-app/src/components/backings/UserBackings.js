import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { thunkGetAllBackings } from '../../store/userBackings'
import thunk from 'redux-thunk'



function UserBackings() {
    const user = useSelector(state => state.session.user)
    const userBackings = useSelector(state => state.UserBackings)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkGetAllBackings(user.id))
    }, [dispatch])

    return (
        <>
            <h1>Projects You Back</h1>

        </>
    )
}


export default UserBackings;
