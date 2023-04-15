import React, { useEffect, useState } from "react";
import { BoardProps, TilePosition, TileState } from "../../models/games.models";
import { gameSolution, getTileImageUrl, shuffleBoard } from "../../utils/game-logic";

const Board = ({ tilesPerRow, width, imageUrl }: BoardProps) => {
  
  const [boardWidth, setBoardWidth] = useState<number>(0)
  const [tileWidth, setTileWidth] = useState<number>( 0 );
  const [tiles, setTiles] = useState<TileState[]>([]);
  const [missingTile, setMissingTile] = useState<TilePosition>();
  const [tileImages, setTileImages] = useState<string[]>([]);

  useEffect(() => {
 
    const tw = Math.floor(width / tilesPerRow);
    const bw = tw * tilesPerRow;
    setTileWidth(tw);
    setBoardWidth(bw);

    const solution = gameSolution(tilesPerRow, width, tw);

    Promise.all(solution.map(tp=>getTileImageUrl(tileWidth, tileWidth, tp.x, tp.y, imageUrl, boardWidth)))
    .then(imageUrls=>{
      setTileImages(imageUrls);

      setMissingTile(solution.pop());

      const maTiles = solution.map((tilePosition, i)=>{
        const ts:TileState = {
          top:`${tilePosition.y}px`,
          left: `${tilePosition.x}px`,
          tileIndex: tilePosition.tileIndex,
          x: 0,
          y: 0, 
          url: tileImages[i]
        }
        return ts
      });

      setTiles(maTiles);

      setTimeout(()=>{
        const shuffledTiles = shuffleBoard([...maTiles, missingTile]);
        setTiles(shuffledTiles);
      }, 5000);

    });

  }, [boardWidth, imageUrl, tileWidth, tilesPerRow, width]);

  function move(tile:TileState){
    // implementation of the move function
  }

  return (
    <div style={{ 
      position: "relative",
      background: `rgb(236, 236, 236) url(${imageUrl})`,
      backgroundSize: "cover",
      width: `${boardWidth}px`,
      height: `${boardWidth}px`,
    }}>
      {tiles.map((tile, i)=><img 
        key={i+1} 
        style={{...tile, position:'absolute'}} 
        alt="test" src={tile.url} 
        width={tileWidth}
        height={tileWidth}
        onClick={()=>move(tile)}
      />)}
    </div>
  );
};

export default Board;
