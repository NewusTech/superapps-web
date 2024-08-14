const ramatranz = require("@/../../public/assets/images/neededs/ramatranz-2.png");
import { Instagram, MapPinned, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col w-full bg-primary-700 pt-8">
      <div className="w-10/12 flex flex-row justify-center items-center self-center gap-x-48">
        <div className="w-3/12">
          <Image
            src={ramatranz}
            alt="Ramatranz"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full flex flex-col gap-y-5">
          <h3 className="text-neutral-50 font-bold text-[26px]">Kontak</h3>

          <div className="w-full grid grid-rows-3 gap-y-6">
            <div className="flex flex-row gap-x-3">
              <MapPinned className="w-5 h-5 text-neutral-50" />

              <p className="text-neutral-50 font-normal text-[14px]">
                Jl. Salim Batubara No.118, Kupang Teba, Kec. Tlk. Betung Utara,
                Kota Bandar Lampung, Lampung 35212
              </p>
            </div>

            <div className="flex flex-row gap-x-3">
              <Phone className="w-5 h-5 text-neutral-50" />

              <p className="text-neutral-50 font-normal text-[14px]">
                0813-7389-5558
              </p>
            </div>

            <div className="flex flex-row gap-x-3">
              <Instagram className="w-5 h-5 text-neutral-50" />

              <p className="text-neutral-50 font-normal text-[14px]">
                Ramatranz
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-end w-full px-[49px] my-[29px] text-center">
        <p className="text-[12px] text-white font-normal">
          Copyright &copy; 2024
          <span className="text-[12px] font-bold"> Rama Tranz</span>. All rights
          reserved
        </p>
      </div>
    </div>
  );
}
