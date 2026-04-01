"use client";

import { Header } from "../components/Header/Header";
import { BuildingsCard } from "./components/BuildingsCard";
import longLeftArrow from "../../public/longLeftArrow.svg";
import longRightArrow from "../../public/longRightArrow.svg";
import officeImage from "../../public/officeImage.jpg";
import Image from "next/image";
import { Footer } from "../components/Footer/Footer";
import { motion } from "framer-motion";

const sectionTitleVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function empreendimentos() {
  return (
    <div className="bg-customGray min-h-screen overflow-x-hidden">
      <Header />

      {/* Pre Lancamento */}

      <div className="relative">
        <h1
          className="absolute text-customGray font-bold text-9xl opacity-5 left-10 top-5 md:-top-12 "
          style={{
            textShadow:
              "-2px -2px 0 #fff, -2px 2px 0 #fff, 2px -2px 0 #fff, 2px 0 0 #fff",
          }}
        >
          PRE <br /> LANCAMENTO
        </h1>
        <motion.h1
          className="text-white text-6xl font-bold md:mt-36 md:ml-36 translate-x-8 translate-y-12 md:translate-x-0 md:translate-y-0"
          variants={sectionTitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          PRE <br /> <span className="text-mostard">LANCAMENTO</span>
        </motion.h1>
      </div>

      <motion.section
        className="flex flex-col lg:flex-row justify-around items-center space-y-20 lg:space-y-0 mt-40 md:mt-52 lg:mt-72 bg-customGray"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={cardVariants}>
          <BuildingsCard />
        </motion.div>
        <motion.div variants={cardVariants}>
          <BuildingsCard />
        </motion.div>
      </motion.section>

      <motion.div
        className="bg-customGray w-full h-16 px-16 pt-24 flex justify-start items-center space-x-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.2 }}>
          <Image
            src={longLeftArrow}
            width={114}
            height={50}
            alt="seta-esquerda"
          />
        </motion.div>
        <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
          <Image
            src={longRightArrow}
            width={114}
            height={50}
            alt="seta-esquerda"
          />
        </motion.div>
      </motion.div>

      {/* Em Construcao */}

      <div className="relative">
        <h1
          className="absolute text-customGray font-bold text-9xl opacity-5 left-10 top-12 md:-top-12  "
          style={{
            textShadow:
              "-2px -2px 0 #fff, -2px 2px 0 #fff, 2px -2px 0 #fff, 2px 0 0 #fff",
          }}
        >
          EM <br /> CONSTRUCAO
        </h1>
        <motion.h1
          className="text-white text-6xl font-bold md:mt-36 md:ml-36 translate-x-8 translate-y-32 md:translate-x-0 md:translate-y-0 "
          variants={sectionTitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          EM <br /> <span className="text-mostard">CONSTRUCAO</span>
        </motion.h1>
      </div>

      <motion.section
        className="flex flex-col md:flex-row justify-around items-center mt-72 bg-customGray"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={cardVariants}>
          <BuildingsCard />
        </motion.div>
        <motion.div variants={cardVariants}>
          <BuildingsCard />
        </motion.div>
      </motion.section>

      <motion.div
        className="bg-customGray w-full h-16 px-16 pt-24 flex justify-start items-center space-x-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.2 }}>
          <Image
            src={longLeftArrow}
            width={114}
            height={50}
            alt="seta-esquerda"
          />
        </motion.div>
        <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
          <Image
            src={longRightArrow}
            width={114}
            height={50}
            alt="seta-esquerda"
          />
        </motion.div>
      </motion.div>

      <section className="w-full h-[32rem] flex flex-col items-center justify-center space-y-4 relative mt-32">
        <Image
          src={officeImage}
          alt="imagem-fundo-escritorio"
          fill
          objectFit="cover"
          className="opacity-10 "
        />

        <motion.h1
          className="text-4xl lg:text-6xl font-bold text-white z-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          CONHECA NOSSAS <span className="text-mostard">OBRAS ENTREGUES</span>
        </motion.h1>
        <motion.button
          className="bg-black hover:bg-zinc-800 text-white text-sm font-semibold tracking-widest rounded-3xl transition-colors
                flex items-center justify-center z-10 w-48 md:w-52 md:h-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          VER PORTIFOLIO
        </motion.button>
      </section>

      <section className="w-full min-h-[26rem] bg-mostard flex flex-col md:flex-row  items-center justify-around">
        <motion.h1
          className="text-2xl md:text-4xl lg:text-6xl text-center text-white font-bold tracking-tighter"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          CADASTRE-SE E <br /> RECEBA NOVAS MENSAGENS
        </motion.h1>

        <motion.form
          action=""
          className="flex flex-col justify-center items-end space-y-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.input
            variants={fadeUpVariants}
            type="text"
            placeholder="Nome"
            id="nameInput"
            className="bg-transparent outline-none border-b-2 border-zinc-300 text-white w-[20rem] md:w-[24rem] lg:w-[28rem]"
          />
          <motion.input
            variants={fadeUpVariants}
            type="email"
            name=""
            id="emailInput"
            placeholder="E-Mail"
            className="bg-transparent outline-none border-b-2 border-zinc-300 text-white w-[20rem] md:w-[24rem] lg:w-[28rem]"
          />
          <motion.button
            variants={fadeUpVariants}
            className="text-sm font-bold tracking-widest text-white bg-black hover:bg-zinc-800 rounded-2xl w-24 h-7 md:w-36 md:h-8 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ENVIAR
          </motion.button>
        </motion.form>
      </section>

      <Footer />
    </div>
  );
}
