import React from 'react';
import '../scss/main.scss';
import Header from '../../header/js/Header';
import Footer from '../../footer/js/Footer';
import MainBackdrop from "../js/MainBackdrop";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../../Login/js/Login";
import SignUp from "../../Login/js/SignUp";
import MainMap from "../../MainMap/js/MainMap";
const Main = () => {
    return (
            <>
                <section className="mainForm"></section>
                <MainBackdrop></MainBackdrop>
            </>
    );
};

export default Main;
