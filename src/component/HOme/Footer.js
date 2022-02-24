import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div>
            <footer class="text-gray-200 bg-gray-800">
                <div class="max-w-3xl mx-auto py-6">
                    <h1 class="text-center text-lg lg:text-2xl">HELLO</h1>
                    <div class="flex justify-center mt-6">
                        <div class="bg-gray-600 rounded-md px-5">
                            <div class="flex fles-wrap justify-between md:flex-row">
                                <h2>This is not a footer</h2>
                            </div>
                        </div>
                    </div>
                    <hr class="h-px mt-6 bg-white border-non"></hr>
                    <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
                        <div>
                            <a href="#" class="text-xl font-bold text-gray-100 hover:text-gray-400">Welcome</a>
                        </div>

                        <div class="flex mt-4 md:m-0">
                            <div class="-m-x4">
                                <a href="#" class="px-4 text-sm text-gray-100 font-medium hover:text-gray-400" onClick={() =>{ 
                                    navigate('/about')
                                 }}>About</a>
                                <a href="#" class="px-4 text-sm text-gray-100 font-medium hover:text-gray-400" >Blog</a>
                                <a href="#" class="px-4 text-sm text-gray-100 font-medium hover:text-gray-400" onClick={() => {
                                    navigate('/contact')
                                }}>Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            
        </div>
    )
}

export default Footer