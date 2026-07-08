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

    const { s_name, s_title, s_period } = t("companyList.job2");
    const { f_name, f_title, f_period } = t("companyList.job3");
    const { a_name, a_title, a_period } = t("companyList.job4");


    return (
        <>
            <WorkExpTitle>
                <h4>Work&emsp;Experience</h4>
            </WorkExpTitle>
            <Line />
            {/* job4 */}
            <Company>
                <NameTitle>
                    <CompanyTitle>{a_name}</CompanyTitle>
                    <p>{a_title}</p>
                </NameTitle>
                <TimeRange>{a_period}</TimeRange>
            </Company>

            {/* job3 */}
            <Company>
                <NameTitle>
                    <CompanyTitle>{f_name}</CompanyTitle>
                    <p>{f_title}</p>
                </NameTitle>
                <TimeRange>{f_period}</TimeRange>
            </Company>

            {/* job2 */}
            <Company>
                <NameTitle>
                    <CompanyTitle>{s_name}</CompanyTitle>
                    <p>{s_title}</p>
                </NameTitle>
                <TimeRange>{s_period}</TimeRange>
            </Company>
            <Line />
        </>
    );
}
export default PPart4;