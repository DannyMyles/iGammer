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
    width: string;
    height: string;
    top: string;
    left: string;
    position?: any;
    border?: string;
    backgroundPosition?: string;
    backgroundSize?: string;
    backgroundImage?: string;
    opecity?: number;
  }
  
 export interface TilePosition {
    x: number;
    y: number;
    tileIndex: number;
  }