import { useTranslation } from "react-i18next";
import { useState } from "react";
import styled from '@emotion/styled';
import I4 from '../../assets/Project/Logo/Golang_Logo.png';
import I6 from '../../assets/Project/Logo/Github_Logo.png';
import I8 from '../../assets/Project/Logo/Figma_Logo.png';
import I9 from '../../assets/Project/Logo/React_Logo.png';
import I10 from '../../assets/Project/Logo/Firebase_Logo.png';
import I11 from '../../assets/Project/Logo/AWS_Logo.png';
import G2 from '../../assets/Project/CareConnect/Group5.png';
import L1 from '../../assets/Project/CareConnect/Level1.png';
import L2 from '../../assets/Project/CareConnect/Level2.png';
import Web from '../../assets/Project/CareConnect/Web.png';
import CCLogo from '../../assets/Project/CareConnect/logo.png';

import Portfoilo2024_Cap from '../../assets/WebVersion1.png'
import CareConnect_Cap from '../../assets/CareConnect_Cap.png';

import {
    ItemArea, TitleH2, ItemForShowArea, ClickMsg,
    SystemImg, SystemComposition, Software,
    ContentArea, BackgroundBlur
} from './IT-Emotion'

function ITYear3() {
    const { t, i18n } = useTranslation();
    // Year 3
    const { y3p_title, y3p_intro } = t("portfolio.year3.portfolio2024");
    const { y3c_title, y3c_intro1, y3c_intro2, y3c_intro3, y3c_title3, y3c_workloadTitle, y3c_workload } = t("portfolio.year3.careconnect");
    // 1
    const [year3_P_Data, setyear3_P_Data] = useState(false)
    const [year3_P_Bg, setYear3_P_Bg] = useState({
        backgroundImage: `url(${Portfoilo2024_Cap})`,
        backgroundRepeat: 'repeat',
        backgroundPositionX: 'center',
        backgroundPositionY: '10%',
        backgroundSize: 'cover',
        filter: 'blur(3px)',
        transition: 'all 1s ease',
    });
    const HandleYear3P = () => {
        if (!year3_P_Data) {
            setYear3_P_Bg({ height: '300px', background: '#fff' })
            setyear3_P_Data(true);
        } else {
            setYear3_P_Bg({
                backgroundImage: `url(${Portfoilo2024_Cap})`,
                backgroundRepeat: 'repeat',
                backgroundPositionX: 'center',
                backgroundPositionY: '10%',
                backgroundSize: 'cover',
                filter: 'blur(3px)',
                transition: 'all 1s ease'
            });
            setyear3_P_Data(false);
        }
    }

    // 2
    const [year3_C_Data, setyear3_C_Data] = useState(false)
    const [year3_C_Bg, setYear3_C_Bg] = useState({
        backgroundImage: `url(${CareConnect_Cap})`,
        backgroundRepeat: 'repeat',
        backgroundPositionX: 'center',
        backgroundPositionY: '50%',
        backgroundSize: 'cover',
        filter: 'blur(3px)',
        transition: 'all 1s ease',
    });

    const HandleYear3C = () => {
        if (!year3_C_Data) {
            setYear3_C_Bg({ height: '1600px', background: '#fff' })
            setyear3_C_Data(true);
        } else {
            setYear3_C_Bg({
                backgroundImage: `url(${CareConnect_Cap})`,
                backgroundRepeat: 'repeat',
                backgroundPositionX: 'center',
                backgroundPositionY: '50%',
                backgroundSize: 'cover',
                filter: 'blur(3px)',
                transition: 'all 1s ease',
            })
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
            <ItemArea className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""} onClick={HandleYear3P}>
                <BackgroundBlur style={year3_P_Bg} />
                <ContentArea>
                    <TitleH2 style={{ zIndex: 999 }}>{y3p_title}</TitleH2>
                    {year3_P_Data ? (
                        <ItemForShowArea>
                            <Year3_P_Msg>
                                {y3p_intro}
                            </Year3_P_Msg>
                        </ItemForShowArea>
                    ) : (
                        <ClickMsg>Click Me</ClickMsg>
                    )}
                </ContentArea>
            </ItemArea>

            {/* Care Connect */}
            <ItemArea className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""} onClick={HandleYear3C}>
                <BackgroundBlur style={year3_C_Bg} />
                <ContentArea>
                    <TitleH2>{y3c_title}</TitleH2>
                    {year3_C_Data ? (
                        <ItemForShowArea>
                            <Year3P1>
                                <Year3P1Title>
                                    <img src={CCLogo} alt="Logo" width="250px" />
                                    <h1>{y3c_intro1}</h1>
                                </Year3P1Title>

                                <Year3ImgArea>
                                    <img src={L1} alt="Level1" />
                                    <img src={L2} alt="Level2" />
                                    <img src={Web} alt="Level2" />
                                </Year3ImgArea>
                            </Year3P1>

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
                                                </td>
                                                <td>
                                                    <img src={I10} width="110px" alt="Firebase" />
                                                </td>
                                                <td>
                                                    <img src={I8} width="80px" alt="Figma" />
                                                    <img src={I6} width="200px" alt="Github" style={{ padding: '10px 0' }} />
                                                    <img src={I11} width="120px" alt="AWS" />
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
                </ContentArea>
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
const Year3P1 = styled.div`
    display: grid;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin:0 auto 2.5% auto;
`
const Year3P1Title = styled.div`
    margin-button:2.5%; 
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
            height: 200px;
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