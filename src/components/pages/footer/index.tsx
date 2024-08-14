import Image from "next/image";
import React from "react";

export default function FollowFooter({ item }: any) {
  return (
    <div className="w-50 h-50 p-2 flex flex-row gap-x-3 bg-grey-100 border border-neutral-700 rounded-full">
      <div className="w-full">
        <Image src={item?.icon?.src} alt="Ramatranz" width={20} height={20} />
      </div>
    </div>
  );
}
