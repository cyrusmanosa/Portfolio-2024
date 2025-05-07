import { useTranslation } from 'react-i18next'
import { C1, LanguageBar } from "./Emotion"
function WPart1() {
    const { i18n, t } = useTranslation();
    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <C1 className="grid-item">
            <div className={i18n.language === "en" ? "TopEngName" : "TopName"}>
                {t("name")}
            </div>
            <LanguageBar>
                <button className={i18n.language === "zh" ? "diff-color btn" : "btn"} onClick={() => handleChangeLanguage("zh")}>ZH</button>
                <button className={i18n.language === "ja" ? "diff-color btn" : "btn"} onClick={() => handleChangeLanguage("ja")}>JA</button>
                <button className={i18n.language === "en" ? "diff-color btn" : "btn"} onClick={() => handleChangeLanguage("en")}>EN</button>
            </LanguageBar>
        </C1>
    );
}

export default WPart1;

