import styled from '@emotion/styled';
import BgC4 from '../../assets/c4.png';

// C4
export const C4 = styled.div`
        grid-column: 1 / span 3;
        grid-row: 4;
        transition: all 0.5s ease;
    `
export const Ver1Btn = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;
        mix-blend-mode: difference;
        filter: brightness(5);
        z-index: 1;
    `
export const Title1 = styled.p`
        line-height: 50%;
        text-align: center;
        font-size: 300%;
        margin: 2.5%;
        @media(min-width:850px){
            font-size: 350%;
        }
        @media(min-width:1200px){
            font-size: 400%;
        }
            span{
                font-size:60%;
            }
    `

export const Img2Btn = styled.div`
        background-image: url(${BgC4});
        background-repeat: repeat;
        background-position: 50% 30%;
        backdrop-filter: brightness(1.2);
        animation: move 100s;
        border: none;
        padding: 0;
        @keyframes move {
            75% {
                background-position: 50% 80%;
            }
        }
    `
// C5
export const Sns = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        @media(max-width:2200px){
        margin:6% 0 0 0;
        }
        margin:3% 0 0 0;
    }
    `
export const Icon = styled.a`
        display: flex;
        align-items: center;
        font-size: 250%;
        text-decoration: none;
        margin: 0 2%;
        &:link,
        &:visited,
        &:hover,
        &:active {
            color: #000;
        }
    `
export const C5 = styled.div`
        grid-column: 4 / span 3;
        grid-row: 4;
        align-items: center;
        text-align: center;
        transition: all 1s ease-in-out;
    `
export const Copyright = styled.small`
        display:flex;
        justify-content:center;
        @media(max-width:2200px){
            margin:2.5% auto 0 auto;
            }
            margin:2.5% auto 2.5% auto;
    `
