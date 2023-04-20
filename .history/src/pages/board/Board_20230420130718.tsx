
import React, { useEffect, useState } from "react";
import { BoardProps, TilePosition, TileState } from "../../models/games.models";
import { gameSolution, getTileImageUrl } from "../../utils/game-logic";

const Board = ({ tilesPerRow, width, imageUrl }: BoardProps) => {
  console.log("Board", tilesPerRow); 
  // 
  const [boardWidth, setBoardWidth] = useState<number>( 0 )
  const [tileWidth, setTileWidth] = useState<number>( 0 );
  const [tiles, setTiles] = useState<TileState[]>([]);
  const [missingTile, setMissingTile] = useState<TilePosition>();
  const [tileImages, setTileImages] = useState<string[]>([]);
  const [tpr, setTpr] = useState(tilesPerRow);

  // Initialize the board
  function randomizeTiles(mts:TileState[]){  
  
    const tr1 = Math.floor(Math.random() * mts.length);
      const tr2 = Math.floor(Math.random() * mts.length);
  
      console.log(tr1, tr2);
  
      const holdingTile = {...mts[tr1]}
      
      mts[tr1] = {...mts[tr2]};
      mts[tr2] = {...holdingTile}

      let top: number = 0;
      let left: number = 0;

      return mts.map((n, i) => {
        left += Number(tileWidth);
        if (i % tilesPerRow === 0) {
          if (i >= tilesPerRow) {
            top += Number(tileWidth);
          }
    
          left = 0;
        }
        n.left = `${left}px`;
        n.top = `${top}px`;
        n.x = left;
        n.y = top
        return n;
      }); 

      // return mts;
  
  }

  function getMovableTiles(){
    const movableTileIndex = [];
    for(let i=0; i < tiles.length; i++){ 
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

    return movableTileIndex;
  }

  useEffect(() => { 

    // debugger;
    const bw = Math.floor(width / tpr) * tpr;
    const tw = Math.floor(width / tpr);
    setBoardWidth(bw);
    setTileWidth(tw);
    setTiles([])

    // setTimeout(()=>{
      const solution = gameSolution(tpr, width, tileWidth);

      setMissingTile(solution.pop());

      Promise.all(solution.map(tp=>getTileImageUrl(tileWidth, tileWidth, tp.x, tp.y, imageUrl, boardWidth)))
      .then(imageUrls=>{
        setTileImages(imageUrls);

        let maTiles = solution.map((tilePosition, i)=>{
          const ts:TileState = {
            top:`${tilePosition.y}px`,
            left: `${tilePosition.x}px`,
            tileIndex: tilePosition.tileIndex,
            x: tilePosition.x,
            y: tilePosition.y,  
            url: tileImages[i],  
            index: i,
            // background: `url(${tileImages[i]})`,
            // width: tileWidth,
            // height: tileWidth 
          }
          return ts
        });

        let i = 0;
        let interval = setInterval(()=>{
          if(maTiles.length > 0){
            const randomizedTiles = randomizeTiles(maTiles);
            maTiles = randomizedTiles;
            i++; 
            if(i > 5 ){
              clearInterval(interval);
              setTiles(maTiles)
            }
          }
        }, 1); 
      });
      
    // }, 200); 

  }, []);

  function move(tile:TileState){
     
    const movableTileIndex = getMovableTiles();

    if(!movableTileIndex.includes(tile.tileIndex)){
      console.log("Can't movie");
      return; 
    }
    
    const newPosition = missingTile;
    const clickedTileIndex = tiles.findIndex(t=>t.tileIndex === tile.tileIndex);
    if(clickedTileIndex > -1){
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
    <>
    {tpr}
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
      {tiles.map((tile, i)=><img 
        key={i+1} 
        style={{...tile, position:'absolute'}} 
        alt={`t${tile.index}`} src={tile.url}
        width={tileWidth}
        height={tileWidth}
        onClick={()=>move(tile)} 
       />)}
    </div>
    <button style={{position:"relative"}} onClick={ ()=>{
      setTiles([]);
      setTpr(tpr === 3 ? 4 : 3);
    } }>test</button>
    </>
  );
};

export default Board;
