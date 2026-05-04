"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getNavDirection } from "@/lib/navDirection";

const variants = {
  initial: (d: 1 | -1) => ({ x: `${d * 4}%`, opacity: 0 }),
  animate: { x: 0, opacity: 1 },
  exit: (d: 1 | -1) => ({ x: `${d * -4}%`, opacity: 0 }),
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const direction = getNavDirection();

  return (
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <motion.div
        key={pathname}
        custom={direction}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
