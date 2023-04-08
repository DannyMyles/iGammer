
import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { BoardProps, TilePosition, TitleState } from "../../models/games.models";
import { gameSolution, getSqueredImage, getTileImageUrl, initBoard, shuffleBoard } from "../../services/game-logic";



const Board = ({ tilesPerRow, width, imageUrl }: BoardProps) => {
  
  // 
  const [tileWidth, SetTileWidth] = useState<number>( Math.floor(width / tilesPerRow) );
  const [tiles, setTiles] = useState<TilePosition[]>([]);

  // Initialize the board
  

  useEffect(() => {

    setTimeout(()=>{
      const solution = gameSolution(tilesPerRow, width);
      const shuffledTiles = shuffleBoard( solution );

      console.table(solution)
      console.table(shuffledTiles);

      setTiles(shuffledTiles);
    }, 500);
    
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        background: `rgb(236, 236, 236) url(${getSqueredImage(imageUrl, tileWidth * tilesPerRow)})`,
        // backgroundSize: "cover",
        width: `${tileWidth * tilesPerRow}px`,
        height: `${tileWidth * tilesPerRow}px`,
        border: '1px solid red'
      }}
    >
      {/* {tiles.map((tile, i) => (
        <div key={i + 1} id={`tile-{i}`} style={tile}>
          {tile.left} x {tile.top} -- {i}
        </div>

      ))} */}
      {tiles.map((tile, i)=><img key={i+1} alt="test" src={getTileImageUrl(tileWidth, tileWidth, tile.x, tile.y, imageUrl)} />)}
    </div>
  );
};

export default Board;
