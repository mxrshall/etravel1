import React from 'react';
import { MdOutlineClose } from "react-icons/md";

function OverlayFotka({ fotka, sendData }) {

  const handleClick = () => {
    sendData(false);
  };

  return (
    <div className="w-full h-screen bg-black bg-opacity-80 z-[60] fixed top-0 left-[50%] translate-x-[-50%] flex justify-center">
      <div className="absolute top-4 right-4">
        <MdOutlineClose color="white" size="30" onClick={handleClick} />
      </div>
      <img className="w-2/3 bg-contain bg-no-repeat bg-center m-auto md:w-1/2" src={fotka} alt="Overlay" />
    </div>
  );
}

export default OverlayFotka;
