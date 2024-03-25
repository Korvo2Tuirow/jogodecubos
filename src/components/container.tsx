
import React, { useContext, useEffect, useState } from "react";
import { NumContext } from "./ContextNumRandom";
import { AudioPlayer } from "@/app/audioPlayer";

export const Container = () => {

    const [playing, setPlaying] = useState(false)
    const [animaCol1, setAnimaCol1] = useState<string>("anima")
    const [animaCol2, setAnimaCol2] = useState<string>("anima")
    const [animaCol3, setAnimaCol3] = useState<string>("anima")

    const NumCtx = useContext(NumContext);


    const c1 = NumCtx?.numRandomProv.slice(0, 3);
    const c2 = NumCtx?.numRandomProv.slice(3, 6);
    const c3 = NumCtx?.numRandomProv.slice(6, 9);

    const audioPlay = () => {
        const audio = new Audio('./sound/WhatsappCortos.mp3');
        audio.play();
    }

    useEffect(() => {

        const v1 = c1?.every(v1 => v1 === c1[0]);
        if (v1) {
            setPlaying(playing)
            audioPlay();
            setAnimaCol1("shakelr");           
        }else{ setAnimaCol1("anima");}

        const v2 = c2?.every(v2 => v2 === c2[0]);
        if (v2) {
            setPlaying(playing)
            audioPlay();
            setAnimaCol2("shakelr");            
        }else{setAnimaCol2("anima");}

        const v3 = c3?.every(v3 => v3 === c3[0]);
        if (v3) {
            setPlaying(playing)
            audioPlay();
            setAnimaCol3("shakelr");           
        }else{ setAnimaCol3("anima");}

        NumCtx?.setAnima(false)


    }, NumCtx?.numRandomProv)



    return (
        <div className={`border bgBtn shadow-lg shadow-black p-4 flex mt-10 border-black max-w-[500px] w-[90%] h-[500px] max-h-[90%] `}>
            <div className="w-[33.3%] flex flex-col ">
                {c1?.map(e => (<div className={`bg${e.toString()} cssDefault ${!NumCtx?.anima && animaCol1}`} ></div>))}
            </div>

            <div className="w-[33.3%] flex flex-col">
                {c2?.map(e => (<div className={`bg${e.toString()}  cssDefault ${!NumCtx?.anima && animaCol2}`}></div>))}
            </div>

            <div className="w-[33.3%] flex flex-col">
                {c3?.map(e => (<div className={`bg${e.toString()} cssDefault ${!NumCtx?.anima && animaCol3}`}></div>))}
            </div>

            <AudioPlayer src="../../public/sound/WhatsappCortos.mp3"
                isPlaying={playing} />

        </div>
    )
}