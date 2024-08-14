"use client";

import mobileFooter from "@/../../public/assets/images/neededs/mobile-footer.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid, Autoplay } from "swiper/modules";
import {
  Bed,
  Bus,
  Car,
  Package,
  ShoppingBasket,
  ChevronRight,
  ChevronLeft,
  Play,
  ArrowRight,
  ArrowLeftRight,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { formatDate } from "@/helpers/index";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { facilities, heroIcons, promos, unggulans } from "@/constants/main";
import HeroScreen from "@/components/pages/hero";
import ProfileScreen from "@/components/pages/profile";
import PromotionScreen from "@/components/pages/promotion";
import SuperiorServiceScreen from "@/components/pages/superior_service";
import FacilityScreen from "@/components/pages/facility";

export default function Home() {
  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const [startDate, setStartDate] = useState<Date | undefined>(firstDayOfMonth);

  const startDateFormatted = startDate
    ? formatDate(new Date(startDate))
    : undefined;

  return (
    <main className="flex flex-col w-full h-full justify-center items-center">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-between background-blend w-screen min-h-screen">
        <div className="w-full flex self-center justify-center items-center">
          <HeroScreen data={heroIcons} />
        </div>
      </div>

      {/* Service Section */}
      <div className="w-full bg-neutral-700 flex gap-8">
        <ProfileScreen />
      </div>

      {/* Promotion Section */}
      <div className="w-full flex flex-col mt-8 background-promotion gap-y-8">
        <PromotionScreen />
      </div>

      {/* Superior Service Section */}
      <div className="w-full flex flex-col mt-16 gap-y-8 background-superior py-8 pb-16">
        <div className="w-full flex flex-row justify-center">
          <h2 className="text-neutral-700 font-semibold text-[36px]">
            Pelayanan Unggulan Kami
          </h2>
        </div>

        <div className="px-16 grid grid-cols-3 gap-5 mt-6">
          {unggulans.map((item: any, i: number) => {
            return <SuperiorServiceScreen key={i} item={item} />;
          })}
        </div>
      </div>

      {/* Facilities Section */}
      <div className="w-full flex flex-col mt-16 gap-y-8 background-facility">
        <div className="w-full flex justify-center">
          <h2 className="text-neutral-600 text-center font-semibold text-[24px]">
            Nikmati perjalanan anda dengan nyaman
            <br />
            Bersama Fasilitas Rama Tranz
          </h2>
        </div>

        <div className="grid grid-cols-3 mt-16 gap-5 px-16">
          {facilities.map((item: any, i: number) => {
            return <FacilityScreen key={i} item={item} />;
          })}
        </div>
      </div>

      <div className="w-11/12 flex flex-col mt-16 gap-y-8">
        <div className="w-full">
          <h2 className="text-neutral-600 font-semibold text-[24px]">
            Artikel
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {/* {articles.map((article: any, i: number) => {
            return <CardArticles key={i} article={article} />;
          })} */}
        </div>
      </div>

      {/* Footer End */}
      <div className="w-11/12 flex flex-row mt-16 gap-x-8 mb-72">
        <div className="w-full flex flex-col gap-y-8">
          <h2 className="text-primary-700 font-bold text-[26px]">
            Aplikasi Rama Tranz
          </h2>

          <div className="w-full flex flex-col gap-y-4">
            <h4 className="text-neutral-700 font-semibold text-[16px]">
              Yuk, permudah perjalananmu dengan Rama Tranz!
            </h4>

            <p className="text-neutral-700 font-normal text-[16px]">
              Install aplikasinya sekarang dan nikmati kemudahan dalam pemesanan
              tiket serta berbagai fitur menarik lainnya. Jangan sampai
              ketinggalan!
            </p>
          </div>

          <Link
            href={"/"}
            className="w-4/12 flex flex-row justify-center items-center bg-primary-700 hover:bg-primary-600 px-5 py-2 rounded-full gap-x-5">
            <Play className="w-5 h-5 text-neutral-50" />

            <p className="text-neutral-50 font-normal text-[16px]">
              Download Sekarang
            </p>
          </Link>
        </div>

        <div className="w-6/12">
          <Image
            src={mobileFooter}
            alt="footer"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
