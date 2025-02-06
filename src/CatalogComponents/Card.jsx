import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

function Card({title, background, description, photo, map, time, onClick}) {
    const [hovered, setHovered] = useState(false);
    const [data, setData] = useState({
        title: title,
        background: background,
        description: description,
        photo: photo,
        map: map,
    });

    const handleClick = () => {
        onClick(data);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: time }}
            className="w-[29%] h-[25vh] my-2 mx-[2%] rounded-xl md:w-[18%] md:h-[50vh] md:mx-[1%] md:my-5" 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
        >
            <motion.div initial={{ y: 0 }} animate={{ y: hovered ? -20 : 0 }} transition={{ duration: 0.3 }} className="w-full h-full flex flex-col bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${background})`}}>
                <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-30 rounded-xl md:hidden text-center">
                    <p className="text-base text-white font-bold font-mont cursor-default">
                        {title}
                    </p>
                </div>
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 hidden flex-col justify-end p-5 rounded-xl md:flex"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-full h-full flex flex-col justify-center items-center text-center">
                                <p className="text-2xl text-white font-bold font-mont cursor-default">
                                    {title}
                                </p>
                                <IoIosArrowUp
                                    size="25"
                                    color="white"
                                    className="absolute bottom-4 right-4 cursor-pointer"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    )
  }
  
  export default Card;