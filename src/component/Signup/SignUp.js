import React, {useState, useEffect} from 'react'
// import validator from 'validator'
import {useNavigate} from 'react-router-dom'
// import Login from '../Login/Login'

const SignUp=({formSubmission, handleIsSaved, isSaved}) => {

  const navigate = useNavigate()

  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorObj, setErrorObj] = useState({})

  let errors = {}

  useEffect(() => {
    if(isSaved){
      setUserName('')
      setEmail('')
      setPassword('')
      handleIsSaved()
    }
  },[isSaved, handleIsSaved])

  const handleChange=(e) => {
    const attr = e.target.name
    if(attr === "username"){
      setUserName(e.target.value)
    }else if(attr === "email"){
      setEmail(e.target.value)
    }else if(attr === "password"){
      setPassword(e.target.value)
    }
  }

  const runValidator = () => {
    if(username.length === 0){
      errors.username = "Username cannot be blank"
    }
    if(email.length === 0){
      errors.email = "email cannot be blank"
    }
    if(password.length === 0){
      errors.password = "password cannot be blank"
    }
  }
  
  const handleSubmit = (e)=> {
    e.preventDefault()
    runValidator()
    if(Object.keys(errors).length === 0){
      setErrorObj({})
      const formData = {
        username: username,
        email: email.toLowerCase(),
        password: password
      }
      localStorage.setItem("userInfo", JSON.stringify(formData))
      navigate("/home")
      formSubmission(formData)
    }else{
      setErrorObj(errors)
    }
  }

  

  return(
    <div class="min-h-screen bg-gray-700 flex flex-col justify-center">
    <div class="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300 rounded-md">
    <div class="text-center font-medium text-xl">Register with us</div><br/>
      <form onSubmit={handleSubmit} >
      <label class="text-ml font-bold text-gray-700 block">Name</label>
        <input type="text"
               lable="Name" 
               name="username"
               value={username}
               onChange={handleChange}
               placeholder='Enter Your Name'
               class="w-full p-2 border border-gray-300 rounded mt-1"
         ></input><br/>
         <span>{errorObj.username && <span style={{color:'red'}}>{errorObj.username}</span>}</span>
         <br/>
        <label class="text-ml font-bold text-gray-700 block">Email</label>
         <input type="email"
                lable="Email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder='Enter Email'
                class="w-full p-2 border border-gray-300 rounded mt-1"
         ></input><br/>
         <span>{errorObj.email && <span style={{color:'red'}}>{errorObj.email}</span>}</span>
         <br/>
         <label class="text-ml font-bold text-gray-700 block">Password</label>
         <input type="password"
                lable="Password"
                name='password'
                value={password}
                onChange={handleChange}
                placeholder='Enter Password'
                class="w-full p-2 border border-gray-300 rounded mt-1"
         ></input><br/>
         <span>{errorObj.password && <span style={{color:'red'}}>{errorObj.password}</span>}</span>
         <br/>
         <button type="submit" class="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounder-md text-white text-sm rounded-md" >
                    Register
          </button><br/><br/>
          <p class="text-ml font-bold text-gray-700 block">If your already register then </p>
          <button onClick={() => {
            navigate("/login")
          }} style={{color: "green"}}>
            Login
          </button>
          
      </form>
    </div>
    </div>
  )
}

export default SignUp