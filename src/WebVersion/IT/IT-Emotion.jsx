import styled from '@emotion/styled';

export const ItemArea = styled.div`
    position: relative;
    overflow: hidden;
    text-align: center;
    padding: 20px;
    width: 75%;
    margin: 3% auto;
    border-radius: 10px;
`

export const TitleH2 = styled.h1`
    margin: 2.5% 0 2.5% 0;
`

export const ItemForShowArea = styled.div`
    opacity: 0;
    animation: fadeIn 1s forwards 1s;
    @keyframes fadeIn {
        to {
            opacity: 1; 
        }
    }   
`

export const ClickMsg = styled.p`
    margin: 0;
`

export const Intro = styled.p`
    font-size: 18px;
    color: black;
`

export const SystemImg = styled.div`
    width: 90%;
    margin:0 auto;
    padding: 0 5% 5% 5%x;
    border-radius: 10px;
`

export const SystemComposition = styled.div`
    margin:0 auto;
    text-align: center;
    p {
      font-size: 30px;
      font-weight: 900;
      color: #000;
      border-bottom: 1px solid #000;
    }
`

export const Software = styled.div`
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

export const ContentArea = styled.div`
    position: relative;
    z-index: 2;
`;

export const BackgroundBlur = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
`;