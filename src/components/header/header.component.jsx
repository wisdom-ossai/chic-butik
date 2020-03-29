import React from 'react';
import { Link } from 'react-router-dom';
import './header.component.scss';

const HeaderComponent = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <img src="../../logo.png" alt="Logo" height="100px" />
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default HeaderComponent