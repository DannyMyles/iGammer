
import React, { useEffect, useState } from "react";
import { TLSSocket } from "tls";
import { BoardProps, TilePosition, TileState } from "../../models/games.models";
import { gameSolution, getTileImageUrl, shuffleBoard } from "../../utils/game-logic";

const Board = ({ tilesPerRow, width, imageUrl }: BoardProps) => {
  
  // 
  const [boardWidth, setBoardWidth] = useState<number>(0)
  const [tileWidth, setTileWidth] = useState<number>( 0 );
  const [tiles, setTiles] = useState<TileState[]>([]);
  const [missingTile, setMissingTile] = useState<TilePosition>();
  const [tileImages, setTileImages] = useState<string[]>([]);

  // Initialize the board
  

  useEffect(() => {
    const tw = Math.floor(width / tilesPerRow);
    const bw = tw * tilesPerRow;
    setTileWidth(tw);
    setBoardWidth(bw);
  
    const solution = gameSolution(tilesPerRow, width, tw);
  
    Promise.all(
      solution.map((tp) =>
        getTileImageUrl(
          tileWidth,
          tileWidth,
          tp.x,
          tp.y,
          imageUrl,
          boardWidth
        )
      )
    ).then((imageUrls) => {
      setTileImages(imageUrls);
      setMissingTile(solution.pop());
    });
  }, [boardWidth, imageUrl, tileWidth, tilesPerRow, width]);
  
  useEffect(() => {
    if (tileImages.length > 0) {
      const maTiles = tileImages.map((url, i) => ({
        top: `${(i % tilesPerRow) * tileWidth}px`,
        left: `${Math.floor(i / tilesPerRow) * tileWidth}px`,
        tileIndex: i,
        x: (i % tilesPerRow) * tileWidth,
        y: Math.floor(i / tilesPerRow) * tileWidth,
        url,
      }));
  
      setTiles(shuffleBoard(maTiles));
    }
  }, [tileImages, tileWidth, tilesPerRow]);
  
  function shuffleBoard(tiles: TileState[]) {
    const shuffledTiles = tiles.map((tile: TileState, i: number) => {
      const randomTile = tiles[Math.floor(Math.random() * tiles.length)];
      const holdingTile = { ...randomTile };
      randomTile.left = tile.left;
      randomTile.top = tile.top;
      tiles[i].left = holdingTile.left;
      tiles[i].top = holdingTile.top;
      return randomTile;
    });
  
    return shuffledTiles;
  }
  
  function move(tile:TileState){

    const movableTileIndex = [];

    for(let i=0; i<tiles.length; i++){
      const c = tiles[i];
      if( c.x === missingTile!.x && c.y + tileWidth === missingTile!.y ){
        movableTileIndex.push(c.tileIndex);
      }

      if( c.x === missingTile!.x && c.y - tileWidth === missingTile!.y ){
        movableTileIndex.push(c.tileIndex);
      }

      if( c.y === missingTile!.y && c.x + tileWidth === missingTile!.x ){
        movableTileIndex.push(c.tileIndex);
      }

      if( c.y === missingTile!.y && c.x - tileWidth === missingTile!.x ){
        movableTileIndex.push(c.tileIndex);
      }
    }

    if(!movableTileIndex.includes(tile.tileIndex)){
      console.log("Can't movie");
      return; 
    }


    const newPosition = missingTile;
    const clickedTileIndex = tiles.findIndex(t=>t.tileIndex === tile.tileIndex);
    if(clickedTileIndex){
      setTiles((ts)=>{
        ts.splice(clickedTileIndex, 1, {
          ...tile, 
          x: newPosition!.x,
          y: newPosition!.y, 
          top:`${newPosition!.y}px`, 
          left:`${newPosition!.x}px`
        });
        return ts;
      });
      setMissingTile({...tile, x:tile.x, y:tile.y});
    }
  }

  return (
    <div
      style={{ 

        position: "relative",
        // background: `rgb(236, 236, 236) url(${imageUrl})`,
        backgroundSize: "cover",
        // width: `${boardWidth}px`,
        // height: `${boardWidth}px`,
        background: 'yellow' 
      }}
    >
      {/* {tiles.map((tile, i) => (
        <div key={i + 1} id={`tile-{i}`} style={tile}>
          {tile.left} x {tile.top} -- {i}
        </div>

      ))} */}
      {tiles.map((tile, i)=><img 
        key={i+1} 
        style={{...tile, position:'absolute', border:'1px solid yellow'}} 
        alt="test" src={tile.url} 
        width={tileWidth}
        height={tileWidth}
        onClick={()=>move(tile)}
      />)}
    </div>
  );
};

export default Board;
