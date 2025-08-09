import Image from 'next/image';
import React from 'react';

const ServiceCard = ({ imageSrc, text,title, alt = '', className = '' }) => (
    <div className={`flex flex-col w-full sm:w-[48%] border-black border md:w-1/4 items-center min-h-[400px] h-fit  rounded-4xl  bg-black/5 hover:bg-amber-100 backdrop-blur-2xl  overflow-hidden ${className}`}>
        <Image
            src={imageSrc}
            alt={alt}
            className="w-full h-[170px] object-cover"
        />
        <div className="w-full p-4 text-center  ">
            <h1 className="text-xl font-semibold  text-black mb-2">{title}</h1>
            <span className="text-lg font-medium text-gray-800">{text}</span>
        </div>
    </div>
);

export default ServiceCard;