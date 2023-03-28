import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='head'>
            <img src={logo} alt="" srcset="" />
            <div >
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
                <a href="">Login</a>
            </div>
        </div>
    );
};

export default Header;