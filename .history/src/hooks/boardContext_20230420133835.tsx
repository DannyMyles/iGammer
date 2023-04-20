import { useState } from 'react';
// import { values } from "lodash";
import { createContext } from "react";
interface boardContextInterface {
    tilesPerRow:3|4
}

export const BoardContext = createContext<boardContextInterface|any>({ tilesPerRow:3 });
export function BoardProvider({children}:any){

    const [board, setBoard] = useState<boardContextInterface>({tilesPerRow:3});

    return <BoardContext.Provider value={[board, setBoard]}>{children}</BoardContext.Provider>
}