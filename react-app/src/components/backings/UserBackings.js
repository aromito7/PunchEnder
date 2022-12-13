import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { thunkDeleteBacking, thunkGetAllBackings } from '../../store/userBackings'
import thunk from 'redux-thunk'



function UserBackings() {
    const user = useSelector(state => state.session.user)
    const userBackings = useSelector(state => state.userBackings)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkGetAllBackings(user.id))
    }, [dispatch, user.id])
    // TODO:
    // const deleteBacking = (projectId, rewardId) => {
    //     dispatch(thunkDeleteBacking(projectId, rewardId))
    // }

    // Might have to change from displaying data as a table to either a list or divs
    return (
        <>
            <h1>Projects You Back</h1>
            <br></br>
            <span style={{ fontSize: "larger", fontWeight: "bold" }}>Project</span>
            <span style={{ paddingLeft: 195, fontSize: "larger", fontWeight: "bold" }}>Pledge Amount</span>
            {Object.values(userBackings).map(backing => (
                <div key={backing.id}>
                    <span key={backing.project_name}>{backing.project_name}</span>
                    <span style={{ paddingLeft: 70 }} key={backing.backing_value}>{backing.backing_value}</span>
                    <span style={{ paddingLeft: 110 }}><button>Edit Pledge</button></span>
                    <span style={{ paddingLeft: 5 }}><button>Delete Pledge</button></span>
                </div>
            ))}
        </>
    )
}


export default UserBackings;
