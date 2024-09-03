import React from 'react';
import 'animate.css';
import '../scss/Login.scss'
import {Link} from "react-router-dom";
import '../scss/LoginMain.scss'


const Login = () => {
    return (
        <section className="LoginBackGround">

            <div className="LoginPaper">
                <div className="Login">
                    <div className="LoginTitle">
                        <h1 className="hOne h1">sign in to </h1>
                        <h1 className="hTwo h1"> Hunter Academy</h1>
                    </div>
                    <div className="Loginbox">
                        <input className="loginInput input" type="text" placeholder="ID"/><br/>
                        <input className="logoutInput input" type="text" placeholder="Password"/>
                    </div>
                    <div className="LoginBtn">
                        <Link to='/'className="signInBtn animate__animated animate__bounceIn">SIGN IN</Link>
                    </div>
                    <div className="LoginDetail">
                        <span className="nako"></span>
                        <div className="moveBtn">
                            <Link to="/SignUp" className="animate__animated animate__flash signUpMove ">sign up</Link>
                            <Link to='/'className="animate__animated animate__flash forgetMove ">fortget <br/>password?</Link>
                        </div>
                    </div>
                </div>
                <Link to="/" className="crossIcon"></Link>
            </div>
        </section>

    );
};

export default Login;