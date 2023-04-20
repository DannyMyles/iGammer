
import React, { useEffect, useState } from "react";
import { BoardProps, TilePosition, TileState } from "../../models/games.models";
import { gameSolution, getTileImageUrl } from "../../utils/game-logic";

interface BoardState{
  tiles:TileState[],
  move: Function
}

const Board = ({ tiles, move }: BoardState) => {

  return (
    <div
      style={{ 

        position: "relative",
        // background: `rgb(236, 236, 236) url(${imageUrl})`,
        backgroundSize: "cover",
        // width: `${boardWidth}px`,
        // height: `${boardWidth}px`,
        // background: 'yellow' 
      }}
    >
      {/* {tiles.map((tile, i) => (
        <div key={i + 1} id={`tile-{i}`} style={tile}>
          {tile.left} x {tile.top} -- {i}
        </div>

      ))} */}
      {tiles.map((tile:TileState, i:number)=><img 
        key={i+1} 
        style={{...tile, position:'absolute', border:'1px solid red'}} 
        alt={`t${tile.index}`} src={tile.url}
        width={tile.width}
        height={tile.height}
        onClick={()=>move(tile)} 
       />)}
    </div>
  );
};

export default Board;
