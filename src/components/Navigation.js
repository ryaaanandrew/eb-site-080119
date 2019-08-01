import React from 'react';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="nav">
                <li className="nav__item">
                    <a href="#section-1" className='nav__link'>
                        <svg className='nav__icon'>
                            <use xlinkHref='img/sprite.svg#icon-home'></use>
                        </svg>
                        <span>Link 1</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#section-2" className='nav__link'>
                        <svg className='nav__icon'>
                            <use xlinkHref='img/sprite.svg#icon-aircraft-take-off'></use>
                        </svg>
                        <span>Link 2</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#section-3" className='nav__link'>
                        <svg className='nav__icon'>
                            <use xlinkHref='img/sprite.svg#icon-key'></use>
                        </svg>
                        <span>Link 3</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#section-4" className='nav__link'>
                        <svg className='nav__icon'>
                            <use xlinkHref='img/sprite.svg#icon-map'></use>
                        </svg>
                        <span>Link 4</span>
                    </a>
                </li>
            </ul>

            <div className="legal">
                &copy; 2017  All rights reserved.
            </div>
        </nav>
    )
};

export default Navigation;
