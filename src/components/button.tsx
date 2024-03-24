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

        const c1 = numRandom.slice(0, 3);
        const c2 = numRandom.slice(3, 6);
        const c3 = numRandom.slice(6, 9);

        const n1 = c1.every(n => n == c1[0])
        console.log(n1)
        const n2 = c2.every(n => n == c2[0])
        console.log(n2)
        const n3 = c3.every(n => n == c3[0])
        console.log(n3)

        if (n1 == true) {
            const audio = new Audio("../../public/sound/Whatsapp_Cortos.mp3");
            audio.play();
        }
        if (n2 == true) {
            const audio = new Audio("../../public/sound/Whatsapp_Cortos.mp3");
            audio.play();
        }
        if (n3 == true) {
            const audio = new Audio("../../public/sound/Whatsapp_Cortos.mp3");
            audio.play();
        }

    }

    return (
        <>
            <button className="m-10 border border-black p-3 rounded-md font-bold bgBtn cursor-pointer shadow-md shadow-black hover:scale-125" onClick={teste}>
                CLIQUE AQUI
            </button>

            <audio>
                <source src="../../public/sound/Whatsapp_Cortos.mp3" type="audio/mpeg"/>
            </audio>
        </>
    );
}
