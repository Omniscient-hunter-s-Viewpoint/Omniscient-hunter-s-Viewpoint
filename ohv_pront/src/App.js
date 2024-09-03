import './App.css';
import {Reset} from "styled-reset";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./component/Login/js/Login";
import SignUp from "./component/Login/js/SignUp";
import React from "react";
import Main from "./component/main/js/Main";
import Header from "./component/header/js/Header";
import Footer from "./component/footer/js/Footer";

function App() {
    return (
        <div className="App">
            <Reset/>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/SignUp" element={<SignUp/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>

        </div>
    );
}

export default App;
