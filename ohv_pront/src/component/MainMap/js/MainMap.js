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
            <div className="gridItem1 gridItem">1</div>
            <div className="gridItem2 gridItem">2</div>
            <div className="gridItem3 gridItem">3
                <div className="snowBox sharedCharacteristic">
                    <img className={`snowImg imgsize ${"snowImg" === isClassName ? 'click' : ""}`}
                         src="/img/sanho.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {
                             leaveHandler()
                         }}
                    />
                    <img
                        className={`circle ${'snowImg' === isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div></div>
            <div className="gridItem4 gridItem">4</div>
            <div className="gridItem5 gridItem">5</div>
            <div className="gridItem6 gridItem">6</div>
            <div className="gridItem7 gridItem">7</div>
            <div className="gridItem8 gridItem">8</div>
            <div className="gridItem9 gridItem">9</div>
            <div className="gridItem10 gridItem">10</div>
            <div className="gridItem11 gridItem">11</div>
            <div className="gridItem12 gridItem">12</div>
            <div className="gridItem13 gridItem">13
            </div>
            <div className="gridItem14 gridItem">14</div>
            <div className="gridItem15 gridItem">15</div>
            <div className="gridItem16 gridItem">16</div>
            <div className="gridItem17 gridItem">17</div>
            <div className="gridItem18 gridItem">18
                <div className="dragonBox sharedCharacteristic">
                    <img className={`dragonImg imgsize ${"dragonImg" === isClassName ? 'click' : ""}`}
                         src="/img/dragon.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {
                             leaveHandler()
                         }}
                    />
                    <img
                        className={`circle ${'dragonImg' === isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div></div>
            <div className="gridItem19 gridItem">19</div>
            <div className="gridItem20 gridItem">20</div>
            <div className="gridItem21 gridItem">21</div>
            <div className="gridItem22 gridItem">22
                <div className="SerenaBox sharedCharacteristic">
                    <img className={`SerenaImg imgsize ${"SerenaImg" === isClassName ? 'click' : ""}`}
                         src="/img/Serena.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {
                             leaveHandler()
                         }}
                    />
                    <img
                        className={`circle ${'SerenaImg' === isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div>
            </div>
            <div className="gridItem23 gridItem">23</div>
            <div className="gridItem24 gridItem">24</div>
            <div className="gridItem25 gridItem">25</div>
            <div className="gridItem26 gridItem">26
                <div className="sanhoBox sharedCharacteristic">
                    <img className={`sanhoImg imgsize ${"sanhoImg" === isClassName ? 'click' : ""}`}
                         src="/img/sanho.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {
                             leaveHandler()
                         }}
                    />
                    <img
                        className={`circle ${'sanhoImg' === isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div>
            </div>
            <div className="gridItem27 gridItem">27</div>
            <div className="gridItem28 gridItem">28</div>
            <div className="gridItem29 gridItem">29</div>
            <div className="gridItem30 gridItem">30</div>
            <div className="gridItem31 gridItem">31</div>
            <div className="gridItem32 gridItem">32</div>
            <div className="gridItem33 gridItem">33</div>
            <div className="gridItem34 gridItem">34</div>
            <div className="gridItem35 gridItem">35
                <div className="researchBaseBox sharedCharacteristic">
                    <img className={`researchBaseImg imgsize ${"researchBaseImg" === isClassName ? 'click' : ""}`}
                         src="/img/researchBase.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {
                             leaveHandler()
                         }}
                    />
                    <img
                        className={`circle ${'researchBaseImg' === isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div>
            </div>
            <div className="gridItem36 gridItem">36</div>
            <div className="gridItem37 gridItem">37
                <div className="poisonBox sharedCharacteristic">
                    <img className={`poisonImg imgsize ${"poisonImg" === isClassName ? 'click' : ""}`}
                         src="/img/poison.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {
                             leaveHandler()
                         }}
                    />
                    <img
                        className={`circle ${'poisonImg' === isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div></div>
            <div className="gridItem38 gridItem">38</div>
            <div className="gridItem39 gridItem">39</div>
            <div className="gridItem40 gridItem">40</div>
            <div className="gridItem41 gridItem">41</div>
            <div className="gridItem42 gridItem">42</div>
            <div className="gridItem43 gridItem">43
                <div className="forestBox sharedCharacteristic">
                    <img className={`forestImg imgsize ${"forestImg" === isClassName ? 'click' : ""}`}
                         src="/img/forest.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {leaveHandler()}}
                    />
                    <img
                        className={`circle ${'forestImg' === isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div>
            </div>
            <div className="gridItem44 gridItem">44</div>
            <div className="gridItem45 gridItem">45</div>
            <div className="gridItem46 gridItem">46</div>
            <div className="gridItem47 gridItem">47
            </div>
            <div className="gridItem48 gridItem">48</div>
            <div className="gridItem49 gridItem">49</div>
            <div className="gridItem50 gridItem">50</div>
            <div className="gridItem50 gridItem">51</div>
            <div className="gridItem50 gridItem">52</div>
            <div className="gridItem50 gridItem">53</div>
            <div className="gridItem50 gridItem">54</div>
            <div className="gridItem50 gridItem">55
                <div className="AstraBox sharedCharacteristic">
                    <img className={`AstraImg imgsize ${'AstraImg' === isClassName ? 'click' : ""}`}
                         src="/img/Astra.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {
                             leaveHandler()
                         }}
                    />
                    <img
                        className={`circle ${'AstraImg'===isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div></div>
            <div className="gridItem50 gridItem">56</div>
            <div className="gridItem50 gridItem">57
                <div className="groundBox sharedCharacteristic">
                    <img className={`groundImg imgsize ${"groundImg"===isClassName ? 'click' : ""}`}
                         src="/img/ground.png"
                         alt="사진 깨짐"
                         onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={clickHandler}
                         onAnimationEnd={() => {leaveHandler()}}
                    />
                    <img
                        className={`circle ${'groundImg'===isHovered ? 'drawCircle' : ""}`}
                        src="/img/redCircle.png"
                        alt="이미지 깨짐"
                    />
                </div>
            </div>
            <div className="gridItem50 gridItem">58</div>
            <div className="gridItem50 gridItem">59</div>
            <div className="gridItem50 gridItem">60</div>
        </div>
    );


};


export default MainMap;