import Image from "next/image";
import React from "react";

export default function FacilityScreen({ item }: any) {
  return (
    <div className="w-full h-full flex flex-row justify-center">
      <Image
        src={item?.image}
        alt="Facility"
        width={200}
        height={200}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  );
}
