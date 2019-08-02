import React from 'react';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="nav">
                <li className="nav__item">
                    <a href="#section-1" className='nav__link'>
                        <svg className='nav__icon'>
                            <use xlinkHref='img/sprite.svg#icon-star'></use>
                        </svg>
                        <span>Discounts</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#section-2" className='nav__link'>
                        <svg className='nav__icon'>
                            <use xlinkHref='img/sprite.svg#icon-home'></use>
                        </svg>
                        <span>Homes</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#section-3" className='nav__link'>
                        <svg className='nav__icon'>
                            <use xlinkHref='img/sprite.svg#icon-key'></use>
                        </svg>
                        <span>Taxes</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#section-4" className='nav__link'>
                        <svg className='nav__icon'>
                            <use xlinkHref='img/sprite.svg#icon-key'></use>
                        </svg>
                        <span>Benefits</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#section-5" className='nav__link'>
                        <svg className='nav__icon'>
                            <use xlinkHref='img/sprite.svg#icon-map'></use>
                        </svg>
                        <span>Debt free</span>
                    </a>
                </li>
            </ul>

            <div className="legal">
                &copy; 2019  All rights reserved.
            </div>
        </nav>
    )
};

export default Navigation;
