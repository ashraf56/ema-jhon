import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Authprovider';

const SIgnup = () => {
let {user,createUser}=useContext(Authcontext);

let [err,seterr]=useState('');
    let signuplog=e=>{
        e.preventDefault();
let Cpassword =e.target.Cpassword.value;
        let email=e.target.email.value;
        let password=e.target.password.value;
        seterr('')
if (password !== Cpassword) {
seterr('password  not match')
return
    
} else if (password.length < 6) {
    seterr('password  length  should 6 cahr ')
return
}

createUser(email ,password).then((userCredential) => {
  // Signed in 
  const Cuser = userCredential.user;
console.log(Cuser);
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;

});


        console.log(Cpassword,email,password);
e.target.reset();
    }

    return (
        <div className='card w-50  mx-auto mt-5 p-5'>
            <h2 className='text-center pb-3'>Register Now</h2>
            <form onSubmit={signuplog} >
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" placeholder='Entar Email' name='email' required
    id="exampleInputEmail1" />
 
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" placeholder='Password' name='password' required id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" placeholder='confirm Password' name='Cpassword' required id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">

    <label className="form-check-label" for="exampleCheck1">Already have an account? <Link to='/login'>Login</Link></label>
  </div>
 
 <div className="vstack gap-2 col-md-12 ">
  <button type="submit" className="btn btn-primary  ">Submit</button>
 <button type="submit" className="btn btn-light   border-danger ">Continue with Google</button>
</div></form>
{
    <p>{err}</p>
}
        </div>

    );
};

export default SIgnup;