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

const actionAddProject = (project) => {
    return {
        type: ADD_PROJECT,
        payload: project
    }
}

const actionDeleteProject = (id) => {
    return {
        type: DELETE_PROJECT,
        payload: id
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
        case ADD_PROJECT:
            newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState
        default:
            return state
    }
}
