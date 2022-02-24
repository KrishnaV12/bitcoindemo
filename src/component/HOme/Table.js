import React,{ useState, useEffect } from "react";
import axios from 'axios'

const Table = () => {
    const [data, setData] = useState([])

    const url = ('https://api2.binance.com/api/v3/ticker/24hr')

    const limit = data.map((elem) =>{
        return
    })

    useEffect(() => {
        axios.get(url)
        .then((res) => {
            const result = res.data
            setData(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    })

    return(
        <div class="bg-gray-500 flex justify-center items-auto h-screen  ">
            <table class=" mt-12 shadow-2xl font-[Poppins] border-2 border-cyan-200 w-6/12 top-px h-2 rounded-md">
                <thead class="text-white">
                    <tr>
                        <th class="py-3 bg-cyan-800">Symbol</th>
                        <th class="py-3 bg-cyan-800">Name</th>
                        <th class="py-3 bg-cyan-800">Nope</th>
                        <th class="py-3 bg-cyan-800">Maybe</th>
                    </tr>
                </thead>
                <tbody class="text-gray-200 text-center">
                        <tr class="bg-gray-900 cursor-pointer duration-300">
                            <td class="py-3 px-6 underline">Krishna</td>
                            <td class="py-3 px-6">Krishna</td>
                            <td class="py-3 px-6">Krishna</td>
                            <td class="py-3 px-6">Krishna</td>
                        </tr>
                        <tr class="bg-gray-900 cursor-pointer duration-300">
                            <td class="py-3 px-6 underline">Nishchal</td>
                            <td class="py-3 px-6">Nishchal</td>
                            <td class="py-3 px-6">Nishchal</td>
                            <td class="py-3 px-6">Nishchal</td>
                        </tr>
                        <tr class="bg-gray-900 cursor-pointer duration-300">
                            <td class="py-3 px-6 underline">Vishal</td>
                            <td class="py-3 px-6">lalit</td>
                            <td class="py-3 px-6">lalit</td>
                            <td class="py-3 px-6">lalit</td>
                        </tr>
                        <tr class="bg-gray-900 cursor-pointer duration-300">
                            <td class="py-3 px-6 underline">NoBody</td>
                            <td class="py-3 px-6">NoBody</td>
                            <td class="py-3 px-6">NoBody</td>
                            <td class="py-3 px-6">NoBody</td>
                        </tr>
                        <tr class="bg-gray-900 cursor-pointer duration-300">
                            <td class="py-3 px-6 underline">It's Me</td>
                            <td class="py-3 px-6">It's Me</td>
                            <td class="py-3 px-6">It's Me</td>
                            <td class="py-3 px-6">It's Me</td>
                        </tr>
                        <tr class="bg-gray-900 cursor-pointer duration-300">
                            <td class="py-3 px-6 underline">Never Mind</td>
                            <td class="py-3 px-6">Never Mind</td>
                            <td class="py-3 px-6">Never Mind</td>
                            <td class="py-3 px-6">Never Mind</td>
                        </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table