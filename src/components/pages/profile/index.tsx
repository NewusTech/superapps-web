"use client";

import profileImage from "@/../../public/assets/images/neededs/profile-ramatranz.png";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

export default function ProfileScreen() {
  return (
    <div className="w-full grid grid-cols-2 px-16 py-16 gap-x-8 bg-neutral-50 rounded-t-3xl">
      <div className="w-full h-full">
        <Image
          src={profileImage}
          width={200}
          height={200}
          alt="Rama Tranz"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="w-full flex flex-col gap-x-16 gap-y-6">
        <h3 className="font-semibold text-[36px] text-neutral-700">
          Profile Rama Tranz
        </h3>

        <p className="text-[16px] font-normal text-neutral-700 leading-8">
          Rama Trans adalah perusahaan transportasi darat terkemuka yang
          menyediakan layanan andal dan berkualitas tinggi. Dengan armada
          kendaraan modern yang terawat, kami menawarkan perjalanan antar kota,
          sewa kendaraan untuk acara khusus, dan transportasi untuk perusahaan.
          Kami berkomitmen untuk memberikan pengalaman perjalanan yang nyaman
          dan aman bagi setiap penumpang.
        </p>

        <div className="w-4/12">
          <Button className="bg-primary-700 w-full text-neutral-50">
            Selengkapnya
          </Button>
        </div>
      </div>
    </div>
  );
}
