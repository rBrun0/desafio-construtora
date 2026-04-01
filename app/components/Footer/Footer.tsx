"use client";

import Image from "next/image";
import footerIcon from "../../../public/footerIcon.svg";
import circleIcon from "../../../public/circleIcon.svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export const Footer = () => {
  return (
    <footer className="w-full bg-white relative">
      <motion.div
        className="absolute -top-7 left-1/2 flex items-center justify-center gap-4 sm:gap-7 px-8 sm:px-14 py-2 rounded-3xl bg-black text-mostard text-2xl sm:text-3xl"
        initial={{ y: 20, opacity: 0, x: "-50%" }}
        whileInView={{ y: 0, opacity: 1, x: "-50%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram className="cursor-pointer hover:text-white transition-colors" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaFacebook className="cursor-pointer hover:text-white transition-colors" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaYoutube className="cursor-pointer hover:text-white transition-colors" />
        </motion.div>
      </motion.div>

      <div className="relative w-full min-h-[35rem] pt-20 sm:pt-28 px-6 sm:px-16 md:px-28 flex flex-col md:flex-row items-start md:items-start justify-start gap-10 sm:gap-16">
        <motion.div
          className="relative flex flex-col justify-center items-start space-y-4"
          custom={0}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="absolute -top-2 left-0 w-20 h-2 bg-[#EDCF75]" />
          <h1 className="font-bold text-xl sm:text-3xl">EMPREENDIMENTOS</h1>
          <p className="text-base sm:text-xl font-light pt-3">
            Sun Beach Residence
          </p>
          <p className="text-base sm:text-xl font-light">
            Gran Palace Residence
          </p>
          <p className="text-base sm:text-xl font-light">Beauc Lac Residence</p>
          <p className="text-base sm:text-xl font-light">
            Bello Bosque Residence
          </p>
        </motion.div>

        <motion.div
          className="relative flex flex-col justify-center items-start space-y-4"
          custom={1}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="absolute -top-2 left-0 w-20 h-2 bg-[#EDCF75]" />
          <h1 className="font-bold text-xl sm:text-3xl">MAIS CANAIS</h1>
          <p className="text-base sm:text-xl font-light pt-3">
            Trabalhe Conosco
          </p>
          <p className="text-base sm:text-xl font-light">Portal do cliente</p>
        </motion.div>

        <motion.div
          className="relative flex flex-col justify-center items-start space-y-4"
          custom={2}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="absolute -top-2 left-0 w-20 h-2 bg-[#EDCF75]" />
          <h1 className="font-bold text-xl sm:text-3xl">FERRAMENTAS</h1>
          <p className="text-base sm:text-xl font-light pt-3">CUB / SC</p>
        </motion.div>
      </div>

      <motion.div
        className="w-5/6 h-[1px] bg-black opacity-25 m-auto"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <motion.div
        className="text-mostard flex items-center justify-between px-6 sm:px-16 md:px-32 py-6 sm:py-11 text-xs sm:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p>GD&JR@2023</p>
        <Image
          src={footerIcon}
          width={54}
          height={50}
          alt="imagem"
          className="translate-x-[50%]"
        />
        <p className="items-center justify-center hidden md:flex">
          DESENVOLVIDO POR
          <Image
            src={circleIcon}
            width={31}
            height={31}
            alt="imagem"
            className="bg-mostard rounded-full p-1"
          />
        </p>
      </motion.div>
    </footer>
  );
};
