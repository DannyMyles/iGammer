import { useState } from 'react';
// import { values } from "lodash";
import { createContext } from "react";
interface boardContextInterface {
    tilesPerRow:3|4
}

export const BoardContext = createContext<boardContextInterface>({ tilesPerRow:3 });
export function boardProvider({children}:any){

    const [board, setBoard] = useState<boardContextInterface>({tilesPerRow:3});

    return <BoardContext.Provider>{children}</BoardContext.Provider>
}