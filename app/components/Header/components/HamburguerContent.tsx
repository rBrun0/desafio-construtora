import Link from "next/link";
import { IoMdClose } from "react-icons/io";


type HamburguerContentType = {
    isHamburguerOpened: boolean,
    setIsHamburguerOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export const HamburguerContent = ({isHamburguerOpened, setIsHamburguerOpened}: HamburguerContentType) => {
    return (
        <div className={`fixed top-0 ${isHamburguerOpened ? 'left-0' : 'left-full'} w-full h-screen bg-mostard z-50 md:hidden transition-all`}>

            <div className="w-full flex justify-end pt-4 pr-6">
            <IoMdClose className="text-6xl text-white cursor-pointer" onClick={() => setIsHamburguerOpened(!isHamburguerOpened)}/>
            </div>

        

        <div className={`bg-mostard z-50 flex flex-col justify-start items-center py-12 gap-4`}>
            <Link href={"/empreendimentos"} className="text-white cursor-pointer" onClick={() =>  setIsHamburguerOpened(!isHamburguerOpened)}>empreendimentos</Link>
            <Link href={"/sobrenos"} className="text-white cursor-pointer" onClick={() => setIsHamburguerOpened(!isHamburguerOpened)}>sobrenos</Link>
            <p className="text-white cursor-pointer">opcoes</p>
            <p className="text-white cursor-pointer">opcoes</p>
            <p className="text-white cursor-pointer">opcoes</p>
            <p className="text-white cursor-pointer">opcoes</p>
            <p className="text-white cursor-pointer">opcoes</p>
            <p className="text-white cursor-pointer">opcoes</p>
            <p className="text-white cursor-pointer">opcoes</p>
            <p className="text-white cursor-pointer">opcoes</p>
        </div>
        </div>
    )
}