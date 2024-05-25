import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'

function PPart2() {
    const { t } = useTranslation();
    const IntroArea = styled.div`
        margin: 5% 10%;
        text-align: justify;
    `
    const Part2Title = styled.div`
        text-transform: uppercase;
        background-color: #000;
        color: #fff;
        margin: 4%;
        font-size:150%;
        text-align: center;
    `

    return (
        <>
            <Part2Title>Summary</Part2Title>
            <IntroArea>
                <p>{t('intro')}</p>
            </IntroArea>
        </>
    );
}

export default PPart2;