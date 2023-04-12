
import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { BoardProps, TilePosition, TitleState } from "../../models/games.models";
import { gameSolution, getTileImageUrl, initBoard, shuffleBoard } from "../../app/services/game-logic";

const Board = ({ tilesPerRow, width, imageUrl }: BoardProps) => {
  
  // 
  const [boardWidth, setBoardWidth] = useState<number>(0)
  const [tileWidth, setTileWidth] = useState<number>( 0 );
  const [tiles, setTiles] = useState<TilePosition[]>([]);

  // Initialize the board
  

  useEffect(() => {

    const tw = Math.floor(width / tilesPerRow);
    const bw = tw * tilesPerRow;
    setTileWidth(tw);
    setBoardWidth(bw);


    const subscribe = setTimeout(()=>{
      const solution = gameSolution(tilesPerRow, width, tw);
      solution.pop();
      const shuffledTiles = shuffleBoard( solution );

      console.table(solution)
      console.table(shuffledTiles);

      setTiles(shuffledTiles);
    }, 200);
    

    return ()=>{
      clearTimeout(subscribe)
    }
  }, []);

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
