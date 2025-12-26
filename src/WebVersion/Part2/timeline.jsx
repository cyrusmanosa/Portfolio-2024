import { useTranslation } from "react-i18next";
import styled from '@emotion/styled'

function TimeLine() {
    const { t, i18n } = useTranslation();

    if (i18n.language === "en" || i18n.language === "zh") {
        const companies = [
            {
                key: "wiz",
                data: t("companyList.wiz"),
                bullets: ["p1", "p2", "p3"],
            },
            {
                key: "sjm",
                data: t("companyList.sjm"),
                bullets: ["p1", "p2", "p3", "p4"],
            },
            {
                key: "fhia",
                data: t("companyList.fhia"),
                bullets: ["p1", "p2"],
            }
        ];

        return (
            <All>
                <Timeline>
                    {companies.map(({ key, data, bullets }) => {
                        const {
                            companyName,
                            workTitle,
                            timeRange,
                        } = data;

                        return (
                            <Container key={key}>
                                <TextBox>
                                    <h3>
                                        {companyName}
                                    </h3>
                                    <h3>
                                        {workTitle}
                                    </h3>
                                    <small>{timeRange}</small>
                                    <ul>
                                        {bullets.map((bulletKey) => (
                                            <li key={bulletKey}>
                                                {data[bulletKey]}
                                            </li>
                                        ))}
                                    </ul>
                                </TextBox>
                            </Container>
                        );
                    })}
                </Timeline>
            </All>
        );
    } else if (i18n.language === "ja") {
        const companies = [
            {
                key: "sjm",
                hasP3c: true,
            },
            {
                key: "fhia",
                hasP3c: false,
            },
            {
                key: "autoEdit",
                hasP3c: false,
            }
        ];

        const translations = {
            sjm: t("companyList.sjm"),
            fhia: t("companyList.fhia"),
            autoEdit: t("companyList.autoEdit")
        };

        const renderCompany = ({ key, prefix, hasP3c, hasP4 }) => {
            const data = translations[key];

            return (
                <Container key={key}>
                    <JaTextBox>
                        <h3>
                            {data['companyName']}
                        </h3>
                        <h3>
                            {data['workTitle']}
                        </h3>
                        <small>{data['timeRange']}</small>
                        <ul>
                            <li>{data['titlep1']}</li>

                            <Jali>{data['p1a']}</Jali>
                            <Jali>{data['p1b']}</Jali>
                            <Jali>{data['p1c']}</Jali>

                            <JaliTitle>{data['titlep2']}</JaliTitle>
                            <Jali>{data['p2a']}</Jali>
                            <Jali>{data['p2b']}</Jali>
                            <Jali>{data['p2c']}</Jali>

                            <JaliTitle>{data['titlep3']}</JaliTitle>
                            <Jali>{data['p3a']}</Jali>
                            <Jali>{data['p3b']}</Jali>
                            {hasP3c && <Jali>{data['p3c']}</Jali>}
                        </ul>
                    </JaTextBox>
                </Container>
            );
        };

        return (
            <All>
                <Timeline>
                    {companies.map(renderCompany)}
                </Timeline>
            </All>
        );
    }
}

export default TimeLine;


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
h3{
    margin:0;
}
smail{
    display: inline-block;
}
li{
    margin: 1.5% 0;
}
`
const JaTextBox = styled.div`
font-family: "M PLUS 1p", sans-serif;
font-weight: 700;
padding: 15px;
background-color: #fff;
position: relative;
border-radius: 3px;
font-size: 15px;
h3{
    margin:0;
}
smail{
    display: inline-block;
}
ul{
    margin: 1.5% 0;
}
`
const JaliTitle = styled.li`
margin: 3% 0 0 0;
padding: 0;
`
const Jali = styled.li`
list-style-type: none;
margin: 0 0 0 1.5%;
padding: 0;
font-size: 15px;
`