import './Navbar.css';
import React from 'react';
import airbnbLogo from '../../assets/logo/airbnb-logo.png';

export default function Navbar () {
    return (
        <nav className='nav'>
            <img src={airbnbLogo} alt='Airbnb Logo' className='nav--logo' />
        </nav>
    );
}
