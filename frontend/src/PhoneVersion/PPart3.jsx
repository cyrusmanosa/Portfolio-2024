import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'


function PPart3() {
    const { t } = useTranslation();

    const Line = styled.hr`
        margin:0 5% 5% 5%;
        border: 1px dashed #000;
    `
    const WorkExpTitle = styled.div`
        display: flex;
        justify-content: space-between;
        margin:0 5%;
        h4{
            margin-bottom:0;
            text-transform: uppercase;
        }
    `
    const Company = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:5%;
    `
    const NameTitle = styled.div`
        display: grid;
        row-gap: 0;
        flex-direction: column;
        p{
            margin:-2% 0;
            padding:0;
            font-size:80%;
        }
    `
    const CompanyTitle = styled.h3`
        margin:0;
        padding:0;
        font-size:80%;
    `
    const TimeRange = styled.div`
        margin:0;
        padding:0;
        font-size:80%;
    `

    const { s_conpanyName, s_workTitle, s_timeRange } = t("companyList.sjm");
    const { f_conpanyName, f_workTitle, f_timeRange } = t("companyList.fhia");
    const { a_conpanyName, a_workTitle, a_timeRange } = t("companyList.autoEdit");


    return (
        <>
            <WorkExpTitle>
                <h4>Work&emsp;Experience</h4>
                <h4>Time</h4>
            </WorkExpTitle>
            <Line />
            {/* AutoEdit */}
            <Company>
                <NameTitle>
                    <CompanyTitle>{a_conpanyName}</CompanyTitle>
                    <p>{a_workTitle}</p>
                </NameTitle>
                <TimeRange>{a_timeRange}</TimeRange>
            </Company>

            {/* AHct-Flha */}
            <Company>
                <NameTitle>
                    <CompanyTitle>{f_conpanyName}</CompanyTitle>
                    <p>{f_workTitle}</p>
                </NameTitle>
                <TimeRange>{f_timeRange}</TimeRange>
            </Company>

            {/* SJM */}
            <Company>
                <NameTitle>
                    <CompanyTitle>{s_conpanyName}</CompanyTitle>
                    <p>{s_workTitle}</p>
                </NameTitle>
                <TimeRange>{s_timeRange}</TimeRange>
            </Company>
            <Line />
        </>
    );
}
export default PPart3;