"use client";

import { motion } from "framer-motion";
import { TeamCarouselSlider } from "./TeamCarouselSlider";

export const TeamSection = () => {
  return (
    <section className="w-full bg-customGray">
      <motion.h1
        className="text-customGray font-bold text-[4rem] sm:text-[8rem] md:text-[13rem] opacity-15 text-center"
        style={{
          textShadow:
            "-2px -2px 0 #fff, -2px 2px 0 #fff, 2px -2px 0 #fff, 2px 0 0 #fff",
        }}
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        whileInView={{ opacity: 0.15, letterSpacing: "0em" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        TEAM
      </motion.h1>
      <TeamCarouselSlider />
    </section>
  );
};
