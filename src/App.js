import React, { useState } from 'react';
// import Navigation from './component/Navigation';
import { Link, Routes, Route, Router } from "react-router-dom"
import SignUp from './component/Signup/SignUp';
import './App.css'
import Login from './component/Login/Login';
import Home from './component/HOme/Home';
import About from './component/HOme/About';
import Contact from './component/HOme/Contact';
// import Register from '../src/component/Signup/index'


// import './App.css';

function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // const handleLoginStatus=() => {
  //   setIsLoggedIn(!isLoggedIn)
  // }

  return (
    <div>
      {/* <Navigation isLoggedIn={isLoggedIn} handleLoginStatus={handleLoginStatus}/> */}
      <Routes>
        <Route exact path="/" element={<SignUp/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/home" element={<Home authorized={true}/>}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
