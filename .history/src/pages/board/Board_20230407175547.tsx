
import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { BoardProps, TitleState } from "../../models/games.models";
import { gameSolution, getTileImageUrl, initBoard, shuffleBoard } from "../../services/game-logic";



const Board = ({ tilesPerRow, width, imageUrl }: BoardProps) => {
  
  // 
  const [tileWidth, SetTileWidth] = useState<number>( Math.floor(width / tilesPerRow) );
  const [tiles, setTiles] = useState<TitleState[]>([]);

  // Initialize the board
  

  useEffect(() => {

    setTimeout(()=>{
      const solution = gameSolution(tilesPerRow, width);
      const shuffledTiles = shuffleBoard( solution );

      console.table(solution)
      console.table(shuffledTiles);

      setTiles(initBoard(
        shuffledTiles,
        tilesPerRow,
        tileWidth,
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
        width: `${tileWidth * tilesPerRow}px`,
        height: `${tileWidth * tilesPerRow}px`,
      }}
    >
      {/* {tiles.map((tile, i) => (
        <div key={i + 1} id={`tile-{i}`} style={tile}>
          {tile.left} x {tile.top} -- {i}
        </div>

      ))} */}
      {tiles.map((tile, i)=><img alt="test" src={getTileImageUrl(tileWidth, tileWidth, imageUrl)} />)}
    </div>
  );
};

export default Board;
