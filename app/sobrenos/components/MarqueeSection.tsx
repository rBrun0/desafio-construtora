import { MutableRequestCookiesAdapter } from "next/dist/server/web/spec-extension/adapters/request-cookies"

export const MarqueeSection = () => {
    return (
        <section className="flex flex-col space-y-24 w-full h-96 overflow-hidden bg-customGray">

            {/* primeiro marquee */}
            <div className=" w-full flex space-x-7 text-white text-6xl font-bold animate-marqueeLeft">
                <span className="min-w-[700px]">QUALIDADE EM <br /> <span className="text-mostard">TODOS OS DETALHES</span></span>
                <span className="min-w-[400px]">POS VENDA <br /> <span className="text-mostard">ATIVO</span></span>
                <span className="min-w-[700px]">COMPRA SEGURA <br /><span className="text-mostard">EM TODO O PROCESSO</span></span>
                <span className="min-w-[700px]">QUALIDADE EM <br /> <span className="text-mostard">TODOS OS DETALHES</span></span>
                <span className="min-w-[400px]">POS VENDA <br /> <span className="text-mostard">ATIVO</span></span>
                <span className="min-w-[700px]">COMPRA SEGURA <br /><span className="text-mostard">EM TODO O PROCESSO</span></span>
                <span className="min-w-[700px]">QUALIDADE EM <br /> <span className="text-mostard">TODOS OS DETALHES</span></span>
                <span className="min-w-[400px]">POS VENDA <br /> <span className="text-mostard">ATIVO</span></span>
                <span className="min-w-[700px]">COMPRA SEGURA <br /><span className="text-mostard">EM TODO O PROCESSO</span></span>

               
            </div>

            {/* segundo marquee */}

            <div className=" w-full flex space-x-7 text-white text-6xl font-bold animate-marqueeRight">

                <span className="min-w-[400px]">POS VENDA <br /> <span className="text-mostard">ATIVO</span></span>
                <span className="min-w-[700px]">QUALIDADE EM <br /> <span className="text-mostard">TODOS OS DETALHES</span></span>
                <span className="min-w-[700px]">COMPRA SEGURA <br /><span className="text-mostard">EM TODO O PROCESSO</span></span>
                <span className="min-w-[400px]">POS VENDA <br /> <span className="text-mostard">ATIVO</span></span>
                <span className="min-w-[700px]">QUALIDADE EM <br /> <span className="text-mostard">TODOS OS DETALHES</span></span>
                <span className="min-w-[700px]">COMPRA SEGURA <br /><span className="text-mostard">EM TODO O PROCESSO</span></span>
                <span className="min-w-[400px]">POS VENDA <br /> <span className="text-mostard">ATIVO</span></span>
                <span className="min-w-[700px]">QUALIDADE EM <br /> <span className="text-mostard">TODOS OS DETALHES</span></span>
                <span className="min-w-[700px]">COMPRA SEGURA <br /><span className="text-mostard">EM TODO O PROCESSO</span></span>
               
            </div>
        </section>
    )
}