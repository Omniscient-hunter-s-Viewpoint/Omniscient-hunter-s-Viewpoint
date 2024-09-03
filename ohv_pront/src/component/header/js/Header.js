import React from 'react';
import '../scss/Header.scss'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <>
            <section className="headerNav">
                <div className="headerLogo">
                </div>
                <nav>
                    <ul className="headerMenu">
                        <li><a href="/">홈</a></li>
                        <li><a href="/">몬스터</a></li>
                        <li><a href="/">장비</a></li>
                        <li><a href="/">도감</a></li>
                        <li><a href="/">초보자가이드</a></li>
                    </ul>
                </nav>
                <div className="headerLogin">
                    <Link to="/login" className="headerLoginIcon"></Link>
                </div>
            </section>
        </>
    );
};

export default Header;