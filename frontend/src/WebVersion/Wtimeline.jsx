import { useTranslation } from "react-i18next";
import styled from '@emotion/styled'

function TimeLine() {
    const All = styled.div`
        box-sizing: border-box;
        margin-left:9.5%;
        opacity: 0;
        animation: fadeIn 1s forwards 1s;
        @keyframes fadeIn {
            to {
              opacity: 1; 
            }
        }
    `
    const Timeline = styled.div`
        position: relative;
        :after{
            content: "";
            position: absolute;
            width: 3px;
            height: 100%;
            background-color: #000;
            top: 0;
            z-index: 1;
            animation: moveline 6s linear forwards;
        }
        @keyframes moveline{
            0%{
                height:0%;
            }
            100%{
                height:100%;
            }
        }
    `
    const Container = styled.div`
        padding: 10px 5%;
        width: 85%;
        position: relative;
        animation: movedown 1s linear forwards;
        @keyframes movedown{
            0%{
                opacity: 1;
                transform: translateY(-15%);
            }
            100%{
                opacity: 1;
                transform: translateY(0%);
            }
        }
    `
    const TextBox = styled.div`
        font-family: "M PLUS 1p", sans-serif;
        font-weight: 700;
        padding: 15px;
        background-color: #fff;
        position: relative;
        border-radius: 3px;
        font-size: 15px;
        h2{
            margin:0;
        }
        smail{
            display: inline-block;
        }
        ul{
            margin: 2% 0;
        }
    `
    const JaliTitle = styled.li`
        margin: 5% 0 0 0;
        padding: 0;
    `
    const Jali = styled.li`
        list-style-type: none;
        margin: 0 0 0 1.5%;
        padding: 0;
    `

    const { t, i18n } = useTranslation();

    if (i18n.language === "en" || i18n.language === "zh") {
        const { s_conpanyName, s_workTitle, s_timeRange, s_p1, s_p2, s_p3 } = t("companyList.sjm");
        const { f_conpanyName, f_workTitle, f_timeRange, f_p1, f_p2 } = t("companyList.fhia");
        const { a_conpanyName, a_workTitle, a_timeRange, a_p1, a_p2 } = t("companyList.autoEdit");
        return (
            <All>
                <Timeline>
                    {/* 1 */}
                    <Container>
                        <TextBox>
                            <h2>{s_conpanyName}{s_workTitle}</h2>
                            <small>{s_timeRange}</small>
                            <ul>
                                <li>{s_p1}</li>
                                <li>{s_p2}</li>
                                <li>{s_p3}</li>
                            </ul>
                        </TextBox>
                    </Container>
                    {/* 2 */}
                    <Container>
                        <TextBox>
                            <h2>{f_conpanyName}{f_workTitle}</h2>
                            <small>{f_timeRange}</small>
                            <ul>
                                <li>{f_p1}</li>
                                <li>{f_p2}</li>
                            </ul>
                        </TextBox>
                    </Container>
                    {/* 3 */}
                    <Container>
                        <TextBox>
                            <h2>{a_conpanyName}{a_workTitle}</h2>
                            <small> {a_timeRange}</small>
                            <ul>
                                <li>{a_p1}</li>
                                <li>{a_p2}</li>
                            </ul>
                        </TextBox>
                    </Container>
                </Timeline>
            </All>
        );
    } else if (i18n.language === "ja") {
        const {
            js_conpanyName, js_workTitle, js_timeRange,
            js_titlep1, js_p1a, js_p1b, js_p1c,
            js_titlep2, js_p2a, js_p2b, js_p2c,
            js_titlep3, js_p3a, js_p3b, js_p3c,
            js_titlep4
        } = t("companyList.sjm");
        const {
            jf_conpanyName, jf_workTitle, jf_timeRange,
            jf_titlep1, jf_p1a, jf_p1b, jf_p1c,
            jf_titlep2, jf_p2a, jf_p2b, jf_p2c,
            jf_titlep3, jf_p3a, jf_p3b,
            jf_titlep4
        } = t("companyList.fhia");
        const {
            ja_conpanyName, ja_workTitle, ja_timeRange,
            ja_titlep1, ja_p1a, ja_p1b, ja_p1c,
            ja_titlep2, ja_p2a, ja_p2b, ja_p2c,
            ja_titlep3, ja_p3a
        } = t("companyList.autoEdit");
        return (
            <All>
                <Timeline>
                    {/* 1 */}
                    <Container>
                        <TextBox>
                            <h2>{js_conpanyName}&emsp;{js_workTitle}</h2>
                            <small>{js_timeRange}</small>
                            <ul>
                                <li>{js_titlep1}</li>
                                <Jali>{js_p1a}</Jali>
                                <Jali>{js_p1b}</Jali>
                                <Jali>{js_p1c}</Jali>
                                <JaliTitle>{js_titlep2}</JaliTitle>
                                <Jali>{js_p2a}</Jali>
                                <Jali>{js_p2b}</Jali>
                                <Jali>{js_p2c}</Jali>
                                <JaliTitle>{js_titlep3}</JaliTitle>
                                <Jali>{js_p3a}</Jali>
                                <Jali>{js_p3b}</Jali>
                                <Jali>{js_p3c}</Jali>
                                <JaliTitle>{js_titlep4}</JaliTitle>
                            </ul>
                        </TextBox>
                    </Container>
                    {/* 2 */}
                    <Container>
                        <TextBox>
                            <h2>{jf_conpanyName}&emsp;{jf_workTitle}</h2>
                            <small>{jf_timeRange}</small>
                            <ul>
                                <li>{jf_titlep1}</li>
                                <Jali>{jf_p1a}</Jali>
                                <Jali>{jf_p1b}</Jali>
                                <Jali>{jf_p1c}</Jali>
                                <JaliTitle>{jf_titlep2}</JaliTitle>
                                <Jali>{jf_p2a}</Jali>
                                <Jali>{jf_p2b}</Jali>
                                <Jali>{jf_p2c}</Jali>
                                <JaliTitle>{jf_titlep3}</JaliTitle>
                                <Jali>{jf_p3a}</Jali>
                                <Jali>{jf_p3b}</Jali>
                                <JaliTitle>{jf_titlep4}</JaliTitle>
                            </ul>
                        </TextBox>
                    </Container>
                    {/* 3 */}
                    <Container>
                        <TextBox>
                            <h2>{ja_conpanyName}&emsp;{ja_workTitle}</h2>
                            <small> {ja_timeRange}</small>
                            <ul>
                                <li>{ja_titlep1}</li>
                                <Jali>{ja_p1a}</Jali>
                                <Jali>{ja_p1b}</Jali>
                                <Jali>{ja_p1c}</Jali>
                                <JaliTitle>{ja_titlep2}</JaliTitle>
                                <Jali>{ja_p2a}</Jali>
                                <Jali>{ja_p2b}</Jali>
                                <Jali>{ja_p2c}</Jali>
                                <JaliTitle>{ja_titlep3}</JaliTitle>
                                <Jali>{ja_p3a}</Jali>
                            </ul>
                        </TextBox>
                    </Container>
                </Timeline>
            </All>
        );
    }
}

export default TimeLine;