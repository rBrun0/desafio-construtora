"use client";

import { motion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

export const MainLayout = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center text-white">
      <motion.h1
        className="absolute left-[50%] -translate-x-[50%] top-16 flex flex-col translate-y-36 md:translate-y-0
                 justify-center items-center text-[5rem] md:text-[8rem] lg:text-[11rem] font-bold opacity-15 text-customGray z-20 "
        style={{
          textShadow:
            "-2px -2px 0 #fff, -2px 2px 0 #fff, 2px -2px 0 #fff, 2px 0 0 #fff",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <p>SOBRE</p>
        <p>NOS</p>
      </motion.h1>

      <motion.h1
        className="text-4xl md:text-6xl lg:text-9xl font-bold text-center w-12/12 z-30 -translate-y-20 md:translate-y-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="inline-block" variants={wordVariants}>
          CONSTRUIMOS{" "}
        </motion.span>
        <br />
        <motion.span className="inline-block" variants={wordVariants}>
          HA 15 ANOS O{" "}
        </motion.span>
        <motion.span
          className="inline-block text-mostard"
          variants={wordVariants}
        >
          FUTURO
        </motion.span>
        <br />
        <motion.span className="inline-block" variants={wordVariants}>
          {" "}
          DA SUA FAMILIA
        </motion.span>
      </motion.h1>
    </section>
  );
};
