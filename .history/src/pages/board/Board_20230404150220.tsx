import React, { useEffect, useState } from 'react'

interface BoardProps{
    tilePerRow:Number,
    imageUrl:String
}

const Board = ({tilePerRow,  imageUrl}:BoardProps) => {

    const [totalTiles, setTotalTiles] = useState();

    useEffect(()=>{
        const totalTiles = 
        setTotalTiles()
    });

  return (
    <div>
      
    </div>
  )
}

export default Board
