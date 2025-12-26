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

    const socialLinks = [
        { href: "https://github.com/cyrusmanosa", icon: FaGithub },
        { href: "https://www.facebook.com/man.chun.779/", icon: FaFacebook },
        { href: "https://www.instagram.com/c_mkc_1994/", icon: FaInstagram },
        { href: "https://www.linkedin.com/in/cyrusmanmkc", icon: FaLinkedin },
    ];

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
                    {socialLinks.map(({ href, icon: IconComponent }) => (
                        <Icon
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={IconComponent.displayName || "Social link"}
                        >
                            <IconComponent />
                        </Icon>
                    ))}
                    <Icon href={t("cv")} target="_blank"><IoDocumentText /></Icon>
                </Sns>
                <Copyright>Copyright&nbsp;&copy;&nbsp;{currentYear}&nbsp;Cyrus Man. All rights reserved.</Copyright>
            </C5>
        </>
    );
}

export default WPart3;
