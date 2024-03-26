import { useContext, useEffect } from "react"
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

    const linha1 = novoArrayA.every(v1 => v1 === novoArrayA[0]);
    const linha2 = novoArrayB.every(v1 => v1 === novoArrayB[0]);
    const linha3 = novoArrayC.every(v1 => v1 === novoArrayC[0]);

    
    
    if(linha1) numProv?.setAnimaLinha1(true) ;
    if(linha2) numProv?.setAnimaLinha2(true) ;
    if(linha3) numProv?.setAnimaLinha3(true) ;

    useEffect( ()=>{
        
        let idA1 = document.getElementById("idA0");
        let idB1 = document.getElementById("idB0");
        let idC1 = document.getElementById("idC0");      //console.log(idA1, idB1, idC1)

        let idA2 = document.getElementById("idA1");
        let idB2 = document.getElementById("idB1");
        let idC2 = document.getElementById("idC1");
        //console.log(idA2, idB2, idC2);


        let idA3 = document.getElementById("idA2");
        let idB3 = document.getElementById("idB2");
        let idC3 = document.getElementById("idC2");

    })
    












   
   
    return(
        <div></div>
    )
    

}