import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'


function PPart3() {
    const { t } = useTranslation();

    const Line = styled.hr`
        margin:0 5% 5% 5%;
        border: 1px dashed #000;
    `
    const SchoolExpTitle = styled.div`
        margin:0 5%;
        h4{
            text-align: center;
            margin-bottom:0;
            text-transform: uppercase;
        }
    `
    const School = styled.div`
        display: grid;
        justify-content: center;
        margin:5%;
        text-align: center;
    `
    const SchoolTitle = styled.h3`
        margin:0;
        padding:0;
        font-size:80%;
    `
    const TimeRange = styled.div`
        margin:0;
        padding:0;
        font-size:80%;
    `

    const { sj_name, sj_timeRange } = t("eduction.japanese");
    const { si_name, si_timeRange } = t("eduction.it");


    return (
        <>
            <SchoolExpTitle>
                <h4>Eduction&emsp;Experience</h4>
            </SchoolExpTitle>
            <Line />
            {/* AutoEdit */}
            <School>
                <TimeRange>{sj_timeRange}</TimeRange>
                <SchoolTitle>{sj_name}</SchoolTitle>
            </School>

            {/* AHct-Flha */}
            <School>
                <TimeRange>{si_timeRange}</TimeRange>
                <SchoolTitle>{si_name}</SchoolTitle>
            </School>
            <Line />
        </>
    );
}
export default PPart3;