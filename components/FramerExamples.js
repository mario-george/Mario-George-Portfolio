import { motion } from "framer-motion";
export default function FramerExample() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="z-30 mt-[20rem] "
      >
        Animated Content
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        Interactive Element
      </motion.div>
      <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
        Element with Scaling
      </motion.div>
      <motion.div initial={{ x: 300 }} animate={{ x: 0 }}>
        Element moving left (from right to left)
      </motion.div>

      <motion.div className="ml-[50%]" initial={{ x: -300 }} animate={{ x: 0 }}>
        Element moving left
      </motion.div>
    </>
  );
}
