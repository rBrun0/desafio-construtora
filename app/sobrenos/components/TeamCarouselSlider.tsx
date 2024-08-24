import Image from "next/image"
import employee1 from '../../../public/employee1.jpg'
import employee2 from '../../../public/employee2.jpg'
import employee3 from '../../../public/employee3.jpg'
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'


export const TeamCarouselSlider = () => {
    return (
        <section className="min-w-full h-[43rem] bg-mostard flex justify-center items-center space-x-4 z-20 overflow-hidden">
            <div className=" relative h-[45rem] min-w-[23rem] w-[29rem] -translate-y-11 group cursor-pointer">
                    <Image src={employee1} fill objectFit="cover" alt="imagem-funcionario"/>
                    <h1 className="absolute top-[70%] -left-[27%]  text-4xl font-thin text-white opacity-75 -rotate-90 translate-y-0 
                    group-hover:-translate-y-24 ease-in-out group-hover:opacity-0 transition-all">CEO COFOUNDER</h1>
                    <h1 className="absolute top-[90%] left-[14%] text-4xl font-bold text-white opacity-100 group-hover:opacity-0 transition-opacity">ROBSON</h1>
                    <h1 className="absolute -bottom-[6%] left-[50%] -translate-x-[50%] text-8xl font-bold text-white hidden group-hover:block transition-all">ROBSON</h1>
            </div>

            <div className=" relative h-[45rem] min-w-[23rem] w-[29rem] -translate-y-11 group cursor-pointer">
                    <Image src={employee2} fill objectFit="cover" alt="imagem-funcionario"/>
                    <h1 className="absolute top-[70%] -left-[27%]  text-4xl font-thin text-white opacity-75 -rotate-90 translate-y-0 
                    group-hover:-translate-y-24 ease-in-out group-hover:opacity-0 transition-all">CEO COFOUNDER</h1>
                    <h1 className="absolute top-[90%] left-[14%] text-4xl font-bold text-white opacity-100 group-hover:opacity-0 transition-opacity">GILBERTO</h1>
                    <h1 className="absolute -bottom-[6%] left-[50%] -translate-x-[50%] text-8xl font-bold text-white hidden group-hover:block transition-all">GILBERTO</h1>
            </div>

            <div className=" relative h-[45rem] min-w-[23rem] w-[29rem] -translate-y-11 group cursor-pointer">
                    <Image src={employee3} fill objectFit="cover" alt="imagem-funcionario"/>
                    <h1 className="absolute top-[70%] -left-[27%]  text-4xl font-thin text-white opacity-75 -rotate-90 translate-y-0 
                    group-hover:-translate-y-24 ease-in-out group-hover:opacity-0 transition-all">CEO COFOUNDER</h1>
                    <h1 className="absolute top-[90%] left-[14%] text-4xl font-bold text-white opacity-100 group-hover:opacity-0 transition-opacity">JUNIOR</h1>
                    <h1 className="absolute -bottom-[6%] left-[50%] -translate-x-[50%] text-8xl font-bold text-white hidden group-hover:block transition-all">JUNIOR</h1>
            </div>

        </section>
    )
}