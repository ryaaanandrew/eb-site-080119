import React from 'react';

const NavigationBar = () => {
    return (
        <div className='header'>
            <div className="header__logo"><span>Logo</span></div>

            <nav className="header__right">
                <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
                <a className="header__icon a2a_dd" href="https://www.addtoany.com/share"></a>
                <a className="header__icon a2a_button_facebook"></a>
                <a className="header__icon a2a_button_twitter"></a>
                <a className="header__icon a2a_button_whatsapp"></a>
                <a className="header__icon a2a_button_email"></a>
                </div> 
            </nav>
        </div>
    );
};  

export default NavigationBar;
