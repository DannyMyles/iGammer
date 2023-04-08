import React, { useEffect, useState } from 'react'

interface BoardProps{
    tilePerRow:Number|any,
    imageUrl:String,
    width:Number|any
}

const Board = ({tilePerRow, width, imageUrl}:BoardProps) => {

    const [totalTiles, setTotalTiles] = useState<Number>();
    const [tileWidth, SetTileWidth] = useState<Number>();
    const [tiles, setTiles] = useState<Number[]>([]);

    useEffect(()=>{
        const totalTiles:Number = (tilePerRow || 3)**2;
        setTotalTiles(totalTiles);
        SetTileWidth( (width / tilePerRow) );

        setTiles(()=>{
            let tiles=[];
            for(let i=0; i<tilePerRow; i++ ){
                tiles.push(i);
            }
            return tiles;
        });

    }, []);

  return (
    <div >
      { tiles.map(tile=><img id={tile} src={imageUrl} />) }
    </div>
  )
}

export default Board
