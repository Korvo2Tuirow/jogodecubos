import { useContext, useState } from "react"
import { NumContext } from "./ContextNumRandom";



export const Aposta = ()=>{
    
    const [newValor, setNewValor] = useState();
    const valorCtx = useContext(NumContext);
    
    const modal = () =>{
        const exit = document.getElementById("modal");
        exit?.classList.remove("hidden");
    }
    return(
        <div className="container bg-white rounded-md w-[90%] max-w-[500px] p-3 flex justify-between shadow-lg shadow-black">
            <p>Banca: {valorCtx?.valor} </p>
            <button onClick={modal}>Apostar</button> 
        </div>
    )
}