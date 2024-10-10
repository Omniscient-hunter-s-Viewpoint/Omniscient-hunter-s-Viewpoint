import React from 'react';
import '../scss/MainBackdrop.scss'
import {Link} from "react-router-dom";

const MainBackdrop = () => {
    return (
        <div className="mainBackdrop">
            <div className="backdropLeft">
                <div className="backdropEventLeft">
                    <Link to="/login" className="backdropEventLeftLogo"></Link>
                </div>
            </div>
            <div className="backdropMiddle"></div>
            <div className="backdropRight">
                <div className="backdropEventRight">
                    <Link to="/login" className="backdropEventRightLogo"></Link>
                </div>
            </div>
        </div>
    );
};

export default MainBackdrop;
