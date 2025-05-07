import { MdEmail, MdLocationPin } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaBirthdayCake } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { useTranslation } from 'react-i18next'
import PortfoiloImg from '../assets/Portfoilo.jpeg'
import styled from '@emotion/styled'

function PPart1() {
    const { t, i18n } = useTranslation();
    const Pic = styled.img`
        display: block;
        margin-left: auto;
        margin-right: auto;
        width:20%;
        border: 3px solid #000;
    `
    const AllName = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin: 5% 0;
        text-transform: uppercase;
        h2,h3{
            letter-spacing: 10%;
            margin: -0.5%;
        }
    `
    const DataPart = styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 5%;
        margin-bottom: 5%;
    `
    const DataItem = styled.div`
        font-size: 80%;
        display: flex;
        padding: 0;
        margin: 0;
    `
    const DataItemEmail = styled.div`
        font-size: 100%;
        display: flex;
        padding: 0;
        margin-left: 5%;
    `
    const ItemLogo = styled.div`
        font-size: 100%;
        margin: 0;
    `
    const ItemH4a = styled.div`
        margin: -0.5% 0 0 2%;
    `

    return (
        <>
            <Pic src={PortfoiloImg} alt="" />
            <AllName>
                <h2>Man Ka Chun</h2>
                <h3>Cyrus</h3>
            </AllName>
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
                {/* Hobby */}
                <DataItem>
                    <ItemLogo><IoHeart /></ItemLogo>
                    <ItemH4a className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""}>{t("hobby")}</ItemH4a>
                </DataItem>
                {/* Email */}
            </DataPart>

            <DataItemEmail>
                <ItemLogo><MdEmail /></ItemLogo>
                <ItemH4a>cyrusman1207@gmail.com</ItemH4a>
            </DataItemEmail>
        </>
    );
}
export default PPart1;