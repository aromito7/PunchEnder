import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import SingleProject from './components/project/SingleProject';
import CreateProject from './components/project/CreateProject';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Reward from './components/Reward';
import UserBackings from './components/backings/UserBackings';
import { authenticate } from './store/session';
import * as sessionActions from './store/session';
import LandingPage from './components/home/LandingPage';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(sessionActions.authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <div className=''>
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path='/login' exact={true}>
              <LoginForm />
            </Route>
            <Route path='/sign-up' exact={true}>
              <SignUpForm />
            </Route>
            <Route path='/projects/create' exact={true}>
              <CreateProject />
            </Route>
            <Route path='/projects/:id' exact={true}>
              <SingleProject />
            </Route>
            <ProtectedRoute path='/users' exact={true} >
              <UsersList />
            </ProtectedRoute>
            <ProtectedRoute path='/users/:userId/backings' exact={true} >
              <UserBackings />
            </ProtectedRoute>
            <ProtectedRoute path='/users/:userId' exact={true} >
              <User />
            </ProtectedRoute>
            <Route path='/projects/:projectId/rewards' exact={true} >
              <Reward />
            </Route>
            <Route path='/' exact={true} >
              <LandingPage />
            </Route>
            <Route path='/'>
              <h1>Error: 404 - page not found</h1>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
