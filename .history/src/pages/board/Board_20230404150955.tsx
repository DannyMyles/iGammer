import React, { useEffect, useState } from 'react'

interface BoardProps{
    tilePerRow:Number|any,
    imageUrl:String,
    width:Number|any
}

const Board = ({tilePerRow, width, imageUrl}:BoardProps) => {

    const [totalTiles, setTotalTiles] = useState<Number>();
    const [tileWidth, SetTileWidth] = useState<Number>();
    

    useEffect(()=>{
        const totalTiles:Number = (tilePerRow || 3)**2;
        setTotalTiles(totalTiles);
        SetTileWidth( (width / tilePerRow) );
    });

  return (
    <div>
      
    </div>
  )
}

export default Board
