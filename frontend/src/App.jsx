import styled from '@emotion/styled'
import Part1 from "./Part1"
import Part2 from "./Part2"
import Part3 from "./Part3"
import Axios from "axios";

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
  `
  Axios.get("https://api.github.com/user/repos", {
    headers: {
      Authorization: "Bearer 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",
    },
  })
    // .then((response) => {
    //   console.log(response.data);
    // })
    .catch((error) => {
      console.error(error);
    });


  return (
    <>
      <Container>
        <Part1 />
        <Part2 />
        <Part3 />
      </Container>
    </>
  )
}

export default App
