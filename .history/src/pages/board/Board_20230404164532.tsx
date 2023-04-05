// @ts-nocheck
import React, { useEffect, useState } from 'react'

interface BoardProps{
  tilesPerRow:Number|any,
    imageUrl:string,
    width:Number|any
}

interface TitleState{
  width:string,
  height:string,
  top:string,
  left:string,
  position: any,
  // objectPosition: string,
  border:string,
  backgroundSize:string
}

const Board = ({tilesPerRow, width, imageUrl}:BoardProps) => {

    const [totalTiles, setTotalTiles] = useState<Number>();
    const [tileWidth, SetTileWidth] = useState<Number>();
    const [tiles, setTiles] = useState<TitleState[]>([]);

    useEffect(()=>{
        const totalTiles:Number = (tilesPerRow || 3)**2;
        setTotalTiles(totalTiles);
        SetTileWidth( (width / tilesPerRow) );
        
        
        setTiles(()=>{
            let tiles=[];
            const totalTiles = tilesPerRow ** 2;
            let top:Number = 0;
            let left:Number = 0;
            for(let i=0; i<totalTiles; i++ ){               

                left += Number(tileWidth);
                if(i % tilesPerRow === 0 ){
                 if(i >= tilesPerRow){
                   top += Number(tileWidth);
                 }
                  left = 0;
                }

                let imgTop:Number = (top / width) * 100;
                let imgLeft:Number = (left / width) * 100;
                console.log( imgTop, imgLeft )
                tiles.push({
                  width: `${tileWidth}px`,
                  height: `${tileWidth}px`,
                  top:`${top }px`,
                  left:`${ left }px`,
                  position:'absolute',
                  backgroundSize: `fit`,
                  border:'1px solid red'
                });

            }
            return tiles;
        });

    }, []);

  return (
    <div style={{background:"yellow"}}>
      { tiles.map((tile, i)=><img id={`tile-{i}`} src={imageUrl} style={tile} />) }
    </div>
  )
}

export default Board
