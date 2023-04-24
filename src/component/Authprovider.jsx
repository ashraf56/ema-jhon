import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init';
import { useLocation } from 'react-router-dom';


export let Authcontext=createContext(null);
const auth = getAuth(app); 
const Authprovider = ({children}) => {



let [user,setUser]=useState(null);
let [loader,setLoader]=useState(true);

let createUser=(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password);
 }

 let LogIN=(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
}

let logOut=()=>{
   return signOut(auth)
}


useEffect(()=>{
    let unsubscribe=onAuthStateChanged(auth,cuser=>{
        console.log(cuser);
        setUser(cuser);
     setLoader(false);
        
    })
    return()=>{
        unsubscribe();
    }
    },[])


let AuthData={
    user,
    createUser,
    LogIN, logOut,
    loader
}
    return (
        <Authcontext.Provider value={AuthData}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;