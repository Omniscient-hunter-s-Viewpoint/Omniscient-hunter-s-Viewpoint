import './App.css';
import Main from "./component/main/js/Main";
import {Reset} from "styled-reset";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./component/Login/js/Login";
import SignUp from "./component/Login/js/SignUp";

function App() {
    return (
        <div className="App">
            <Reset/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/SignUp" element={<SignUp/>}></Route>
                </Routes>

                {/*<LoginMain/>*/}
            </BrowserRouter>

        </div>
    );
}

export default App;
