import './App.css';
import {Reset} from "styled-reset";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./component/Login/js/Login";
import SignUp from "./component/Login/js/SignUp";
import React, {useState} from "react";
import Main from "./component/main/js/Main";
import Header from "./component/header/js/Header";
import Footer from "./component/footer/js/Footer";
import MainMap from "./component/MainMap/js/MainMap";
import ForestMap from "./component/Map/forest/js/ForestMap";

function App() {
    const [isCheckMainMap, setIsCheckMainMap] = useState("");
    const isCheckHandler = (e) => {
        setIsCheckMainMap(e);
    }
    return (
        <div className="App" style={{"overflow":"hidden"}}>
            <Reset/>
            <BrowserRouter>
                <Header isCheckMainMap={isCheckMainMap}/>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/SignUp" element={<SignUp/>}></Route>
                    <Route path="/mainMap" element={<MainMap isCheckHandler={isCheckHandler}/>}></Route>
                    <Route path="/mainMap/forest" element={<ForestMap/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
