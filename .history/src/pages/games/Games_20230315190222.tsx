import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import styled from "styled-components"
import { PicturePuzzleProps } from "../../models/games.models"
import "./games.css"
import { useState } from "react"
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
const Games = ({imageSrc,width,height,rows,columns}:PicturePuzzleProps) => {
  const [pieces, setPieces] = useState<any>([]);
  return (
    <>
      <Navbar />
      <PuzzleWrapper>
      {pieces.map((_, index) => (
        <PuzzlePiece
          key={index}
          width={width}
          height={height}
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundPosition: `-${(index % columns) * width}px -${Math.floor(
              index / columns
            ) * height}px`,
          }}
        />
      ))}
    </PuzzleWrapper>
      <Footer />
    </>
  )
}

export default Games
