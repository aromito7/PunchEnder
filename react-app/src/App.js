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
import ProjectRewards from './components/reward/ProjectRewards';
import CreateReward from './components/reward/CreateReward';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
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
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/projects/:projectId/rewards' exact={true} >
          <ProjectRewards/>
        </Route>
        <Route path='/projects/:projectId/rewards/create' exact={true}>
          <CreateReward/>
        </Route>
        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
        </Route>
        <Route path='/'>
          <h1>Error: 404 - page not found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
