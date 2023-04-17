
import React, { useEffect, useState } from "react";
import { BoardProps, TilePosition, TileState } from "../../models/games.models";
import { gameSolution, getTileImageUrl } from "../../utils/game-logic";

const Board = ({ tilesPerRow, width, imageUrl }: BoardProps) => {
  
  // 
  const [boardWidth, setBoardWidth] = useState<number>(0)
  const [tileWidth, setTileWidth] = useState<number>( 0 );
  const [tiles, setTiles] = useState<TileState[]>([]);
  const [missingTile, setMissingTile] = useState<TilePosition>();
  const [tileImages, setTileImages] = useState<string[]>([]);

  // Initialize the board
  function randomizeTiles(mts:TileState[]){

    const shuffledTiles = [...mts];
    let i = 0;
  
    const interChange = ()=>{
      const tr1 = Math.floor(Math.random() * mts.length);
      const tr2 = Math.floor(Math.random() * mts.length);
  
      console.log(tr1, tr2);  
  
      const holdingTile = {...shuffledTiles[tr1]}
      shuffledTiles[tr1] = {...shuffledTiles[tr2]};
      shuffledTiles[tr2] = {...holdingTile}
  
      setTiles([]);
      setTimeout(()=>setTiles(shuffledTiles), 200)
  
      i++;

      if(i < 5){
        setTimeout(interChange, 1000);
      }

    }
  
    interChange();
  
  }

  useEffect(() => {
 
    const tw = Math.floor(width / tilesPerRow);
    const bw = tw * tilesPerRow;
    setTileWidth(tw);
    setBoardWidth(bw);
 

    // setTimeout(()=>{
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
            x: tilePosition.x,
            y: tilePosition.y, 
            url: tileImages[i],
            index: i
          }
          return ts
        });

        setTiles(maTiles);

        setTimeout(()=>{    
          randomizeTiles(maTiles);
        }, 5000);
      });

      
    // }, 200); 

  }, [boardWidth, imageUrl, tileWidth, tilesPerRow, width]);

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
        alt={`t${tile.index}`}
        width={tileWidth}
        height={tileWidth}
        onClick={()=>move(tile)}
      />)}
    </div>
  );
};

export default Board;
