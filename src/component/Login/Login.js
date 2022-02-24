import React, { useState } from "react";
import {useNavigate } from "react-router-dom"
// import validator from "validator";
// import { Link } from "react-router-dom";
// import k from "../../images/k.jpg"
// import './Login.css'

const Login = ({formSubmission}) => {

    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorObj, setErrorObj] = useState({})
    const [reg, setReg] = useState(false)

    let errors = {}

    const handleChange = (e) => {
        const attr = e.target.name
        if(attr === "email"){
            setEmail(e.target.value)
        }else if(attr === "password"){
            setPassword(e.target.value)
        }
    }

    const runValidator=() => {
        if(email.length === 0){
            errors.email = "Email cannot be blank"
        }
        if(password.length === 0){
            errors.password = "Password cannot be blank"
        }
    }

    const nonReg = ("user Not Found")

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidator()
        if(Object.keys(errors).length === 0){
            setErrorObj({})
            const formData = {
                email: email.toLowerCase(),
                password:password
            }
            let user = JSON.parse(localStorage.getItem("userInfo")) 

            if(email === user.email && password === user.password ){
                navigate("/home")
            }else{
                setReg(true)
            }
            formSubmission(formData)
        }else{
            setErrorObj(errors)
        }
    }

    return (
        
        <div class="min-h-screen bg-gray-700 flex flex-col justify-center ">
        <div class="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300 rounded-md">
        <div class="text-center font-medium text-xl">Login</div><br/>
            <form onSubmit={handleSubmit}>
                <label class="text-ml font-bold text-gray-700 block">Email</label>
                <input type="email"
                        name = "email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter Email"
                        class="w-full p-2 border border-gray-300 rounded mt-1"
                ></input><br/>
                <span>{errorObj.email && <span style={{color:'red'}}>{errorObj.email}</span>}</span>
                <br/>
                <label class="text-ml font-bold text-gray-700 block">Password</label>
                <input type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Enter Password"
                        class="w-full p-2 border border-gray-300 rounded mt-1"
                ></input><br/>
                 <span>{errorObj.password && <span style={{color:'red'}}>{errorObj.password}</span>}</span>
                 <br/>
                 <button type="submit" class="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounder-md text-white text-sm">
                     Login
                 </button><br/><br/>
                 {
                     reg ? (<div style={{color: 'red'}}>{alert(nonReg)}</div>) : null
                 }
                 <p class="text-ml font-bold text-gray-700 block">You don't have login details,</p>
               <button onClick={() => {
                   navigate("/")
                   window.location.reload()
               }} style={{color: "green"}}>
                   Register
               </button>
            </form>
            
            
            </div>
        </div>
    )
}

export default Login