import React from "react";
import k from '../../images/k.jpg'

const Card = () => {
    return (
        <div class="bg-blue-400 py-24 flex items-center justify-center space-x-5">
            <div class="bg-white rounded-lg shadow-2xl w-1/4 ">
                <div class="flex">
                    <img src={k} class="rounded-t-lg h-60 object-cover w-1/3"/>
                        <div class="p-8">
                            <h2 class="text-xl font-extrabold mb-5">Hello</h2>
                            <p>This is Krishna</p>
                            <button class="bg-blue-400 text-blue-50 rounded-lg py-2 px-4 mt-5">Get Info</button>
                        </div>
                    </div>
                        <footer class="bg-gray-200 rounded-b-lg text-right py-3 px-8 text-sm text-gray-500">
                            footer shit
                        </footer>
            </div>
            <div class="bg-white rounded-lg shadow-2xl w-1/4 ">
                <div class="flex">
                    <img src={k} class="rounded-t-lg h-60 object-cover w-1/3"/>
                        <div class="p-8">
                            <h2 class="text-xl font-extrabold mb-5">Hello</h2>
                            <p>This is also Krishna</p>
                            <button class="bg-blue-400 text-blue-50 rounded-lg py-2 px-4 mt-5">Get Info</button>
                        </div>
                    </div>
                        <footer class="bg-gray-200 rounded-b-lg text-right py-3 px-8 text-sm text-gray-500">
                            footer shit
                        </footer>
                    </div>
            <div class="bg-white rounded-lg shadow-2xl w-1/4 ">
                <div class="flex">
                    <img src={k} class="rounded-t-lg h-60 object-cover w-1/3"/>
                        <div class="p-8">
                            <h2 class="text-xl font-extrabold mb-5">Hello</h2>
                            <p>Again Krishna</p>
                            <button class="bg-blue-400 text-blue-50 rounded-lg py-2 px-4 mt-5">Get Info</button>
                        </div>
                    </div>
                        <footer class="bg-gray-200 rounded-b-lg text-right py-3 px-8 text-sm text-gray-500">
                            footer shit
                        </footer>
                    </div>
        </div>
    )
}

export default Card