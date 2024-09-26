import React from 'react';
import '../scss/MainBackdrop.scss'

const MainBackdrop = () => {
    return (
        <div className="mainBackdrop">
            <div className="backdropLeft">
                <div className="backdropEventLeft">
                    <div className="backdropEventLeftLogo"></div>
                </div>
            </div>
            <div className="backdropMiddle"></div>
            <div className="backdropRight">
                <div className="backdropEventRight">
                    <div className="backdropEventRightLogo"></div>
                </div>
            </div>
        </div>
    );
};

export default MainBackdrop;
