import Image from 'next/image'
import beachLogo from '../../../public/mainLogo.svg'
import buildingImage from "../../../public/buildingImage.jpg"

import { MdBed } from "react-icons/md";
import { FaCarRear } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import areaIcon from '../../../public/areaMeter.svg'


export const BuildingsCard = () => {
    return (
        <div className="flex flex-col justify-center items-start space-y-24">
            {/* width={165} height={133} */}
        <Image src={beachLogo} alt='beach-logo' className='hidden md:block w-[165px] h-[133px]'/> 
        <div className='md:w-[41rem] md:h-[34rem] bg-black flex justify-between'>
            <div className='h-full text-white flex flex-col justify-center items-start pl-12 space-y-10'>
                <span className='text-xl'><Image src={areaIcon} width={40} height={40} alt='icone'/> 120 a 150m2</span>
                <span className='text-xl flex flex-col'><MdBed className=' w-10 h-10 text-mostard'/> 2 ou 3 suites</span>
                <span className='text-xl flex flex-col'><FaCarRear className=' w-10 h-10 text-mostard'/> 2 ou 3 vagas</span>
                <span className='text-xl flex flex-col'> <FaLocationDot className=' w-10 h-10 text-mostard'/> Rua Manoel da <br /> Silva Pereira <br /> Pereque <br /> Porto Belo/SC</span>
            </div>

            <div className='h-[18] w-[13rem] md:w-[20rem] md:h-[37rem] lg:w-[26rem] lg:h-[43rem] relative md:-translate-y-44 md:translate-x-4'>
                <Image src={buildingImage} alt='imagem-predio' fill objectFit='cover'/>
            </div>
        </div>
        </div>
    )
}