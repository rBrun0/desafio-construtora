import Image from "next/image"
import mainBeach from "../../..//public/mainBeach.jpg"  
import mainLogo from '../../../public/mainLogo.svg'
import circleIcon from '../../../public/circleIcon.svg'
import { Header } from "../Header/Header"

export const HomeApp = () => {
    return (
        <div className="w-full min-h-screen max-h-screen overflow-hidden relative flex flex-col justify-between">
            <Header/>

            <main className="flex flex-col items-center justify-center w-[29rem] sm:w-[29rem] md:w-[37rem] h-[9rem] mx-auto z-10">
                <Image src={mainLogo} width={164} height={133} alt="logo-site" className="-translate-y-11 "/>
                <h1 className="text-white font-light text-3xl md:text-5xl text-center">
                    VIVA O <span className="bg-[#EDCF75] font-semibold">HOJE</span> COM SEGURANCA DO SEU PATRIMONIO
                </h1>
                <p className="text-white text-xs md:text-base font-normal">Apartamentos com 120 a 150m2 a 150m2 no Pereque, Porto Belo</p>
                <button className="bg-transparent border-2 border-white rounded-xl text-white w-36 h-9">
                    EXPLORE
                </button>
            </main>

            <footer className="flex justify-between items-center text-white mx-6 pb-3 z-10">
                <div className="flex items-center justify-center space-x-3">
                    <span className="w-7 h-7 border-2 border-white rounded-full"/>
                    <span className="w-2 h-2 border-2 bg-white rounded-full"/>
                    <span className="w-2 h-2 border-2 bg-white rounded-full"/>
                    <span className="w-2 h-2 border-2 bg-white rounded-full"/>
                    <span className="w-2 h-2 border-2 bg-white rounded-full"/>
                </div>

                <div className="flex items-center justify-center">
                    <p className="text-xs font-medium">DESENVOLVIDO POR</p>
                    <Image src={circleIcon} width={31} height={31} alt="footer-icone" className="inline"/>
                </div>
            </footer>


            {/* imagem utilizada para o fundo */}
            {/* <Image src={mainBeach}  alt="praia" className="-z-10 object-cover bg-center min-h-full translate-y md:-translate-y-[30%] lg:-translate-y-[50%] absolute"/> */}

            <Image src={mainBeach} fill objectFit="cover" alt="fundo"/>

        </div>
    )
}