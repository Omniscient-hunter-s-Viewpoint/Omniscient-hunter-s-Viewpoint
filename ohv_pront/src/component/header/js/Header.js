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
                        <li><Link to="/">메뉴</Link></li>
                        <li><Link to="/">도감</Link></li>
                        <li><Link to="/">가이드</Link></li>
                        <li><Link to="/">홈</Link></li>
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