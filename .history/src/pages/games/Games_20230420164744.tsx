import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Board from "../board/Board";
import Navbar from "../../components/navbar/Navbar";
import "./games.css";
import { TilePosition, TileState } from "../../models/games.models";
import {
  gameSolution,
  getTileImageUrl,
  randomizeTiles,
} from "../../utils/game-logic";

const Games = () => {
  const [tilesPerRow, setTilesPerRow] = useState(3);
  const [tiles, setTiles] = useState<TileState[]>([]);
  const [missingTile, setMissingTile] = useState<TilePosition>();
  const [boardWidth, setBoardWidth] = useState<number>(640);
  const [tileWidth, setTileWidth] = useState<number>( 640 / 3 )

  const handleTileSelection = (tpr: any) => {
    setTileWidth( boardWidth / tpr );
    setTilesPerRow(tpr);
    init();
  };

  function move(tile: TileState) {
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

    // debugger;

    if (!movableTileIndex.includes(tile.tileIndex)) {
      console.log("Can't movie");
      return;
    }

    const newPosition = missingTile;
    const clickedTileIndex = tiles.findIndex(
      (t) => t.tileIndex === tile.tileIndex
    );
    if (clickedTileIndex > -1) {
      setTiles((ts) => {
        ts.splice(clickedTileIndex, 1, {
          ...tile,
          x: newPosition!.x,
          y: newPosition!.y,
          top: `${newPosition!.y}px`,
          left: `${newPosition!.x}px`,
        });
        return ts;
      });
      setMissingTile({ ...tile, x: tile.x, y: tile.y });
    }
  }

  function shuffle(tiles: TileState[]): Promise<TileState[]> {
    return new Promise((resolve) => {
      let c = 0;
      let mt = missingTile;
      while(c < 10){
        const randomized = randomizeTiles(tiles, tilesPerRow, tileWidth, mt!);
        mt = randomized.newMissing;
        tiles = randomized.tiles;
        c++
      }
      // setMissingTile(mt);
      resolve(tiles);
      // const interval = setInterval(() => {
      //   tiles = randomizeTiles(tiles, tilesPerRow, tileWidth);
      //   console.table(c);
      //   c++;

      //   if (c >= 100) {
      //     resolve(tiles);
      //     clearInterval(interval);
      //   }
      // }, 2);
    });
  }

  function init(){
    const solution: TilePosition[] = gameSolution(tilesPerRow, boardWidth);
    Promise.all(
      solution.map((tp) =>
        getTileImageUrl(
          tileWidth,
          tileWidth,
          tp.x,
          tp.y,
          "assets/images/msq.jpg",
          boardWidth
        )
      )
    )
      .then((tls) =>
      tls.map((url: string, i: number) => {
        const tilePosition = solution[i];
        const ts: TileState = {
          top: `${tilePosition.y}px`,
          left: `${tilePosition.x}px`,
          tileIndex: tilePosition.tileIndex,
          x: tilePosition.x,
          y: tilePosition.y,
          url: url,
          index: i,
          width: tileWidth,
          height: tileWidth,
        };
        return ts;
      })
      )
      .then((tls) => {
        setMissingTile(tls.pop()); //[tls.length-1]
        return shuffle(tls);
      })
      .then((tls) => {
        // tls.splice( tls.findIndex(t=>t.tileIndex === missingTile?.tileIndex), 1 );
        setTiles(tls) 
      });
  }

  useEffect(() => {
    
    init();
    
  }, []);

  return (
    <>
      <Navbar />
      <div className="game-container">
        <div className="main-left">
          <div className="tiles-container">
            <div className="split-images">
              {tiles.length > 0 && (
                <Board
                  tiles={tiles}
                  move={move}
                  // imageUrl={"assets/images/msq.jpg"}
                  // width={640}
                />
              )}
            </div>
          </div>
          <div className="select-size">
            <span>Select Tiles</span>
            <div>
              <button onClick={() => handleTileSelection(3)}>3*3</button>
            </div>
            <div>
              <button onClick={() => handleTileSelection(4)}>4*4</button>
            </div>
          </div>
        </div>

        <div className="main-display">
          <div className="top-container">
            <div className="status">
              <span className="open">Open</span> <div className="hr"></div>
              <span className="close">Close</span>
            </div>
          </div>
          <div className="final-img-container"></div>
          <div className="pal-submit">
            <div>
              <input type="text" placeholder="Enter Paypal Email"></input>
            </div>
            <div className="pal">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Games;
