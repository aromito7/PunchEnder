const GET_CATEGORIES = 'categories/GET_CATEGORIES'

const actionGetAllCategories = (categories) => {
    return {
        type: GET_CATEGORIES,
        payload: categories
    }
}

export const thunkGetAllCategories = () => async (dispatch) => {
    const response = await fetch(`/api/projects/categories`, {
        method: "GET"
    })
    if (response.ok) {
        const data = response.json()
        dispatch(actionGetAllCategories)
    }
}


export default function categoriesReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_CATEGORIES:
            const categoriesObj = { ...state }
            action.payload.categories.forEach(category => categoriesObj[category.id] = category)
            newState = categoriesObj
            return newState
        default:
            return state
    }
}
