import Image from "next/image";
import React from "react";

export default function AboutUsImageCard({ item }: any) {
  return (
    <div className="w-[15rem] h-[7rem] sm:w-[20rem] sm:h-[13rem] rounded-xl overflow-hidden border-2 border-white">
      <Image
        src={item?.image}
        alt="Travel Image"
        width={300}
        height={300}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
