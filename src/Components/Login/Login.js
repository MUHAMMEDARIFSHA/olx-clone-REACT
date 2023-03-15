import React, { useState,useContext } from 'react';
import {FirebaseContext} from '../../store/Context'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const navigate = useNavigate()
  const [email,setEmail] = useState ("")
  const [password,setPassword] = useState("")
  const {firebase} = useContext(FirebaseContext)
  const auth = getAuth(firebase)
  const handleLogin = (event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(auth,email, password)
      .then(() => {
        console.log("navigate to home")
        navigate('/')
      })
      .catch((error) => {
        console.log("error on login");
         console.log(error)
        alert(error.message)
      })


  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(event)=>{setPassword(event.target.value)}}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button type='submit'>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
