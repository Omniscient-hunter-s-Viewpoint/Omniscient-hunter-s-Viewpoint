import React, {useState} from 'react';
import {json, Link} from "react-router-dom";
import 'animate.css';
import '../scss/Login.scss'
import {USER_URL} from "../../../config/host-config";

const SignUp = () => {
    const [userValue, setValue] = useState({
        username: '',
        password: '',
        email: ''
    });
    const [message, setMessage] = useState({
        name: false,
        password: false,
        passwordCheck:false,
        email: false
    });
    const [correct, setCorrect] = useState({password: false, passwordCheck: false, email: false});
    const getEmail = (e) => {
        const inputValue = e.target.value;
        let msg,flag;
        let reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

        if (!inputValue) {
            msg = '이메일은 필수값입니다.'
            flag=false;
        } else if (!reg.test(inputValue)) {
            flag=false;
            msg = '이메일이 유효하지 않습니다.'
        } else {
            fetchDuplicatedCheck(inputValue);
            return;
        }
        setCorrect({...correct,email: flag});
        setMessage({...message, email: msg});

        setValue({...userValue, email: inputValue});
    }
    const fetchDuplicatedCheck=(email)=>{
        let msg :string='',flag:boolean=false;
        fetch(USER_URL+"/check?email="+email)
            .then(res=>res.json())
            .then(json=>{
                if(json){
                    msg='이메일이 중복되었습니다.';
                    flag=false;
                }else{
                    msg='사용 가능한 이메일입니다.';
                    flag=true;
                }
                setValue({...userValue,email: email});
                setMessage({...message,email: msg});
                setCorrect({...correct,email: flag});
            });

    }
    const getPassword = (e) => {
        document.querySelector('.passwordCheck').value='';
        document.querySelector('.checkMessage').textContent='';
        setCorrect({...correct,passwordCheck: false});
        setMessage({...message,passwordCheck: ''});
        const inputValue = e.target.value;
        let msg,flag;
        let reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/

        if (!inputValue) {
            flag=false
            msg = '비밀번호는 필수값입니다.'
        } else if (!reg.test(inputValue)) {
            flag=false;
            msg = '비밀번호가 너무 짧거나 형식에 맞지 않습니다.'
        } else {
            flag=true;
            msg = '사용 가능한 비밀번호입니다.';
        }
        setCorrect({...correct,password: flag});
        setMessage({...message, password: msg});

        setValue({...userValue, password: inputValue});
    }
    const getName = (e) => {
        const nameRegex: RegExp = /^[가-힣]{2,5}$/;

        let msg,flag;
        const inputValue = e.target.value;
        if (!inputValue) {
            flag=false;
            msg = '유저 이름은 필수값입니다.'
        } else if (!nameRegex.test(inputValue)) {
            flag=false;
            msg = '이름은 2글자 이상 5글자 이하의 한글로 작성해주세요'
        } else {
            flag=true;
            msg = '사용 가능한 이름입니다.';
        }
        setCorrect({...correct,name:flag});
        setMessage({...message, name: msg});


        setValue({...userValue, username: inputValue});

    }
    const pwCheckHandler=(e)=>{
        const inputData=e.target.value;
        let msg,flag;
        if(!inputData){
            msg='비밀번호 확인란은 필수값입니다.';
            flag=false;
        }else if(userValue.password!==inputData){
            msg='패스워드가 일치하지 않습니다.'
            flag=false;
        }else{
            msg='패스워드가 일치합니다.'
            flag=true;
        }
        setCorrect({...correct,passwordCheck: flag});
        setMessage({...message,passwordCheck: msg})
    }
    const signUpHandler = () => {
        console.log(correct);
    }
    return (
        <section className="LoginBackGround">

            <div className="LoginPaper">
                <div className="Login">
                    <div className="LoginTitle">
                        <h1 className="hOne h1">sign up</h1>
                    </div>
                    <form className="Loginbox">
                        <input className="loginInput input" type="text" placeholder="ID" onChange={getEmail}/><br/>
                        <b style={correct.email?{color:'green'}:{color:'red'}} className="errorMessage">{message.email}</b>

                        <input className="logoutInput  input" type="Password" placeholder="Password" onChange={getPassword}/><br/>
                        <b style={correct.password?{color:'green'}:{color:'red'}} className="errorMessage">{message.password}</b>

                        <input className="logoutInput passwordCheck input" type="Password" placeholder="Password Check" onChange={pwCheckHandler}/><br/>
                        <b style={correct.passwordCheck?{color:'green'}:{color:'red'}} className="errorMessage checkMessage">{message.passwordCheck}</b>

                        {/*<input className="logoutInput input" type="text" placeholder="E-maiL"/>*/}
                        <input className="logoutInput input" type="text" placeholder="NAME" onChange={getName}/><br/>
                        <b style={correct.name?{color:'green'}:{color:'red'}} className="errorMessage">{message.name}</b>

                    </form>
                    <div className="LoginBtn">
                        <div className="signInBtn animate__animated animate__bounceIn" onClick={signUpHandler}>NEXT
                        </div>
                    </div>

                </div>
                <Link to="/" className="crossIcon"></Link>
            </div>
        </section>
    );
};

export default SignUp;