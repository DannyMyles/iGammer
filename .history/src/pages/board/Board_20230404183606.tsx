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
  const [solution, setSolution] = useState<TilePosition[]>();
  const [tileWidth, SetTileWidth] = useState<number>();
  const [tiles, setTiles] = useState<TitleState[]>([]);

  useEffect(() => {
    // const totalTiles:Number = (tilesPerRow || 3)**2;
    // setTotalTiles(totalTiles);
    SetTileWidth(width / tilesPerRow);

    setTiles(() => {
      let tiles = [];
      const totalTiles = tilesPerRow ** 2;
      let top: Number = 0;
      let left: Number = 0;
      for (let i = 0; i < totalTiles - 1; i++) {
        left += Number(tileWidth);
        if (i % tilesPerRow === 0) {
          if (i >= tilesPerRow) {
            top += Number(tileWidth);
          }
          left = 0;
        }

        const backgroundPositionX = -left,
          backgroundPositionY = -top;
        const x = left,
          y = top;

        // console.log(x, y);
        // let imageLeft = tileWidth * ( i % tilesPerRow),
        // imageTop= tileWidth  * ( i % tilesPerRow);
        tiles.push({
          width: `${tileWidth}px`,
          height: `${tileWidth}px`,
          top: `${top}px`,
          left: `${left}px`,
          position: "absolute",
          // objectFit: '10px',
          // objectPosition: '10% 10%',
          backgroundSize: `cover`,
          border: "1px solid red",
          background: `rgba(255,255,255,0.5) url(${imageUrl}) ${backgroundPositionX}px ${backgroundPositionY}px`,
          // opacity: 0.4
        });

      }
      return tiles;
    });

    // Set goal solution
    setSolution(
      tiles.map((tile, tileIndex) => ({
        left: tile.left.replace(/[a-z]/gi, ''),
        top: tile.top.replace(/[a-z]/gi, ''),
        tileIndex
      }))
    );

    console.log(solution);

    // Shuffle
    setTiles((allTiles)=>{
      // const tilePositions = allTiles.map(t=>({left:t.left, top:t.top}));
      return allTiles.map( (n, i)=>{
        const j = Math.floor(Math.random() * allTiles.length);
        return allTiles[j];
      } );

    });

    console.log(tiles.map((tile, tileIndex) => ({
      left: tile.left.replace(/[a-z]/gi, ''),
      top: tile.top.replace(/[a-z]/gi, ''),
      tileIndex
    })))

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
        <div key={i+1} id={`tile-{i}`} style={tile}>
          {i}
        </div>
      ))}
    </div>
  );
};

export default Board;
