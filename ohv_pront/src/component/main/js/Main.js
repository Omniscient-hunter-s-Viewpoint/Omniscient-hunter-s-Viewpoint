import React from 'react';
import '../scss/main.scss';
import Header from '../../header/js/Header';
import Footer from '../../footer/js/Footer';
import MainBackdrop from "./MainBackdrop";
const Main = () => {
    return (
        <>
          <section className="mainForm"></section>
            <MainBackdrop></MainBackdrop>
        </>
    );
};

export default Main;