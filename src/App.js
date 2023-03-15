import { React, useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from "./Pages/Login"
import { AuthContext, FirebaseContext } from './store/Context';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Create from './Pages/Create';
import View from './Pages/ViewPost'
import Post from './store/PostContext';




function App() {
  const { user, setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  const auth = getAuth(firebase)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create' element={<Create />} />
            <Route path='/view' element={<View />} />
          </Routes>
        </Router>
      </Post>





    </div>

  );
}

export default App;
