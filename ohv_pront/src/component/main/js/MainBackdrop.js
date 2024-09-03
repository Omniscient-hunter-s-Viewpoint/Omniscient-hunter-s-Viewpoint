import React from 'react';
import '../scss/MainBackdrop.scss'

const MainBackdrop = () => {
    return (
        <div className="mainBackdrop">
            <div className="backdropLeft">
                <div className="backdropEventLeft">
                    <img src='../../../imgs/backdropLogoLeft.webp' className="backdropLogoLeft"></img>
                </div>
            </div>
            <div className="backdropMiddle"></div>
            <div className="backdropRight">
                <div className="backdropEventRight">
                    <img src='../../../imgs/backdropLogoRight.webp' className="backdropLogoRight"></img>
                </div>
            </div>
        </div>
    );
};

export default MainBackdrop;