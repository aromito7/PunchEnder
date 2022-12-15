// constants
const GET_REWARDS = 'reward/GET_REWARDS'
const SET_REWARD = 'reward/SET_REWARD';


const actionGetRewards = (rewards) => {
  return {
    type: GET_REWARDS,
    payload: rewards
  }
}

const actionSetReward = (reward) => {
  return {
    type: SET_REWARD,
    payload: reward
  }
};

export const thunkGetRewards = (projectId) => async (dispatch) => {
  const response = await fetch(`/api/rewards/projects/${projectId}`, {
    method: 'GET'
  })
  if (response.ok) {
    const data = await response.json();
    dispatch(actionGetRewards(data))
    return response;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const createReward = (reward) => async (dispatch) => {
  const {
    name,
    quantity,
    price_threshold,
    includes, description,
    shipping_date,
    ships_to,
    projectId
  } = reward

  const response = await fetch(`/api/rewards/projects/${projectId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      quantity,
      price_threshold,
      includes,
      description,
      shipping_date,
      ships_to
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(actionSetReward(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}


export default function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case GET_REWARDS:
      const backingsObj = { ...state }
      return { reward: action.payload }
    default:
      return state;
  }
}
