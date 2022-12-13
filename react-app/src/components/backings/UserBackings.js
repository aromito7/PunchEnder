import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { thunkGetAllBackings } from '../../store/userBackings'
import thunk from 'redux-thunk'



function UserBackings() {
    const user = useSelector(state => state.session.user)
    const userBackings = useSelector(state => state.userBackings)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkGetAllBackings(user.id))
    }, [dispatch])

    return (
        <>
            <h1>Projects You Back</h1>
            <br></br>
            <table>
                <tr>
                    <th style={{ textAlign: 'left' }}>Project</th>
                    <th style={{ textAlign: 'left', paddingLeft: 50 }}>Pledge Amount</th>
                    {/* <th>Reward</th>
                    <th>Status</th> */}
                </tr>
                {Object.values(userBackings).map(backing => (
                    <tr>
                        <td>{backing.project_name}</td>
                        <td style={{ paddingLeft: 50 }}>${backing.backing_value}</td>
                    </tr>
                ))}
            </table>

        </>
    )
}


export default UserBackings;
