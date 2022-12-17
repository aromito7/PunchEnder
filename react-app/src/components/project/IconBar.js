import React from "react";
import { NavLink } from "react-router-dom";

const IconBar = () => {
    return (
        <div className="quick-select">
            <div className="quick-select__container">
                <div className="quick-select__content-wrapper">
                    <nav className="quick-select__navigation">
                        <ul className="quick-select__navigation-list">
                            <div className="quick-select__navigation-link2 item">
                                <img
                                    src="https://www.pngrepo.com/png/18922/180/writing.png"
                                    alt="self logo123"
                                    className='profile-icon2'
                                    style={{ height: '39px', width: '39px' , padding: '0px 0px 0px 0px'}}
                                />
                                <span class="caption">Basics</span>
                            </div>
                            <div className="quick-select__navigation-link2 item">
                                <img
                                    src="https://www.pngrepo.com/png/349652/180/chart.png"
                                    alt="self logo123"
                                    className='profile-icon2'
                                    style={{ height: '39px', width: '39px' , padding: '0px 0px 0px 0px'}}
                                />
                                <span class="caption">Funding</span>
                            </div>
                            <NavLink to='/rewards/create' className="quick-select__navigation-link2 item">
                                <img
                                    src="https://www.pngrepo.com/png/46433/180/present.png"
                                    alt="self logo123"
                                    className='profile-icon2'
                                    style={{ height: '39px', width: '39px' , padding: '0px 0px 0px 0px'}}
                                />
                                <span class="caption">Rewards</span>
                            </NavLink>
                            <div className="quick-select__navigation-link2 item">
                                <img
                                    src="https://www.pngrepo.com/png/14436/180/book.png"
                                    alt="self logo123"
                                    className='profile-icon2'
                                    style={{ height: '39px', width: '39px' , padding: '0px 0px 0px 0px'}}
                                />
                                <span class="caption">Story</span>
                            </div>
                            <div className="quick-select__navigation-link2 item">
                                <img
                                    src="https://www.pngrepo.com/png/335242/180/people.png"
                                    alt="self logo123"
                                    className='profile-icon2'
                                    style={{ height: '39px', width: '39px' , padding: '0px 0px 0px 0px'}}
                                />
                                <span class="caption">People</span>
                            </div>
                            <div className="quick-select__navigation-link2 item">
                                <img
                                    src="https://www.pngrepo.com/png/6268/180/money.png"
                                    alt="self logo123"
                                    className='profile-icon2'
                                    style={{ height: '39px', width: '39px' , padding: '0px 0px 0px 0px'}}
                                />
                                <span class="caption">Payment</span>
                            </div>
                            <div className="quick-select__navigation-link2 item">
                                <img
                                    src="https://www.pngrepo.com/png/312493/180/loudspeaker.png"
                                    alt="self logo123"
                                    className='profile-icon2'
                                    style={{ height: '39px', width: '39px' , padding: '0px 0px 0px 0px'}}
                                />
                                <span class="caption">Promotion</span>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
    }

export default IconBar;
