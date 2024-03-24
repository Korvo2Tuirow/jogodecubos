

import { useContext, useEffect } from "react"
import { NumContext } from "./ContextNumRandom"

export const Container = () => {

    const NumCtx = useContext(NumContext);
    const c1 = NumCtx?.numRandomProv.slice(0, 3);
    const c2 = NumCtx?.numRandomProv.slice(3, 6);
    const c3 = NumCtx?.numRandomProv.slice(6, 9);

    useEffect(()=>{
    const v1 = c1?.every(v1=>v1===c1[0]);
    if(v1 ==true){alert("coluna 1")}

    const v2 = c2?.every(v2=>v2===c2[0]);
    if(v2 ==true){alert("coluna 2")}

    const v3 = c3?.every(v3=>v3===c3[0]);
    if(v3 ==true){alert("coluna 3")}

    }, NumCtx?.numRandomProv)



    return (
        <div className="border bgBtn shadow-lg shadow-black p-4 flex mt-10 border-black max-w-[500px] w-[90%] h-[500px] max-h-[90%] ">
            <div className="w-[33.3%] flex flex-col">
                {c1?.map(e => (<div className={`bg${e.toString()} cssDefault`} >{e}</div>))}
            </div>

            <div className="w-[33.3%] flex flex-col">
                {c2?.map(e => (<div className={`bg${e.toString()} cssDefault`}>{e}</div>))}
            </div>

            <div className="w-[33.3%] flex flex-col">
                {c3?.map(e => (<div className={`bg${e.toString()} cssDefault`}>{e}</div>))}
            </div>        

        </div>
    )
}