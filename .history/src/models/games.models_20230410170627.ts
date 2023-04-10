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

export interface TitleState {
  tileIndex:number,
  top: string;
  left: string;
  url: string,
  x: number,
  y: number
}

export interface TilePosition {
  x: number;
  y: number;
  tileIndex: number;
}