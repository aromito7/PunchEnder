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
import CreateReward from './components/reward/CreateReward';
import UserBackings from './components/backings/UserBackings';
import * as sessionActions from './store/session';
import LandingPage from './components/home/LandingPage';
import CategoryProjects from './components/project/CategoryProjects';
import RewardComponent from './components/reward/RewardComponent';
import Update from './components/updates/update';
import UpdateProject from './components/project/UpdateProject';
import SearchResults from './components/SearchResults';
import Discover from './components/project/DiscoverProjects';
import UserProjects from './components/project/UserProjects';
import AboutUs from './components/AboutUs';
import SelectRewards from './components/backings/SelectReward';
import EditBacking from './components/backings/EditBacking';


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
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/search">
          <SearchResults />
        </Route>
        <Route path='/about-us' exact={true}>
          <AboutUs />
        </Route>
        <Route path='/projects/categories/:category'>
          <CategoryProjects />
        </Route>
        <Route path='/projects/:id/update' exact={true}>
          <UpdateProject />
        </Route>
        <Route path='/updates' exact={true}>
          <Update />
        </Route>
        <Route path='/projects/:id/update' exact={true}>
          <UpdateProject />
        </Route>
        <Route path='/updates' exact={true}>
          <Update />
        </Route>
        <ProtectedRoute path='/projects/create' exact={true}>
          <CreateProject />
        </ProtectedRoute>
        <Route path='/projects/:id' exact={true}>
          <SingleProject />
        </Route>
        <ProtectedRoute path='/projects/:projectId/rewards/create' exact={true}>
          <CreateReward />
        </ProtectedRoute>
        <Route path='/projects' exact={true}>
          <CategoryProjects />
        </Route>
        <Route path='/discover'>
          <Discover />
        </Route>
        <ProtectedRoute path='/backings/projects/:projectId/edit' exact={true}>
          <EditBacking />
        </ProtectedRoute>
        <ProtectedRoute path='/backings/projects/:projectId/' exact={true}>
          <SelectRewards />
        </ProtectedRoute>
        <ProtectedRoute path='/rewards/create'>
          <CreateReward />
        </ProtectedRoute>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/backings' exact={true} >
          <UserBackings />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/projects' exact={true} >
          <UserProjects />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/rewards/:rewardId' exact={true} >
          <RewardComponent />
        </Route>
        <Route path='/' exact={true} >
          <LandingPage />
        </Route>
        <Route path='/'>
          <h1 className='quick-select__container'>Error: 404 - page not found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
