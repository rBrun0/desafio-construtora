import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { GridBackground } from "./components/GridBackground";
import { MainLayout } from "./components/MainLayout";
import { Manifesto } from "./components/Manifesto";
import { MarqueeSection } from "./components/MarqueeSection";
import { TeamSection } from "./components/TeamSection";

export default function SobreNos() {
    return (
       
       
        <div className="relative bg-customGray overflow-x-hidden">
        <GridBackground/>
        <Header/>
        <MainLayout/>

        <MarqueeSection/>
        <TeamSection/>
        <Manifesto/>
        <Footer/>
        </div>
    )
}