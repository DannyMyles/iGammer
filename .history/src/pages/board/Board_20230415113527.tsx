
import React, { useEffect, useState } from "react";
import { BoardProps, TilePosition, TitleState } from "../../models/games.models";
import { gameSolution, getTileImageUrl, shuffleBoard } from "../../utils/game-logic";

const Board = ({ tilesPerRow, width, imageUrl }: BoardProps) => {
  
  // 
  const [boardWidth, setBoardWidth] = useState<number>(0)
  const [tileWidth, setTileWidth] = useState<number>( 0 );
  const [tiles, setTiles] = useState<TitleState[]>([]);
  const [missingTile, setMissingTile] = useState<TilePosition>();

  // Initialize the board
  

  useEffect(() => {
 
    const tw = Math.floor(width / tilesPerRow);
    const bw = tw * tilesPerRow;
    setTileWidth(tw);
    setBoardWidth(bw);
 

    // setTimeout(()=>{
      const solution = gameSolution(tilesPerRow, width, tw);
      // const shuffledTiles = shuffleBoard( solution );

      console.table(solution);
      // console.table(shuffledTiles);

      setMissingTile(solution.pop());
      // const updatedTiles:TitleState[] = s;

      setTiles(solution.map(tilePosition=>{
        const ts:TitleState = {
          top:`${tilePosition.y}px`,
          left: `${tilePosition.x}px`,
          tileIndex: tilePosition.tileIndex,
          x: tilePosition.x,
          y: tilePosition.y, 
          url: getTileImageUrl(tileWidth, tileWidth, tilePosition.x, tilePosition.y, imageUrl, boardWidth)
        }
        return ts
      })); 
    // }, 200); 

  }, [boardWidth, imageUrl, tileWidth, tilesPerRow, width]);

  function move(tile:TitleState){

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
        style={{...tile, position:'absolute'}} 
        alt="test" src={tile.url} 
        onClick={()=>move(tile)}
      />)}
    </div>
  );
};

export default Board;
