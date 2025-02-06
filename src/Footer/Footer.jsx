import { LuMail } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <footer className="w-full h-20 flex flex-col justify-center items-center px-16 absolute bottom-[0%] z-30 md:flex-row md:h-16">
        <div className="w-1/6"/>
        <div className="w-full h-full flex justify-center items-center text-white font-light text-center md:w-4/6">
            <h1>
                ©2025 Martin Krajčovič All rights reserved.
            </h1>
        </div>
        <div className="w-1/6 h-full flex justify-end items-center gap-3 my-2 md:my-0">
          <a href="mailto:2821619@ucm.sk">
            <LuMail color="white" size={20} />
          </a>
        </div>
    </footer>
  );
}

export default Footer;
