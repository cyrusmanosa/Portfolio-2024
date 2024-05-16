import { BsFillFilePersonFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import PortfoiloImg from './assets/Portfoilo.jpeg'
import { FaBirthdayCake } from "react-icons/fa";

function C2() {
    return (
        <>
            <div className="grid-item c2">
                <div className="horizontal-layout">
                    <div className="data-part">
                        {/* Birthday */}
                        <div className="data-item">
                            <div className="item-logo"><FaBirthdayCake /></div>
                            <h4>1994-12-07  (30)</h4>
                        </div>

                        {/* Country */}
                        <div className="data-item">
                            <div className="item-logo"><TbWorld /></div>
                            <h4>HongKonger</h4>
                        </div>

                        {/* Location */}
                        <div className="data-item">
                            <div className="item-logo"><MdLocationPin /></div>
                            <h4>Osaka</h4>
                        </div>

                        {/* Email */}
                        <div className="data-item">
                            <div className="item-logo"><MdEmail /></div>
                            <h4>Cyrusmanosa@gmail.com</h4>
                        </div>
                    </div>
                    <img src={PortfoiloImg} alt="Img" className="PortfoiloImg" />
                </div>

                {/* Introduce */}
                <div className="data-item-b">
                    <div className="item-logo"><BsFillFilePersonFill /></div>
                    <h4 className="item-title">Introduce :</h4>
                </div>

                <div className="Introduce-data">
                    Cyrus is an aspiring Web Full Stack Engineer currently studying IT in Osaka,
                    Japan,with an anticipated graduation date of March 2025. Prior to his foray into IT,
                    Cyrus worked in the video production industry as a video editor, photographer,
                    and multimedia designer, specializing in visual media and commercial video production.
                </div>
            </div>
        </>
    )
}
export default C2;