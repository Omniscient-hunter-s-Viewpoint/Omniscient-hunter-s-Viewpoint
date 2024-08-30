import React from 'react';
import {Link} from "react-router-dom";
import 'animate.css';
import '../scss/Login.scss'

const SignUp = () => {
    return (
        <section className="LoginBackGround">

            <div className="LoginPaper">
                <div className="Login">
                    <div className="LoginTitle">
                        <h1 className="hOne h1">sign up</h1>
                    </div>
                    <div className="Loginbox">
                        <input className="loginInput input" type="text" placeholder="ID"/><br/>
                        <input className="logoutInput input" type="text" placeholder="Password"/>
                        <input className="logoutInput input" type="text" placeholder="E-maiL"/>
                        <input className="logoutInput input" type="text" placeholder="NAME"/>
                        {/*<input className="logoutInput input" type="text" placeholder="MailCheck"/>*/}
                    </div>
                    <div className="LoginBtn">
                        <div className="signInBtn animate__animated animate__bounceIn">NEXT</div>
                    </div>

                </div>
                <Link to="/" className="crossIcon"></Link>
            </div>
        </section>
    );
};

export default SignUp;