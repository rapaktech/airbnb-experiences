import './Navbar.css';
import React from 'react';
import airbnbLogo from '../../assets/logo/airbnb-logo.png';

export default function Navbar () {
    return (
        <nav className='navbar'>
            <img src={airbnbLogo} alt='AirBnb Logo' className='navbar--logo' />
        </nav>
    );
}
