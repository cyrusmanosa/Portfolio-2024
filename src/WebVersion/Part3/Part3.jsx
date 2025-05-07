import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { C4, Ver1Btn, Title1, Img2Btn, Sns, Icon, C5, Copyright } from "./Emotion";

function WPart3() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();
    const handleOpenNewTab = () => {
        window.open("https://profile-ce15f.web.app/", "_blank");
    };

    return (
        <>
            {/* C4 */}
            <C4 className="grid-item" onClick={handleOpenNewTab}>
                <Img2Btn>
                    <Ver1Btn>
                        <Title1>Video Creator<br /><span>Portfolio</span></Title1>
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
