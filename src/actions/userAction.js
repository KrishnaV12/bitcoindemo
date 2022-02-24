import axios from 'axios'

export const ACOUNT_INFO = "ACOUNT_INFO"

export const registerAction = (formData, successMessage,setSavedDetails,moveLink, id) => {

    return (dispatch) => {
        axios.post(`https://61caa182194ffe0017788861.mockapi.io/${id}/register`, formData)
        .then((res) => {
            const result = res.data
            if(result.errors){
                alert(result.message)
            }
            else {
                setSavedDetails()
                successMessage()
                moveLink.push('/login')
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const loginAction = (formData, moveLink, successMessage, errorMessage, handleLoginStatus, id) => {

    return (dispatch) => {
        axios.post(`https://61caa182194ffe0017788861.mockapi.io/${id}/login`, formData)
        .then((res) => {
            const result = res.data
            if(result.errors){
                errorMessage(result)
            }
            else{
                localStorage.setItem('id', `Bearer ${result.id}`)
                successMessage()
                moveLink.push('/home')
                handleLoginStatus()
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const userAction = () => {

    return (dispatch) => {
        axios.get(`https://61caa182194ffe0017788861.mockapi.io/users` ,{
            headers:{
                'Authorization': localStorage.getItem('id')
            }
        })
        .then((res) => {
            const result = res.data
            if(result){
                dispatch({type: ACOUNT_INFO, payload:result})
            }
        })
        .catch(err =>{
            alert(err.message)
        })
    }
}