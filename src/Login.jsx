import React, { useState } from 'react';
import './Login.css';
import {Link ,useHistory} from "react-router-dom";
import { auth } from './firebase';

export default function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        if (name==='email'){
            return(
                setEmail(value)
            );
        }else if(name==='password'){
            return (
                setPassword(value)
            )
        }
    }

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            // logged in and redirect
            history.push('/');

        })
        .catch(e => alert(e.message))
    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            // create user logged in and redirect
            history.push('/');

        })
        .catch(e => alert(e.message))
    }

    return (
        <div className="login">
        <Link to='/'>
            <img 
                className="login__image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"
                alt="login_image_err"
            />
        </Link>
        <div className="login__container">
            <h1>Sign In</h1>
            <form>
                <h5>Email</h5>
                <input name="email" onChange={handleChange} type='email' value={email} autoComplete="off" />
                <h5>Password</h5>
                <input name="password" onChange={handleChange} type='password' value={password} />
                <button onClick={login} type='submit' className="login__signinbutton">Sign In</button>
            </form>
            <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
            <button onClick={register} className="login__registerbutton">Create a Amazon Account</button>
        </div>
            
        </div>
    )
}
