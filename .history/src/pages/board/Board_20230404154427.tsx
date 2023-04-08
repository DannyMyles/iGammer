import React, { useEffect, useState } from 'react'

interface BoardProps{
  tilesPerRow:Number|any,
    imageUrl:string,
    width:Number|any
}

interface TitleState{
  width:Number,
  height:Number,
  postion:Number
}

const Board = ({tilesPerRow, width, imageUrl}:BoardProps) => {

    const [totalTiles, setTotalTiles] = useState<Number>();
    const [tileWidth, SetTileWidth] = useState<Number>();
    const [tiles, setTiles] = useState<TitleState[]>([]);

    useEffect(()=>{
        const totalTiles:Number = (tilesPerRow || 3)**2;
        setTotalTiles(totalTiles);
        SetTileWidth( (width / tilesPerRow) );

        setTiles(()=>{
            let tiles=[];
            const totalTiles = tilesPerRow ** 3;
            for(let i=0; i<totalTiles; i++ ){
                tiles.push({
                  width: tileWidth,
                  height: tileWidth,
                  position
                });
            }
            return tiles;
        });

    }, []);

  return (
    <div>
      { tiles.map(tile=><img id={`tile-{tile}`} src={imageUrl} style={{
        width: tileWidth,
        height: tileWidth
      }} />) }
    </div>
  )
}

export default Board
