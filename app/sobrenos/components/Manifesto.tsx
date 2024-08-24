import { motion } from "framer-motion"

export const Manifesto = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center bg-customGray mt-56"
        >
            <h1 className="text-3xl md:text-6xl text-center text-white font-extrabold tracking-tight">MANIFESTO</h1>

            <p className="m-auto w-9/12 text-center text-white text-3xl md:text-6xl font-thin pb-64">
                Construindo um futuro melhor com inovação, qualidade e compromisso com nossos clientes e o meio ambiente.
            </p>
        </section>
    )
}