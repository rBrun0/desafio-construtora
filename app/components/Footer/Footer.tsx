import Image from "next/image"
import footerIcon from '../../../public/footerIcon.svg'
import circleIcon from "../../../public/circleIcon.svg"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="w-full bg-white relative">

            <div className="absolute -top-7 left-[50%] -translate-x-[50%] flex items-center justify-center space-x-7 px-14 py-2 rounded-3xl bg-black text-mostard text-3xl">
                <FaInstagram className="cursor-pointer hover:text-white transition-colors"/>
                <FaFacebook className="cursor-pointer hover:text-white transition-colors"/>
                <FaYoutube className="cursor-pointer hover:text-white transition-colors"/>
            </div>

            <div className="relative w-full min-h-[35rem] pt-28 px-40 flex flex-col md:flex-row items-start justify-start space-y-8 md:space-y-0 space-x-12">

            <div className="relative flexflex-col justify-center items-start space-y-4">
            <span className="absolute -top-2 left-0 w-20 h-2 bg-[#EDCF75]"/>
            <h1 className="font-bold text-3xl">EMPREENDIMENTOS</h1>
            <p className="text-xl font-light pt-3">Sun Beach Residence</p>
            <p className="text-xl font-light">Gran Palace Residence</p>
            <p className="text-xl font-light">Beauc Lac Residence</p>
            <p className="text-xl font-light">Bello Bosque Residence</p>
        </div>

        <div className="relative flex flex-col justify-center items-start space-y-4">
            <span className="absolute -top-2 left-0 w-20 h-2 bg-[#EDCF75]"/>
            <h1 className="font-bold text-3xl">MAIS CANAIS</h1>
            <p className="text-xl font-light pt-3">Trabalhe Conosco</p>
            <p className="text-xl font-light">Portal do cliente</p>
        </div>

        <div className="relative flex flex-col justify-center items-start space-y-4">
            <span className="absolute -top-2 left-0 w-20 h-2 bg-[#EDCF75]"/>
            <h1 className="font-bold text-3xl">FERRAMENTAS</h1>
            <p className="text-xl font-light pt-3">CUB / SC</p>
        </div>

            </div>

            <div className=" w-5/6 h-[1px] bg-black opacity-25 m-auto"/>

            <div className="text-mostard flex items-center justify-between px-32 py-11">
                <p>GD&JR@2023</p>
                <Image src={footerIcon} width={54} height={50} alt="imagem" className="translate-x-[50%]"/>
                <p className="flex items-center justify-center hidden md:block">
                    DESENVOLVIDO POR
                <Image src={circleIcon} width={31} height={31} alt="imagem" className="bg-mostard rounded-full p-1"/>
                </p>
            </div>

        </footer>
    )
}