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
                        <li><Link to="/">홈</Link></li>
                        <li><Link to="/">무기</Link></li>
                        <li><Link to="/">장비</Link></li>
                        <li><Link to="/">도감</Link></li>
                        <li><Link to="/">초보자가이드</Link></li>
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