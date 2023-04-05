import React, { useEffect, useState } from 'react'

interface BoardProps{
    tilePerRow:Number,
    imageUrl:String
}

const Board = ({tilePerRow,  imageUrl}:BoardProps) => {

    const [totalTiles, setTotalTiles] = useState(tilePerRow *2);

    useEffect(()=>{

    });

  return (
    <div>
      
    </div>
  )
}

export default Board
