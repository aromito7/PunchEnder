const GET_PROJECTS = 'projects/GET_PROJECTS'
const ADD_PROJECT = 'projects/ADD_PROJECTS'
const DELETE_PROJECT = 'projects/DELETE_PROJECT'
const GET_USER_PROJECTS = 'projects/GET_USER_PROJECTS'

const actionGetAllProjects = (projects) => {
    return {
        type: GET_PROJECTS,
        payload: projects
    }
}

export const thunkGetAllProjects = () => async (dispatch) => {
    const response = await fetch(`/api/projects`, {
        method: 'GET'
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(actionGetAllProjects(data))
        return response
    }
}

export default function projectsReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_PROJECTS:
            const projectsObj = { ...state }
            console.log(action.payload)
            action.payload.projects.forEach(project => projectsObj[project.id] = project)
            newState = projectsObj
            return newState
        default:
            return state
    }
}
