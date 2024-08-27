"use client";

import profileImage from "@/../../public/assets/images/neededs/profile-ramatranz.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function MobileProfileScreen() {
  return (
    <div className="w-full flex flex-col md:grid md:grid-cols-2 md:px-16 py-16 gap-y-6 md:gap-x-8 md:bg-neutral-50">
      <div className="w-full md:h-full px-8 md:px-0">
        <Image
          src={profileImage}
          width={200}
          height={200}
          alt="Rama Tranz"
          className="w-full h-full md:object-cover rounded-xl"
        />
      </div>

      <div className="w-full flex flex-col gap-x-16 gap-y-3 md:gap-y-6 px-8 md:px-0">
        <h3 className="font-semibold text-center md:text-start text-[26px] md:text-[36px] text-neutral-700">
          Profile Rama Tranz
        </h3>

        <p className="md:text-[16px] font-normal text-center md:text-start text-neutral-700 leading-8">
          Rama Trans adalah perusahaan transportasi darat terkemuka yang
          menyediakan layanan andal dan berkualitas tinggi. Dengan armada
          kendaraan modern yang terawat, kami menawarkan perjalanan antar kota,
          sewa kendaraan untuk acara khusus, dan transportasi untuk perusahaan.
          Kami berkomitmen untuk memberikan pengalaman perjalanan yang nyaman
          dan aman bagi setiap penumpang.
        </p>

        <div className="w-10/12 md:w-4/12 flex flex-col self-center">
          <Button className="bg-primary-700 w-full text-neutral-50 text-[16px] md:text-[14px]">
            Selengkapnya
          </Button>
        </div>
      </div>
    </div>
  );
}
