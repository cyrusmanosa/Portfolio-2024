import { useTranslation } from "react-i18next";
import { useState } from "react";
import G1 from '../../../assets/Project/DatingDate/Group1.png';
import DD1 from '../../../assets/Project/DatingDate/DatingDate01.png';
import I1 from '../../../assets/Project/Logo/Xcode_Logo.png';
import I2 from '../../../assets/Project/Logo/Psql_Logo.png';
import I3 from '../../../assets/Project/Logo/Docker_Logo.png';
import I4 from '../../../assets/Project/Logo/Golang_Logo.png';
import I5 from '../../../assets/Project/Logo/Grpc_Logo.png';
import I6 from '../../../assets/Project/Logo/Github_Logo.png';
import I7 from '../../../assets/Project/Logo/Flutter_Logo.png';
import I8 from '../../../assets/Project/Logo/Figma_Logo.png';

import {
    ItemArea, TitleH2, ItemForShowArea, ClickMsg, Intro,
    SystemImg, SystemComposition, Software,
    Year2SoftwareName, Year2P1, Year2P1Title, Year2P2Title
} from './Emotion'

function ITYear2() {
    const { t, i18n } = useTranslation();
    
    // Year 2
    const {
        title,
        intro1a, intro1b, intro1c,
        title2, intro2a, intro2b,
        title3
    } = t("portfolio.year2");

    const front = t("frontTitle");
    const back = t("backTitle");
    const db = t("dbTitle");
    const other = t("otherTitle");
    const [year2H, setYear2H] = useState(100)
    const [year2Data, setYear2Data] = useState(false)

    const HandleYear2 = () => {
        const match3200 = window.matchMedia("(min-width: 3200px)").matches;
        const addHeight = i18n.language === 'ja'
            ? match3200 ? 1325 : 1250
            : match3200 ? 1250 : 1225
            if (year2H == 100) {
                setYear2H(year2H + addHeight)
                setYear2Data(true);
            } else {
                setYear2H(100)
                setYear2Data(false);
            }
    }

    return (
        <ItemArea className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""} onClick={HandleYear2} style={{ height: `${year2H}px` }}>
            <TitleH2>{title}</TitleH2>
            {year2Data ? (
                <ItemForShowArea>
                    <Year2P1>
                        <div className="item">
                            <img src={DD1} alt="Dating Date Project" />
                        </div>
                        <div className="item">
                            <Year2P1Title>
                                <h1>
                                    {intro1a}<br /><span>{intro1b}</span>{intro1c}
                                </h1>
                                <h3>{title2}</h3>
                                <Intro>
                                    {intro2a}
                                </Intro>
                            </Year2P1Title>
                        </div>
                    </Year2P1>

                    <Year2P2Title>
                        <h3>{intro2b}</h3>
                    </Year2P2Title>

                    <SystemImg>
                        <SystemComposition>
                            <p>{title3}</p>
                            <img src={G1} width="60%" alt="Local System" />
                        </SystemComposition>

                        <Software>
                            <table>
                                <thead>
                                    <tr>
                                        <Year2SoftwareName>{front}</Year2SoftwareName>
                                        <Year2SoftwareName>{back}</Year2SoftwareName>
                                        <Year2SoftwareName>{db}</Year2SoftwareName>
                                        <Year2SoftwareName>{other}</Year2SoftwareName>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={I1} width="100px" alt="Xcode" />
                                            <img src={I7} width="175px" alt="Flutter" />
                                        </td>
                                        <td>
                                            <img src={I4} width="120px" alt="Golang" />
                                            <img src={I5} width="120px" style={{ padding: '20px 0' }} alt="Grpc" />
                                        </td>
                                        <td>
                                            <img src={I2} width="110px" alt="PostgresSql" />
                                            <img src={I3} width="110px" alt="Docker" />
                                        </td>
                                        <td>
                                            <img src={I6} width="130px" alt="Github" style={{ padding: '20px 0' }} />
                                            <img src={I8} width="120px" alt="Figma" />
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
    );
}

export default ITYear2;