"use client";

import { FaWhatsapp } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const contactItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.4 + i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

export const FaleConosco = ({ isModalOpen, setIsModalOpen }: ModalProps) => {
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.section
          className="absolute left-0 top-0 hidden md:block w-full z-50"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 180 }}
        >
          <div className="flex justify-end bg-customGray pr-8 pt-5 text-white cursor-pointer">
            <motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              whileHover={{ rotate: 90, scale: 1.1 }}
            >
              <IoCloseCircleOutline
                className="w-14 h-14"
                onClick={closeModal}
              />
            </motion.div>
          </div>

          <div className="w-full h-[26rem] flex justify-around items-start bg-customGray shadow-lg">
            <motion.div
              className="w-1/3"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-white translate-x-4 translate-y-24 lg:translate-x-0 lg:translate-y-0  md:text-4xl lg:text-8xl font-bold">
                COMO <br /> PODEMOS <br />{" "}
                <span className="text-mostard">AJUDAR</span>
              </h1>
            </motion.div>

            <section className="flex flex-col justify-center items-start space-y-10">
              <motion.div
                className="flex justify-center items-center space-x-1 text-white"
                custom={0}
                variants={contactItemVariants}
                initial="hidden"
                animate="visible"
              >
                <IoLocation className="text-mostard w-4 h-4 lg:w-8 lg:h-8" />
                <div>
                  <h1 className="text-base lg:text-xl font-bold">
                    Faca nos uma visita
                  </h1>
                  <p className="text-base lg:text-xl">
                    Rua 222 n 122 <br /> Meia praia - Itapema / SC
                  </p>
                  <p className="lg:text-sm">ver no google maps</p>
                </div>
              </motion.div>

              <motion.div
                className="flex justify-center items-center space-x-1 text-white"
                custom={1}
                variants={contactItemVariants}
                initial="hidden"
                animate="visible"
              >
                <FaWhatsapp className="text-mostard w-4 h-4 lg:w-8 lg:h-8" />
                <div>
                  <h1 className="text-base lg:text-xl font-bold">Comercial</h1>
                  <p className="text-base lg:text-xl">47 99999-9999</p>
                </div>
              </motion.div>

              <motion.div
                className="flex justify-center items-center space-x-1 text-white"
                custom={2}
                variants={contactItemVariants}
                initial="hidden"
                animate="visible"
              >
                <FaWhatsapp className="text-mostard w-4 h-4 lg:w-8 lg:h-8" />
                <div>
                  <h1 className="text-base lg:text-xl font-bold">
                    Administrativo
                  </h1>
                  <p className="text-base lg:text-xl">47 99999-9999</p>
                </div>
              </motion.div>
            </section>

            <form action="" className="flex flex-col justify-center space-y-5">
              <motion.input
                type="text"
                className="text-white bg-transparent border-b-white border-solid border-b-[1px] outline-none w-[16rem] lg:w-[24rem] pb-3"
                placeholder="Nome"
                custom={0}
                variants={formFieldVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.input
                type="email"
                name=""
                id=""
                placeholder="E-mail"
                className="text-white bg-transparent border-b-white border-solid border-b-[1px] outline-none pb-3"
                custom={1}
                variants={formFieldVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.input
                type="tel"
                name=""
                id=""
                placeholder="Celular"
                className="text-white bg-transparent border-b-white border-solid border-b-[1px] outline-none pb-3"
                custom={2}
                variants={formFieldVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.textarea
                name="mensagem"
                id=""
                placeholder="Mensagem"
                className="bg-transparent border-b-[1px] border-solid border-white pb-3 outline-none"
                custom={3}
                variants={formFieldVariants}
                initial="hidden"
                animate="visible"
              />
            </form>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
