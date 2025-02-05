import { motion } from "framer-motion"

export default function App() {
  return (
    <motion.h1
      animate={{ x: 100 }} 
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold underline text-red-400">
      Hello world!
    </motion.h1>
  )
}