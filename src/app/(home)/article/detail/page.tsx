"use client";

import React from "react";
import banner from "@/../../public/assets/images/neededs/detail-article-image-1.png";
import Image from "next/image";
import WebsiteSliderArticleDetailScreen from "@/components/pages/articles-sliders";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import MobileSliderArticleDetailScreen from "@/components/mobile_pages/mobile-articles-sliders";

export default function DetailArticlePage() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full flex flex-col md:pb-12">
        <div className="w-full flex flex-col gap-y-10 pb-8">
          <div className="w-full flex flex-col items-center gap-y-10 mt-28 px-8 md:px-36">
            <div className="w-full flex flex-col items-center gap-y-1">
              <div className="bg-neutral-200 rounded-md py-2 px-2 md:w-3/12">
                <p className="text-neutral-700 text-center text-[18px]">
                  Berita Rama Tranz
                </p>
              </div>

              <h2 className="text-neutral-700 text-center font-semibold text-[26px] md:text-[30px] mt-3 md:mt-0">
                Rama Tranz Hadirkan Rute Baru Antar Kota Untuk Anda
              </h2>

              <p className="text-neutral-500 font-normal text-center text-[14px] md:text-[16px]">
                Rabu, 15 Januari 2024
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col px-4 md:px-20 gap-y-5">
            <div className="w-full h-full">
              <Image
                src={banner}
                alt="Banner"
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-full leading-10">
              <p>
                Rama Tranz, penyedia layanan bus travel terkemuka,
                memperkenalkan rute baru yang menghubungkan Jakarta dengan
                Surabaya, Yogyakarta, dan Bandung. Rute ini dirancang untuk
                memenuhi kebutuhan perjalanan masyarakat dengan menyediakan
                fasilitas yang nyaman seperti kursi ergonomis, layanan internet
                gratis, dan sistem hiburan modern.
                <br />
                <span className="font-semibold text-[18px]">Introduction</span>
                <br />
                Rama Tranz, penyedia layanan bus travel terkemuka,
                memperkenalkan rute baru yang menghubungkan Jakarta dengan
                Surabaya, Yogyakarta, dan Bandung. Rute ini dirancang untuk
                memenuhi kebutuhan perjalanan masyarakat dengan menyediakan
                fasilitas yang nyaman seperti kursi ergonomis, layanan internet
                gratis, dan sistem hiburan modern.
                <br />
                Rama Tranz, penyedia layanan bus travel terkemuka,
                memperkenalkan rute baru yang menghubungkan Jakarta dengan
                Surabaya, Yogyakarta, dan Bandung. Rute ini dirancang untuk
                memenuhi kebutuhan perjalanan masyarakat dengan menyediakan
                fasilitas yang nyaman seperti kursi ergonomis, layanan internet
                gratis, dan sistem hiburan modern.
                <br />
                Rama Tranz, penyedia layanan bus travel terkemuka,
                memperkenalkan rute baru yang menghubungkan Jakarta dengan
                Surabaya, Yogyakarta, dan Bandung. Rute ini dirancang untuk
                memenuhi kebutuhan perjalanan masyarakat dengan menyediakan
                fasilitas yang nyaman seperti kursi ergonomis, layanan internet
                gratis, dan sistem hiburan modern.
                <br />
                <span className="font-semibold text-[18px]">Introduction</span>
                <br />
                Rama Tranz, penyedia layanan bus travel terkemuka,
                memperkenalkan rute baru yang menghubungkan Jakarta dengan
                Surabaya, Yogyakarta, dan Bandung. Rute ini dirancang untuk
                memenuhi kebutuhan perjalanan masyarakat dengan menyediakan
                fasilitas yang nyaman seperti kursi ergonomis, layanan internet
                gratis, dan sistem hiburan modern.
                <br />
                Rama Tranz, penyedia layanan bus travel terkemuka,
                memperkenalkan rute baru yang menghubungkan Jakarta dengan
                Surabaya, Yogyakarta, dan Bandung. Rute ini dirancang untuk
                memenuhi kebutuhan perjalanan masyarakat dengan menyediakan
                fasilitas yang nyaman seperti kursi ergonomis, layanan internet
                gratis, dan sistem hiburan modern.
                <br />
                Rama Tranz, penyedia layanan bus travel terkemuka,
                memperkenalkan rute baru yang menghubungkan Jakarta dengan
                Surabaya, Yogyakarta, dan Bandung. Rute ini dirancang untuk
                memenuhi kebutuhan perjalanan masyarakat dengan menyediakan
                fasilitas yang nyaman seperti kursi ergonomis, layanan internet
                gratis, dan sistem hiburan modern.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full py-10 background-travel-route flex flex-col pl-4 md:pl-20">
          <div className="w-full flex flex-col gap-y-5">
            <h5 className="font-normal text-neutral-700 text-[20px]">
              Berita Terbaru
            </h5>
            {!isMobile ? (
              <WebsiteSliderArticleDetailScreen />
            ) : (
              <MobileSliderArticleDetailScreen />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
