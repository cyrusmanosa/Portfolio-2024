import styled from '@emotion/styled';

export const ItemArea = styled.div`
    text-align: center;
    background-color: #fff;
    padding: 20px;
    width: 75%;
    margin: 3% auto;
    border-radius: 10px;
    transition: all 0.5s ease;
`

export const TitleH2 = styled.h1`
    margin: 2.5% 0 2.5% 0;
`

export const ItemForShowArea = styled.div`
    opacity: 0;
    animation: fadeIn 0.5s forwards 0.5s;
    @keyframes fadeIn {
        to {
            opacity: 1; 
        }
    }   
`

export const ClickMsg = styled.p`
    margin: -2% 0 0 0;
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

//  Year 1
export const Year1Img = styled.img`
    margin: 20px auto;
    padding: 10px;
    background-color: white;
    border: 2px solid #000;
    border-radius: 10px;
`

export const Year1Msg = styled.p`
      text-align: left;
      width: 85%;
      margin: 0 auto 20px auto;
      font-size: 18px;
`

//  Year 2
export const Year2SoftwareName = styled.th`
    color: #ff83a8;
    font-weight: 900;
    font-size: 25px;
    width: 200px;
`
export const Year2P1 = styled.div`
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
export const Year2P1Title = styled.div`
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
        padding-right: 10px;
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

export const Year2P2Title = styled.div`
    background-color: #ff83a8;
    width: 75%;
    margin: 2% auto;
    padding: 10px 20px;
    border-radius: 10px;
    h3 {
        color: white;
        font-weight: 500;
    }
`

// Year 3
export const Year3_P_Msg = styled.p`
      text-align: center;
      width: 85%;
      margin: 0 auto 15px auto;
      font-size: 16px;
`

export const Year3P1Title = styled.div`
    margin:2.5% 0; 
    letterSpacing: 3;
    h1{
        margin:0;
        font-size:30px;
    }
`

export const Year3ImgArea = styled.div`
    padding: 0 10px;
    margin-bottom:2.5%;
    img {
        height: 100px;
        object-fit: cover;
        margin: 0 5px;
    }
    @media (min-width: 1350px) {
        padding: 0 20px;
        img {
            height: 150px;
            object-fit: cover;
        }
    }
`

export const Year3P2Title = styled.h2`
        color: #B22222;
        margin: 0;
        padding: 0;
        line-height: 40px;
        font-weight: 900;
`

export const Year3P2 = styled.div`
    background-color: #B22222;
    width: 75%;
    margin: 2% auto;
    padding: 10px 20px;
    border-radius: 10px;
    h3 {
        color: white;
        font-weight: 500;
    }
`

export const Year3SoftwareName = styled.th`
    color: #B22222;
    font-weight: 900;
    font-size: 25px;
    width: 200px;
`

