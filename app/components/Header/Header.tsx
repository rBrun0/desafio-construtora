'use client'

import Image from "next/image"
import headerLogo from "../../../public/siteLogo.svg"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { FaleConosco } from "./components/FaleConosco";
import { useState } from "react";


export const Header = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal() {
        setIsModalOpen(true)
    }

    return (
        <header className="flex justify-between items-center max-w-full h-20 pt-6 mx-8 z-[999]">
            <Link href={'/'}>
                <Image src={headerLogo} height={76} width={109} alt="header-logo" className="cursor-pointer"/>
            </Link>

            <nav className="hidden sm:hidden md:flex justify-center items-center space-x-10 text-white text-xs lg:text-sm font-bold ">
                <Link href={'/empreendimentos'} className="cursor-pointer transition-colors relative group">EMPREENDIMENTOS
                    <span className="absolute -top-12 left-0 w-full h-0 bg-[#EDCF75] group-hover:h-4 transition-all"/>
                </Link>

                
                <Link href={'/sobrenos'} className="cursor-pointer transition-colors relative group">SOBRE NOS
                    <span className="absolute -top-12 left-0 w-full h-0 bg-[#EDCF75] group-hover:h-4 transition-all"/>
                </Link>

                <span className="cursor-pointer transition-colors relative group">OPORTUNIDADES
                <span className="absolute -top-12 left-0 w-full h-0 bg-[#EDCF75] group-hover:h-4 transition-all"/>
                </span>

                <span className="cursor-pointer transition-colors relative group">PORTIFOLIO
                <span className="absolute -top-12 left-0 w-full h-0 bg-[#EDCF75] group-hover:h-4 transition-all"/>
                </span>

                <span className="cursor-pointer transition-colors relative group" onClick={openModal}>FALE CONOSCO
                <span className="absolute -top-12 left-0 w-full h-0 bg-[#EDCF75] group-hover:h-4 transition-all"/>
                </span>
            </nav> 

            <nav className="hidden sm:hidden lg:flex justify-center items-center space-x-3">
                <a href="#" className="text-white hover:text-mostard transition-colors text-3xl"> 
                    <FaWhatsapp />
                </a>
                <a href="#" className="text-white hover:text-mostard transition-colors text-3xl">
                    <FaInstagram />
                </a>
                <a href="#" className="text-white hover:text-mostard transition-colors text-3xl">
                    <FaFacebook />
                </a>
                <a href="#" className="text-white hover:text-mostard transition-colors text-3xl">
                    <FaYoutube />
                </a>
            </nav>

            {/* hamburguer */}

            <RxHamburgerMenu className="block md:hidden text-white w-12 h-12 cursor-pointer"/>


            {/* modal fale conosco */}

            <FaleConosco isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>

        </header>
    )
}