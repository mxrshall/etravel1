import { motion } from "framer-motion"

export default function Homepage() {
  return (
    <motion.h1
      animate={{ x: 100 }} 
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold underline text-red-400">
      Homepage
    </motion.h1>
  )
}