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
  objectPosition: string
}

const Board = ({tilesPerRow, width, imageUrl}:BoardProps) => {

    const [totalTiles, setTotalTiles] = useState<Number>();
    const [tileWidth, SetTileWidth] = useState<Number>();
    const [tiles, setTiles] = useState<TitleState[]>([]);

    useEffect(()=>{
        const totalTiles:Number = (tilesPerRow || 3)**2;
        setTotalTiles(totalTiles);
        SetTileWidth( (width / tilesPerRow) );
        console.log(tileWidth);
        setTiles(()=>{
            let tiles=[];
            const totalTiles = tilesPerRow ** 2;
            let top:Number = 0;
            let left:Number = 0;
            for(let i=0; i<totalTiles; i++ ){               

                // @ts-ignore
                left += Number(tileWidth);
                // @ts-ignore
                if(i % tilesPerRow === 0 ){
                 if(i >= tilesPerRow){
                   // @ts-ignorer
                   top += Number(tileWidth);
                 }
                  left = 0;
                }

                tiles.push({
                  width: `${tileWidth}px`,
                  height: `${tileWidth}px`,
                  top:`${top }px`,
                  left:`${ left }px`,
                  position:'absolute',
                  objectPosition: `${top}px ${left}px`
                });
            }
            return tiles;
        });

    }, []);

  return (
    <div>
      { tiles.map((tile, i)=><img id={`tile-{i}`} src={imageUrl} style={tile} />) }
    </div>
  )
}

export default Board
