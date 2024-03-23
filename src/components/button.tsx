"use client"
import { useContext, useState } from 'react';
import { NumContext } from './ContextNumRandom';


export const Button = () => {

    const NumCtx = useContext(NumContext);

    const initialNumRandom = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10 + 1));

    const [numRandom, setNumRandom] = useState(initialNumRandom);

    const teste = () => {

        setNumRandom([])
        setNumRandom(prevNumRandom => [
            ...prevNumRandom,
            ...Array.from({ length: 9 }, () => Math.floor(Math.random() * 10 + 1))
        ]);

        NumCtx?.setNumRandomProv(numRandom)      
        
        const c1 = numRandom.slice(0,3);
        const c2 = numRandom.slice(3,6);
        const c3 = numRandom.slice(6,9);  
                        
        }
        
    return (
        <>
            <button className="m-10 border border-black p-3 rounded-md font-bold bgBtn cursor-pointer shadow-md shadow-black hover:scale-125" onClick={teste}>
                CLIQUE AQUI
            </button>

        </>
    );
    }
