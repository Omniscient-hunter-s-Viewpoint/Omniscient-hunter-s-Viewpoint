import logo from './logo.svg';
import './App.css';
import Main from "./component/main/js/main";
import LoginMain from "./component/Login/js/LoginMain";
import {Reset} from "styled-reset";

function App() {
  return (
    <div className="App">
        <Reset/>
      <LoginMain/>
    </div>
  );
}

export default App;
