
import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { BoardProps, TitleState } from "../../models/games.models";
import { gameSolution, initBoard, shuffleBoard } from "../../services/game-logic";



const Board = ({ tilesPerRow, width, imageUrl }: BoardProps) => {
  
  // 

  const [tiles, setTiles] = useState<TitleState[]>([]);

  // Initialize the board
  

  useEffect(() => {

    setTimeout(()=>{
      const shuffledTiles = shuffleBoard( gameSolution(tilesPerRow, width) );
      setTiles(initBoard(
        shuffledTiles,
        tilesPerRow,
        width,
        imageUrl
      ));
    }, 500);
    
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        // background: `rgb(236, 236, 236) url(${imageUrl})`,
        backgroundSize: "cover",
        width: `${Math.floor(width / tilesPerRow) * tilesPerRow}px`,
        height: `${Math.floor(width / tilesPerRow) * tilesPerRow}px`,
      }}
    >
      {tiles.map((tile, i) => (
        <div key={i + 1} id={`tile-{i}`} style={tile}>
          {tile.left} x {tile.top} -- {i}
        </div>

      ))}
    </div>
  );
};

export default Board;
