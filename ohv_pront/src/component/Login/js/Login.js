import React from 'react';
import '../scss/Login.scss'
const Login = () => {
    return (
        <div className="LoginPaper">
            <div className="Login">
                <div className="LoginTtitle">
                    <h1>sign in to <br/> Hunter Academy</h1>
                </div>
                <div className="Loginbox">
                    <input type="text"/><br/>
                    <input type="text"/>
                </div>
                <div className="LoginBtn">
                    <button className="">SIGN IN</button>
                </div>
                <div className="LoginDetail">
                    <div className="signUpMove">sign up</div>
                    <div className="forgetMove">fortgot <br/>password?</div>
                </div>
            </div>

        </div>
    );
};

export default Login;