import React, { useContext } from 'react';
import { Authcontext } from './Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateraoute = ({children}) => {
    let {user ,loader}=useContext(Authcontext);
    let location=useLocation();
    if (loader) {
      return  <div className="spinner-border text-info" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
    }
else if (user) {
    return children;
}
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default Privateraoute;