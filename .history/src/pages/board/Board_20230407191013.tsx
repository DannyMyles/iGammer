
import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { BoardProps, TilePosition, TitleState } from "../../models/games.models";
import { gameSolution, getTileImageUrl, initBoard, shuffleBoard } from "../../services/game-logic";

const Board = ({ tilesPerRow, width, imageUrl }: BoardProps) => {
  
  const tw = Math.floor(width / tilesPerRow);
  const bw = tw * tilesPerRow; 
    
  const [boardWidth, setBoardWidth] = useState<number>(bw)
  const [tileWidth, setTileWidth] = useState<number>( tw );
  const [tiles, setTiles] = useState<TilePosition[]>([]);

  useEffect(()=>{
    shuffleBoard(gameSolution(tilesPerRow, width, tw));
  }, [])

  return (
    <div
      style={{
        position: "absolute",
        // background: `rgb(236, 236, 236) url(${imageUrl})`,
        backgroundSize: "cover",
        width: `${boardWidth}px`,
        height: `${boardWidth}px`
      }}
    >
      {/* {tiles.map((tile, i) => (
        <div key={i + 1} id={`tile-{i}`} style={tile}>
          {tile.left} x {tile.top} -- {i}
        </div>

      ))} */}
      {tiles.map((tile, i)=><img key={i+1} style={{background:"red", margin:0}} alt="test" src={getTileImageUrl(tileWidth, tileWidth, tile.x, tile.y, imageUrl, boardWidth)} />)}
    </div>
  );
};

export default Board;
