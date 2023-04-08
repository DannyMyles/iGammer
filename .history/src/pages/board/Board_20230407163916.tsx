
import React, { useEffect, useState } from "react";
import { BoardProps, TitleState } from "../../models/games.models";
import { gameSolution, initBoard } from "../../services/game-logic";



const Board = ({ tilesPerRow, width, imageUrl }: BoardProps) => {
  
  const [tiles, setTiles] = useState<TitleState[]>(initBoard(
    gameSolution(tilesPerRow, width),
    tilesPerRow,
    width,
    imageUrl
  ));

  // Initialize the board
  

  useEffect(() => {

    // console.log(gameSolution())

    // const totalTiles:Number = (tilesPerRow || 3)**2;
    // setTotalTiles(totalTiles);
    // SetTileWidth(width / tilesPerRow);
    // initBoard();
    // setSolution(gameSolution());
    // console.table(solution);
    // setCurrentTileState(shuffleBoard())
    
    // console.table(currentTileState);
    
    // setTiles(initBoard(solution)); 

    // setTimeout(shuffleBoard, 5000);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        background: `(236, 236, 236);, 1`,
        backgroundSize: "cover",
        width: `${tileWidth * tilesPerRow}px`,
        height: `${tileWidth * tilesPerRow}px`,
      }}
    >
      {tiles.map((tile, i) => (
        <div key={i + 1} id={`tile-{i}`} style={tile}>
          {i}
        </div>

      ))}
    </div>
  );
};

export default Board;
