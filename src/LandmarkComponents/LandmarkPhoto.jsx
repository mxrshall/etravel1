import { motion } from "framer-motion";

function LandmarkPhoto({background, sendFotka}) {
    
    const handleClick = () => {
        sendFotka(background);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-full h-[25vh] bg-contain bg-no-repeat bg-center mb-5" 
                style={{ backgroundImage: `url(${background})`}} 
                onClick={handleClick}
            />
        </>
    )
  }
  
  export default LandmarkPhoto;