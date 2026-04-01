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
    <div className="w-full min-h-screen max-h-screen overflow-hidden relative flex flex-col justify-between">
      <Header />

      <motion.main
        className="flex flex-col items-center justify-center w-[90%] sm:w-[29rem] md:w-[37rem] h-auto mx-auto z-10 space-y-2 px-4"
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
            className="-translate-y-11 w-[100px] h-[80px] sm:w-[164px] sm:h-[133px]"
          />
        </motion.div>
        <motion.h1
          className="text-white font-light text-2xl sm:text-3xl md:text-5xl text-center max-w-[95%]"
          variants={fadeUp}
        >
          VIVA O <span className="bg-[#EDCF75] font-semibold">HOJE</span> COM
          SEGURANCA DO SEU PATRIMONIO
        </motion.h1>
        <motion.p
          className="text-white text-[10px] sm:text-xs md:text-base font-normal text-center px-2"
          variants={fadeUp}
        >
          Apartamentos com 120 a 150m2 a 150m2 no Pereque, Porto Belo
        </motion.p>
        <motion.button
          className="bg-transparent border-2 border-white rounded-xl text-white w-28 h-12 sm:w-36 sm:h-16 text-sm sm:text-base"
          variants={scaleIn}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.95 }}
        >
          EXPLORE
        </motion.button>
      </motion.main>

      <motion.footer
        className="flex justify-between items-center text-white mx-6 pb-3 z-10"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center justify-center space-x-3"
          variants={dotVariants}
        >
          <motion.span
            className="w-7 h-7 border-2 border-white rounded-full"
            variants={dotItem}
          />
          <motion.span
            className="w-2 h-2 border-2 bg-white rounded-full"
            variants={dotItem}
          />
          <motion.span
            className="w-2 h-2 border-2 bg-white rounded-full"
            variants={dotItem}
          />
          <motion.span
            className="w-2 h-2 border-2 bg-white rounded-full"
            variants={dotItem}
          />
          <motion.span
            className="w-2 h-2 border-2 bg-white rounded-full"
            variants={dotItem}
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <p className="text-xs font-medium">DESENVOLVIDO POR</p>
          <Image
            src={circleIcon}
            width={31}
            height={31}
            alt="footer-icone"
            className="inline"
          />
        </motion.div>
      </motion.footer>

      {/* imagem utilizada para o fundo */}
      <motion.div
        className="absolute inset-0 -z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{ position: "absolute", zIndex: 0 }}
      >
        <Image
          src={mainBeach}
          fill
          style={{ objectFit: "cover" }}
          alt="fundo"
          className="brightness-75"
        />
      </motion.div>
    </div>
  );
};
