import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BookingAndRequirementScreen({ item }: any) {
  return (
    <>
      {item && item?.slug === "how-to-booking-travel-ticketing" ? (
        <Link href={"/travel/ticketing-steps"}>
          <div className="flex flex-row bg-neutral-50 border border-grey-100 p-3 rounded-lg gap-x-3">
            <div className="w-2/12">
              <Image
                src={item?.image}
                alt={item?.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col w-full gap-y-2">
              <h5 className="text-neutral-700 font-semibold text-[18px]">
                {item?.title}
              </h5>

              <p>{item?.desc}</p>
            </div>
          </div>
        </Link>
      ) : (
        <Link href={"/travel/travel-conditions"}>
          <div className="flex flex-row bg-neutral-50 border border-grey-100 p-3 rounded-lg gap-x-3">
            <div className="w-2/12">
              <Image
                src={item?.image}
                alt={item?.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col w-full gap-y-2">
              <h5 className="text-neutral-700 font-semibold text-[18px]">
                {item?.title}
              </h5>

              <p>{item?.desc}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
