import { useState, useEffect } from "react";
import Logo from "./Logo"
import Navigation from "./Navigation"
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({ onClick, signal }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isExit, setIsExit] = useState(false);

  const currentPath = location.pathname.split("/").pop();

  useEffect(() => {
    if (signal) {
      setIsExit(true);
      setTimeout(() => {
        navigate(`/${data}`);
      }, 800);
    }
  }, [signal]);

  const handleClick = (data) => {
    if (currentPath != data) {
      onClick();
      setIsExit(true);
      setTimeout(() => {
        navigate(`/${data}`);
        window.scrollTo(0, 0);
      }, 800);
    }
  };

    return (
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={isExit ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
        transition={isExit ? { duration: 0.5, delay: 0.2 } : { duration: 0.5, delay: 0.8 }} 
        className="w-full h-[12vh] fixed flex z-50"
      >
        <Logo onClick={handleClick} />
        <Navigation onClick={handleClick} />
      </motion.div>
    )
  }
  
  export default Navbar
  