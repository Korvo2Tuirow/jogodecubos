import { useContext } from "react"
import { NumContext} from "./ContextNumRandom";


export const Verif = ()=>{
 
    const numProv = useContext(NumContext);

    let novoArrayA = [
        numProv?.numRandomProv[0], // Elemento no índice 0
        numProv?.numRandomProv[3], // Elemento no índice 2
        numProv?.numRandomProv[6]  // Elemento no índice 5
    ];

    let novoArrayB = [
        numProv?.numRandomProv[1], // Elemento no índice 0
        numProv?.numRandomProv[4], // Elemento no índice 2
        numProv?.numRandomProv[7]  // Elemento no índice 5
    ];

    let novoArrayC = [
        numProv?.numRandomProv[2], // Elemento no índice 0
        numProv?.numRandomProv[5], // Elemento no índice 2
        numProv?.numRandomProv[8]  // Elemento no índice 5
    ];

    console.log( numProv?.numRandomProv);
    console.log(novoArrayA);
    console.log(novoArrayB);
    console.log(novoArrayC);
    return(
        <div></div>
    )
    

}