"use client";

import { detailHotels } from "@/constants/main";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function DetailHotelPage() {
  const [hotelImages, setHotelImages] = useState<any>([]);
  const [imageSlider, setImageSlider] = useState<any>();

  useEffect(() => {
    setHotelImages(detailHotels);
    setImageSlider(detailHotels.images[0]?.image);
  }, []);

  const handleSlideImage = (image: any) => {
    setImageSlider(image);
  };

  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full flex flex-col mt-20">
        <div className="w-full flex flex-row gap-x-3">
          <div className="w-full h-full">
            <Image
              src={imageSlider}
              alt="Hotel Rooms"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 w-full gap-3">
            {hotelImages?.images?.map((item: any, i: number) => {
              return (
                <div
                  key={i}
                  className="w-full h-full"
                  onClick={() => handleSlideImage(item?.image)}>
                  <Image
                    src={item.image}
                    alt="Hotel Rooms"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
