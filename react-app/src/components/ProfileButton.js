import React, { useState, useEffect } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';

const ProfileButton = () => {
    const [showMenu, setShowMenu] = useState(false);
    const user = useSelector(state => state.session.user);
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
      };

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
        };
        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

        return (
            <div className='logged-in-nav'>
            <button onClick={openMenu} className="button">
                    <img
						src="https://www.pngrepo.com/png/34340/180/avatar.png"
						alt="self logo123"
                        className='profile-icon cursor-pointer'
						style={{ height: '39px', width: '39px' , padding: '0px 0px 0px 0px', marginRight: '14rem'}}
					/>
				{showMenu && (
					<div className="drop-down">
						<div className="logged-in test-nav">
							<span>Welcome,  {' '}{' '}{' '} </span> {' '} {user.firstname}
						</div>
                        <hr width="100%"/>
                        <div>
                            <Link to="/users/1/backings">
                                <span className="logged-in test-nav">My Backings</span>
                            </Link>
                        </div>
                        <hr width="100%"/>
						<div className="log-out">
                            <LogoutButton />
						</div>
					</div>
				)}
			</button>
            </div>
        );
    }

export default ProfileButton;
