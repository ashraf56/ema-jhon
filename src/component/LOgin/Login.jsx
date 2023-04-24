import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Authprovider';

const Login = () => {

let {user, LogIN}=useContext(Authcontext);
let [err,seterr]=useState('');
let navigate=useNavigate();
let location=useLocation();
 let from=location.state?.from?.pathname || '/';
let signinlog=e=>{
  e.preventDefault();
  let email=e.target.email.value;
 let password=e.target.password.value;

LogIN(email ,password).then((userCredential) => {
  
  const suser = userCredential.user;
  console.log(suser);
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  seterr(error.message)
});
navigate(from , {replace:true});

}


    return (
        <div>
             <div className='card w-50  mx-auto mt-5 p-5 rounded-4'>
            <h2 className='text-center pb-3'>Log in Now</h2>
            <form   onSubmit={signinlog}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" placeholder='Entar Email' name='email' required
    id="exampleInputEmail1" />
 
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" placeholder='Password' name='password' required id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">

    <label className="form-check-label " for="exampleCheck1">New to Ema-john?  <Link to='/signup'>Create New Account</Link></label>
  </div>
 

<div className="vstack gap-2 col-md-12 ">
  <button type="submit" className="btn btn-primary  ">Submit</button>
 <button type="submit" className="btn btn-light ">Continue with Google</button>
</div>
 </form>

        </div>
        </div>
    );
};

export default Login;