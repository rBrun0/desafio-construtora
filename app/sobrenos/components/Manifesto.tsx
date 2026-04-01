"use client";

import { motion } from "framer-motion";

export const Manifesto = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-customGray mt-56">
      <motion.h1
        className="text-3xl md:text-6xl text-center text-white font-extrabold tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        MANIFESTO
      </motion.h1>

      <motion.p
        className="m-auto w-9/12 text-center text-white text-3xl md:text-6xl font-thin pb-64"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.9,
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        Construindo um futuro melhor com inovação, qualidade e compromisso com
        nossos clientes e o meio ambiente.
      </motion.p>
    </section>
  );
};
