import { TileState } from './../models/games.models';
import { TilePosition} from "../models/games.models";

export function getTileImageUrl(
  width: number,
  height: number,
  x: number,
  y: number,
  imageUrl: string,
  boardSize: number
):Promise<string> {

  return new Promise((resolve)=>{

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
  
    const image = new Image(width, height);
    image.width = width;
    image.height = height;
    image.src = imageUrl;

    image.onload = ()=>{
      ctx!.drawImage(image, -x, -y, boardSize, boardSize);

      resolve(canvas.toDataURL());
    }

  });

  // console.log(width);

  
}

// set Solution
export function gameSolution(
  tilesPerRow: number,
  boardWidth: number,
  tileWidth: number
) {
  // const tileWidth = Math.floor(boardWidth / tilesPerRow);
  const totalTiles = tilesPerRow ** 2;
  let top: number = 0;
  let left: number = 0;
  // console.log((new Array(totalTiles).fill(0)))
  return new Array(totalTiles).fill(0).map((n, i) => {
    left += Number(tileWidth);
    if (i % tilesPerRow === 0) {
      if (i >= tilesPerRow) {
        top += Number(tileWidth);
      }

      left = 0;
    }
    return { x: left, y: top, tileIndex: i };
  });
}

// Shuffle
export function shuffleBoard(solution: TilePosition[]) {
  // Shuffle
  let shuffledTiles: TilePosition[] = [...solution];

  for (let i = 0; i < shuffledTiles.length; i++) {
    const j = Math.floor(Math.random() * shuffledTiles.length);

    const tile = shuffledTiles[i];
    shuffledTiles[i].x = shuffledTiles[j].x;
    shuffledTiles[i].y = shuffledTiles[j].y;
    
    shuffledTiles[j].x = tile.x;
    shuffledTiles[j].y = tile.y;
  }

  return shuffledTiles;
}

export function randomizeTiles(tiles:TileState[]){

  const shuffledTiles = [];
  let i = 0;

  while( shuffledTiles.length < tiles.length ){
    const randomTile = tiles[ Math.floor(Math.random() * tiles.length) ];
    
    randomTile.left = tiles[i].left;
    randomTile.top = tiles[i].top;
    
    shuffledTiles.push( randomTile );
    i++;
  }

  return shuffledTiles;

}
