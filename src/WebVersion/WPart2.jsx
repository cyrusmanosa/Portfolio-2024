import { BsFillFilePersonFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaBirthdayCake } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
// import { createRoot } from 'react-dom/client';
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from "react";
import PortfoiloImg from '../assets/Portfoilo.jpeg'
import ItBG from '../assets/3FE099FF-4660-4E8C-9E3B-B779A50EAC65_1_105_c.jpeg';
import Tc from './Wtimeline'
import It from "./WIt"
import styled from "@emotion/styled";

function WPart2() {
    const { t, i18n } = useTranslation();
    const [c2switch, setC2Switch] = useState(false)
    const [checkC3, setCheckC3] = useState(false)
    const BPxSize = {
        "en": { 1350: '1200px', 850: '1250px', other: '1350px' },
        "zh": { 1350: '1100px', 850: '1100px', other: '1200px' },
        "ja": { 1350: '2050px', 850: '2150px', other: '2300px' }
    }
    const APxSize = {
        "en": { 1350: '2600px', 850: '2450px', other: '2350px' },
        "zh": { 1350: '2550px', 850: '2350px', other: '2350px' },
        "ja": { 1350: '2600px', 850: '2450px', other: '2400px' }
    }
    // JS c2
    let previousMousePosition = null;
    const C2HandleOnMouseEnter = (event) => {
        const pc2Element = document.getElementById("pc2");
        const rect = pc2Element.getBoundingClientRect();
        const { top, left, bottom, right } = rect;
        const isOutside =
            previousMousePosition === null ||
            (previousMousePosition.x < left ||
                previousMousePosition.x > right ||
                previousMousePosition.y < top ||
                previousMousePosition.y > bottom);
        if (isOutside) {
            HandelPxSize(pc2Element, i18n.language, BPxSize)
        }
        previousMousePosition = { x: event.clientX, y: event.clientY };
        setC2Switch(true);
        const pc3Element = document.getElementById("pc3");
        pc3Element.addEventListener("mouseenter", C3HandleOnMouseEnter)
        pc3Element.addEventListener("mouseleave", C3HandleOnMouseLeave)
    };

    // JS c3
    const C3HandleOnMouseEnter = () => {
        const pc3Element = document.getElementById('pc3');
        const pc3ImgElement = document.getElementById('pc3-img');
        pc3Element.style.gridColumn = '1 / span 6';
        HandelPxSize(pc3Element, i18n.language, APxSize)
        pc3ImgElement.style.width = '100%';
        pc3ImgElement.style.height = '200px';
        document.getElementById('it-btn').style.margin = '0 0 3% 0';
        const pc2Element = document.getElementById("pc2");
        if (pc2Element.style.height > '1000px') {
            setCheckC3(true)
        }
    }

    const C3HandleOnMouseLeave = () => {
        const pc3Element = document.getElementById('pc3');
        const pc3ImgElement = document.getElementById('pc3-img');
        HandelPxSize(pc3Element, i18n.language, BPxSize)
        pc3Element.style.gridColumn = '5 / span 2';
        pc3ImgElement.style.width = '300px';
        pc3ImgElement.style.height = '100%';
        setCheckC3(false)
    }

    const HandelPxSize = (Element, lng, PxSize) => {
        const match1350 = window.matchMedia("(min-width: 1350px)").matches;
        const match850 = window.matchMedia("(min-width: 850px)").matches;
        if (match1350) {
            Element.style.height = PxSize[lng][1350]
        } else if (match850) {
            Element.style.height = PxSize[lng][850]
        } else {
            Element.style.height = PxSize[lng]['other']
        }
    }

    //----------------------------------------------------------------
    useEffect(() => {
        const handleLanguageChange = (lng) => {
            setC2Switch(false);
            const pc2Element = document.getElementById("pc2");
            const pc3Element = document.getElementById("pc3");
            HandelPxSize(pc2Element, lng, BPxSize)
            HandelPxSize(pc3Element, lng, BPxSize)
        };
        i18n.on('languageChanged', handleLanguageChange);
        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n]);
    //----------------------------------------------------------------

    return (
        <>
            {/* C2 */}
            <C2 className="grid-item" id="pc2" onMouseEnter={C2HandleOnMouseEnter}>
                <InformationTitle className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""}>{t("title")}</InformationTitle>
                <Horizontal>
                    <DataPart>
                        {/* Birthday */}
                        <DataItem>
                            <ItemLogo><FaBirthdayCake /></ItemLogo>
                            <ItemH4a>1994-12-07  (30)</ItemH4a>
                        </DataItem>
                        {/* Country */}
                        <DataItem>
                            <ItemLogo><TbWorld /></ItemLogo>
                            <ItemH4a className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""}>{t("country")}</ItemH4a>
                        </DataItem>
                        {/* Location */}
                        <DataItem>
                            <ItemLogo><MdLocationPin /></ItemLogo>
                            <ItemH4a className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""}>{t("location")}</ItemH4a>
                        </DataItem>
                        {/* Email */}
                        <DataItem>
                            <ItemLogo><MdEmail /></ItemLogo>
                            <ItemH4a>Cyrusmanosa@gmail.com</ItemH4a>
                        </DataItem>
                        {/* Hobby */}
                        <DataItem>
                            <ItemLogo><IoHeart /></ItemLogo>
                            <ItemH4a className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""}>{t("hobby")}</ItemH4a>
                        </DataItem>
                    </DataPart>
                    {/* pic */}
                    <Pfimg src={PortfoiloImg} alt="Img" className="PortfoiloImg" onMouseEnter={C2HandleOnMouseEnter} />
                </Horizontal>

                {/* Introduce */}
                <DataPartB>
                    <ItemLogo><BsFillFilePersonFill /></ItemLogo>
                    <ItemH4b className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700 intro-TcAndJa-line-height " : "intro-Eng-line-height"}>{t("itemIntro")} :</ItemH4b>
                </DataPartB>
                <IntroduceData className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700 intro-TcAndJa-line-height " : "intro-Eng-line-height"}>{t("intro")}</IntroduceData>

                {/* Extend */}
                {c2switch ? (
                    <div id="extend"><Tc /></div>
                ) : (
                    <div id="extend"></div>
                )}
            </C2 >

            {/* C3 */}
            <C3 className="grid-item" id="pc3">
                <ImgBtn id="pc3-img">
                    <ItBtn id="it-btn">
                        <p>IT</p>
                    </ItBtn>
                </ImgBtn>
                {/* <div id="pc3-part2"></div> */}
                {checkC3 ?
                    (
                        <div id="pc3-part2"><It /></div>
                    ) : (
                        <div id="pc3-part2"></div>
                    )
                }
            </C3 >
        </>
    )
}
export default WPart2;


// Emotion C3
const C3 = styled.div`
        grid-column: 5 / span 2;
        grid-row: 2;
        animation: all 0.5s ease-in-out forwards;
        z-index: 999;
    `
const ImgBtn = styled.div`
        height: 100%;
        background-image: url(${ItBG});
        background-repeat: repeat;
        background-size: cover;
        background-position: center;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        @media (min-width: 1200px) {
            width: 300px;
        }
    `
const ItBtn = styled.div`
        color: #fff;
        mix-blend-mode: overlay;
        filter: brightness(3);
        p {
            margin: auto;
        }
        font-size: 1200%;
        @media (min-width: 1200px) {
            font-size: 1500%;
        }
    `
// Emotion C2
const C2 = styled.div`
        grid-column: 1 / span 4;
        grid-row: 2;
        transition: all 0.5s ease;
        height:600px;
        @media (min-width:975px){
            height: 575px;
        }
    `
const InformationTitle = styled.div`
        text-align: center;
        margin: 1% 0.5%;
        font-size: 200%;
    `
const Horizontal = styled.div`
        display: flex;
        align-items: center;
        justify-items: center;
        justify-content: space-between;
        margin-bottom: 2%;
    `
const DataPart = styled.div`
        display: flex;
        flex-direction: column;
        margin-left:5%;
        @media (min-width:1000px){
            margin-left: 10%;
        }
    `
const DataItem = styled.div`
        font-size: 130%;
        display: flex;
        align-items: center;
        padding: 0;
        margin: 2% 0;
    `
const ItemLogo = styled.div`
        font-size: 130%;
        margin: 0;
    `
const ItemH4a = styled.div`
        margin: 0 0 0 5%;
    `
const ItemH4b = styled.div`
        margin: 0 0 0 2.5%;
    `
const Pfimg = styled.img`
        width: 25%;
        border: 3px solid #000;
        margin:0 auto 15% auto;
        @media (min-width:1000px){
            margin: auto;
        }
    `
const DataPartB = styled.div`
        font-size: 130%;
        display: flex;
        margin-left: 10%;
        margin-top: 5%;
        padding: 0;
    `
const IntroduceData = styled.div`
        margin: 0.5% 0 5% 12%;
        text-align: justify;
        font-size: 115%;
        width: 80%;
    `