"use client";

import Image from "next/image";
import employee1 from "../../../public/employee1.jpg";
import employee2 from "../../../public/employee2.jpg";
import employee3 from "../../../public/employee3.jpg";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const teamMembers = [
  { name: "ROBSON", image: employee1, role: "CEO COFOUNDER" },
  { name: "GILBERTO", image: employee2, role: "CEO COFOUNDER" },
  { name: "JUNIOR", image: employee3, role: "CEO COFOUNDER" },
];

export const TeamCarouselSlider = () => {
  return (
    <section className="min-w-full h-[43rem] bg-mostard flex justify-center items-center space-x-4 z-20 overflow-hidden">
      {teamMembers.map((member, i) => (
        <motion.div
          key={member.name}
          className="relative h-[45rem] min-w-[23rem] w-[29rem] -translate-y-11 group cursor-pointer"
          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -55, transition: { duration: 0.3 } }}
        >
          <Image
            src={member.image}
            fill
            objectFit="cover"
            alt="imagem-funcionario"
          />
          <h1
            className="absolute top-[70%] -left-[27%] text-4xl font-thin text-white opacity-75 -rotate-90 translate-y-0 
                    group-hover:-translate-y-24 ease-in-out group-hover:opacity-0 transition-all"
          >
            {member.role}
          </h1>
          <h1 className="absolute top-[90%] left-[14%] text-4xl font-bold text-white opacity-100 group-hover:opacity-0 transition-opacity">
            {member.name}
          </h1>
          <h1 className="absolute -bottom-[6%] left-[50%] -translate-x-[50%] text-8xl font-bold text-white hidden group-hover:block transition-all">
            {member.name}
          </h1>
        </motion.div>
      ))}
    </section>
  );
};
