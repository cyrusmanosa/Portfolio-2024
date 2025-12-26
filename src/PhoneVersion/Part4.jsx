import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'


function PPart4() {
    const { t } = useTranslation();

    const Line = styled.hr`
        margin:0 5% 5% 5%;
        border: 1px dashed #000;
    `
    const WorkExpTitle = styled.div`
        display: flex;
        justify-content: center;
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

    const { s_companyName, s_workTitle, s_timeRange } = t("companyList.sjm");
    const { f_companyName, f_workTitle, f_timeRange } = t("companyList.fhia");
    const { a_companyName, a_workTitle, a_timeRange } = t("companyList.autoEdit");


    return (
        <>
            <WorkExpTitle>
                <h4>Work&emsp;Experience</h4>
            </WorkExpTitle>
            <Line />
            {/* AutoEdit */}
            <Company>
                <NameTitle>
                    <CompanyTitle>{a_companyName}</CompanyTitle>
                    <p>{a_workTitle}</p>
                </NameTitle>
                <TimeRange>{a_timeRange}</TimeRange>
            </Company>

            {/* AHct-Flha */}
            <Company>
                <NameTitle>
                    <CompanyTitle>{f_companyName}</CompanyTitle>
                    <p>{f_workTitle}</p>
                </NameTitle>
                <TimeRange>{f_timeRange}</TimeRange>
            </Company>

            {/* SJM */}
            <Company>
                <NameTitle>
                    <CompanyTitle>{s_companyName}</CompanyTitle>
                    <p>{s_workTitle}</p>
                </NameTitle>
                <TimeRange>{s_timeRange}</TimeRange>
            </Company>
            <Line />
        </>
    );
}
export default PPart4;