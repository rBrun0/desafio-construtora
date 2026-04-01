"use client";

import Image from "next/image";
import headerLogo from "../../../public/siteLogo.svg";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { FaleConosco } from "./components/FaleConosco";
import { useState } from "react";
import { HamburguerContent } from "./components/HamburguerContent";
import { motion } from "framer-motion";

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const socialIconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8 + i * 0.1,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  }),
};

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHamburguerOpened, setIsHamburguerOpened] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  const navLinks = [
    { href: "/empreendimentos", label: "EMPREENDIMENTOS" },
    { href: "/sobrenos", label: "SOBRE NOS" },
    { href: "#", label: "OPORTUNIDADES" },
    { href: "#", label: "PORTIFOLIO" },
  ];

  const socialIcons = [
    { icon: <FaWhatsapp />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaFacebook />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
  ];

  return (
    <header className="flex justify-between items-center max-w-full h-20 pt-6 mx-8 z-[999]">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link href={"/"}>
          <Image
            src={headerLogo}
            height={76}
            width={109}
            alt="header-logo"
            className="cursor-pointer z-[100]"
          />
        </Link>
      </motion.div>

      <nav className="hidden sm:hidden md:flex justify-center items-center space-x-10 text-white text-xs lg:text-sm font-bold ">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.label}
            custom={i}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              href={link.href}
              className="cursor-pointer transition-colors relative group"
            >
              {link.label}
              <span className="absolute -top-12 left-0 w-full h-0 bg-[#EDCF75] group-hover:h-4 transition-all" />
            </Link>
          </motion.div>
        ))}
        <motion.span
          className="cursor-pointer transition-colors relative group"
          onClick={openModal}
          custom={4}
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
        >
          FALE CONOSCO
          <span className="absolute -top-12 left-0 w-full h-0 bg-[#EDCF75] group-hover:h-4 transition-all" />
        </motion.span>
      </nav>

      <nav className="hidden sm:hidden lg:flex justify-center items-center space-x-3 z-50">
        {socialIcons.map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            className="text-white hover:text-mostard transition-colors text-3xl"
            custom={i}
            variants={socialIconVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </nav>

      {/* hamburguer */}

      <motion.div
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="block md:hidden"
      >
        <RxHamburgerMenu
          className="text-white w-12 h-12 cursor-pointer"
          onClick={() => setIsHamburguerOpened(!isHamburguerOpened)}
        />
      </motion.div>

      <HamburguerContent
        isHamburguerOpened={isHamburguerOpened}
        setIsHamburguerOpened={setIsHamburguerOpened}
      />

      {/* modal fale conosco */}

      <FaleConosco isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </header>
  );
};
