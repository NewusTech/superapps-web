import Image from "next/image";
import React from "react";

export default function RouteTravelCar({ item, isActive, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className={`flex self-center w-full md:h-full relative cursor-pointer transition-all duration-500 rounded-xl ${
        isActive ? "flex-grow" : "flex-shrink-0 md:w-[60%] h-[50%]"
      }`}>
      <Image
        src={item?.image}
        alt={item?.location}
        width={300}
        height={500}
        className={`rounded-xl ${
          isActive
            ? "w-full h-full object-cover shadow-xl"
            : "w-full h-full object-cover"
        }`}
      />
      {isActive && (
        <div className="absolute bottom-8 text-[18px] left-0 w-full text-center p-2 text-neutral-50 rounded-b-xl">
          {item?.location}
        </div>
      )}
    </div>
  );
}
