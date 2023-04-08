import React, { useEffect, useState } from 'react'

interface BoardProps{
    tilePerRow:Number|3,
    imageUrl:String
}

const Board = ({tilePerRow,  imageUrl}:BoardProps) => {

    const [totalTiles, setTotalTiles] = useState();

    useEffect(()=>{
        const totalTiles = (tilePerRow || 3)**2;
        setTotalTiles()
    });

  return (
    <div>
      
    </div>
  )
}

export default Board
