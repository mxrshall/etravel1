import React, { useState } from "react";
import { motion } from 'framer-motion';

function Search({ sendData }) {
    const [selectedNames, setSelectedNames] = useState([]);

    const handleCheckboxChange = (e) => {
        const name = e.target.name;
        if (e.target.checked) {
            setSelectedNames([...selectedNames, name]); //pridat
        } else {
            setSelectedNames(selectedNames.filter(item => item !== name)); //odstranit
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendData(selectedNames);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-20 md:mt-10">
            <div className="flex">
                <div className="pr-6 md:px-8">
                    <div className="my-2">
                        <input name="korea" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base">South Korea</label>
                    </div>
                    <div className="my-2">
                        <input name="svajciarsko" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base">Switzerland</label>
                    </div>
                    <div className="my-2">
                        <input name="kanada" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base" >Canada</label>
                    </div>
                    <div className="my-2">
                        <input name="afrika" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base" >South Africa</label>
                    </div>
                </div>
                <div className="px-0 border-l-2 border-r-2 border-black md:border-white md:px-8">
                    <div className="my-2">
                        <input name="priroda" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base" >Nature</label>
                    </div>
                    <div className="my-2">
                        <input name="pamiatka" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base" >Landmarks</label>
                    </div>
                    <div className="my-2">
                        <input name="mesto" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base" >City</label>
                    </div>
                </div>
                <div className="pl-6 md:px-8">
                    <div className="my-2">
                        <input name="tropicka" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base" >Tropical</label>
                    </div>
                    <div className="my-2">
                        <input name="studena" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base" >Cold</label>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-5">
                <motion.input 
                    type="submit" 
                    value="Search" 
                    className="text-lg text-white font-normal font-mont md:text-base" 
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                    }}
                />
            </div>
        </form>
    );
}

export default Search;
