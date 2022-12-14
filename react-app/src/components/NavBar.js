
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
// import LogoutButton from './auth/LogoutButton';
import ProfileButton from './ProfileButton';
import SearchBar from './SearchBar';


const NavBar = () => {
  const currentUser = useSelector(state => state.session.user);
  const [showSearch, setShowSearch] = useState(false)

  const showSearchBar = () => {
    setShowSearch(true);
  };

  const closeSearchBar = () => {
    setShowSearch(false);
  };

  if (currentUser) {
    return (
      <nav className='navbar'>
        <div className='navbar__wrapper'>
          <section className='navbar__left-links-container'>
            <div className='navbar__left-links-list'>
              <div className='navbar__navlink-home'>
                <NavLink to='/discover' exact={true} className='navlink-helper' activeClassName='active'>
                  Discover
                </NavLink>
              </div>
              <div className='navbar__navlink-start'>
                <NavLink to='/projects/create' exact={true} activeClassName='active'>
                  Start a project
                </NavLink>
              </div>
            </div>
          </section>
          <section className="navbar__sitename-container">
            <a className="navbar__sitename-text" href="/">
              <div className="navbar__sitename-text">PUNCHENDER</div>
            </a>
          </section>
          <section className="navbar__right-links-container">
            <div className="navbar__right-links-list">
              <div className="navbar__navlink-search-container">
                <button className="search-button" onClick={showSearchBar}>
                  Search
                </button>
                {showSearch && (
                  <>
                    <SearchBar />
                    <button onClick={closeSearchBar} className='close-search-button'>x</button>
                  </>
                )}
              </div>
              <div className='navbar__navlink-profile'>
                <ProfileButton />
              </div>
            </div>
          </section>
        </div>
      </nav>
    );
  }
  else {
    return (
      <nav className='navbar'>
        <div className='navbar__wrapper'>
          <section className='navbar__left-links-container'>
            <div className='navbar__left-links-list'>
              <div className='navbar__navlink-home'>
                <NavLink to='/discover' exact={true} activeClassName='active'>
                  Discover
                </NavLink>
              </div>
              <div className='navbar__navlink-start'>
                <NavLink to='/projects/create' exact={true} activeClassName='active'>
                  Start a project
                </NavLink>
              </div>
            </div>
          </section>
          <section className="navbar__sitename-container">
            <a className="navbar__sitename-text" href="/">
              <div className="navbar__sitename-text">PUNCHENDER</div>
            </a>
          </section>
          <section className="navbar__right-links-container">
            <div className="navbar__right-links-list">
              <div className="navbar__navlink-search-container">
                <div className='navbar__navlink-search'>
                  Search
                </div>
              </div>
              <div>
                <NavLink to='/login' exact={true} className='navbar__navlink-profile' activeClassName='active'>
                  Log in
                </NavLink>
              </div>
            </div>
          </section>
        </div>
      </nav>
    );
  }
};

export default NavBar;
