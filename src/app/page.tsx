"use client"
import { NumRandomProvider } from "@/components/ContextNumRandom";
import { Button } from "@/components/button";
import { Container } from "@/components/container";




const Page = () => { 

     

  return (
    <div className="flex flex-col pb-10 justify-center items-center h-screen w-full bg-gradient-to-r from-sky-600 to-emerald-400">
      <h1 className="text-4xl font-bold shadow-md shadow-black rounded-3xl p-3 bg-gradient-to-t  from-[#fd08ff]  to-[#0cd9e7]">Jogo do Cubinho</h1>

    <NumRandomProvider>
        <Container />
        <Button />
       
       
    </NumRandomProvider>
     
    </div>


  );
}

export default Page;