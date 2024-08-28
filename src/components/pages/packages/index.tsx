import Image from "next/image";
import React from "react";

export default function PackageScreen({ item }: any) {
  return (
    <div className="w-full flex flex-col gap-y-5">
      <div className="flex flex-row items-center w-full gap-x-3">
        <div className="w-[40px] h-[40px]">
          <Image
            src={item?.image}
            alt={item?.location}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>

        <h5 className="text-neutral-700 font-normal text-[20px]">
          {item?.location}
        </h5>
      </div>

      <div className="w-full flex flex-col">
        <ul className="list-disc grid grid-rows-3 gap-y-2">
          <li className="grid grid-cols-3">
            <span>Pengirim</span>
            <span className="col-span-2">: {item?.sending}</span>
          </li>

          <li className="grid grid-cols-3">
            <span>Penerima</span>
            <span className="col-span-2">: {item?.receiving}</span>
          </li>

          <li className="grid grid-cols-3">
            <span>Jadwal</span>
            <span className="col-span-2">: {item?.schedule}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
