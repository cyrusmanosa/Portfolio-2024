import { useTranslation } from "react-i18next";
import { useState } from "react";
import I4 from '../../../assets/Project/Logo/Golang_Logo.png';
import I6 from '../../../assets/Project/Logo/Github_Logo.png';
import I8 from '../../../assets/Project/Logo/Figma_Logo.png';
import I9 from '../../../assets/Project/Logo/React_Logo.png';
import I10 from '../../../assets/Project/Logo/Firebase_Logo.png';
import I11 from '../../../assets/Project/Logo/AWS_Logo.png';
import I12 from '../../../assets/Project/Logo/NFC_Logo.png';
import G2 from '../../../assets/Project/CareConnect/Group5.png';
import L1 from '../../../assets/Project/CareConnect/Level1.png';
import L2 from '../../../assets/Project/CareConnect/Level2.png';
import Web from '../../../assets/Project/CareConnect/Web.png';
import CCLogo from '../../../assets/Project/CareConnect/logo.png';

import {
    ItemArea, TitleH2, ItemForShowArea, ClickMsg,
    SystemImg, SystemComposition, Software,
    Year3_P_Msg, Year3P1Title, Year3ImgArea, Year3P2Title, Year3P2, Year3SoftwareName
} from './Emotion'

function ITYear3() {
    const { t, i18n } = useTranslation();
    // Year 3
    const { title, intro } = t("portfolio.year3.portfolio2024");
    const { c_title, c_intro1, c_intro2, c_intro3, c_title3, c_workloadTitle, c_workload } = t("portfolio.year3.careconnect");
    
    // 1
    const [P_H, setP_H] = useState(100)
    const [P_Data, setP_Data] = useState(false)

    // 2
    const [C_H, setC_H] = useState(100)
    const [C_Data, setC_Data] = useState(false)
    const PortfoiloHandle = () => {
        if (P_H == 100) {
            setP_H(P_H + 100)
            setP_Data(true);
        } else {
            setP_H(100)
            setP_Data(false);
        }
    }

    const CareConnectHandle = () => {
        const match3200 = window.matchMedia("(min-width: 3200px)").matches;
        const addHeight = i18n.language === 'ja'
            ? match3200 ? 1350 : 1300
            : match3200 ? 1300 : 1275
        if (C_H == 100) {
            setC_H(C_H + addHeight)
            setC_Data(true);
        } else {
            setC_H(100)
            setC_Data(false);
        }
    }

    const front = t("frontTitle");
    const back = t("backTitle");
    const db = t("dbTitle");
    const other = t("otherTitle");
    return (
        <>
            {/* Portfoilo */}
            <ItemArea className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""} onClick={PortfoiloHandle} style={{ height: `${P_H}px` }}>
                <TitleH2>{title}</TitleH2>
                {P_Data ? (
                    <ItemForShowArea>
                        <Year3_P_Msg>
                            {intro}
                        </Year3_P_Msg>
                    </ItemForShowArea>
                ) : (
                    <ClickMsg>Click Me</ClickMsg>
                )}
            </ItemArea>

            {/* Care Connect */}
            <ItemArea className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""} onClick={CareConnectHandle} style={{ height: `${C_H}px` }}>
                <TitleH2>{c_title}</TitleH2>
                {C_Data ? (
                    <ItemForShowArea>
                        <Year3P1Title>
                            <img src={CCLogo} alt="Logo" width="200px" />
                            <h1>{c_intro1}</h1>
                        </Year3P1Title>

                        <Year3ImgArea>
                            <img src={L1} alt="Level1" />
                            <img src={L2} alt="Level2" />
                            <img src={Web} alt="Web" />
                        </Year3ImgArea>

                        <Year3P2Title>{c_intro2}</Year3P2Title>

                        <Year3P2>
                            <h3>{c_intro3}</h3>
                        </Year3P2>

                        <h3 style={{ margin: 0 }}>{c_workloadTitle} : </h3>
                        <h2 style={{ margin: 0 }}>{c_workload}</h2>

                        {/* System */}
                        <SystemImg>
                            <SystemComposition>
                                <p>{c_title3}</p>
                                <img src={G2} width="65%" alt="online System" />
                            </SystemComposition>

                            <Software>
                                <table>
                                    <thead>
                                        <tr>
                                            <Year3SoftwareName>{front}</Year3SoftwareName>
                                            <Year3SoftwareName>{back}</Year3SoftwareName>
                                            <Year3SoftwareName>{db}</Year3SoftwareName>
                                            <Year3SoftwareName>{other}</Year3SoftwareName>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={I9} width="120px" alt="React" />
                                            </td>
                                            <td>
                                                <img src={I4} width="120px" alt="Golang" />
                                                <img src={I11} width="120px" alt="AWS" style={{ padding: '10px 0' }} />
                                            </td>
                                            <td>
                                                <img src={I10} width="110px" alt="Firebase" />
                                            </td>
                                            <td>
                                                <img src={I8} width="80px" alt="Figma" />
                                                <img src={I6} width="150px" alt="Github" style={{ padding: '10px 0' }} />
                                                <img src={I12} width="60px" alt="NFC" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Software>
                        </SystemImg>
                    </ItemForShowArea>
                ) : (
                    <ClickMsg>Click Me</ClickMsg>
                )}
            </ItemArea>
        </>
    );
}

export default ITYear3;
