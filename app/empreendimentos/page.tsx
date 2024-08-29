import { Header } from "../components/Header/Header";
import { BuildingsCard } from "./components/BuildingsCard";
import longLeftArrow from "../../public/longLeftArrow.svg"
import longRightArrow from "../../public/longRightArrow.svg"
import officeImage from "../../public/officeImage.jpg"
import Image from "next/image";
import { Footer } from "../components/Footer/Footer";

export default function empreendimentos() {
    return (
        <div className="bg-customGray min-h-screen overflow-x-hidden">
        <Header/>   

        {/* Pre Lancamento */}

        <div className="relative">
        <h1 className="absolute text-customGray font-bold text-9xl opacity-5 left-10 top-5 md:-top-12 "
        style={{textShadow: '-2px -2px 0 #fff, -2px 2px 0 #fff, 2px -2px 0 #fff, 2px 0 0 #fff'}}>PRE <br /> LANCAMENTO</h1>
        <h1 className="text-white text-6xl font-bold md:mt-36 md:ml-36 translate-x-8 translate-y-12 md:translate-x-0 md:translate-y-0"
        >PRE <br /> <span className="text-mostard">LANCAMENTO</span>
        </h1>
        </div>
 

        <section className="flex flex-col lg:flex-row justify-around items-center space-y-20 lg:space-y-0 mt-40 md:mt-52 lg:mt-72 bg-customGray">
            <BuildingsCard/>
            <BuildingsCard/>
            
        </section>
        <div className="bg-customGray w-full h-16 px-16 pt-24 flex justify-start items-center space-x-16">
        <Image src={longLeftArrow} width={114} height={50} alt="seta-esquerda"/>
        <Image src={longRightArrow} width={114} height={50} alt="seta-esquerda"/>
        </div>

        {/* Em Construcao */}

        <div className="relative">
        <h1 className="absolute text-customGray font-bold text-9xl opacity-5 left-10 top-12 md:-top-12  "
        style={{textShadow: '-2px -2px 0 #fff, -2px 2px 0 #fff, 2px -2px 0 #fff, 2px 0 0 #fff'}}>EM <br /> CONSTRUCAO</h1>
        <h1 className="text-white text-6xl font-bold md:mt-36 md:ml-36 translate-x-8 translate-y-32 md:translate-x-0 md:translate-y-0 ">
            EM <br /> <span className="text-mostard">CONSTRUCAO</span></h1>
        </div>

        <section className="flex flex-col md:flex-row justify-around items-center mt-72 bg-customGray">
            <BuildingsCard/>
            <BuildingsCard/>
             
        </section>
        <div className="bg-customGray w-full h-16 px-16 pt-24 flex justify-start items-center space-x-16">
        <Image src={longLeftArrow} width={114} height={50} alt="seta-esquerda"/>
        <Image src={longRightArrow} width={114} height={50} alt="seta-esquerda"/>
        </div>

        <section className="w-full h-[32rem] flex flex-col items-center justify-center space-y-4 relative mt-32">
            <Image src={officeImage} alt="imagem-fundo-escritorio" fill objectFit="cover" className="opacity-10"/>

            <h1 className="text-4xl lg:text-6xl font-bold text-white z-10 text-center">CONHECA NOSSAS <span className="text-mostard">OBRAS ENTREGUES</span></h1>
            <button className="bg-black hover:bg-zinc-800 text-white text-sm font-semibold tracking-widest rounded-3xl transition-colors
            flex items-center justify-center z-10 w-48 md:w-52 md:h-8">VER PORTIFOLIO
            </button>

        </section>

        <section className="w-full min-h-[26rem] bg-mostard flex flex-col md:flex-row  items-center justify-around">

            <h1 className="text-2xl md:text-4xl lg:text-6xl text-center text-white font-bold tracking-tighter">CADASTRE-SE E <br /> RECEBA NOVAS MENSAGENS</h1>

            <form action="" className="flex flex-col justify-center items-end space-y-5">
                <input type="text" placeholder="Nome" id="nameInput" className="bg-transparent outline-none border-b-2 border-zinc-300 text-white w-[20rem] md:w-[24rem] lg:w-[28rem]"/>
                <input type="email" name="" id="emailInput" placeholder="E-Mail" className="bg-transparent outline-none border-b-2 border-zinc-300 text-white w-[20rem] md:w-[24rem] lg:w-[28rem]"/>
                <button className="text-sm font-bold tracking-widest text-white bg-black hover:bg-zinc-800 rounded-2xl w-24 h-7 md:w-36 md:h-8 transition-colors
                ">ENVIAR
                </button>
            </form>

        </section>

        <Footer/>

        </div>
    )
}