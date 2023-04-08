import React, { useEffect, useState } from 'react'

interface BoardProps{
    tilePerRow:Number|any,
    imageUrl:String,
    width:Number|any
}

const Board = ({tilePerRow, width, imageUrl}:BoardProps) => {

    const [totalTiles, setTotalTiles] = useState<Number>();
    const [actualWidth, SetActualWidth] = useState<Number>();

    useEffect(()=>{
        const totalTiles:Number = (tilePerRow || 3)**2;
        setTotalTiles(totalTiles);
        SetActualWidth( (width / tilePerRow) )
    });

  return (
    <div>
      
    </div>
  )
}

export default Board
