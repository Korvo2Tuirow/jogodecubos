import { useContext, useState } from "react";
import { NumContext } from "./ContextNumRandom";


export const Modal = () => {

    const valorCtx = useContext(NumContext);

    const [valor, setValor] =useState("");
   
    const add = () => {
        const newValor = parseFloat(valor)

        if (valor !== "" && newValor > 0) {

            const exit = document.getElementById("modal");
            exit?.classList.add("hidden");
           valorCtx?.setValor(newValor);          
        }
    }

    return (
        <div id="modal" className="w-screen h-screen absolute flex justify-center items-center z-50 bg-black/90">

            <div className={`border-4 justify-center items-center top-[20%] p-4 flex flex-col m-10  border-white bgBtn absolute rounded-2xl w-[90%] max-w-[500px] h-[100%] max-h-[200px]`}>

                <input type="number"
                    min={1}
                    className="p-3 flex rounded-lg text-lg w-[95%] relative"
                    step="0.01"
                    placeholder="QUER APOSTAR QUANTO ?"
                    value={valor}
                    onChange={e =>setValor((e.target.value))}
                />

                <button onClick={add} className="p-3 border font-bold hover:scale-110 border-black rounded-md mt-5 bg-[#57f5e0]" >APOSTE</button>


            </div>
        </div>
    )
}