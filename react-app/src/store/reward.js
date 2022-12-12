// constants
const SET_REWARD = 'reward/SET_REWARD';
const REMOVE_REWARD = 'session/REMOVE_REWARD';

const setReward = (reward) => ({
  type: SET_REWARD,
  payload: reward
});

const removeReward = () => ({
  type: REMOVE_REWARD,
})

const initialState = { reward: null };


export const getReward = rewardId => async (dispatch) => {
    const response = await fetch(`/api/rewards/${rewardId}`)

    if (response.ok) {
        const data = await response.json();
        dispatch(setReward(data))
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

export const createReward = (name, quantity, price_threshold) => async (dispatch) => {
  const response = await fetch('/api/projects/:projectId/rewards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      quantity,
      price_threshold,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setReward(data))
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

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_REWARD:
      return { reward: action.payload }
    case REMOVE_REWARD:
      return { reward: null }
    default:
      return state;
  }
}
