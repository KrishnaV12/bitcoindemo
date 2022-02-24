import React,{ useState } from "react";
import SignUp from "./SignUp";
import { registerAction } from "../../actions/userAction";
import { useDispatch } from "react-redux";

const Register = (props) => {
    const [isSaved, setIsSaved] = useState(false)
    const dispatch = useDispatch()

    const formSubmission = (formData) => {
        const successMessage= () => {
            alert("Registered Successfully")
        }
        const setSavedDetails = () => {
            setIsSaved(true)
        }
        dispatch(registerAction(formData,successMessage,setSavedDetails,props.history))
    }
    const handleIsSaved = () => {
        setIsSaved(!isSaved)
    }
    return(
        <div>
            <h1>Register</h1>
            <SignUp formSubmission={formSubmission} isSaved={isSaved} handleIsSaved={handleIsSaved}/> 
        </div>
    )
}

export default Register