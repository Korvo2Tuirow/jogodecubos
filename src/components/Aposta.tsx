import { useContext, useEffect, useState } from "react"
import { NumContext } from "./ContextNumRandom";

type Props={
    newValor: number;
    setNewValor: (e:number)=>void;
}


export const Aposta = ()=>{
    
    const [newValor, setNewValor] = useState();
    const Ctx = useContext(NumContext);  

    
    const modal = () =>{
        const exit = document.getElementById("modal");
        exit?.classList.remove("hidden");

    }
    return(
        <div className="container bg-white rounded-md w-[90%] max-w-[500px] p-3 flex justify-between shadow-lg shadow-black">
            <p>Banca: {Ctx?.valor} </p>
            <button onClick={modal}>Apostar</button> 
        </div>
    )
}