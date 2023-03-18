import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import styled from "styled-components";
import "./games.css"
const PuzzleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PuzzlePiece = styled.div`
  border: 1px solid #ccc;
  background-size: ${(props: { width: number; height: number }) =>
    `${props.width}px ${props.height}px`};
  cursor: pointer;
`;
const Games = () => {
  return (
    <>
      <Navbar />
      <h2>Hello</h2>
      <Footer />
    </>
  )
}

export default Games
