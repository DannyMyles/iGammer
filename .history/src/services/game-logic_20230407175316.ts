import { TilePosition, TitleState } from "../models/games.models";

export async function generateTiles( width:number, height:number, imageUrl:string ){
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    const image = new Image(width, height);
    image.src = imageUrl;

    ctx!.drawImage(image, 0, 0);

    return canvas.toDataURL();
}

export function initBoard(boardTiles:TilePosition[], tilesPerRow:number, tileWidth:number, imageUrl:string):TitleState[] {

    return boardTiles.map((tile:TilePosition)=>{
      const backgroundPositionX = -tile.x,
        backgroundPositionY = -tile.y;
       
        return {
          width: `${tileWidth}px`,
          height: `${tileWidth}px`,
          top: `${tile.y}px`,
          left: `${tile.x}px`, 
          position: "absolute",
          // objectFit: '10px',
          // objectPosition: '10% 10%', 
          backgroundSize: `${tilesPerRow * (tileWidth || 1)}px`,    
          border: "0.5px solid lightgray",
          background: `rgba(255,255,255,0.5) url(${imageUrl}) ${backgroundPositionX}px ${backgroundPositionY}px`,
          // opacity: 0.5
        }
    })

      // let tiles = [];
      // const totalTiles = tilesPerRow ** 2;
      // let top: Number = 0;
      // let left: Number = 0;
      // for (let i = 0; i < totalTiles - 1; i++) {
      //   left += Number(tileWidth);
      //   if (i % tilesPerRow === 0) {
      //     if (i >= tilesPerRow) {
      //       top += Number(tileWidth);
      //     }
      //     left = 0;
      //   }

      //   const backgroundPositionX = -left,
      //     backgroundPositionY = -top;

      //   // console.log(x, y);
      //   // let imageLeft = tileWidth * ( i % tilesPerRow),
      //   // imageTop= tileWidth  * ( i % tilesPerRow);
      //   tiles.push({
      //     width: `${tileWidth}px`,
      //     height: `${tileWidth}px`,
      //     top: `${top}px`,
      //     left: `${left}px`,
      //     position: "absolute",
      //     // objectFit: '10px',
      //     // objectPosition: '10% 10%',
      //     backgroundSize: `${tilesPerRow * tileWidth}px`,
      //     border: "1px solid red",
      //     background: `rgba(255,255,255,0.5) url(${imageUrl}) ${backgroundPositionX}px ${backgroundPositionY}px`,
      //     // opacity: 0.4
      //   });
      // }
      // return tiles;
  }

  // set Solution
  export function gameSolution(tilesPerRow:number, boardWidth:number) {
    const tileWidth = Math.floor(boardWidth / tilesPerRow);
    const totalTiles = tilesPerRow ** 2;
      let top: number = 0;
      let left: number = 0;
      // console.log((new Array(totalTiles).fill(0)))
      return (new Array(totalTiles).fill(0)).map((n, i) => {
        left += Number(tileWidth);
        if (i % tilesPerRow === 0) {
          if (i >= tilesPerRow) {
            top += Number(tileWidth);
          }

          left = 0;
        }
        return { x:left, y:top, tileIndex: i };
      });
  }

  // Shuffle
  export function shuffleBoard(solution:TilePosition[]) {
    // Shuffle
    let shuffledTiles:TilePosition[] = [...solution];

    for(let i = 0; i < shuffledTiles.length; i++){
        const j = Math.floor(Math.random() * shuffledTiles.length);

        const tile = shuffledTiles[i];
            shuffledTiles[i] = shuffledTiles[j];
            shuffledTiles[j] = tile;
    }
    
    return  shuffledTiles;
  }