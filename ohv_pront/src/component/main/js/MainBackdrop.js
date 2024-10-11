import React from 'react';
import '../scss/MainBackdrop.scss'
import {Link} from "react-router-dom";
import MainMap from "../../MainMap/js/MainMap";

const MainBackdrop = () => {
    return (
        <>
        <div className="mainBackdrop">
            <div className="backdropLeft">
                <div className="backdropEventLeft">
                    <Link to="/mainMap" className="backdropEventLeftLogo"></Link>
                </div>
            </div>
            <div className="backdropMiddle"></div>
            <div className="backdropRight">
                <div className="backdropEventRight">
                    <Link to="/mainMap" className="backdropEventRightLogo"></Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default MainBackdrop;
