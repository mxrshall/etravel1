import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Button({text, link, delay}) {

    return (
        <Link to={"/" + link}>
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: delay}} className="font-mont text-base px-2 mr-5 text-white border-2 border-white hover:bg-white hover:text-black">{text}</motion.button>
        </Link>
    )
  }
  
  export default Button