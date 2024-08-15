import Image from "next/image";
import React from "react";

export default function MobileRouteTravelCar({ item, isActive, onClick }: any) {
  return (
    // <div
    //   onClick={onClick}
    //   className={`destination-travel-car-lists-wrap flex self-center w-full md:h-full relative cursor-pointer transition-all duration-500 rounded-xl ${
    //     isActive ? "flex-grow" : "flex-shrink-0 md:w-[60%] h-[50%]"
    //   }`}>
    //   <div className="destination-travel-car-list">
    //     <Image
    //       src={item?.image}
    //       alt={item?.location}
    //       width={300}
    //       height={500}
    //       className={`rounded-xl ${
    //         isActive
    // ? "w-full h-full object-cover shadow-xl"
    //           : "w-full h-full object-cover"
    //       }`}
    //     />
    //   </div>
    //   {isActive && (
    //     <div className="absolute bottom-8 text-[18px] left-0 w-full text-center p-2 text-neutral-50 rounded-b-xl">
    //       {item?.location}
    //     </div>
    //   )}
    // </div>
    <div
      onClick={onClick}
      className={`mobile-destination-travel-car-lists-wrap ${
        isActive ? "active" : ""
      }`}>
      {/* <img src={item?.image} alt={item.location} /> */}
      <Image
        src={item?.image}
        alt={item?.location}
        width={300}
        height={300}
        //       className={`rounded-xl ${
        //         isActive
        // ? "w-full h-full object-cover shadow-xl"
        //           : "w-full h-full object-cover"
        //       }`}
      />
      {isActive && (
        <div className="mobile-location-overlay">{item.location}</div>
      )}
    </div>
  );
}
