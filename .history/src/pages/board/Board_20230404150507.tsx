import React, { useEffect, useState } from 'react'

interface BoardProps{
    tilePerRow:Number|any,
    imageUrl:String
}

const Board = ({tilePerRow,  imageUrl}:BoardProps) => {

    const [totalTiles, setTotalTiles] = useState();

    useEffect(()=>{
        const totalTiles:number = (tilePerRow || 3)**2;
        setTotalTiles(totalTiles);
    });

  return (
    <div>
      
    </div>
  )
}

export default Board
