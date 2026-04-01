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
    <div className="flex flex-col justify-center items-start space-y-24">
      <Image
        src={beachLogo}
        alt="beach-logo"
        className="hidden md:block w-[165px] h-[133px]"
      />
      <div className="md:w-[41rem] md:h-[34rem] bg-black flex justify-between">
        <div className="h-full text-white flex flex-col justify-center items-start pl-12 space-y-10">
          <motion.span
            className="text-xl"
            custom={0}
            variants={detailVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image src={areaIcon} width={40} height={40} alt="icone" /> 120 a
            150m2
          </motion.span>
          <motion.span
            className="text-xl flex flex-col"
            custom={1}
            variants={detailVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MdBed className=" w-10 h-10 text-mostard" /> 2 ou 3 suites
          </motion.span>
          <motion.span
            className="text-xl flex flex-col"
            custom={2}
            variants={detailVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FaCarRear className=" w-10 h-10 text-mostard" /> 2 ou 3 vagas
          </motion.span>
          <motion.span
            className="text-xl flex flex-col"
            custom={3}
            variants={detailVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {" "}
            <FaLocationDot className=" w-10 h-10 text-mostard" /> Rua Manoel da{" "}
            <br /> Silva Pereira <br /> Pereque <br /> Porto Belo/SC
          </motion.span>
        </div>

        <motion.div
          className="h-[18] w-[13rem] md:w-[20rem] md:h-[37rem] lg:w-[26rem] lg:h-[43rem] relative md:-translate-y-44 md:translate-x-4 overflow-hidden"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={buildingImage}
            alt="imagem-predio"
            fill
            objectFit="cover"
            className="transition-transform hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
};
