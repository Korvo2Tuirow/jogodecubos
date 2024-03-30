"use client"
import { Modal } from "@/components/Modal";
import { NumRandomProvider } from "@/components/ContextNumRandom";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Verif } from "@/components/verficador";
import { Aposta } from "@/components/Aposta";

const Page = () => {      

  return (
    <div className="flex flex-col p-5 justify-center items-center h-screen w-full bgBody ">
      <h1 className="text-4xl font-bold shadow-[#207] shadow-lg  p-3 bg-gradient-to-r  from-[#000]  to-[#207] border-2 rounded-md border-gray-500 absolute top-3 text-gray-500">Jogo do Bicho</h1>

    <NumRandomProvider>
        <Container />
        <Button />
        <Verif/>
        <Modal/>
        <Aposta/>
    </NumRandomProvider>
     
    </div>


  );
}

export default Page;