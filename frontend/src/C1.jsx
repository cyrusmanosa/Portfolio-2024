import { useState } from "react";
import PropTypes from 'prop-types'; // 引入 PropTypes


function C1({ onLanguageChange }) {
    C1.propTypes = {
        onLanguageChange: PropTypes.func.isRequired,
    };

    const [language, setLanguage] = useState("en");
    const userData = {
        en: {
            Name: "Man Ka Chun",
            NickName: "Cyrus",

        },
        tc: {
            Name: "文家俊",

        },
        ja: {
            Name: "ブンカシュン",
            NickName: "文家俊",

        }
    };


    const handleChangeLanguage = (lang) => {
        setLanguage(lang);
        onLanguageChange(lang);
    };

    return (
        <div className="grid-item c1">
            <div className={language === "en" ? "TopEngName" : "TopName"}>
                {userData[language].NickName
                    ? `${userData[language].Name} - ${userData[language].NickName}`
                    : userData[language].Name}
            </div>
            <div className="Language-bar">
                <button className={language === "tc" ? "Eng-btn btn diff-color" : "Eng-btn btn"} onClick={() => handleChangeLanguage("tc")}>TC</button>
                <button className={language === "ja" ? "Ja-btn btn diff-color" : "Ja-btn btn"} onClick={() => handleChangeLanguage("ja")}>JA</button>
                <button className={language === "en" ? "Tc-btn btn diff-color" : "Tc-btn btn"} onClick={() => handleChangeLanguage("en")}>EN</button>
            </div>
        </div>
    );
}

export default C1;
