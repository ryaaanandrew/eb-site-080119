import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container">
                <div className="footer__left">
                    <img  className='footer__img' src="img/profile-photo.jpg" alt="profile"/>
                </div>
                <div className="footer__right">
                    <p className='footer__text'>I write posts about all kinds of financial issues and struggles that I have encountered in my decade long journey as a financial specialist. My mission is to provide practical solutions that can work for almost every kind of person seeking financial help.</p>
                    <img src="img/signature.png" alt="signature"/>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
