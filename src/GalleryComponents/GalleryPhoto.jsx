import { motion } from "framer-motion";

function GalleryPhoto({background, sendFotka, time}) {
  
    const handleClick = () => {
        sendFotka(background);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: time }}
                className="w-[31%] h-[8vh] bg-contain bg-no-repeat bg-center my-1 mx-[1%] md:w-[18%] md:h-[25vh]" 
                style={{ backgroundImage: `url(${background})`}} 
                onClick={handleClick}
            />
        </>
    )
  }
  
  export default GalleryPhoto;