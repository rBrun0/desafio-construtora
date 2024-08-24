import { TeamCarouselSlider } from "./TeamCarouselSlider"

export const TeamSection = () => {
    return (
        <section className="w-full bg-customGray">
            
        <h1 className="text-customGray font-bold text-[13rem] opacity-15 text-center"
        style={{textShadow: '-2px -2px 0 #fff, -2px 2px 0 #fff, 2px -2px 0 #fff, 2px 0 0 #fff'}}>TEAM </h1>
        <TeamCarouselSlider/>
        </section>
    )
}