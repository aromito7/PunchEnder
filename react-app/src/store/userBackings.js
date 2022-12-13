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
