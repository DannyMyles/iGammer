export interface Games{
  id: number;
  title: string;
  description: string; 
}

export interface BoardProps {
  tilesPerRow: Number | any;
  imageUrl: string;
  width: Number | any;
}

export interface TileState {
  tileIndex:number,
  top: string;
  left: string;
  url: string,
  x: number,
  y: number,
  index:number,
  // background:string,
  width:number,
  height:number
}

export interface TilePosition {
  x: number;
  y: number;
  tileIndex: number;
}