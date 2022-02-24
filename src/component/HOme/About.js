import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return(
        <div class="bg-gray-800 h-screen">
        <div class="max-w-md w-full rounded-md">
            <h1 class="text-gray-400 font-bold text-xl p-12">What is Lorem Ipsum?</h1>
            <p class="text-gray-400 text-sm px-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book.</p>
        </div>
        <hr class="h-px mt-6 bg-white border-non"></hr>
        <div class="max-w-md w-full rounded-md justify-center items-center">
            <h1 class="text-gray-400 font-bold text-xl p-12">Why do we use it?</h1>
            <p class="text-gray-400 text-sm px-12">It is a long established fact that 
            a reader will be distracted by the readable content of a page when looking 
            at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
            normal distribution of letters, as opposed to using 'Content here, content here', 
            making it look like readable English. Many desktop publishing packages and web 
            page editors now use Lorem Ipsum as their default model text, and a search for 
            'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
            have evolved over the years, sometimes by accident, sometimes on purpose 
            (injected humour and the like).</p>
        </div>
            <Link to="/about"></Link>
        </div>
    )
}

export default About