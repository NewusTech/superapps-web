import React from "react";

export default function TravelTicketingScreen({ item, index }: any) {
  return (
    <div className="w-full flex flex-col gap-y-3">
      <h4 className="font-semibold text-[18px] text-neutral-700">
        {index + 1}. {item?.title}
      </h4>

      <p>{item?.desc}</p>
    </div>
  );
}
