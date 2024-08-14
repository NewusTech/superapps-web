import ramatranz from "@/../../public/assets/images/neededs/ramatranz.png";
import playStore from "@/../../public/assets/images/neededs/goolgle-play.png";
import FollowFooter from "@/components/pages/footer";
import { followes } from "@/constants/main";
import { Instagram, MapPinned, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex flex-col gap-y-5">
      <div className="flex flex-row w-full border-t border-grey-100 pt-6 px-16 gap-x-5">
        <div className="w-8/12 flex flex-col gap-y-5">
          <div className="w-4/12">
            <Image
              src={ramatranz}
              alt="Ramatranz"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-neutral-700 pr-10">
            Rama Trans adalah perusahaan transportasi yang menyediakan layanan
            bus travel berkualitas. Kami menawarkan kenyamanan dan keamanan
            dalam setiap perjalanan Anda.
          </p>

          <div className="w-full flex flex-col gap-y-2">
            <p>Ikuti kami di:</p>

            <div className="flex flex-row w-full gap-x-3">
              {followes?.map((item: any, i: number) => {
                return <FollowFooter key={i} item={item} />;
              })}
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-3">
          <div className="w-full flex flex-col gap-y-5">
            <h4 className="font-semibold text-[16px] text-neutral-700">
              Tentang Kami
            </h4>

            <div className="w-full grid grid-rows-2 gap-y-3">
              <p>Sejarah</p>

              <p>Visi Misi</p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-y-5">
            <h4 className="font-semibold text-[16px] text-neutral-700">
              Product
            </h4>

            <div className="w-full grid grid-rows-3 gap-y-3">
              <p>Travel</p>

              <p>Paket</p>

              <p>Rental</p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-y-5">
            <h4 className="font-semibold text-[16px] text-neutral-700">
              Informasi
            </h4>

            <div className="w-full grid grid-rows-3 gap-y-3">
              <p>Blog</p>

              <p>FAQ</p>

              <p>Term & Condition</p>
            </div>
          </div>
        </div>

        <div className="w-6/12 flex flex-col gap-y-5">
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
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center background-footers justify-start w-full px-16 py-6 text-center">
        <p className="text-[14px] text-neutral-700 font-normal">
          Copyright &copy; 2024
          <span className="text-[12px] font-bold"> Rama Tranz</span>. All rights
          reserved
        </p>
      </div>
    </div>
  );
}
