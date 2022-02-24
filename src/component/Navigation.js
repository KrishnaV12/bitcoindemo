import React, { useEffect } from "react";
import { Link, Route, Routes, withRouter } from "react-router-dom";
import { userAction } from "../actions/userAction";

import { useDispatch } from "react-redux";

import Home from "./HOme/Home";
import SignUp from "./Signup/SignUp";
import Login from "./Login/Login";



const Navigation = (props) => {
    const {handleLoginStatus} = props

    const LocalVar = localStorage.getItem('id') || false

    const dispatch = useDispatch()

    

    const LinkStyle = {
        color: 'white',
        margin: '12px',
        textDecoration: 'none'
    }

    useEffect(() => {
        if(localStorage.getItem('id')){
            dispatch(userAction())
        }
    },[dispatch])

    return(
        <div>
        <div>
            {
                LocalVar ? <>
                    <Link style={LinkStyle} to='/home'>Home</Link>
                    {/* <Link style={LinkStyle} to='/'>Register</Link>
                    <Link style={LinkStyle} to='/login'>Login</Link> */}
                    <Link style={LinkStyle} onClick={() => {
                        localStorage.removeItem('id')
                        props.history.push('/')
                        handleLoginStatus()
                    }} to="/#">Logout</Link>
                </>
                :
                <>
                    {/* <Link style={LinkStyle} to="/home">Home</Link> */}
                    <Link style={LinkStyle} to="/">Register</Link>
                    <Link style={LinkStyle} to="/login">Login</Link>
                </>
            }
            </div>
            <div>
                {
                    LocalVar ? 
                    <Routes>
                        <Route exact path='/home' element={<Home />}></Route>
                    </Routes>
                    :
                    <Routes>
                        <Route path="/" element={<SignUp />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                    </Routes>
                }
            </div>
        </div>
    )
    
}

export default withRouter(Navigation)