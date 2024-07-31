import { useTranslation } from "react-i18next";
import { useState } from "react";
import styled from '@emotion/styled';
import I4 from '../../assets/Project/Logo/Golang_Logo.png';
import I6 from '../../assets/Project/Logo/Github_Logo.png';
import I8 from '../../assets/Project/Logo/Figma_Logo.png';
import I9 from '../../assets/Project/Logo/React_Logo.png';
import I10 from '../../assets/Project/Logo/Firebase_Logo.png';
import I11 from '../../assets/Project/Logo/AWS_Logo.png';
import I12 from '../../assets/Project/Logo/NFC_Logo.png';
import G2 from '../../assets/Project/CareConnect/Group5.png';
import L1 from '../../assets/Project/CareConnect/Level1.png';
import L2 from '../../assets/Project/CareConnect/Level2.png';
import Web from '../../assets/Project/CareConnect/Web.png';
import CCLogo from '../../assets/Project/CareConnect/logo.png';

import {
    ItemArea, TitleH2, ItemForShowArea, ClickMsg,
    SystemImg, SystemComposition, Software
} from './IT-Emotion'

function ITYear3() {
    const { t, i18n } = useTranslation();
    // Year 3
    const { y3p_title, y3p_intro } = t("portfolio.year3.portfolio2024");
    const { y3c_title, y3c_intro1, y3c_intro2, y3c_intro3, y3c_title3, y3c_workloadTitle, y3c_workload } = t("portfolio.year3.careconnect");
    // 1
    const [year3_P_H, setYear3_P_H] = useState(100)
    const [year3_P_Data, setyear3_P_Data] = useState(false)
    // 2
    const [year3_C_H, setYear3_C_H] = useState(100)
    const [year3_C_Data, setyear3_C_Data] = useState(false)
    const HandleYear3P = () => {
        if (year3_P_H == 100) {
            setYear3_P_H(year3_P_H + 100)
            setyear3_P_Data(true);
        } else {
            setYear3_P_H(100)
            setyear3_P_Data(false);
        }
    }
    const HandleYear3C = () => {
        if (year3_C_H == 100) {
            setYear3_C_H(year3_C_H + 1350)
            setyear3_C_Data(true);
        } else {
            setYear3_C_H(100)
            setyear3_C_Data(false);
        }
    }
    const front = t("frontTitle");
    const back = t("backTitle");
    const db = t("dbTitle");
    const other = t("otherTitle");
    return (
        <>
            {/* Portfoilo */}
            <ItemArea className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""} onClick={HandleYear3P} style={{ height: `${year3_P_H}px` }}>
                <TitleH2>{y3p_title}</TitleH2>
                {year3_P_Data ? (
                    <ItemForShowArea>
                        <Year3_P_Msg>
                            {y3p_intro}
                        </Year3_P_Msg>
                    </ItemForShowArea>
                ) : (
                    <ClickMsg>Click Me</ClickMsg>
                )}
            </ItemArea>

            {/* Care Connect */}
            <ItemArea className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""} onClick={HandleYear3C} style={{ height: `${year3_C_H}px` }}>
                <TitleH2>{y3c_title}</TitleH2>
                {year3_C_Data ? (
                    <ItemForShowArea>
                        <Year3P1Title>
                            <img src={CCLogo} alt="Logo" width="200px" />
                            <h1>{y3c_intro1}</h1>
                        </Year3P1Title>

                        <Year3ImgArea>
                            <img src={L1} alt="Level1" />
                            <img src={L2} alt="Level2" />
                            <img src={Web} alt="Level2" />
                        </Year3ImgArea>

                        <Year3P2Title>{y3c_intro2}</Year3P2Title>

                        <Year3P2>
                            <h3>{y3c_intro3}</h3>
                        </Year3P2>

                        <h3 style={{ margin: 0 }}>{y3c_workloadTitle} : </h3>
                        <h2 style={{ margin: 0 }}>{y3c_workload}</h2>

                        {/* System */}
                        <SystemImg>
                            <SystemComposition>
                                <p>{y3c_title3}</p>
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

const Year3_P_Msg = styled.p`
      text-align: center;
      width: 85%;
      margin: 0 auto 15px auto;
      font-size: 16px;
`

const Year3P1Title = styled.div`
    margin:2.5% 0; 
    letterSpacing: 3;
    h1{
        margin:0;
        font-size:30px;
    }
`
const Year3ImgArea = styled.div`
    padding: 0 10px;
    img {
        height: 100px;
        object-fit: cover;
        margin: 0 5px;
    }
    @media (min-width: 1350px) {
        padding: 0 20px;
        img {
            height: 150px;
            object-fit: cover;
        }
    }
`
const Year3P2Title = styled.h2`
        color: #B22222;
        margin: 0;
        padding: 0;
        line-height: 40px;
        font-weight: 900;
`

const Year3P2 = styled.div`
    background-color: #B22222;
    width: 75%;
    margin: 2% auto;
    padding: 10px 20px;
    border-radius: 10px;
    h3 {
        color: white;
    }
`

const Year3SoftwareName = styled.th`
    color: #B22222;
    font-weight: 900;
    font-size: 25px;
    width: 200px;
`


