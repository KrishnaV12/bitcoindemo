import React from "react";
import { Routes, useNavigate, Route, Navigate } from "react-router-dom";
import Card from "./Card";
import Footer from "./Footer";
import NavBar from './NavBar'
import Table from "./Table";

const Home = ({authorized}) => {
    if(!authorized){
        <Routes>
        <Route path="*" element={<Navigate to='/login'/>}></Route>
        </Routes>
    }
    // <Route path="*" element={<Navigate to={authorized ? "/home" : "/login"}/>}></Route>

    return(
        <div>
            <NavBar />
            <Card />
            <Table />
            <Footer />      
        </div>
    )
}

export default Home