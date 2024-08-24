import Image from "next/image"
import backgroundImage1 from "../../../public/imagemBackground1.jpg"
import backgroundImage2 from "../../../public/imagemBackground2.jpg"
import backgroundImage3 from "../../../public/imagemBackground3.jpg"
import backgroundImage4 from "../../../public/imagemBackground4.jpg"
import backgroundImage5 from "../../../public/imagemBackground5.jpg"
import backgroundImage6 from "../../../public/imagemBackground6.jpg"

export const GridBackground = () => {
    return (
        // grid grid-cols-3
        <div className="absolute w-full h-screen bg-customGray flex flex-wrap overflow-hidden justify-center space-x-4 px-16">

            {/* primeiro carrossel */}

            <div className="flex flex-col space-y-10 animate-spinUp">

            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
                <Image src={backgroundImage1} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
            <Image src={backgroundImage2} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
            <Image src={backgroundImage3} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
            <Image src={backgroundImage4} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
                </div> 
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
            <Image src={backgroundImage5} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
                <Image src={backgroundImage1} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
            <Image src={backgroundImage2} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
            <Image src={backgroundImage3} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
            <Image src={backgroundImage4} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
                </div> 
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
            <Image src={backgroundImage5} alt="imagem-fundo" fill objectFit="cover"/>
            </div>

            

            </div>

            {/* segundo */}

            <div className="flex flex-col space-y-10 animate-spinDown">


            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
                <Image src={backgroundImage5} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
            <Image src={backgroundImage4} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
            <Image src={backgroundImage3} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
            <Image src={backgroundImage2} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
                </div> 
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
            <Image src={backgroundImage1} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
                <Image src={backgroundImage5} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
            <Image src={backgroundImage4} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
            <Image src={backgroundImage3} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
            <Image src={backgroundImage2} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
                </div> 
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
            <Image src={backgroundImage1} alt="imagem-fundo" fill objectFit="cover"/>
            </div>

            </div>

             {/* terceiro carrossel */}

            <div className="flex flex-col space-y-10 animate-spinUp">

            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
                <Image src={backgroundImage4} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
            <Image src={backgroundImage3} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
            <Image src={backgroundImage5} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
            <Image src={backgroundImage1} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
                </div> 
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
            <Image src={backgroundImage3} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
                <Image src={backgroundImage4} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
            <Image src={backgroundImage3} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
            <Image src={backgroundImage5} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
            <Image src={backgroundImage1} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
                </div> 
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
            <Image src={backgroundImage3} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            

            </div>



           


            {/* <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
            <Image src={backgroundImage6} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[21rem] bg-white opacity-20 relative">
            <Image src={backgroundImage1} alt="imagem-fundo" fill objectFit="cover"/>
            </div>
            <div className="w-[27rem] h-[45rem] bg-white opacity-20 relative">
            <Image src={backgroundImage2} alt="imagem-fundo" fill objectFit="cover"/>
            </div> */}



        </div>
    )
}