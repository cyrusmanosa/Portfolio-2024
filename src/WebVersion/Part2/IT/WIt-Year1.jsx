import { useTranslation } from "react-i18next";
import { useState } from "react";
import Original from '../../../assets/original.png';

import {
    ItemArea, TitleH2, ItemForShowArea, ClickMsg,
    Year1Img, Year1Msg
} from './Emotion'

function ITYear1() {
    const { t, i18n } = useTranslation();
    // Year 1 
    const { y1title, y1msg } = t("portfolio.year1");
    const [year1H, setYear1H] = useState(100)
    const [year1Data, setYear1Data] = useState(false)
    const HandleYear1 = () => {
        const match3200 = window.matchMedia("(min-width: 3200px)").matches;
        const addHeight = match3200 ? 500 : 450
            if (year1H == 100) {
                setYear1H(year1H + addHeight)
                setYear1Data(true);
            } else {
                setYear1H(100)
                setYear1Data(false);
            }
    }

    return (
        <ItemArea ItemArea className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""} onClick={HandleYear1} style={{ height: `${year1H}px` }}>
            <TitleH2>{y1title}</TitleH2>
            {
                year1Data ?
                    (
                        <ItemForShowArea>
                            <Year1Img src={Original} width="70%" alt="Year 1 Portfolio" />
                            <Year1Msg>
                                {y1msg}
                            </Year1Msg>
                        </ItemForShowArea>
                    ) : (
                        <ClickMsg>Click Me</ClickMsg>
                    )
            }
        </ItemArea >
    );
}

export default ITYear1;

