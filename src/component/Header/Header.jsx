import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='head sticky-top'>
            <img src={logo} alt=""  />
            <div >
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/oreder-review">Order Review</Link>
                <Link to="/manage">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;