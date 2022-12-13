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
        dispatch(actionGetAllBackings(data))
        return response
    }
}

export default function userBackingsReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_BACKINGS:
            const backingsObj = { ...state }
            action.payload.backings.forEach(backing => backingsObj[backing.project_name] = backing)
            newState = Object.assign({ ...state }, { ...backingsObj })
            return newState
        default:
            return state
    }
}
