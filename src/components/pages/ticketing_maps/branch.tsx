import Image from "next/image";
import React from "react";

export default function BranchLocation({ image }: any) {
  return (
    <div className="w-full flex flex-row rounded-lg shadow-sm">
      <div className="w-full h-full">
        <Image
          src={image?.image}
          alt="Car"
          width={100}
          height={100}
          className="w-full h-full rounded-xl"
        />
      </div>
    </div>
  );
}
