import styled from '@emotion/styled'
import Part1 from "./WebVersion/Part1/Part1"
import Part2 from "./WebVersion/Part2/Part2"
import Part3 from "./WebVersion/Part3/Part3"
import Phone from "./PhoneVersion/PhoneVer"

function App() {
  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(6, auto);
    padding: 1px;
    margin: 3.5% auto;
    width: 100%;
    @media (min-width: 800px) {
      width: 95%;
    }
    @media (min-width: 900px) {
      width: 90%;
    }
    @media (min-width: 1000px) {
      width: 85%;
    }
    @media (min-width: 1100px) {
      width: 80%;
    }
    @media (min-width: 1200px) {
      width: 75%;
    }
    @media (min-width: 1300px) {
      width: 70%;
    }
    @media (min-width: 1450px) {
      width: 65%;
    }
    @media (min-width: 1650px) {
      width: 55%;
    }
    @media (min-width: 2050px) {
      width: 50%;
    }
    @media (min-width: 2550px) {
      width: 40%;
    }
  `

  const minWidth800px = window.matchMedia("(min-width: 800px)").matches;
  if (minWidth800px) {
    return (
      <>
        <Container>
          <Part1 />
          <Part2 />
          <Part3 />
        </Container>
      </>
    )
  } else {
    return (
      <>
        <Phone />
      </>
    );
  }
}

export default App
