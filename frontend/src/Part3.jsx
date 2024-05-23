import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { SiWantedly } from "react-icons/si";
import styled from '@emotion/styled'
import BgC4 from './assets/c4.png';
import { useTranslation } from "react-i18next";


function Part3() {
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
        line-height: 105%;
        margin: -1.5% 0 0 0;
        font-size: 350%;
        @media(min-width:850px){
            font-size: 400%;
        }
        @media(min-width:1200px){
            font-size: 450%;
        }
    `
    const Title2 = styled.p`
        margin: -3% 0 0 0;
        font-size: 250%;
        @media(min-width:850px){
            font-size: 300%;
        }
    `
    const Img2Btn = styled.div`
        width: 100%;
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
        align-items: center;
        justify-content: center;
        margin: 8% 0 0 0;
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
        transition: all 1s ease-in-out;
    `
    const { t } = useTranslation();
    return (
        <>
            {/* C4 */}
            <C4 className="grid-item" onClick={handleOpenNewTab}>
                <Img2Btn>
                    <Ver1Btn>
                        <Title1>Video Creator</Title1>
                        <Title2>&#123;Portfolio Ver.1 &#125;</Title2>
                    </Ver1Btn>
                </Img2Btn>
            </C4>
            {/* C5 */}
            <C5 className="grid-item">
                <Sns>
                    <Icon href="https://github.com/cyrusmanosa" target="_blank" rel="noopener noreferrer"><FaGithub /></Icon>
                    <Icon href="https://www.facebook.com/man.chun.779/" target="_blank" rel="noopener noreferrer"><FaFacebook /></Icon>
                    <Icon href="https://www.instagram.com/cyrus_mkc/" target="_blank" rel="noopener noreferrer"><FaInstagram /></Icon>
                    <Icon href="https://www.linkedin.com/in/cyrusmanmkc" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Icon>
                    <Icon href="https://www.wantedly.com/id/CyrusMan" target="_blank" rel="noopener noreferrer"><SiWantedly /></Icon>
                    <Icon href={t("cv")} target="_blank"><IoDocumentText /></Icon>
                </Sns>
            </C5>
        </>
    );
}
export default Part3;
