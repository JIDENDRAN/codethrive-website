import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, x: 60 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.98, x: -60 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Smooth “easeOutExpo” curve
      }}
    >
      {children}
    </motion.div>
  );
}
