"use client";

import Image from "next/image";
import beachLogo from "../../../public/mainLogo.svg";
import buildingImage from "../../../public/buildingImage.jpg";

import { MdBed } from "react-icons/md";
import { FaCarRear } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import areaIcon from "../../../public/areaMeter.svg";
import { motion } from "framer-motion";

const detailVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const BuildingsCard = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start space-y-6 md:space-y-24 w-full px-4 sm:px-0">
      <Image
        src={beachLogo}
        alt="beach-logo"
        className="hidden md:block w-[120px] h-[96px] lg:w-[165px] lg:h-[133px]"
      />
      <div className="w-full max-w-[90vw] sm:max-w-none sm:w-[28rem] md:w-[41rem] bg-black flex flex-col sm:flex-row overflow-visible">
        <div className="text-white flex flex-col justify-center items-start pl-6 sm:pl-8 md:pl-12 space-y-4 sm:space-y-6 md:space-y-10 py-6 sm:py-10">
          <motion.span
            className="text-sm sm:text-base md:text-xl"
            custom={0}
            variants={detailVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src={areaIcon}
              width={40}
              height={40}
              alt="icone"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />{" "}
            120 a 150m2
          </motion.span>
          <motion.span
            className="text-sm sm:text-base md:text-xl flex flex-col"
            custom={1}
            variants={detailVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MdBed className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-mostard" />{" "}
            2 ou 3 suites
          </motion.span>
          <motion.span
            className="text-sm sm:text-base md:text-xl flex flex-col"
            custom={2}
            variants={detailVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FaCarRear className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-mostard" />{" "}
            2 ou 3 vagas
          </motion.span>
          <motion.span
            className="text-sm sm:text-base md:text-xl flex flex-col"
            custom={3}
            variants={detailVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {" "}
            <FaLocationDot className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-mostard" />{" "}
            Rua Manoel da <br /> Silva Pereira <br /> Pereque <br /> Porto
            Belo/SC
          </motion.span>
        </div>

        <motion.div
          className="w-full h-[16rem] sm:w-[14rem] sm:h-[32rem] md:w-[20rem] md:h-[37rem] lg:w-[26rem] lg:h-[43rem] relative md:-translate-y-44 md:translate-x-4 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={buildingImage}
            alt="imagem-predio"
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
};
