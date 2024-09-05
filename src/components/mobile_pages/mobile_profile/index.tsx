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
          width={600}
          height={600}
          alt="Rama Tranz"
          className="w-full h-full md:object-cover rounded-xl"
        />
      </div>

      <div className="w-full flex flex-col gap-x-16 gap-y-3 md:gap-y-6 px-8 md:px-0">
        <h3 className="font-semibold text-center md:text-start text-[26px] md:text-[36px] text-neutral-700">
          Profile Rama Tranz
        </h3>

        <p className="md:text-[16px] font-normal text-justify md:text-start text-neutral-700 leading-8">
          Sebagai mitra perjalanan terpercaya di Lampung sejak 2012, Rama Tranz
          berkomitmen untuk menyediakan layanan berkualitas tinggi. Kami
          menyediakan layanan travel dengan rute seperti travel
          Lampung-Palembang, travel Lampung-Jakarta, dan travel Jakarta-Lampung.
          Kami juga menawarkan pengiriman paket yang cepat dan aman, serta
          rental mobil dengan armada mewah dan modern. Dengan pelayanan 24/7,
          kami berdedikasi untuk memberikan pengalaman yang aman, nyaman bagi
          setiap pelanggan.
        </p>

        <h3 className="font-semibold text-center md:text-start text-[26px] md:text-[36px] text-neutral-700">
          Visi Kami
        </h3>

        <p>
          Menjadi perusahaan multi-dimensional yang eksis, inovatif, dan
          antisipatif.
        </p>

        <h3 className="font-semibold text-center md:text-start text-[26px] md:text-[36px] text-neutral-700">
          Misi Kami
        </h3>

        <ol className="list-decimal ml-4">
          <li>
            Memberikan pelayanan prima dan hadir sebagai solusi yang bernilai
            untuk seluruh konsumen.
          </li>
          <li>
            Mengoptimalkan nilai perusahaan melalui bisnis yang berkembang
            dengan sumber daya terbaik dan mengakomodir gagasan – gagasan yang
            kekinian.
          </li>
          <li>
            Menjamin kepuasan konsumen dengan standar solusi yang berkelanjutan.
          </li>
        </ol>

        <div className="w-10/12 md:w-4/12 flex flex-col self-center">
          <Button className="bg-primary-700 w-full text-neutral-50 text-[16px] md:text-[14px]">
            Selengkapnya
          </Button>
        </div>
      </div>
    </div>
  );
}
