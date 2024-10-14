import React, {useState} from 'react';
import "../scss/MainMap.scss"

const MainMap = () => {
    const [isHovered, setIsHovered] = useState(null);
    const [isClicked, setClicked] = useState(false);
    const [isClassName,setIsClassName]=useState(null);
    const clickHandler = (e) => {
        if (!isClicked){
            setIsClassName(e.target.classList[0]);
            setClicked(true);
        }

    }
    const leaveHandler=()=>{
        setIsClassName(null);
        setClicked(false);
    }

    const handleEnter = (e) => {
        setIsHovered(e.target.classList[0]);
    };
    const handleLeave = () => {
        setIsHovered(null)

    };


    return (
        <div id="mainMap">
            <div className="gridItem1 gridItem"></div>
            <div className="gridItem2 gridItem"></div>
            <div className="gridItem3 gridItem">
                <div className="snowBox sharedCharacteristic">
                    <img className={`snowImg imgsize ${"snowImg" === isClassName ? 'click' : ""}`}
                         src="/img/snow.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {
                             leaveHandler();
                         }}
                    />
                    <div className="AreaTitle snowTitle">바다 건너 극한지</div>
                    <img
                        className={`circle ${'snowImg' === isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div></div>
            <div className="gridItem4 gridItem"></div>
            <div className="gridItem5 gridItem"></div>
            <div className="gridItem6 gridItem"></div>
            <div className="gridItem7 gridItem"></div>
            <div className="gridItem8 gridItem"></div>
            <div className="gridItem9 gridItem"></div>
            <div className="gridItem10 gridItem"></div>
            <div className="gridItem11 gridItem"></div>
            <div className="gridItem12 gridItem"></div>
            <div className="gridItem13 gridItem">
            </div>
            <div className="gridItem14 gridItem"></div>
            <div className="gridItem15 gridItem"></div>
            <div className="gridItem16 gridItem"></div>
            <div className="gridItem17 gridItem"></div>
            <div className="gridItem18 gridItem">
                <div className="dragonBox sharedCharacteristic">
                    <img className={`dragonImg imgsize ${"dragonImg" === isClassName ? 'click' : ""}`}
                         src="/img/dragon.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {
                             leaveHandler()
                         }}
                    />
                    <div className="AreaTitle dragonTitle">용결정의 땅</div>
                    <img
                        className={`circle ${'dragonImg' === isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div>
            </div>
            <div className="gridItem19 gridItem"></div>
            <div className="gridItem20 gridItem"></div>
            <div className="gridItem21 gridItem"></div>
            <div className="gridItem22 gridItem">
                <div className="SerenaBox sharedCharacteristic">
                    <img className={`SerenaImg imgsize ${"SerenaImg" === isClassName ? 'click' : ""}`}
                         src="/img/Serena.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {
                             leaveHandler()
                         }}
                    />
                    <div className="AreaTitle SerenaTitle">전선거점 세리에나</div>
                    <img
                        className={`circle ${'SerenaImg' === isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div>
            </div>
            <div className="gridItem23 gridItem"></div>
            <div className="gridItem24 gridItem"></div>
            <div className="gridItem25 gridItem"></div>
            <div className="gridItem26 gridItem">
                <div className="sanhoBox sharedCharacteristic">
                    <img className={`sanhoImg imgsize ${"sanhoImg" === isClassName ? 'click' : ""}`}
                         src="/img/sanho.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {
                             leaveHandler()
                         }}
                    />
                    <div className="AreaTitle sanhoTitle">육산호의 대지</div>

                    <img
                        className={`circle ${'sanhoImg' === isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div>
            </div>
            <div className="gridItem27 gridItem"></div>
            <div className="gridItem28 gridItem"></div>
            <div className="gridItem29 gridItem"></div>
            <div className="gridItem30 gridItem"></div>
            <div className="gridItem31 gridItem"></div>
            <div className="gridItem32 gridItem"></div>
            <div className="gridItem33 gridItem"></div>
            <div className="gridItem34 gridItem"></div>
            <div className="gridItem35 gridItem">
                <div className="researchBaseBox sharedCharacteristic">
                    <img className={`researchBaseImg imgsize ${"researchBaseImg" === isClassName ? 'click' : ""}`}
                         src="/img/researchBase.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {
                             leaveHandler()
                         }}
                    />
                    <div className="AreaTitle researchBaseTitle">연구 기지</div>

                    <img
                        className={`circle ${'researchBaseImg' === isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div>
            </div>
            <div className="gridItem36 gridItem"></div>
            <div className="gridItem37 gridItem">
                <div className="poisonBox sharedCharacteristic">
                    <img className={`poisonImg imgsize ${"poisonImg" === isClassName ? 'click' : ""}`}
                         src="/img/poison.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {
                             leaveHandler()
                         }}
                    />
                    <div className="AreaTitle poisonTitle">독기의 골짜기</div>

                    <img
                        className={`circle ${'poisonImg' === isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div>
            </div>
            <div className="gridItem38 gridItem"></div>
            <div className="gridItem39 gridItem"></div>
            <div className="gridItem40 gridItem"></div>
            <div className="gridItem41 gridItem"></div>
            <div className="gridItem42 gridItem"></div>
            <div className="gridItem43 gridItem">
                <div className="forestBox sharedCharacteristic">
                    <img className={`forestImg imgsize ${"forestImg" === isClassName ? 'click' : ""}`}
                         src="/img/forest.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {
                             leaveHandler()
                         }}
                    />
                    <div className="AreaTitle forestTitle">고대수의 숲</div>

                    <img
                        className={`circle ${'forestImg' === isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div>
            </div>
            <div className="gridItem44 gridItem"></div>
            <div className="gridItem45 gridItem"></div>
            <div className="gridItem46 gridItem"></div>
            <div className="gridItem47 gridItem">
            </div>
            <div className="gridItem48 gridItem"></div>
            <div className="gridItem49 gridItem"></div>
            <div className="gridItem50 gridItem"></div>
            <div className="gridItem50 gridItem"></div>
            <div className="gridItem50 gridItem"></div>
            <div className="gridItem50 gridItem"></div>
            <div className="gridItem50 gridItem"></div>
            <div className="gridItem50 gridItem">
                <div className="AstraBox sharedCharacteristic">
                    <img className={`AstraImg imgsize ${'AstraImg' === isClassName ? 'click' : ""}`}
                         src="/img/Astra.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {
                             leaveHandler()
                         }}
                    />
                    <div className="AreaTitle AstraTitle">조사거점 아스테라</div>

                    <img
                        className={`circle ${'AstraImg' === isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div>
            </div>
            <div className="gridItem50 gridItem"></div>
            <div className="gridItem50 gridItem">
                <div className="groundBox sharedCharacteristic">
                    <img className={`groundImg imgsize ${"groundImg" === isClassName ? 'click' : ""}`}
                         src="/img/ground.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {
                             leaveHandler()
                         }}
                    />
                    <div className="AreaTitle groundTitle">개밋둑의 황야</div>

                    <img
                        className={`circle ${'groundImg' === isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div>
            </div>
            <div className="gridItem50 gridItem"></div>
            <div className="gridItem50 gridItem"></div>
            <div className="gridItem50 gridItem"></div>
        </div>
    );


};


export default MainMap;