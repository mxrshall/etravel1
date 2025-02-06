import LandmarkPhoto from "./LandmarkPhoto"
import { motion } from "framer-motion";

function LandInfo({ description, photo, map, sendFotka, onClick }) {
    const veta = description.split('. ');

    const handleClick = () => {
        onClick("katalog");
    };

    const handleClickSend = () => {
        sendFotka(map);
    };

    const odstavec = [];
    for (let i = 0; i < veta.length; i += 3) {
        odstavec.push(veta.slice(i, i + 3).join('. '));
    }

    return (
        <>
            <div className="w-full h-[100vh] hidden bg-black absolute z-20 md:flex">
                <div className="w-7/12 h-[100vh] pl-16 py-16">
                    {odstavec.map((odstavec, index) => (
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            key={index} 
                            className="text-base text-white font-normal font-mont"
                        >
                            {odstavec}
                            <br/>
                            <br/>
                        </motion.span>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="w-1/2 h-[30vh] bg-contain bg-no-repeat bg-center my-10"
                        style={{ backgroundImage: `url(${map})`}}
                        onClick={handleClickSend}
                    />
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        onClick={handleClick} 
                        className="font-mont text-base font-medium px-2 text-white border-2 border-white hover:bg-white hover:text-black"
                    >
                        Go to catalog
                    </motion.button>
                </div>
                <div className="w-5/12 h-[100vh] p-16 flex flex-col justify-center items-center">
                    {photo.map((item) => (
                        <LandmarkPhoto
                            key={item}
                            background={item}
                            sendFotka={sendFotka}
                        />
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center bg-black p-10 md:hidden">
                {odstavec.map((odstavec, index) => (
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        key={index} 
                        className="text-base text-white font-normal font-mont"
                    >
                        {odstavec}
                        <br/>
                        <br/>
                    </motion.span>
                ))}
                {photo.map((item) => (
                    <LandmarkPhoto
                        key={item}
                        background={item}
                        sendFotka={sendFotka}
                    />
                ))}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="w-full h-[30vh] bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(${map})`}}
                    onClick={handleClickSend}
                />
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    onClick={handleClick} 
                    className="font-mont text-base font-medium px-2 mt-4 text-white border-2 border-white hover:bg-white hover:text-black"
                >
                    Go to catalog
                </motion.button>
            </div>
        </>
    )
  }
  
  export default LandInfo