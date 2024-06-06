import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { SiWantedly } from "react-icons/si";
import { useTranslation } from "react-i18next";
import styled from '@emotion/styled'

function PPart5() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const Sns = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
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
        padding-bottom: 10%;
        p{
            margin: -1%;
            padding: 0;
            font-size:90%;
        }
    `
    const Message = styled.p`
        text-align:center;
        margin: 0;
        padding-top: 5%;
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
            <Message>Have a nice day!!</Message>
            <a href="tel:08094176170">Phone</a>
            <Copyright>
                Copyright&nbsp;&copy;&nbsp;{currentYear}&nbsp;Cyrus Man.&nbsp;All rights reserved.
            </Copyright>
        </>
    );
}
export default PPart5;