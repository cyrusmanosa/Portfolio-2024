import { useTranslation } from "react-i18next";
import { useState } from "react";
import styled from '@emotion/styled';
import Original from '../../assets/Portfoilo2022_Cap.png';

import {
    ItemArea, TitleH2, ItemForShowArea, ClickMsg, ContentArea, BackgroundBlur
} from './IT-Emotion'

function ITYear1() {
    const { t, i18n } = useTranslation();
    // Year 1 
    const { y1title, y1msg } = t("portfolio.year1");
    const [year1Data, setYear1Data] = useState(false)
    const [year1Bg, setYear1Bg] = useState({
        backgroundImage: `url(${Original})`,
        backgroundRepeat: 'repeat',
        backgroundPositionX: 'center',
        backgroundPositionY: '0%',
        backgroundSize: 'cover',
        filter: 'blur(5px)',
        transition: 'all 1s ease',
    });


    const HandleYear1 = () => {
        if (!year1Data) {
            setYear1Bg({ height: '600px', background: '#fff' })
            setYear1Data(true);
        } else {
            setYear1Bg({
                backgroundImage: `url(${Original})`,
                backgroundRepeat: 'repeat',
                backgroundPositionX: 'center',
                backgroundPositionY: '0%',
                backgroundSize: 'cover',
                filter: 'blur(5px)',
                transition: 'all 1s ease',
            })
            setYear1Data(false);
        }
    }

    return (
        <ItemArea ItemArea className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""} onClick={HandleYear1}>
            <BackgroundBlur style={year1Bg} />
            <ContentArea>
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
            </ContentArea>
        </ItemArea >
    );
}

export default ITYear1;

//  Year 1
const Year1Img = styled.img`
    margin: 20px auto;
    padding: 10px;
    background-color: white;
    border: 2px solid #000;
    border-radius: 10px;
`

const Year1Msg = styled.p`
      text-align: left;
      width: 85%;
      margin: 0 auto 20px auto;
      font-size: 18px;
`