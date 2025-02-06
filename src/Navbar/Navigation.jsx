import { motion } from 'framer-motion';

function Navigation({ onClick }) {
  
  const handleClick = (data) => {
    onClick(data);
  };

  return (
      <div className="w-1/2 flex justify-end items-center text-base text-white font-bold font-mont pr-5 md:w-11/12 md:pr-12">
        <motion.p 
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          className="mx-3 cursor-pointer md:mx-6" 
          onClick={() => handleClick("katalog")}
        >
          Catalog
        </motion.p>
        <motion.p
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          className="mx-3 cursor-pointer md:mx-6" 
          onClick={() => handleClick("galeria")}
        >
          Gallery
        </motion.p>
      </div>
  )
}
  
export default Navigation