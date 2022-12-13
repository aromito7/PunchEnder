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

const actionDeleteBacking = (backing) => {
    return {
        type: DELETE_BACKING,
        payload: backing
    }
}

export const thunkGetAllBackings = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/backings`, {
        method: 'GET'
    })
    if (response.ok) {
        const data = await response.json()
        console.log(data)
        dispatch(actionGetAllBackings(data))
        return response
    }
}

export const thunkAddBacking = (projectId, rewardId) => async (dispatch) => {
    const response = await fetch(`/api/projects/${projectId}/rewards/${rewardId}`, {
        method: 'POST'
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(actionAddBacking(data))
    }
}

export const thunkUpdateBacking = (projectId, rewardId) => async (dispatch) => {
    const response = await fetch(`/api/projects/${projectId}/rewards/${rewardId}`, {
        method: 'PUT'
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(actionUpdateBacking(data))
    }
}

export const thunkDeleteBacking = (projectId, rewardId) => async (dispatch) => {
    const response = await fetch(`/api/projects/${projectId}/rewards/${rewardId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(actionDeleteBacking(data))
    }
}

export default function userBackingsReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_BACKINGS:
            const backingsObj = { ...state }
            console.log(action.payload)
            action.payload.backings.forEach(backing => backingsObj[backing.id] = backing)
            newState = backingsObj
            console.log(newState)
            return newState
        case ADD_BACKING:
            newState = { ...state }
            newState[action.payload.project_name] = action.payload
            return newState
        case UPDATE_BACKING:
            newState = { ...state }
            newState[action.payload.project_name] = action.payload
            return newState
        case DELETE_BACKING:
            newState = { ...state }
            delete newState[action.payload.project_name]
            return newState
        default:
            return state
    }
}
