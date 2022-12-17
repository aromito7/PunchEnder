const GET_CATAGORIES = 'catagories/GET_CATAGORIES'

const actionGetAllCatagories = (catagories) => {
    return {
        type: GET_CATAGORIES,
        payload: catagories
    }
}

export const thunkGetAllCatagories =
