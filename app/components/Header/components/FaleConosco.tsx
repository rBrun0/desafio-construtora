'use client'

import { FaWhatsapp } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";

type ModalProps = {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const FaleConosco = ({isModalOpen, setIsModalOpen}: ModalProps) => {

    function closeModal() {
        setIsModalOpen(false)
    }

    return (

        <section className={`absolute left-0 ${isModalOpen ? 'top-0 h-full' : '-top-[600px] h-0'} hidden md:block w-full transition-all z-50`}>

            <div className="flex justify-end bg-customGray pr-8 pt-5 text-white cursor-pointer">
                <IoCloseCircleOutline className="w-14 h-14" onClick={closeModal}/>
            </div>
       
        <div className="w-full h-[26rem] flex justify-around items-start bg-customGray shadow-lg">


            <div className="w-1/3">
                <h1 className="text-white translate-x-4 translate-y-24 lg:translate-x-0 lg:translate-y-0  md:text-4xl lg:text-8xl font-bold">
                    COMO <br /> PODEMOS <br /> <span className="text-mostard">AJUDAR</span>
                    </h1>
            </div>


            <section className="flex flex-col justify-center items-start space-y-10">
                <div className="flex justify-center items-center space-x-1 text-white">
                    <IoLocation className="text-mostard w-4 h-4 lg:w-8 lg:h-8"/>
                    <div className="">
                        <h1 className="text-base lg:text-xl font-bold">Faca nos uma visita</h1>
                        <p className="text-base lg:text-xl">Rua 222 n 122 <br /> Meia praia - Itapema / SC</p>
                        <p className="lg:text-sm">ver no google maps</p>
                    </div>
                </div>

                <div className="flex justify-center items-center space-x-1 text-white">
                    <FaWhatsapp className="text-mostard w-4 h-4 lg:w-8 lg:h-8"/>
                    <div className="">
                        <h1 className="text-base lg:text-xl font-bold">Comercial</h1>
                        <p className="text-base lg:text-xl">47 99999-9999</p>
                        
                    </div> 
                </div>

                <div className="flex justify-center items-center space-x-1 text-white">
                    <FaWhatsapp className="text-mostard w-4 h-4 lg:w-8 lg:h-8"/>
                    <div className="">
                        <h1 className="text-base lg:text-xl font-bold">Administrativo</h1>
                        <p className="text-base lg:text-xl">47 99999-9999</p>
                        
                    </div>
                </div>

            </section>


            <form action="" className="flex flex-col justify-center space-y-5">

                <input type="text" className="text-white bg-transparent border-b-white border-solid border-b-[1px] outline-none w-[16rem] lg:w-[24rem] pb-3" placeholder="Nome"/>
                <input type="email"  name="" id="" placeholder="E-mail"  className="text-white bg-transparent border-b-white border-solid border-b-[1px] outline-none pb-3"/>
                <input type="tel" name="" id="" placeholder="Celular" className="text-white bg-transparent border-b-white border-solid border-b-[1px] outline-none pb-3"/>

                <textarea name="mensagem" id="" placeholder="Mensagem" className="bg-transparent border-b-[1px] border-solid border-white pb-3
                 outline-none"></textarea>

            </form>
               
        </div>
        </section>
    )
}