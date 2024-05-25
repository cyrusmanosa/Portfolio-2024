import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'

function WPart1() {
    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    const { i18n, t } = useTranslation();
    const LanguageBar = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: end;
        position: relative;
        width: 20%;
        margin: 0 1% 0 0;
    `
    const C1 = styled.div`
        grid-column: 1 / span 6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--bgc);
    `
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

