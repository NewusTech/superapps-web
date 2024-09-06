"use client";

import ramatranz from "@/../../public/assets/images/neededs/ramatranz.png";
import playStore from "@/../../public/assets/images/neededs/goolgle-play.png";
import FollowFooter from "@/components/pages/footer";
import { followes } from "@/constants/main";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex flex-col gap-y-5">
      <div className="flex flex-col md:flex-row w-full border-t border-grey-100 pt-6 px-8 md:px-16 gap-x-5">
        <div className="w-full md:w-11/12 flex flex-col md:flex-row items-center md:items-start gap-y-5 md:gap-x-5">
          <div className="w-4/12 md:w-full">
            <Image
              src={ramatranz}
              alt="Ramatranz"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-neutral-700 text-center md:text-start">
            Rama Tranz telah menjadi mitra perjalanan terbaik di Lampung sejak
            2012, menyediakan layanan travel, pengiriman paket cepat, dan rental
            mobil dengan armada modern. Kami hadir 24/7 untuk memastikan
            perjalanan Anda aman, nyaman, dan tepat waktu.
          </p>

          <div className="md:hidden w-full flex flex-col items-center md:items-start gap-y-6 md:gap-y-2">
            <p>Ikuti kami di:</p>

            <div className="flex flex-row justify-center md:justify-start w-full gap-x-8 md:gap-x-3">
              {followes?.map((item: any, i: number) => {
                return <FollowFooter key={i} item={item} />;
              })}
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-y-5 md:gap-y-0 mt-6 md:mt-0">
          <div className="w-full flex flex-col items-center md:items-start gap-y-5">
            <h4 className="font-semibold text-[16px] text-neutral-700">
              Tentang Kami
            </h4>

            <div className="w-full grid grid-rows-2 place-content-center md:place-content-start gap-y-3">
              <p>Sejarah</p>

              <p>Visi Misi</p>
            </div>
          </div>

          <div className="w-full flex flex-col items-center md:items-start gap-y-5">
            <h4 className="font-semibold text-[16px] text-neutral-700">
              Product
            </h4>

            <div className="w-full grid grid-rows-3 place-content-center md:place-content-start gap-y-3">
              <p>Travel</p>

              <p>Paket</p>

              <p>Rental</p>
            </div>
          </div>

          <div className="w-full flex flex-col items-center md:items-start gap-y-5">
            <h4 className="font-semibold text-[16px] text-neutral-700">
              Informasi
            </h4>

            <div className="w-full flex flex-col items-center md:grid grid-rows-3 gap-y-3">
              <p>Blog</p>

              <p>FAQ</p>

              <p className="text-center md:text-start">Term & Condition</p>
            </div>
          </div>
        </div>

        <div className="hidden w-6/12 md:flex flex-col gap-y-5">
          <h4 className="font-semibold text-[16px] text-neutral-700">
            Download Rama Tranz App
          </h4>

          <div className="w-8/12">
            <Image
              src={playStore}
              alt="Play Store"
              width={100}
              height={100}
              className="w-full h-full rounded-lg"
            />
          </div>

          <div className="hidden w-full md:flex flex-col items-center md:items-start gap-y-6 md:gap-y-2">
            <p>Ikuti kami di:</p>

            <div className="flex flex-row justify-center md:justify-start w-full gap-x-8 md:gap-x-3">
              {followes?.map((item: any, i: number) => {
                return <FollowFooter key={i} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col md:flex-row md:items-center background-footers justify-start w-full px-8 md:px-16 py-6 md:text-center">
        <p className="text-[14px] text-neutral-700 font-normal">
          Copyright &copy; 2024
          <span className="text-[12px] font-bold"> Rama Tranz</span>. All rights
          reserved
        </p>
      </div>

      <div className="md:hidden flex flex-col md:flex-row md:items-center bg-neutral-100 border-t border-grey-100 justify-start w-full px-8 md:px-16 py-6 md:text-center">
        <p className="text-[14px] text-neutral-700 font-normal">
          Copyright &copy; 2024
          <span className="text-[12px] font-bold"> Rama Tranz</span>. All rights
          reserved
        </p>
      </div>
    </div>
  );
}
