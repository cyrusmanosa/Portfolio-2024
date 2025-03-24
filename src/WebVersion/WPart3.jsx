import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { SiWantedly } from "react-icons/si";
import { useTranslation } from "react-i18next";
import styled from '@emotion/styled'
import BgC4 from '../assets/c4.png';


function WPart3() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();
    const handleOpenNewTab = () => {
        window.open("https://profile-ce15f.web.app/", "_blank");
    };
    // C4
    const C4 = styled.div`
        grid-column: 1 / span 3;
        grid-row: 4;
        transition: all 0.5s ease;
    `
    const Ver1Btn = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;
        mix-blend-mode: difference;
        filter: brightness(5);
        z-index: 1;
    `
    const Title1 = styled.p`
        line-height: 50%;
        text-align: center;
        font-size: 300%;
        margin: 2.5%;
        @media(min-width:850px){
            font-size: 350%;
        }
        @media(min-width:1200px){
            font-size: 400%;
        }
            span{
                font-size:60%;
            }
    `

    const Img2Btn = styled.div`
        background-image: url(${BgC4});
        background-repeat: repeat;
        background-position: 50% 30%;
        backdrop-filter: brightness(1.2);
        animation: move 100s;
        border: none;
        padding: 0;
        @keyframes move {
            75% {
                background-position: 50% 80%;
            }
        }
    `
    // C5
    const Sns = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        @media(max-width:2200px){
        margin:6% 0 0 0;
        }
        margin:3% 0 0 0;
    }
    `
    const Icon = styled.a`
        display: flex;
        align-items: center;
        font-size: 250%;
        text-decoration: none;
        margin: 0 2%;
        &:link,
        &:visited,
        &:hover,
        &:active {
            color: #000;
        }
    `
    const C5 = styled.div`
        grid-column: 4 / span 3;
        grid-row: 4;
        align-items: center;
        text-align: center;
        transition: all 1s ease-in-out;
    `
    const Copyright = styled.small`
        display:flex;
        justify-content:center;
        @media(max-width:2200px){
            margin:2.5% auto 0 auto;
            }
            margin:2.5% auto 2.5% auto;
    `
    return (
        <>
            {/* C4 */}
            <C4 className="grid-item" onClick={handleOpenNewTab}>
                <Img2Btn>
                    <Ver1Btn>
                        <Title1>Video Creator<br /><span>Portfolio Ver.1</span></Title1>
                    </Ver1Btn>
                </Img2Btn>
            </C4>
            {/* C5 */}
            <C5 className="grid-item">
                <Sns>
                    <Icon href="https://github.com/cyrusmanosa" target="_blank" rel="noopener noreferrer"><FaGithub /></Icon>
                    <Icon href="https://www.facebook.com/man.chun.779/" target="_blank" rel="noopener noreferrer"><FaFacebook /></Icon>
                    <Icon href="https://www.instagram.com/c_mkc_1994/" target="_blank" rel="noopener noreferrer"><FaInstagram /></Icon>
                    <Icon href="https://www.linkedin.com/in/cyrusmanmkc" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Icon>
                    <Icon href={t("cv")} target="_blank"><IoDocumentText /></Icon>
                </Sns>

                <Copyright>Copyright&nbsp;&copy;&nbsp;{currentYear}&nbsp;Cyrus Man. All rights reserved.</Copyright>
            </C5>
        </>
    );
}
export default WPart3;
