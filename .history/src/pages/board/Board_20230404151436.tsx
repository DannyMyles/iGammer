import React, { useEffect, useState } from 'react'

interface BoardProps{
    tilePerRow:Number|any,
    imageUrl:String,
    width:Number|any
}

const Board = ({tilePerRow, width, imageUrl}:BoardProps) => {

    const [totalTiles, setTotalTiles] = useState<Number>();
    const [tileWidth, SetTileWidth] = useState<Number>();
    const [tiles, setTiles] = useState([]);

    useEffect(()=>{
        const totalTiles:Number = (tilePerRow || 3)**2;
        setTotalTiles(totalTiles);
        SetTileWidth( (width / tilePerRow) );

        setTiles(()=>{
            let tiles=[], row=[];
            for(let i=0; i<tilePerRow; i++ ){
                row.push(i);
                if( row.length == tilePerRow ){
                    tiles.push()
                }
            }
        });

    });

  return (
    <div>
      
    </div>
  )
}

export default Board
