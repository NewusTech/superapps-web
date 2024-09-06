"use client";

import Image from "next/image";
import React from "react";

export default function AboutUsImageCard({ item }: any) {
  return (
    <div className="w-[19%] h-full relative">
      <Image
        src={item?.image}
        alt="Travel Image"
        width={300}
        height={300}
        className="w-full h-full object-cover rounded-xl relative top-64"
      />
    </div>
  );
}
