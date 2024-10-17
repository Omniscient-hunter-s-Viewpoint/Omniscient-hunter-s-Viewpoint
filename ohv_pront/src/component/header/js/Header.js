import React, {useState} from 'react';
import '../scss/Header.scss'
import {Link, Route} from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import MainMap from "../../MainMap/js/MainMap";

const Header = ({isCheckMainMap}) => {
    const [isActive, setIsActive] = useState("");
    const isCheckActive = (e) => {
        isCheckActive(e.target.className[0]);
        setIsActive("시밤");
    }
    return (
        <>
            <section className="headerNav">
                <div className="headerLogo">
                </div>
                <div className="headerLogin">
                    <Link to="/login"><VscAccount className="headerLoginIcon"/></Link>
                </div>
                <nav>
                    <ul className="headerMenu">
                        <li><Link to="/">홈</Link></li>
                        <li><Link to="/">무기</Link></li>
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