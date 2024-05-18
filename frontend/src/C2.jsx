import { BsFillFilePersonFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaBirthdayCake } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { createRoot } from 'react-dom/client';
import PortfoiloImg from './assets/Portfoilo.jpeg'
import PropTypes from 'prop-types';
import Tc from './timeline'

function C2({ language }) {
    C2.propTypes = {
        language: PropTypes.string.isRequired,
    };
    const userData = {
        en: {
            Country: "HongKonger",
            Location: "Osaka",
            ItemIntro: "INTRODUCE",
            Hobby: "Photography , Hiking",
            Intro: `Cyrus is an aspiring Web Full Stack Engineer currently studying IT in Osaka,
                  Japan,with an anticipated graduation date of March 2025. Prior to his foray into IT,
                  Cyrus worked in the video production industry as a video editor, photographer
                  and multimedia designer, specializing in visual media and commercial video production.`
        },
        tc: {
            Country: "香港人",
            Location: "大阪",
            ItemIntro: "自我介紹",
            Hobby: "攝影 , 行山",
            Intro: `
                        目前正在日本大阪攻讀 IT 相關課程，目標是成為一位有Web 全端工程師。
                        預計 2025 年 3 月畢業。在進入 IT 領域之前，Cyrus 在影片製作行業擔任影片剪輯師、
                        攝影師和多媒體設計師，專精於視覺媒體和商業影片製作。
                        `
        },
        ja: {
            Country: "香港人",
            Location: "大阪",
            ItemIntro: "自己紹介",
            Hobby: "撮影 , ハイキング",
            Intro: `現在大阪で IT を勉強し、2025 年 3 月に卒業見込みの Web フルスタックエンジニアを目指します。
                            IT 業界に入る前は、映像制作業界でビデオエディター、フォトグラファー、
                            マルチメディアデザイナーとして、ビジュアルメディアやコマーシャルビデオ制作に携わっていました。
                            `
        }
    };

    // c2
    const HandleOnMouseEnter = () => {
        document.getElementById("pc2").style.height = '1000px';
        const extendElement = document.getElementById("extend");
        const root = createRoot(extendElement);
        root.render(<Tc />);
    };
    const HandleOnMouseOut = () => {
        document.getElementById("pc2").style.height = '520px';
        document.getElementById("extent").innerHTML += '';

    };

    // c3
    const handleOpenNewTab = () => {
        window.open("https://www.example.com", "_blank");
    };

    return (
        <>
            {/* C2 */}
            <div className="grid-item c2" id="pc2" onMouseEnter={HandleOnMouseEnter} onMouseLeave={HandleOnMouseOut}>
                <div className="horizontal-layout">
                    <div className="data-part">
                        {/* Birthday */}
                        <div className="data-item">
                            <div className="item-logo"><FaBirthdayCake /></div>
                            <h4 className={language === "tc" || language === "ja" ? "TcAndJaFon700" : ""}>1994-12-07  (30)</h4>
                        </div>
                        {/* Country */}
                        <div className="data-item">
                            <div className="item-logo"><TbWorld /></div>
                            <h4 className={language === "tc" || language === "ja" ? "TcAndJaFon700" : ""}>{userData[language].Country}</h4>
                        </div>
                        {/* Location */}
                        <div className="data-item">
                            <div className="item-logo"><MdLocationPin /></div>
                            <h4 className={language === "tc" || language === "ja" ? "TcAndJaFon700" : ""}>{userData[language].Location}</h4>
                        </div>
                        {/* Email */}
                        <div className="data-item">
                            <div className="item-logo"><MdEmail /></div>
                            <h4 className={language === "tc" || language === "ja" ? "TcAndJaFon700" : ""}>Cyrusmanosa@gmail.com</h4>
                        </div>
                        {/* Hobby */}
                        <div className="data-item">
                            <div className="item-logo"><IoHeart /></div>
                            <h4 className={language === "tc" || language === "ja" ? "TcAndJaFon700" : ""}>{userData[language].Hobby}</h4>
                        </div>
                    </div>
                    {/* pic */}
                    <img src={PortfoiloImg} alt="Img" className="PortfoiloImg" />
                </div>
                {/* Introduce */}
                <div className="data-item-b" >
                    <div className="item-logo"><BsFillFilePersonFill /></div>
                    <h4 className={language === "tc" || language === "ja" ? "item-title TcAndJaFon700 intro-TcAndJa-line-height " : "item-title intro-Eng-line-height"}>{userData[language].ItemIntro} :</h4>
                </div >
                <div className={language === "tc" || language === "ja" ? "Introduce-data TcAndJaFon700 intro-TcAndJa-line-height " : "Introduce-data intro-Eng-line-height"}>{userData[language].Intro}</div>
                <div id="extend">
                </div>
            </div >

            {/* C3 */}
            <div className="grid-item c3" id="pc3">
                <button className='img-btn' id='pc3-img' onClick={handleOpenNewTab}>
                    <div className="it-btn">
                        <p>IT</p>
                    </div>
                </button>
            </div>
        </>
    )
}
export default C2;