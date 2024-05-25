import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { SiWantedly } from "react-icons/si";
import { useTranslation } from "react-i18next";
import styled from '@emotion/styled'

function PPart4() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const Sns = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-bottom: 2%;
    `
    const Icon = styled.a`
        display: flex;
        align-items: center;
        font-size: 175%;
        text-decoration: none;
        margin: 0 2%;
        &:link,
        &:visited,
        &:hover,
        &:active {
            color: #000;
        }
    `
    const Copyright = styled.small`
        display:grid;
        justify-content:center;
        text-align:center;
        padding: 7% 0 10% 0 ;
        p{
            margin: -1%;
            padding: 0;
        }
    `
    return (
        <>
            <Sns>
                <Icon href="https://github.com/cyrusmanosa" target="_blank" rel="noopener noreferrer"><FaGithub /></Icon>
                <Icon href="https://www.facebook.com/man.chun.779/" target="_blank" rel="noopener noreferrer"><FaFacebook /></Icon>
                <Icon href="https://www.instagram.com/cyrus_mkc/" target="_blank" rel="noopener noreferrer"><FaInstagram /></Icon>
                <Icon href="https://www.linkedin.com/in/cyrusmanmkc" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Icon>
                <Icon href="https://www.wantedly.com/id/CyrusMan" target="_blank" rel="noopener noreferrer"><SiWantedly /></Icon>
                <Icon href={t("cv")} target="_blank"><IoDocumentText /></Icon>
            </Sns>
            <Copyright>
                <p>Copyright&nbsp;&copy;&nbsp;{currentYear}&nbsp;Cyrus Man.</p>
                <p>All rights reserved.</p>
            </Copyright>
        </>
    );
}
export default PPart4;