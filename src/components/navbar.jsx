import React from 'react';
import Logo from '../assets/airbnb-logo.svg'

const nav = () => {
    return (
        <nav className='nav--container'>
            <img src={Logo} alt="AirBnb Logo" />
        </nav>
    )
}

export default nav;