
import { ReactNode, createContext, useState } from "react";

type ContextType={
    numRandomProv:number[];
    anima:boolean;
    animaLinha1: boolean;
    animaLinha2: boolean;
    animaLinha3: boolean;
    setAnimaLinha1:(b:boolean)=>void;
    setAnimaLinha2:(b:boolean)=>void;
    setAnimaLinha3:(b:boolean)=>void;
    setNumRandomProv: (n:number[]) => void ;
    setAnima:(b:boolean)=>void ;
}

const initialNumRandom = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10 + 1));


export const NumContext = createContext<ContextType | null>(null);

export const NumRandomProvider = ({children}:{children: ReactNode})=>{
  
    const[numRandomProv, setNumRandomProv] = useState([0,1,2,3,4,5,6,7,8,9])
    const [anima, setAnima] = useState(false)
    const [animaLinha1, setAnimaLinha1] = useState(false)
    const [animaLinha2, setAnimaLinha2] = useState(false)
    const [animaLinha3, setAnimaLinha3] = useState(false)

    
    return(
        <NumContext.Provider value={{numRandomProv,setNumRandomProv, anima, setAnima, animaLinha1, setAnimaLinha1, animaLinha2, setAnimaLinha2, animaLinha3,setAnimaLinha3}} >
            {children}
        </NumContext.Provider>
    )
}