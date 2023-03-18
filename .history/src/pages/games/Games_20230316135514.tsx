import { useState } from "react";
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./games.css"
type Props = {
  imagePath: string;
  rows: number;
  columns: number;
};

type Tile = {
  id: number;
  x: number;
  y: number;
};
const Games:React.FC<Props>  = ({ imagePath, rows, columns }) => {
  const [tiles, setTiles] = useState<Tile[] | u>(createTiles());

  function createTiles(): Tile[] {
    const numTiles = rows * columns;
    const arr: number[] = Array.from({ length: numTiles }, (_, i) => i);
    const shuffled: number[] = shuffle(arr);

    return shuffled.map((id, index) => ({
      id,
      x: index % columns,
      y: Math.floor(index / columns),
    }));
  }

  function shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function handleClick(clickedTile: Tile): void {
    const emptyTile = tiles.find((tile) => tile.id === rows * columns - 1);

    if (
      (clickedTile.x === emptyTile.x && Math.abs(clickedTile.y - emptyTile.y) === 1) ||
      (clickedTile.y === emptyTile.y && Math.abs(clickedTile.x - emptyTile.x) === 1)
    ) {
      const newTiles = tiles.map((tile) =>
        tile.id === clickedTile.id
          ? { ...tile, x: emptyTile.x, y: emptyTile.y }
          : tile.id === emptyTile.id
          ? { ...tile, x: clickedTile.x, y: clickedTile.y }
          : tile
      );
      setTiles(newTiles);
    }
  }

  function getTileStyle(tile: Tile): React.CSSProperties {
    const tileWidth = 100 / columns;
    const tileHeight = 100 / rows;
    const left = tile.x * tileWidth;
    const top = tile.y * tileHeight;
    return {
      backgroundImage: `url(${imagePath})`,
      backgroundPosition: `-${left}% -${top}%`,
      width: `${tileWidth}%`,
      height: `${tileHeight}%`,
      position: "absolute",
      left: `${left}%`,
      top: `${top}%`,
      border: "1px solid black",
    };
  }

  const isSolved = tiles.every((tile) => tile.id === tile.x + tile.y * columns);

  return (
    <>
      <Navbar />
      <div
        style={{
          width: "400px",
          height: "400px",
          position: "relative",
          margin: "0 auto",
        }}
      >
        {tiles.map((tile) => (
          <div key={tile.id} style={getTileStyle(tile)} onClick={() => handleClick(tile)} />
        ))}
      </div>
      {isSolved && <div>Congratulations! You solved the puzzle!</div>}
      <Footer />
    </>
  )
}

export default Games
