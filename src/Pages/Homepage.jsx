import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import image1 from "../../public/images/Background.png";
import image2 from "../../public/images/Vrstva1.png";
import image3 from "../../public/images/Vrstva2.png";
import image4 from "../../public/images/Vrstva3.png";
import Navbar from '../Navbar/Navbar';
import background1 from "../../public/images/photos/TableMountain/TableMountain.webp";
import background2 from "../../public/images/photos/QuebecCity/QuebecCity.webp";
import background3 from "../../public/images/photos/ChateaudeChillon/ChateaudeChillon2.webp";
import Footer from '../Footer/Footer';

import swiperImage1 from "../../public/images/photos/TableMountain/TableMountain.webp";
import swiperImage2 from "../../public/images/photos/BlydeRiverCanyon/BlydeRiverCanyon1.webp";
import swiperImage3 from "../../public/images/photos/Seoul/Seoul3.webp";
import swiperImage4 from "../../public/images/photos/Gyeongju/Gyeongju2.webp";
import swiperImage5 from "../../public/images/photos/KrugerNationalPark/KrugerNationalPark2.webp";
import swiperImage6 from "../../public/images/photos/QuebecCity/QuebecCity2.webp";
import swiperImage7 from "../../public/images/photos/TheMatterhorn/TheMatterhorn1.webp";
import swiperImage8 from "../../public/images/photos/ChateaudeChillon/ChateaudeChillon2.webp";
import Map from '../HomepageComponents/Map';

function Homepage({ slider, list }) {
  const [title, setTitle] = useState("");
  const [short_description, setDescription] = useState("");
  const [background, setBackground] = useState(null);
  const [isExit, setIsExit] = useState(false);
  const [signal, setSignal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasAnimated1, setHasAnimated1] = useState(false);
  const [hasAnimated3, setHasAnimated3] = useState(false);
  const sectionRefs = useRef([]); // Array to hold references to sections
  const containerRef = useRef(null); // Reference to the scroll container
  const navigate = useNavigate();

  const swipeSlider1 = [
    {
      id: 0,
      image: swiperImage1,
    },
    {
      id: 1,
      image: swiperImage2,
    },
    {
      id: 2,
      image: swiperImage3,
    },
    {
      id: 3,
      image: swiperImage4,
    },
    {
      id: 4,
      image: swiperImage5,
    },
  ];

  const swipeSlider2 = [
    {
      id: 0,
      image: swiperImage6,
    },
    {
      id: 1,
      image: swiperImage7,
    },
    {
      id: 2,
      image: swiperImage8,
    },
  ];

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // Define transforms for parallax layers
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const layer4Y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const layer5Y = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  if (currentPage === 1 && !hasAnimated1) {
    setHasAnimated1(true);
  }else if (currentPage === 3 && !hasAnimated3) {
    setHasAnimated3(true);
  }

  const handleHover = (data) => {
    setTitle(data.title);
    setDescription(data.short_description);
    setBackground(data.background);
  };

  const handleButtonClick = (value) => {
    setIsExit(true);
    setSignal(true);
    setTimeout(() => {
        navigate(`/${value}`);
        window.scrollTo(0, 0);
    }, 800);
  };

  // Add sections dynamically to the refs array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  
  

  const handlePageClick = (index) => {
    if (sectionRefs.current[index]) {
      const section = sectionRefs.current[index];
      lenis.scrollTo(section, { offset: -50 }); // Adjust offset as needed
    }
  };

  return (
    <>
      <Navbar onClick={() => setIsExit(true)} signal={signal} />
      <motion.div 
        className="fixed top-[50%] left-3 z-50 flex flex-col gap-4 items-center transform -translate-y-1/2 md:left-5"
        initial={{ opacity: 0, x: -5 }}
        animate={isExit === false ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
        transition={isExit === false ? { delay: 1, duration: 0.5 } : { duration: 0.5, delay: 0.2 }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full border-2 ${
              index === currentPage ? 'bg-white' : 'bg-transparent'
            } transition-all duration-300`}
            onClick={() => handlePageClick(index)}
          />
        ))}
      </motion.div>
      
      <div className='w-full h-[400vh] flex flex-col'>
        <div className='w-full h-[100vh] relative' ref={addToRefs}>
          <motion.div 
            className="w-full h-full bg-cover bg-center flex justify-center items-center absolute z-[1]"
            style={{ backgroundImage: `url(${image1})` }}
          />
          <motion.div 
            className="w-full h-full bg-cover bg-center flex justify-center items-center absolute z-[2]"
            style={{ backgroundImage: `url(${image4})`, y: layer2Y }}
          />
          <motion.div 
            className="w-full h-full flex justify-center items-center absolute z-[3]"
            style={{ y: layer3Y }}
          >
            <h1 className="text-white text-8xl font-bold mb-32 md:text-9xl">
              E-Travel
            </h1>
          </motion.div>
          <motion.div 
            className="w-full h-full bg-cover bg-center flex justify-center items-center absolute z-[4]"
            style={{ backgroundImage: `url(${image3})`, y: layer4Y }}
          />
          <motion.div 
            className="w-full h-full bg-cover bg-center flex justify-center items-center absolute z-[5]"
            style={{ backgroundImage: `url(${image2})`, y: layer5Y }}
          />
          <motion.div 
            className="w-full h-full bg-gradient-to-t from-black/90 via-black/10 to-transparent bg-gradient-[20%] absolute z-[6]"
            style={{ y: layer5Y }}
          />
          <motion.div 
            className="w-full h-full bg-black absolute z-[7]"
            initial={{ opacity: 1 }}
            animate={isExit === true ? { opacity: 1 } : { opacity: 0 }}
            transition={isExit === true ? { delay: 0.5, duration: 0.5 } : { duration: 0.8, delay: 0.3 }}
          />
        </div>

        <div className="w-full h-[100vh] overflow-hidden bg-cover bg-center flex justify-center items-center p-10" ref={addToRefs}>
              <div 
                className='w-full h-5/6 flex justify-center items-right gap-10 md:w-2/3 md:h-full'
                style={{
                  clipPath: 'polygon(0% 25%, 100% 0%, 100% 100%, 0% 80%)'
                }}
              >
                <motion.div 
                  className='w-1/4 h-full bg-cover bg-center relative'
                  style={{ backgroundImage: `url(${background1})` }}
                  initial={{ opacity: 0 }}
                  animate={currentPage === 1 && isExit === false ? { opacity: 1 } : { opacity: 0 }}
                  transition={currentPage === 1 && isExit === false ? { delay: 1.2, duration: 0.5 } : { duration: 0.5, delay: 0.2 }}
                >
                  <div className="absolute inset-0 bg-black opacity-50"/>
                </motion.div>
                <motion.div 
                  className='w-2/6 h-full bg-cover bg-center relative'
                  style={{ backgroundImage: `url(${background2})` }}
                  initial={{ opacity: 0 }}
                  animate={currentPage === 1 && isExit === false ? { opacity: 1 } : { opacity: 0 }}
                  transition={currentPage === 1 && isExit === false ? { delay: 0.9, duration: 0.5 } : { duration: 0.5, delay: 0.2 }}
                >
                  <div className="absolute inset-0 bg-black opacity-50"/>
                </motion.div>
                <motion.div
                  className='w-3/6 h-full bg-cover bg-center relative'
                  style={{ backgroundImage: `url(${background3})` }}
                  initial={{ opacity: 0 }}
                  animate={currentPage === 1 && isExit === false ? { opacity: 1 } : { opacity: 0 }}
                  transition={currentPage === 1 && isExit === false ? { delay: 0.6, duration: 0.5 } : { duration: 0.5, delay: 0.2 }}
                >
                  <div className="absolute inset-0 bg-black opacity-50"/>
                </motion.div>
              </div>
              <motion.div 
                className='absolute w-3/4 flex flex-col z-10 md:w-2/3'
                initial={{ opacity: 0, y: 10 }}
                animate={currentPage === 1 && isExit === false ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={currentPage === 1 && isExit === false ? { delay: 0.3, duration: 0.5 } : { duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-white text-6xl font-bold md:text-8xl">
                  Travel catalog
                </h1>
                <span className="w-full text-base text-white font-normal font-mont my-5 md:w-1/2">
                  Welcome to my travel catalog. Explore the most fascinating destinations from around the world that I have prepared for you.
                  In the catalog, you will find information about places worth visiting, along with stunning photographs that will transport you straight to the destination.
                  Let yourself be inspired and start planning your next adventure.
                </span>
                <button
                  onClick={() => handleButtonClick("katalog")}
                  className="w-2/3 font-mont text-base font-medium px-2 text-white border-2 border-white hover:bg-white hover:text-black md:w-1/5"
                >
                  Go to catalog
                </button>
              </motion.div>
            </div>
            <div className='w-full h-[100vh] flex items-center overflow-hidden bg-cover bg-center relative md:items-stretch' ref={addToRefs}>
              {background && !isExit && (
                <motion.div
                  className="hidden inset-0 absolute w-full h-full object-cover md:inline"
                  style={{ backgroundImage: `url(${background})` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
              )}
              <div
                className="absolute inset-0 z-0 hidden justify-center items-center md:flex"
                style={{
                  background: "radial-gradient(circle, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 1) 90%), linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%)"
                }}
              />
              <div className="w-1/4 hidden pl-10 z-10 md:flex">
                {!isExit && (
                  <motion.h1 
                    key={title}
                    className="text-white text-8xl font-bold"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {title}
                  </motion.h1>
                )}
              </div>
              <Map slider={slider} isExit={isExit} currentPage={currentPage} list={list} onHover={handleHover} onClick={() => {setIsExit(true); setSignal(true);}}/>
              <div className="w-1/4 md:flex items-end pb-20 px-8 z-10 hidden">
              {!isExit && ( 
                <motion.span 
                  key={short_description}
                  className="text-base text-white font-normal font-mont"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {short_description}
                </motion.span>
              )}
              </div>
            </div>
            <div className="w-full h-[100vh] relative flex justify-center items-center" ref={addToRefs}>
            <div className='w-full h-full flex justify-center items-center absolute z-40 md:w-2/5 md:relative'>
              <motion.div
                className='w-3/4 flex flex-col justify-center items-start md:w-2/3'
                initial={{ opacity: 0, x: -10 }}
                animate={currentPage === 3 && isExit === false ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={currentPage === 3 && isExit === false ? { delay: 0.5, duration: 0.8 } : { duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-white text-6xl font-bold md:text-8xl">
                  Gallery
                </h1>
                <span className="text-base text-white font-normal font-mont my-5">
                  Enter the gallery and be inspired by the stunning places waiting to be discovered. Whether you're looking for serene beaches, vibrant cities, or breathtaking nature, the gallery offers a unique glimpse into destinations worth visiting. Browse through photos that capture the atmosphere and beauty of the world, and let your imagination take you on your next travel adventure.
                </span>
                <button 
                  className="font-mont text-base font-medium px-2 text-white border-2 border-white hover:bg-white hover:text-black"
                  onClick={() => handleButtonClick("galeria")}
                >
                  Go to gallery
                </button>
              </motion.div>
            </div>
            <motion.div 
              className='w-full h-full flex flex-col relative md:w-3/5'
              initial={{ opacity: 0 }}
              animate={currentPage === 3 && isExit === false ? { opacity: 1 } : { opacity: 0 }}
              transition={currentPage === 3 && isExit === false ? { delay: 0.5, duration: 0.8 } : { duration: 0.5, delay: 0.2 }}
            >
            <div
                className="absolute inset-0 z-30 flex justify-center items-center"
                style={{
                  background: "radial-gradient(circle, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 1) 90%), linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%)"
                }}
              />
              <Swiper
                className="w-full h-1/2 flex flex-col justify-center items-center custom-swiper pb-2"
                modules={[Autoplay]}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 1500 }}
                speed={500}
              >
                {swipeSlider1.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="w-1/4 h-full flex justify-center items-center px-2"
                  >
                    <div className="w-full h-full overflow-hidden flex justify-center items-center">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                className="w-full h-1/2 flex flex-col justify-center items-center custom-swiper pt-2"
                modules={[Autoplay]}
                slidesPerView={2}
                loop={true}
                autoplay={{ delay: 2000, reverseDirection: true }}
                speed={500}
              >
                {swipeSlider2.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="w-1/4 h-full flex justify-center items-center px-2"
                  >
                    <div className="w-full h-full overflow-hidden flex justify-center items-center">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
            <Footer />
          </div>
        </div>
        
    </>
  );
};

export default Homepage;