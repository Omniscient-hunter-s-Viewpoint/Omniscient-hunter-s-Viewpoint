import React from 'react';
import '../scss/ForestMap.scss';
const ForestMap = () => {
    return (
        <div>
            <svg className="tq" height="220" width="500" >
                <polygon className="tq" points="10 0, 90 0, 100 30, 95 50, 80 75,
    60 90, 30 85, 15 65, 5 40, 0 20" style={{backgroundImage:'url(/img/area1.png)'}}>
                </polygon>
            </svg>
        </div>
    );
};

export default ForestMap;