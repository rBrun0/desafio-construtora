"use client";

import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type HamburguerContentType = {
  isHamburguerOpened: boolean;
  setIsHamburguerOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const menuItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 + i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: -30,
    transition: {
      delay: i * 0.03,
      duration: 0.2,
    },
  }),
};

const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.7, duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.15 } },
};

export const HamburguerContent = ({
  isHamburguerOpened,
  setIsHamburguerOpened,
}: HamburguerContentType) => {
  const menuItems = [
    { type: "link", href: "/empreendimentos", label: "EMPREENDIMENTOS" },
    { type: "link", href: "/sobrenos", label: "SOBRE NOS" },
    { type: "text", label: "OPORTUNIDADES" },
    { type: "text", label: "PORTIFOLIO" },
    { type: "text", label: "FALE CONOSCO" },
  ];

  const socialIcons = [
    { icon: <FaWhatsapp />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaFacebook />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
  ];

  return (
    <AnimatePresence>
      {isHamburguerOpened && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-mostard z-[1000] md:hidden flex flex-col"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          {/* Close button */}
          <div className="w-full flex justify-end pt-5 pr-6">
            <motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <IoMdClose
                className="text-5xl text-white cursor-pointer hover:text-black transition-colors"
                onClick={() => setIsHamburguerOpened(false)}
              />
            </motion.div>
          </div>

          {/* Nav items */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-1">
            {menuItems.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full text-center"
              >
                {item.type === "link" ? (
                  <Link
                    href={item.href!}
                    className="block py-3 text-white text-2xl sm:text-3xl font-bold tracking-widest
                               hover:text-black transition-colors"
                    onClick={() => setIsHamburguerOpened(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <p
                    className="py-3 text-white text-2xl sm:text-3xl font-bold tracking-widest
                               cursor-pointer hover:text-black transition-colors"
                  >
                    {item.label}
                  </p>
                )}
                {i < menuItems.length - 1 && (
                  <div className="w-16 h-[2px] bg-white/30 mx-auto mt-1" />
                )}
              </motion.div>
            ))}
          </nav>

          {/* Social icons */}
          <motion.div
            className="flex items-center justify-center gap-6 pb-10"
            variants={socialVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {socialIcons.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="text-white text-3xl hover:text-black transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
