import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GalleryPhoto from "../GalleryComponents/GalleryPhoto";
import Navbar from "../Navbar/Navbar";
import OverlayFotka from "../GalleryComponents/OverlayFotka";

function Gallery({ slider }) {
    const [open, setOpen] = useState(false);
    const [isExit, setIsExit] = useState(false);
    const [selectedFotka, setSelectedFotka] = useState(null);
    const [allPhotos, setAllPhotos] = useState([]);

    useEffect(() => {
        if (slider) {
            const photos = slider.reduce((acc, curr) => {
                return acc.concat(curr.photo);
            }, []);
            shuffleArray(photos); // Shuffle the array
            setAllPhotos(photos);
        }
    }, [slider]);

    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const sendData = (data) => {
        setOpen(data);
    };

    const sendFotka = (data) => {
        setSelectedFotka(data);
        setOpen(true);
    };

    return (
        <>
            <Navbar onClick={() => setIsExit(true)} />
            <div className="w-full h-[100vh] bg-black absolute">
                <div className="w-full h-1/5 flex justify-center items-center md:h-1/4"></div>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={isExit ? { opacity: 0 } : {opacity: 1}}
                    transition={isExit ? { duration: 0.3, delay: 0.2 } : { duration: 0.3, delay: 0.5 }}
                    className="bg-black flex flex-wrap"
                >
                    {allPhotos.map((photo, index) => (
                        <GalleryPhoto
                            key={index}
                            background={photo}
                            sendFotka={sendFotka}
                            time={0.4 + 0.1 * index}
                        />
                    ))}
                </motion.div>
            </div>
            {open && (
                <OverlayFotka
                    fotka={selectedFotka}
                    sendData={sendData}
                />
            )}
        </>
    );
}

export default Gallery;
