const GET_BACKINGS = 'backings/GET_BACKINGS'
const ADD_BACKING = 'backings/ADD_BACKING'
const UPDATE_BACKING = 'backings/UPDATE_BACKING'
const DELETE_BACKING = 'backings/DELETE_BACKING'

const actionGetAllBackings = (backings) => {
    return {
        type: GET_BACKINGS,
        payload: backings
    }
}

const actionAddBacking = (backing) => {
    return {
        type: ADD_BACKING,
        payload: backing
    }
}

const actionUpdateBacking = (backing) => {
    return {
        type: UPDATE_BACKING,
        payload: backing
    }
}

const actionDeleteBacking = (id) => {
    return {
        type: DELETE_BACKING,
        payload: id
    }
}

export const thunkGetAllBackings = (userId) => async (dispatch) => {
    const response = await fetch(`/api/backings/user/${userId}`, {
        method: 'GET'
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(actionGetAllBackings(data))
        return response
    }
}

export const thunkAddBacking = (projectId, rewardId) => async (dispatch) => {
    const response = await fetch(`/api/backings/project/${projectId}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            rewardId
        })
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(actionAddBacking(data))
    }
    else {
        return { "Error": "Could not back project" }
    }
}

export const thunkUpdateBacking = (projectId, newRewardId, prevRewardId) => async (dispatch) => {
    const response = await fetch(`/api/backings/project/${projectId}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            newRewardId,
            prevRewardId,
        })
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(actionUpdateBacking(data))
        return data
    }
    else {
        return { "Error": "Could not update backing" }
    }
}

export const thunkDeleteBacking = (projectId, rewardId) => async (dispatch) => {
    console.log(rewardId)
    const response = await fetch(`/api/backings/project/${projectId}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            rewardId
        })
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(actionDeleteBacking(projectId))
    }
    else {
        return { "Error": "Could not delete backing" }
    }
}

export default function userBackingsReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_BACKINGS:
            const backingsObj = { ...state }
            action.payload.backings.forEach(backing => backingsObj[backing.project_id] = backing)
            newState = backingsObj
            return newState
        case ADD_BACKING:
            newState = { ...state }
            newState[action.payload.project_id] = action.payload
            return newState
        case UPDATE_BACKING:
            newState = { ...state }
            // delete newState[action.payload.project_id]
            newState[action.payload.project_id] = action.payload
            return newState
        case DELETE_BACKING:
            newState = { ...state }
            delete newState[action.payload]
            return newState
        default:
            return state
    }
}
