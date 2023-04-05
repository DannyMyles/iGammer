import React, { useEffect, useState } from 'react'

interface BoardProps{
    tilePerRow:Number|any,
    imageUrl:String
}

const Board = ({tilePerRow,  imageUrl}:BoardProps) => {

    const [totalTiles, setTotalTiles] = useState();

    useEffect(()=>{
        const totalTiles = (tilePerRow || 3)**2;
        setTotalTiles(tilePerRow**)
    });

  return (
    <div>
      
    </div>
  )
}

export default Board
