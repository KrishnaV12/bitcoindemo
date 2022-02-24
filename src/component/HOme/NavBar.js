import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () =>  {
    const navigate = useNavigate()
    return(
        <nav class="bg-gray-100">
            <div class="px-10 mx-auto border">
            <div class="flex justify-between">
            <div class="flex space-x-4">
                <a href="#" class="py-2 px-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                </a>

                <div class="flex">
                    <a href="#" class="py-2 px-3 hover:text-gray-900" >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    
                    </a>
                    <a href="#" class="py-2 px-3 mt-1.5 h-18 w-15 text-xl hover:text-gray-900">Pricing</a>
                    <a href="#" class="py-2 px-3 mt-1.5 h-18 w-15 text-xl hover:text-gray-900">Features</a>
                </div>
            </div>
            <div class="flex items-center space-x-1">
            <a onClick={() => {
                const confirmLogout = window.confirm("Are you sure you wanna Logout")
                if(confirmLogout){
                    navigate("/login")
                    window.location.reload()
                }
                    
                }} class="bg-yellow-400 hover:bg-yellow-600 text-yellow-800  py-2 px-3 rounded-md cursor-pointer">Logout</a>
                <a onClick={() => {
                localStorage.removeItem('userInfo')
                const confirmLogout = window.confirm("Are you sure you wanna Delete Account")
                if(confirmLogout){
                    navigate("/")
                    window.location.reload()
                }
                }} class="bg-yellow-400 hover:bg-yellow-600 text-yellow-800  py-2 px-3 rounded-md cursor-pointer">Delete Account</a>
            </div>
                
                {/* <h1>Hello</h1>
                <h1 onClick={() => {
                    navigate("/login")
                }} style={{cursor: "pointer"}}>LogOut</h1> */}
                </div>
                {/* <Dropdown/> */}
            </div>
        </nav>
    )
}

export default NavBar