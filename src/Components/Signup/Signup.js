import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { Link, useNavigate} from 'react-router-dom'
import './Signup.css';

export default function Signup() {
  const navigate = useNavigate()
  const [username ,setUsername ] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");

  const {firebase} = useContext(FirebaseContext)
  const auth = getAuth(firebase)
  const firestore = getFirestore(firebase)

  const handleSubmit= (event)=>{
    event.preventDefault()
    console.log(firebase)
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log('success')
      updateProfile(result.user, {displayName: username})
      .then(() => {
        console.log("User profile updated")
        addDoc(collection(firestore, 'users'), {
          id:result.user.uid,
          username,
          phone
        })
        .then(() => {
        navigate('/login')
        })
      })
    })

  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="signup"/>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(event)=>setUsername(event.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(event)=>setPhone(event.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button type='submit'>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
