import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import userBackingsReducer from './userBackings';
import projectsReducer from './allProjects';
import categoriesReducer from './categories';
import rewardsReducer from './reward';


const rootReducer = combineReducers({
  session,
  rewards: rewardsReducer,
  userBackings: userBackingsReducer,
  projects: projectsReducer,
  categories: categoriesReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
