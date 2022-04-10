import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase-init';
import './Login.css'

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  
  const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = event => {
    setEmail(event.target.value)
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value)
  }

  if(user){
    navigate('/shop')
  }

  const handleUserSignIn = event => {
    event.preventDefault()
    signInWithEmailAndPassword(email, password)
  }


  return (
    <div className='form-container'>
      <div>
        <h3 className='form-title' >Login</h3>
        <form onSubmit={handleUserSignIn} >
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
            </div>
            <p style={{color: 'red'}}>{error?.message}</p>
            {
                loading && <p>loading...</p>
            }
            <p className='or'>
             <span><hr /></span>
             <span className='or-style'>or</span>
             <span><hr /></span>
           </p>
             <input className='form-submit' type="submit" value="Sign Up" />
      </form>
      <p>
          New to Ema-John? <Link className='form-link' to='/signup' >Create an account</Link>
        </p>
      </div>      
    </div>
  );
};

export default Login;