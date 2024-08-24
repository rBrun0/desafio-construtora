import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { GridBackground } from "./components/GridBackground";
import { Manifesto } from "./components/Manifesto";
import { MarqueeSection } from "./components/MarqueeSection";
import { TeamSection } from "./components/TeamSection";

export default function SobreNos() {
    return (
       
       
        <div className="relative bg-customGray overflow-x-hidden">
            <GridBackground/>
            <Header/>
        <section className="w-full h-screen flex justify-center items-center text-white">

            <h1 className="absolute left-[50%] -translate-x-[50%] top-16 flex flex-col
             justify-center items-center text-[5rem] md:text-[8rem] lg:text-[11rem] font-bold opacity-15 text-customGray z-20 "
              style={{textShadow: '-2px -2px 0 #fff, -2px 2px 0 #fff, 2px -2px 0 #fff, 2px 0 0 #fff'}}>
                <p>SOBRE</p>
                <p>NOS</p>
            </h1>

        <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-center w-12/12 z-30 -translate-y-20 md:translate-y-0">
        CONSTRUIMOS <br /> HA 15 ANOS O <span className="text-mostard">FUTURO</span> DA SUA FAMILIA
        </h1>

        </section>

        <MarqueeSection/>
        <TeamSection/>
        <Manifesto/>
        <Footer/>
        </div>
    )
}