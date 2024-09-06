"use client"

import AboutUsImageCard from "@/components/elements/aboutUs/cardImages";
import AboutUsNumberCard from "@/components/elements/aboutUs/cardNumbers";
import { aboutContents, AboutImages, AboutNumbers } from "@/constants/main";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid, Autoplay } from "swiper/modules";

export default function AboutUsScreen() {

  return (
    <section className="w-full flex flex-col mt-[10rem] md:mt-[6rem] items-center mb-[350px]">
      <div className="w-full flex flex-col items-center justify-center bg-[#06597E] h-fit min-h-0 md:min-h-[25rem] gap-y-10 pt-20 pb:10 md:pb-40">
        <div className="w-full flex flex-col items-center justify-center gap-y-10">
          <h2 className="text-neutral-50 font-bold text-[26px] md:text-[32px] text-center">
            TENTANG RAMA TRANZ
          </h2>

          <p className="text-neutral-50 text-center font-normal text-[18px] mx-4 md:mx-48">
            Rama Trans adalah perusahaan transportasi darat terkemuka yang
            menyediakan layanan andal dan berkualitas tinggi. Dengan armada
            kendaraan modern yang terawat, kami menawarkan perjalanan antar
            kota, sewa kendaraan untuk acara khusus, dan transportasi untuk
            perusahaan. Kami berkomitmen untuk memberikan pengalaman perjalanan
            yang nyaman dan aman bagi setiap penumpang.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center relative md:absolute w-full h-fit">
          <div className="relative top-0 md:top-[15rem] flex flex-col md:flex-row gap-4 md:gap-10 h-fit w-full p-4 items-center justify-center">
            {AboutImages?.map((item: any, i: number) => {
              return <AboutUsImageCard key={i} item={item} />;
            })}
          </div>
        </div>
      </div>

      <div className="w-11/12 flex flex-col justify-center items-center border border-grey-100 rounded-xl shadow-lg mt-[5rem] md:mt-40 py-8 gap-y-8 overflow-hidden">
        <div className="w-6/12 flex flex-col items-center justify-center border border-grey-100 rounded-lg gap-y-4 py-4">
          <h5 className="font-semibold text-neutral-700 text-[18px]">
            Visi Kami
          </h5>

          <p className="text-neutral-700 text-center font-normal text-[16px]">
            Menjadi perusahaan multi dimensional yang eksis, inovatif, dan
            antisipatif.
          </p>
        </div>

        <div className="w-full justify-center items-center flex flex-col gap-y-6">
          <h5 className="font-semibold text-neutral-700 text-[18px]">
            Misi Kami
          </h5>

          <div className="w-11/12 hidden md:flex flex-row gap-x-4">
            {AboutNumbers?.map((item: any, i: number) => {
              return <AboutUsNumberCard key={i} item={item} />;
            })}
          </div>
          <div className="w-11/12 flex md:hidden flex-row gap-x-4">
            <Swiper
              modules={[Navigation, Pagination, Grid, Autoplay]}
              autoplay={{ delay: 3000 }}
              slidesPerView={1.2}
              spaceBetween={20}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="mySwiper"
              loop={true}
              pagination={{ clickable: true }}
            >
              {AboutNumbers.map((item, i: number) => {
                return (
                  <SwiperSlide key={i}>
                    <AboutUsNumberCard key={i} item={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="w-full background-testimoni flex flex-col justify-center items-center mt-12 py-8 gap-y-8">
        <h2 className="text-neutral-700 font-semibold text-[26px] text-center">
          Mengapa Memilih Travel di{" "}
          <span className="text-primary-700">Rama Tranz</span>
        </h2>

        {/* letak if else condition */}
        <RenderContent/>
      </div>
    </section>
  );
}

const RenderContent = () => {
  return (
    <div className="w-full p-4 md:p-0 md:w-10/12 flex flex-col gap-y-20">
      {aboutContents?.isRight?.value && (
        <div className="w-full flex flex-row gap-x-4 md:gap-x-12">
          <div className="w-[64px] h-[64px] md:w-1/12 md:h-auto overflow-hidden">
            <Image
              src={aboutContents.isRight.firstContent.image}
              alt={aboutContents.isRight.firstContent.title}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <h5 className="text-neutral-700 font-semibold text-[18px]">
              {aboutContents.isRight.firstContent.title}
            </h5>
            <p className="text-neutral-700 font-normal text-[16px]">
              {aboutContents.isRight.firstContent.desc}
            </p>
          </div>
        </div>
      )}

      {aboutContents?.isLeft?.value && (
        <div className="w-full flex flex-row gap-x-4 md:gap-x-12">
          <div className="w-full flex flex-col gap-y-2">
            <h5 className="text-neutral-700 font-semibold text-[18px]">
              {aboutContents.isLeft.secondContent.title}
            </h5>
            <p className="text-neutral-700 font-normal text-[16px]">
              {aboutContents.isLeft.secondContent.desc}
            </p>
          </div>
          <div className="w-[64px] h-[64px] md:w-1/12 md:h-auto overflow-hidden">
            <Image
              src={aboutContents.isLeft.secondContent.image}
              alt={aboutContents.isLeft.secondContent.title}
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      )}

      {aboutContents?.isRight?.value && (
        <div className="w-full flex flex-row gap-x-4 md:gap-x-12">
          <div className="w-[64px] h-[64px] md:w-1/12 md:h-auto overflow-hidden">
            <Image
              src={aboutContents.isRight.thirdContent.image}
              alt={aboutContents.isRight.thirdContent.title}
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <h5 className="text-neutral-700 font-semibold text-[18px]">
              {aboutContents.isRight.thirdContent.title}
            </h5>
            <p className="text-neutral-700 font-normal text-[16px]">
              {aboutContents.isRight.thirdContent.desc}
            </p>
          </div>
        </div>
      )}

      {aboutContents?.isLeft?.value && (
        <div className="w-full flex flex-row gap-x-4 md:gap-x-12">
          <div className="w-full flex flex-col gap-y-2">
            <h5 className="text-neutral-700 font-semibold text-[18px]">
              {aboutContents.isLeft.fourthContent.title}
            </h5>
            <p className="text-neutral-700 font-normal text-[16px]">
              {aboutContents.isLeft.fourthContent.desc}
            </p>
          </div>
          <div className="w-[64px] h-[64px] md:w-1/12 md:h-auto overflow-hidden">
            <Image
              src={aboutContents.isLeft.fourthContent.image}
              alt={aboutContents.isLeft.fourthContent.title}
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};
