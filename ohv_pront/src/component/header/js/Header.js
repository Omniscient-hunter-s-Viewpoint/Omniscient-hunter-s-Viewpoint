import React, {useState} from 'react';
import '../scss/Header.scss'
import {Link, Route} from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import MainMap from "../../MainMap/js/MainMap";

const Header = ({isCheckHeader, ChangeEventHandler}) => {
    function onclickEventHandler() {
        console.log(isCheckHeader);
    }
    const [isCheckText, setIsCheckText] = useState("이제 바뀜");
    function onclickText() {
        ChangeEventHandler(isCheckText);
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
                        <li onClick={onclickText}><Link to="/">무기</Link></li>
                        <li><Link to="/">장비</Link></li>
                        <li><Link to="/">도감</Link></li>
                        <li><Link to="/">가이드</Link></li>
                    </ul>
                </nav>
            </section>
        </>
    );
};

export default Header;