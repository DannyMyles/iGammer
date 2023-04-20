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
  boardWidth: number
) {

  const tileWidth = Math.floor(boardWidth / tilesPerRow);

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

export function getMovableTiles(tiles:TileState[], missingTile:TilePosition, tileWidth:number):TileState[]{
  const movableTileIndex = [];
    for (let i = 0; i < tiles.length; i++) {
      const c = tiles[i];
      if (c.x === missingTile!.x && c.y + tileWidth === missingTile!.y) {
        movableTileIndex.push(c.tileIndex);
      }

      if (c.x === missingTile!.x && c.y - tileWidth === missingTile!.y) {
        movableTileIndex.push(c.tileIndex);
      }

      if (c.y === missingTile!.y && c.x + tileWidth === missingTile!.x) {
        movableTileIndex.push(c.tileIndex);
      }

      if (c.y === missingTile!.y && c.x - tileWidth === missingTile!.x) {
        movableTileIndex.push(c.tileIndex);
      }
    }

    return movableTileIndex;
}

export function randomizeTiles(mts:TileState[], tilesPerRow:number, tileWidth:number, missingTile:TilePosition){ 

    const movableTileIndex:TileState[] = getMovableTiles(mts, missingTile, tileWidth);
    // console.log(movableTileIndex);
  
    const tr1 = mts.findIndex(t=>t.tileIndex === missingTile.tileIndex); // Math.floor(Math.random() * mts.length);
      const tr2 = mts.findIndex(t=>t.tileIndex === movableTileIndex[0].tileIndex); // Math.floor(Math.random() * mts.length);
  
      // console.log(tr1, tr2);
  
      const holdingTile = {...mts[tr1]}
      
      mts[tr1] = {...mts[tr2]};
      mts[tr2] = {...holdingTile}

      let top: number = 0;
      let left: number = 0;

      return mts.map((n, i) => {
        left += Number(tileWidth);
        if (i % tilesPerRow === 0) {
          if (i >= tilesPerRow) {
            top += Number(tileWidth);
          }
    
          left = 0;
        }
        n.left = `${left}px`;
        n.top = `${top}px`;
        n.x = left;
        n.y = top
        return n;
      });

      // return mts;
  
  }

// Shuffle
export function shuffleBoard(solution: TilePosition[]) {

  // const emptyTile = solution[solution.length - 1];

  // // Shuffle
  // let shuffledTiles: TilePosition[] = [...solution];

  // for (let i = 0; i < shuffledTiles.length; i++) {
  //   const j = Math.floor(Math.random() * shuffledTiles.length);

  //   const tile = shuffledTiles[i];
  //   shuffledTiles[i].x = shuffledTiles[j].x;
  //   shuffledTiles[i].y = shuffledTiles[j].y;
    
  //   shuffledTiles[j].x = tile.x;
  //   shuffledTiles[j].y = tile.y;
  // }

  // return shuffledTiles;
}

