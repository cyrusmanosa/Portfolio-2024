import Original1 from './assets/original.png';
import G1 from './assets/App/DatingDate/Group1.png';
import DD1 from './assets/App/DatingDate/DatingDate01.png';
import I1 from './assets/App/DatingDate/01.png';
import I2 from './assets/App/DatingDate/02.png';
import I3 from './assets/App/DatingDate/03.png';
import I4 from './assets/App/DatingDate/04.png';
import I5 from './assets/App/DatingDate/05.png';
import I7 from './assets/App/DatingDate/07.png';
import I8 from './assets/App/DatingDate/08.png';
import styled from '@emotion/styled'
import { useTranslation } from "react-i18next";

//  Year 1
const Year1Div = styled.div`
    text-align: center;
    background-color: #fff;
    padding: 20px;
    width: 75%;
    margin: 3% auto;
    border-radius: 10px;
    img {
      margin: 20px auto;
      padding: 10px;
      background-color: white;
      border: 2px solid #000;
      border-radius: 10px;
    }
    
`
const TitleH2 = styled.h2`
    margin: 2.5% 0 3.5% 0;
`
const Year1Msg = styled.p`
      text-align: left;
      width: 85%;
      margin: 0 auto 20px auto;
      font-size: 18px;
`

// Year 2
const Year2Div = styled.div`
    background-color: #fff;
    text-align: center;
    width: 75%;
    margin: 3% auto;
    border-radius: 10px;
    padding: 20px;
`
const Year2P2Title = styled.div`
    background-color: #ff83a8;
    width: 75%;
    margin: 2% auto;
    padding: 10px 20px;
    border-radius: 10px;
    h3 {
        color: white;
    }
`
const Year2P2 = styled.div`
    background-color: white;
    width: 90%;
    margin:0 auto;
    padding: 0 5% 5% 5%x;
    border-radius: 10px;
`
const Loadimg = styled.div`
    margin:0 auto;
    text-align: center;
    p {
      font-size: 30px;
      font-weight: 900;
      color: #000;
      border-bottom: 1px solid #000;
    }
`
const Software = styled.div`
    border-radius: 30px;
    margin-left: auto;
    margin-right: auto;
    table,
    tr,
    th,
    td {
        border-collapse: collapse;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        padding: 2px 5px;
    }
`
const SoftTh = styled.th`
    color: #ff83a8;
    font-weight: 900;
    font-size: 25px;
    width: 200px;
`
const Year2P1 = styled.div`
    display: grid;
    justify-content: center;
    grid: auto / auto auto;
    flex-wrap: wrap;
    align-items: center;
    .item {
        padding: 0 10px;
        img {
            height: 350px;
            object-fit: cover;
        }
    }
    @media (min-width: 1350px) {
        .item {
            padding: 0 20px;
            img {
                height: 400px;
                object-fit: cover;
            }
        }
    }
    `
const Year2P1Title = styled.div`
    h1 {
        color: #4f4f4f;
        margin: 0;
        padding: 0;
        line-height: 40px;
        font-weight: 900;
    }
    h1 span {
        color: #ff83a8;
        margin: 0;
        padding: 0;
        line-height: 40px;
        font-size: 38px;
        font-weight: 900;
    }
    h3 {
        color: #ff83a8;
        font-size: 18px;
        font-weight: 600;
    }
    width:350px;
    @media (min-width: 1200px) {
        width:450px;
    }
`
const Intro = styled.p`
    font-size: 18px;
    color: black;
`

function It() {
    const { t, i18n } = useTranslation();
    const { y1title, y1msg } = t("portfolio.year1");
    const {
        y2title,
        y2intro1a, y2intro1b, y2intro1c,
        y2title2, y2intro2a, y2intro2b,
        y2title3, y2front, y2back, y2db
    } = t("portfolio.year2");
    return (
        <>
            {/* github Btn */}
            {/* Year 1 */}
            <Year1Div className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""}>
                <TitleH2>{y1title}</TitleH2>
                <img src={Original1} width="70%" alt="Year 1 Portfolio" />
                <Year1Msg>
                    {y1msg}
                </Year1Msg>
            </Year1Div>

            {/* Year 2 */}
            <Year2Div className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""}>
                <TitleH2>{y2title}</TitleH2>
                <Year2P1>
                    <div className="item">
                        <img src={DD1} alt="Dating Date App" />
                    </div>
                    <div className="item">
                        <Year2P1Title>
                            <h1>
                                {y2intro1a}<br /><span>{y2intro1b}</span>{y2intro1c}
                            </h1>
                            <h3>{y2title2}</h3>
                            <Intro>
                                {y2intro2a}
                            </Intro>
                        </Year2P1Title>
                    </div>
                </Year2P1>

                <Year2P2Title>
                    <h3>{y2intro2b}</h3>
                </Year2P2Title>

                <Year2P2>
                    <Loadimg>
                        <p>{y2title3}</p>
                        <img src={G1} width="60%" alt="Local System" />
                    </Loadimg>
                    <Software>
                        <table>
                            <thead>
                                <tr>
                                    <SoftTh>{y2front}</SoftTh>
                                    <SoftTh>{y2back}</SoftTh>
                                    <SoftTh>{y2db}</SoftTh>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={I7} width="175px" alt="Frontend" />
                                        <img src={I1} width="100px" alt="Frontend" />
                                    </td>
                                    <td>
                                        <img src={I4} width="120px" alt="Backend" />
                                        <img src={I5} width="120px" style={{ padding: '20px 0' }} alt="Backend" />
                                        <img src={I8} width="120px" alt="Backend" />
                                    </td>
                                    <td>
                                        <img src={I3} width="110px" alt="Database" />
                                        <img src={I2} width="110px" alt="Database" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Software>
                </Year2P2>
            </Year2Div>
        </>
    );
}

export default It;
