import React, {useState} from 'react';
import '../scss/Header.scss'
import {Link, Route} from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import MainMap from "../../MainMap/js/MainMap";

const Header = ({isCheckHeader, ChangeEventHandler}) => {
    function onclickEventHandler() {
        console.log(isCheckHeader);
    }
    const [isCheckWeapon, setIsCheckWeapon] = useState("false");
    function onclickWeapon() {
        ChangeEventHandler(isCheckWeapon);
         setIsCheckWeapon("true")
    }
    const [isCheckTool, setIsCheckTool] = useState("false");
    function onclickTool() {
        ChangeEventHandler(isCheckTool);
        setIsCheckTool("true");
    }
    const [isCheckBook, setIsCheckBook] = useState("false");
    function onclickBook() {
        ChangeEventHandler(isCheckBook);
        setIsCheckBook("true");
    }
    const [isCheckGuide, setIsCheckGuide] = useState("false");
    function onclickGuide() {
        ChangeEventHandler(isCheckGuide);
        setIsCheckGuide("false");
    }
    return (
        <>
            <section className="headerNav">
                <div className="headerLogo"></div>
                <div className="headerLogin">
                    <Link to="/login"><VscAccount className="headerLoginIcon"/></Link>
                </div>
                <nav>
                    <ul className="headerMenu">
                        <li onClick={onclickEventHandler}><Link to="/">홈</Link></li>
                        <li onClick={onclickWeapon}><Link to="/">무기</Link></li>
                        <li onClick={onclickTool}><Link to="/">장비</Link></li>
                        <li onClick={onclickBook}><Link to="/">도감</Link></li>
                        <li onClick={onclickGuide}><Link to="/">가이드</Link></li>
                    </ul>
                </nav>
            </section>
        </>
    );
};

export default Header;