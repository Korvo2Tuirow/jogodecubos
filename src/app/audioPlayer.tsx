import { useEffect, useRef } from "react";

type Props={
    src: string;
    isPlaying: boolean;

}

export const AudioPlayer = ({src, isPlaying}:Props)=>{
    
    const audioTag = useRef<HTMLAudioElement>(null);
    
    useEffect(()=>{
        if(isPlaying){
        audioTag.current?.play();
        }else{
            audioTag.current?.pause();
        }
    })
    
    
    return(
       <audio ref={audioTag} src={src}></audio>
        )
}