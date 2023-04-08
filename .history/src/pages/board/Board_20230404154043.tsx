import React, { useEffect, useState } from 'react'

interface BoardProps{
    tilePerRow:Number|any,
    imageUrl:string,
    width:Number|any
}

const Board = ({tilesPerRow, width, imageUrl}:BoardProps) => {

    const [totalTiles, setTotalTiles] = useState<Number>();
    const [tileWidth, SetTileWidth] = useState<Number>();
    const [tiles, setTiles] = useState<Number[]>([]);

    useEffect(()=>{
        const totalTiles:Number = (tilePerRow || 3)**2;
        setTotalTiles(totalTiles);
        SetTileWidth( (width / tilePerRow) );

        setTiles(()=>{
            let tiles=[];
            const totalTiles = tilePerRow ** 3;
            for(let i=0; i<totalTiles; i++ ){
                tiles.push(i);
            }
            return tiles;
        });

    }, []);

  return (
    <div>
      { tiles.map(tile=><img id={`tile-{tile}`} src={imageUrl} style={{
        width: width / tilesPerRow
      }} />) }
    </div>
  )
}

export default Board
