import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Board from "../board/Board";
import Navbar from "../../components/navbar/Navbar";
import "./games.css";
import { TilePosition, TileState } from "../../models/games.models";
import { gameSolution, getTileImageUrl, randomizeTiles } from "../../utils/game-logic";

const Games = () => {
  const [tilesPerRow, setTilesPerRow] = useState(3); 
  const [tiles, setTiles] = useState<TileState[]>([]);

  const handleTileSelection = (tilesPerRow:any) => {
    setTilesPerRow(tilesPerRow);
  };

  function shuffle(tiles:TileState[]):Promise<TileState[]>{

    return new Promise(resolve=>{

      let c=0;
      const interval = setInterval(()=>{

        tiles = randomizeTiles(tiles, 3, 640/3);
        console.table(c);
        c++

        if(c >= 100){
          resolve(tiles);
          clearInterval(interval);
        }
      }, 200);
      
    });

  }

  useEffect(()=>{
    const tileWidth = 640 / 3;
    const solution:TilePosition[] = gameSolution( 3, 640 );
    Promise.all(solution.map(tp=>getTileImageUrl(tileWidth, tileWidth, tp.x, tp.y, "assets/images/msq.jpg", 640)))
    .then(tls => randomizeTiles(tls.map((url:string, i:number)=>{
      const tilePosition = solution[i];
      const ts:TileState  = {
        top: `${tilePosition.y}px`,
        left: `${tilePosition.x}px`,
        tileIndex: tilePosition.tileIndex,
        x: tilePosition.x,
        y: tilePosition.y,
        url: url,
        index: i,
        width: tileWidth,
        height: tileWidth
      }
      return ts;
    }), 3, tileWidth))
    .then(tls=>()=>{      
      // const missingTile:TileState = 
      tls.pop();
      return shuffle(tls);
    })
    .then(tls=>setTiles(tls))
  }, []);

  return (
    <>
      <Navbar />
      <div className="game-container">
        <div className="main-left">
          <div className="tiles-container">
            <div className="split-images">
              {tiles.length > 0 && <Board
                tiles={tiles}
                // imageUrl={"assets/images/msq.jpg"}
                // width={640}
              />}
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
            <div >
              <input type="text" placeholder="Enter Paypal Email" ></input>
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
