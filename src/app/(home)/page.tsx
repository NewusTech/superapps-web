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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import {
  destinations,
  facilities,
  heroIcons,
  promos,
  routes,
  travelCars,
  travelMaps,
  travelRoutes,
  unggulans,
} from "@/constants/main";
import HeroScreen from "@/components/pages/hero";
import ProfileScreen from "@/components/pages/profile";
import PromotionScreen from "@/components/pages/promotion";
import SuperiorServiceScreen from "@/components/pages/superior_service";
import FacilityScreen from "@/components/pages/facility";
import TravelCarScreen from "@/components/pages/travel_car";
import RouteTravelCar from "@/components/pages/route_travel_car";
import TravelRoute from "@/components/pages/travel-route";
import DestinationScreen from "@/components/pages/destination";
import TicketingMaps from "@/components/pages/ticketing_maps";
import QuestionAnswer from "@/components/pages/question";
import TestimoniScreen from "@/components/pages/testimoni";

export default function Home() {
  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const [startDate, setStartDate] = useState<Date | undefined>(firstDayOfMonth);
  const [activeIndex, setActiveIndex] = useState(1);

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
      <div className="w-full flex flex-col gap-y-8 background-facility py-8 pb-24">
        <div className="w-full flex flex-row justify-center">
          <h2 className="text-neutral-700 text-center font-semibold text-[36px]">
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

      <div className="w-full flex flex-col gap-y-8 py-8 pb-24">
        <div className="w-full flex flex-col items-center px-56 gap-y-6">
          <h2 className="text-neutral-700 font-semibold text-[36px]">
            Armada Kendaraan Kami
          </h2>

          <p className="font-normal text-center text-neutral-700 text-[14px]">
            Nikmati berbagai fitur andalan Rama Trans dengan fasilitas modern,
            seperti kursi yang nyaman, AC, dan hiburan di dalam bus, yang
            membuka jalan bagi petualangan tak terlupakan dan solusi mobilitas
            yang lancar.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 px-16">
          {travelCars.map((item: any, i: number) => {
            return <TravelCarScreen key={i} item={item} />;
          })}
        </div>
      </div>

      {/* Travel Route Car Section */}
      <div className="w-full flex flex-col gap-y-8 pb-24">
        <div className="w-full flex flex-col items-center px-56 gap-y-6">
          <h2 className="text-neutral-700 font-semibold text-[36px]">
            Rute Armada Kami
          </h2>

          <p className="font-normal text-center text-neutral-700 text-[14px]">
            Rama Tranz menyediakan rental bus carter yang mudah dan efisien
            dengan armada modern dan pelayanan profesional Berikut rute yang
            kami tempuh untuk kenyamanan perjalanan Anda
          </p>
        </div>

        <div className="grid grid-cols-3 place-items-center gap-x-4 px-16">
          {routes.map((item: any, i: number) => {
            return (
              <RouteTravelCar
                key={i}
                item={item}
                isActive={i === activeIndex}
                onClick={() => setActiveIndex(i)}
              />
            );
          })}
        </div>
      </div>

      {/* Travel Route Section */}
      <div className="w-full flex flex-col gap-y-8 background-travel-route py-8 pb-24">
        <div className="w-full flex flex-col items-start px-16 gap-y-4">
          <h2 className="text-neutral-700 font-semibold text-[36px]">
            Jelajahi Rute Perjalanan Kami
          </h2>

          <p className="font-normal text-start text-neutral-700 text-[14px]">
            Nikmati Rute Perjalanan Kami dari Jakarta ke Bandar Lampung dan
            Palembang, menawarkan pengalaman perjalanan yang unik dan menarik
          </p>
        </div>

        <div className="flex flex-row w-full mt-4 gap-x-8 px-16">
          <Button className="bg-neutral-50 border border-neutral-700 py-6">
            Bandar Lampung
          </Button>
          <Button className="bg-neutral-50 border border-neutral-700 py-6">
            Palembang
          </Button>
          <Button className="bg-neutral-50 border border-neutral-700 py-6">
            Jakarta
          </Button>
        </div>

        <div className="grid grid-cols-3 mt-6 gap-5 px-16">
          {travelRoutes.map((item: any, i: number) => {
            return <TravelRoute key={i} item={item} />;
          })}
        </div>
      </div>

      {/* Destination Section */}
      <div className="w-full flex flex-col gap-y-8 background-destination py-8 pb-24">
        <div className="w-full flex flex-col items-start px-16 gap-y-4">
          <h2 className="text-neutral-700 font-semibold text-[36px]">
            Jelajahi Wisata Bersama Kami
          </h2>

          <p className="font-normal text-start text-neutral-700 text-[14px]">
            Nikmati Perjalanan Kami ke berabagai wisata yang terdapat di
            berbagai Kota besar seperti Lampung, Palembang dan Jakarta dengan
            pengalaman yang menyenangkan.
          </p>
        </div>

        <div className="flex flex-row w-full mt-4 gap-x-8 px-16">
          <Button className="bg-neutral-50 border border-neutral-700 py-6">
            Bandar Lampung
          </Button>
          <Button className="bg-neutral-50 border border-neutral-700 py-6">
            Palembang
          </Button>
          <Button className="bg-neutral-50 border border-neutral-700 py-6">
            Jakarta
          </Button>
        </div>

        <div className="grid grid-cols-3 mt-6 gap-5 px-16">
          {destinations.map((item: any, i: number) => {
            return <DestinationScreen key={i} item={item} />;
          })}
        </div>

        <div className="w-full flex flex-row self-center justify-center">
          <Button className="bg-primary-700 text-neutral-50 w-3/12 text-[16px] py-6">
            Lihat Semua Wisata
          </Button>
        </div>
      </div>

      {/* Ticketing Maps Section */}
      <div className="w-full flex flex-col gap-y-8 py-8 pb-24">
        <div className="w-full flex flex-col items-center px-16 gap-y-4">
          <h2 className="text-neutral-700 font-semibold text-[36px]">
            Ingin pesan tiket secara langsung?
          </h2>

          <p className="font-normal text-center text-neutral-700 text-[14px]">
            Kunjungi loket kami untuk layanan pemesanan tiket cepat dan ramah.
            Tim kami siap membantu Anda dengan segala kebutuhan perjalanan Anda.
          </p>
        </div>

        <div className="grid grid-cols-3 mt-6 gap-x-5 px-16">
          {travelMaps.map((item: any, i: number) => {
            return <TicketingMaps key={i} item={item} />;
          })}
        </div>
      </div>

      {/* Question & Answer Section */}
      <div className="w-full flex flex-col mt-16 gap-y-8 border-t border-grey-100 py-8 pb-16">
        <QuestionAnswer />
      </div>

      {/* Testimoni Section */}
      <div className="w-full flex flex-col gap-y-8 background-testimoni py-8 pb-24">
        <TestimoniScreen />
      </div>

      {/* Footer End */}
      <div className="w-11/12 flex flex-row mt-16 gap-x-8 mb-[450px]">
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
            className="w-4/12 flex flex-row justify-center items-center bg-primary-700 hover:bg-primary-600 px-5 py-2 rounded-lg gap-x-5">
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
