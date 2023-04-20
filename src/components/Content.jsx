import {Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import React from "react";
import Qoute from "./Quote.jsx";
import Profile from './Profile';

const Content = ({user}) =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About user={user}/>}/>
            <Route path="/qoute" element={<Qoute user={user}/>}/>
            <Route path="/profile" element={<Profile user={user}/>}/>
        </Routes>
    )
}

export default Content;