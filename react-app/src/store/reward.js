// constants
const GET_REWARDS = 'reward/GET_REWARDS'
const SET_REWARD = 'reward/SET_REWARD';
const CLEAR_REWARDS = 'reward/CLEAR_REWARDS'


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

export const actionClearRewards = () => {
  return {
    type: CLEAR_REWARDS
  }
}

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

export const actionCreateReward = (reward) => async (dispatch) => {
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


export default function rewardsReducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case GET_REWARDS:
      const rewardsObj = { ...state }
      action.payload.rewards.forEach(reward => rewardsObj[reward.id] = reward)
      newState = rewardsObj
      return newState
    case SET_REWARD:
      newState = { ...state }
      newState[action.payload.id] = action.payload
      return newState
    case CLEAR_REWARDS:
      newState = {}
      return newState
    default:
      return state;
  }
}
