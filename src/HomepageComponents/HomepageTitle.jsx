import { motion } from "framer-motion";

function HomepageTitle() {

    return (
        <>
            <motion.span initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-7xl text-white font-bold font-mont">
                Cestovná kancelária
                <br/>
                E-Travel
            </motion.span>
        </>
    )
  }
  
  export default HomepageTitle