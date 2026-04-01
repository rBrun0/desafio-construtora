"use client";

import Link from "next/link";
import { IoMdClose } from "react-icons/io";
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
      delay: 0.15 + i * 0.07,
      duration: 0.4,
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

export const HamburguerContent = ({
  isHamburguerOpened,
  setIsHamburguerOpened,
}: HamburguerContentType) => {
  const menuItems = [
    { type: "link", href: "/empreendimentos", label: "empreendimentos" },
    { type: "link", href: "/sobrenos", label: "sobrenos" },
    { type: "text", label: "opcoes" },
    { type: "text", label: "opcoes" },
    { type: "text", label: "opcoes" },
    { type: "text", label: "opcoes" },
    { type: "text", label: "opcoes" },
    { type: "text", label: "opcoes" },
    { type: "text", label: "opcoes" },
    { type: "text", label: "opcoes" },
  ];

  return (
    <AnimatePresence>
      {isHamburguerOpened && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-mostard z-50 md:hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          <div className="w-full flex justify-end pt-4 pr-6">
            <motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <IoMdClose
                className="text-6xl text-white cursor-pointer"
                onClick={() => setIsHamburguerOpened(false)}
              />
            </motion.div>
          </div>

          <div className="bg-mostard z-50 flex flex-col justify-start items-center py-12 gap-4">
            {menuItems.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {item.type === "link" ? (
                  <Link
                    href={item.href!}
                    className="text-white cursor-pointer text-lg"
                    onClick={() => setIsHamburguerOpened(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <p className="text-white cursor-pointer text-lg">
                    {item.label}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
