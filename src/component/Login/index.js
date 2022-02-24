import React from "react";
import Login from "./Login";

import { loginAction } from "../../actions/userAction";
import { useDispatch } from "react-redux";

const Login1 = (props) => {
    const {handleLoginStatus} = props
    const dispatch = useDispatch()

    const formSubmission = (formData) => {
        const successMessage = () => {
            alert('LoggedIn')
        }
        const errorMessage = (error) => {
            alert("Error occured")
        }
        dispatch(loginAction(formData, props.history,successMessage,errorMessage,handleLoginStatus))
    }

    return(
        <div>
            <h1>LOGIN</h1><br/>
            <Login formSubmission={formSubmission}/>
        </div>
    )
}

export default Login1