import React, { useEffect, useState } from 'react'

interface BoardProps{
    tilePerRow:Number|any,
    imageUrl:String,
    width:Num
}

const Board = ({tilePerRow,  imageUrl}:BoardProps) => {

    const [totalTiles, setTotalTiles] = useState<Number>();

    useEffect(()=>{
        const totalTiles:Number = (tilePerRow || 3)**2;
        setTotalTiles(totalTiles);
    });

  return (
    <div>
      
    </div>
  )
}

export default Board
