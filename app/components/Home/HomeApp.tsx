"use client";

import Image from "next/image";
import mainBeach from "../../..//public/mainBeach.jpg";
import mainLogo from "../../../public/mainLogo.svg";
import circleIcon from "../../../public/circleIcon.svg";
import { Header } from "../Header/Header";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const dotVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.2,
    },
  },
};

const dotItem = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

export const HomeApp = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative flex flex-col">
      <Header />

      {/* imagem utilizada para o fundo */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <Image
            src={mainBeach}
            fill
            style={{ objectFit: "cover" }}
            alt="fundo"
            className="brightness-75"
            priority
          />
        </motion.div>
      </div>

      <motion.main
        className="flex flex-col items-center justify-center flex-1 w-full max-w-[37rem] mx-auto z-10 space-y-3 sm:space-y-4 px-6 sm:px-8 pt-16 sm:pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={scaleIn}>
          <Image
            src={mainLogo}
            width={164}
            height={133}
            alt="logo-site"
            className="w-[80px] h-[65px] sm:w-[120px] sm:h-[97px] md:w-[164px] md:h-[133px]"
          />
        </motion.div>
        <motion.h1
          className="text-white font-light text-xl sm:text-3xl md:text-5xl text-center"
          variants={fadeUp}
        >
          VIVA O <span className="bg-[#EDCF75] font-semibold">HOJE</span> COM
          SEGURANCA DO SEU PATRIMONIO
        </motion.h1>
        <motion.p
          className="text-white text-[10px] sm:text-xs md:text-base font-normal text-center"
          variants={fadeUp}
        >
          Apartamentos com 120 a 150m2 a 150m2 no Pereque, Porto Belo
        </motion.p>
        <motion.button
          className="bg-transparent border-2 border-white rounded-xl text-white w-28 h-10 sm:w-36 sm:h-14 md:h-16 text-xs sm:text-sm md:text-base"
          variants={scaleIn}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.95 }}
        >
          EXPLORE
        </motion.button>
      </motion.main>

      <motion.footer
        className="flex justify-between items-center text-white mx-4 sm:mx-6 pb-3 z-10"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center justify-center space-x-2 sm:space-x-3"
          variants={dotVariants}
        >
          <motion.span
            className="w-5 h-5 sm:w-7 sm:h-7 border-2 border-white rounded-full"
            variants={dotItem}
          />
          <motion.span
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 border-2 bg-white rounded-full"
            variants={dotItem}
          />
          <motion.span
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 border-2 bg-white rounded-full"
            variants={dotItem}
          />
          <motion.span
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 border-2 bg-white rounded-full"
            variants={dotItem}
          />
          <motion.span
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 border-2 bg-white rounded-full"
            variants={dotItem}
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <p className="text-[10px] sm:text-xs font-medium">DESENVOLVIDO POR</p>
          <Image
            src={circleIcon}
            width={31}
            height={31}
            alt="footer-icone"
            className="inline w-5 h-5 sm:w-[31px] sm:h-[31px]"
          />
        </motion.div>
      </motion.footer>
    </div>
  );
};
