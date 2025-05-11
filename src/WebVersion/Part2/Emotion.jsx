import styled from "@emotion/styled";
import ItBG from "../../assets/ItBg.jpeg";

export const Part2 = styled.div`
  grid-template-columns: 80px 200px auto 40px;
`

// Emotion C3
export const C3 = styled.div`
  z-index: 999;
  animation: all 0.5s ease-in-out forwards;
`;

export const ImgBtn = styled.div`
  height: 100%;
  background-image: url(${ItBG});
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  @media (min-width: 1200px) {
    width: 300px;
  }
`;
export const ItWord = styled.div`
  color: #fff;
  mix-blend-mode: overlay;
  filter: brightness(3);
  p {
    margin: auto;
  }
  font-size: 1200%;
  @media (min-width: 1200px) {
    font-size: 1500%;
  }
`;

// Emotion C2
export const C2 = styled.div`
  transition: all 0.5s ease;
  @media (min-width: 3000px) {
    height: 700px;
  }
  @media (max-width: 1000px) {
    height: 650px;
  }
    height: 600px;
`;

export const InformationTitle = styled.div`
  text-align: center;
  margin: 1% 0.5%;
  font-size: 200%;
`;
export const Horizontal = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
`;
export const DataPart = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  @media (min-width: 1000px) {
    margin-left: 10%;
  }
`;
export const DataItem = styled.div`
  font-size: 120%;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 2% 0;
`;
export const ItemLogo = styled.div`
  font-size: 120%;
  margin: 0;
`;
export const ItemH4a = styled.div`
  margin: 0 0 0 5%;
`;
export const ItemH4b = styled.div`
  margin: 0 0 0 2.5%;
`;
export const Pfimg = styled.img`
  width: 25%;
  border: 3px solid #000;
  margin: 0 auto 15% auto;
  @media (min-width: 1000px) {
    margin: 5% 10%;
  }
  @media (min-width: 1000px) {
    width: 20%;
  }
`;
export const DataPartB = styled.div`
  font-size: 120%;
  display: flex;
  margin-left: 10%;
  margin-top: 2%;
  @media (max-width: 1800px) {
    margin-top: 5%;
  }
  padding: 0;
`;
export const IntroduceData = styled.div`
  margin: 0.5% 0 5% 12%;
  text-align: justify;
  font-size: 115%;
  width: 80%;
`;