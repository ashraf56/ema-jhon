import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { Authcontext } from '../Authprovider';

const Header = () => {
    let {user,logOut}=useContext(Authcontext);
let logout=()=>{
    logOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}
    return (
        <div className='head sticky-top'>
            <img src={logo} alt=""  />
            <div >
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/signup">Register</Link>
              
                {
                    user ? <>
                    <span className='text-light ps-2'>{user.email}</span> <button class="btn btn-outline-primary  fs-6 display-6" onClick={logout} >Sign out</button> 
                    
                    </>: <Link to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;