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
  // objectFit: string,
  border:string,
  backgroundPosition: string
  backgroundSize:string,
  backgroundImage: string
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

                console.log( top, left );
                let imageLeft = left * ( i % tileWidth), 
                    imageTop= top  * ( i % tileWidth);
                tiles.push({
                  width: `${tileWidth}px`,
                  height: `${tileWidth}px`,
                  top:`${top }px`,
                  left:`${ left }px`,
                  position:'absolute',
                  // objectFit: '10px',
                  // objectPosition: '10% 10%',
                  backgroundSize: `${ tilesPerRow * tileWidth }px`,
                  border:'1px solid red',
                  // background: `url(${imageUrl}) ${imageLeft}px ${imageTop}px`,
                  
                });

            }
            return tiles;
        });

    }, []);

  return (
    <div style={{position:"absolution", width:`${tileWidth*tilesPerRow}px`, height:`${tileWidth*tilesPerRow}px`}}>
      { tiles.map((tile, i)=><div id={`tile-{i}`} style={tile}>{i}</div>) }
    </div>
  )
}

export default Board
