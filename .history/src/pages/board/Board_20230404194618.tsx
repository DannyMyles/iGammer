// @ts-nocheck
import React, { useEffect, useState } from "react";

interface BoardProps {
  tilesPerRow: Number | any;
  imageUrl: string;
  width: Number | any;
}

interface TitleState {
  width: string;
  height: string;
  top: string;
  left: string;
  position: any;
  // objectPosition: string,
  // objectFit: string,
  border: string;
  backgroundPosition: string;
  backgroundSize: string;
  backgroundImage: string;
  opecity: number;
}

interface TilePosition {
  x: number;
  y: number;
  tileIndex: number;
}

const Board = ({ tilesPerRow, width, imageUrl }: BoardProps) => {
  const [solution, setSolution] = useState<TilePosition[]>([]);
  const [totalTiles, setTotalTiles] = useState<number>(tilesPerRow ** 2);
  const [tileWidth, SetTileWidth] = useState<number>();
  const [tiles, setTiles] = useState<TitleState[]>([]);
  const [currentTileState, setCurrentTileState] = useState<TilePosition[]>([]);

  // Initialize the board
  function initBoard(shuffledTiles) {
    setTiles(() => {
      return shuffledTiles.map(tile=>{
        const backgroundPositionX = -tile.left,
          backgroundPositionY = -tile.top;

          return {
            width: `${tileWidth}px`,
            height: `${tileWidth}px`,
            top: `${tile.top}px`,
            left: `${tile.left}px`,
            position: "absolute",
            // objectFit: '10px',
            // objectPosition: '10% 10%',
            backgroundSize: `${tilesPerRow * tileWidth}px`,
            border: "1px solid red",
            background: `rgba(255,255,255,0.5) url(${imageUrl}) ${backgroundPositionX}px ${backgroundPositionY}px`,
            // opacity: 0.4
          }
      });

      // let tiles = [];
      // const totalTiles = tilesPerRow ** 2;
      // let top: Number = 0;
      // let left: Number = 0;
      // for (let i = 0; i < totalTiles - 1; i++) {
      //   left += Number(tileWidth);
      //   if (i % tilesPerRow === 0) {
      //     if (i >= tilesPerRow) {
      //       top += Number(tileWidth);
      //     }
      //     left = 0;
      //   }

      //   const backgroundPositionX = -left,
      //     backgroundPositionY = -top;

      //   // console.log(x, y);
      //   // let imageLeft = tileWidth * ( i % tilesPerRow),
      //   // imageTop= tileWidth  * ( i % tilesPerRow);
      //   tiles.push({
      //     width: `${tileWidth}px`,
      //     height: `${tileWidth}px`,
      //     top: `${top}px`,
      //     left: `${left}px`,
      //     position: "absolute",
      //     // objectFit: '10px',
      //     // objectPosition: '10% 10%',
      //     backgroundSize: `${tilesPerRow * tileWidth}px`,
      //     border: "1px solid red",
      //     background: `rgba(255,255,255,0.5) url(${imageUrl}) ${backgroundPositionX}px ${backgroundPositionY}px`,
      //     // opacity: 0.4
      //   });
      // }
      // return tiles;
    });
  }

  // set Solution
  function gameSolution() {
      let top: Number = 0;
      let left: Number = 0;
      // console.log((new Array(totalTiles).fill(0)))
      return (new Array(totalTiles).fill(0)).map((n, i) => {
        left += Number(tileWidth);
        if (i % tilesPerRow === 0) {
          if (i >= tilesPerRow) {
            top += Number(tileWidth);
          }

          left = 0;
        }
        return { left, top, tileIndex: i };
      });
  }

  // Shuffle
  function shuffleBoard() {
    // Shuffle
    return [...solution].map((tile) => {
      const j = Math.floor(Math.random() * solution.length);

      const { left, top } = solution[j];
      // console.log(left, top)
      return { ...tile, left, top };
    });
  }

  useEffect(() => {
    // const totalTiles:Number = (tilesPerRow || 3)**2;
    // setTotalTiles(totalTiles);
    SetTileWidth(width / tilesPerRow);
    // initBoard();
    setSolution(gameSolution());
    console.table(solution);
    setCurrentTileState(shuffleBoard())
    
    console.table(currentTileState);
    initBoard(solution); 

    // setTimeout(shuffleBoard, 5000);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        background: `red`,
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
