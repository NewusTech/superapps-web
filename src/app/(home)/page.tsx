"use client";

import ticket from "@/../../public/assets/images/neededs/ticket-round.png";
import mobileFooter from "@/../../public/assets/images/neededs/mobile-footer.png";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { formatDate } from "@/helpers/index";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  destinations,
  facilities,
  heroIcons,
  hotels,
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
import { useMediaQuery } from "@/hooks/useMediaQuery";
import RoundTripForm from "@/components/mobile_pages/mobile_round_trip";
import MobileProfileScreen from "@/components/mobile_pages/mobile_profile";
import MobilePromotionScreen from "@/components/mobile_pages/mobile_promotion";
import MobileSuperiorServiceScreen from "@/components/mobile_pages/mobile_superior_service";
import MobileTravelCarScreen from "@/components/mobile_pages/mobile_travel_car";
import MobileTravelRoute from "@/components/mobile_pages/mobile_travel_route";
import MobileDestinationScreen from "@/components/mobile_pages/mobile_destination";
import MobileTicketingMaps from "@/components/mobile_pages/mobile_ticketing_maps";
import MobileTestimoniScreen from "@/components/mobile_pages/mobile_testimoni";
import Footer from "@/components/layouts/footer";
import MobileRouteTravelCar from "@/components/mobile_pages/mobile_route_travel_car";
import ApartementScreen from "@/components/pages/apartements";
import MobileApartementScreen from "@/components/mobile_pages/mobile_apartement";
import {
  BranchesInterface,
  DataPariwisataInterface,
  DataRouteInterface,
  PariwitasaInterface,
  RouteInterface,
} from "@/types/interface";
import { getAllBranches, getAllPariwisata, getAllRute } from "@/services/api";

export default function Home() {
  const now = new Date();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [branches, setBranches] = useState<BranchesInterface[]>();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const [startDate, setStartDate] = useState<Date | undefined>(firstDayOfMonth);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchAllBranches = async () => {
    try {
      const response = await getAllBranches();

      setBranches(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBranches();
  }, []);

  const startDateFormatted = startDate
    ? formatDate(new Date(startDate))
    : undefined;

  return (
    <main className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 mb-24">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-between relative background-blend w-screen min-h-96 md:min-h-screen">
        <div className="w-full md:w-full relative flex self-center justify-center items-center">
          {branches && <HeroScreen data={heroIcons} branches={branches} />}
        </div>
      </div>

      {/* Service Section */}
      <div className="hidden w-full bg-primary-100 md:flex gap-8">
        <ProfileScreen />
      </div>

      <div className="w-full min-h-[320px] absolute top-[250px] rounded-t-xl flex flex-row md:hidden justify-center bg-gradient-to-r from-[#CA1D76] from-[-100%] to-[#082167] to-[100%]">
        <div className="flex flex-row px-8 pt-6 items-start justify-start gap-x-5 ">
          <div className="w-[5rem] h-[5rem]">
            <Image
              src={ticket}
              alt="Ticket"
              width={1000}
              height={1000}
              className="w-full h-full object-contain object-center"
            />
          </div>

          <h4 className="font-semibold text-neutral-50 text-[16px] pt-3 align-text-top">
            Partner Resmi dan Terpercaya. Tiket dijamin resmi, bebas khawatir!
          </h4>
        </div>
      </div>

      <div className="w-full flex flex-col md:hidden items-center justify-center relative">
        <RoundTripForm />
      </div>

      <div className="w-full flex gap-8 md:hidden mt-[480px]">
        <MobileProfileScreen />
      </div>

      {/* Promotion Section */}
      <div className="hidden w-full md:flex flex-col mt-8 background-promotion md:background-promotion gap-y-8">
        <PromotionScreen />
      </div>

      {isMobile && (
        <div className="w-full flex flex-col background-mobile-promotion md:background-promotion gap-y-8">
          <MobilePromotionScreen />
        </div>
      )}

      {/* Superior Service Section */}
      <div className="w-full flex flex-col mt-16 gap-y-8 background-superior py-8 pb-16">
        <div className="w-full flex flex-row justify-center">
          <h2 className="text-neutral-700 font-semibold text-[26px] md:text-[36px]">
            Pelayanan Unggulan Kami
          </h2>
        </div>

        <div className="hidden px-16 md:grid md:grid-cols-3 gap-5 mt-6">
          {unggulans.map((item: any, i: number) => {
            return <SuperiorServiceScreen key={i} item={item} />;
          })}
        </div>

        <div className="md:hidden grid grid-cols-1 gap-5">
          <MobileSuperiorServiceScreen />
        </div>
      </div>

      {/* Facilities Section */}
      <div className="md:hidden w-full flex flex-col gap-y-8 background-mobile-facility py-8 pb-16 md:pb-24">
        <div className="w-full flex flex-row px-8 md:px-0 justify-center">
          <h2 className="text-neutral-700 text-center font-semibold text-[26px] md:text-[36px]">
            Nikmati perjalanan anda dengan nyaman
            {!isMobile && <br />}
            Bersama Fasilitas Rama Tranz
          </h2>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 mt-8 gap-5 px-8 md:px-16">
          {facilities.map((item: any, i: number) => {
            return <FacilityScreen key={i} item={item} />;
          })}
        </div>
      </div>

      <div className="hidden w-full md:flex flex-col gap-y-8 background-facility py-8 pb-16 md:pb-24">
        <div className="w-full flex flex-row justify-center">
          <h2 className="text-neutral-700 text-center font-semibold text-[26px] md:text-[36px]">
            Nikmati perjalanan anda dengan nyaman
            {!isMobile && <br />}
            Bersama Fasilitas Rama Tranz
          </h2>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 mt-16 gap-5 px-8 md:px-16">
          {facilities.map((item: any, i: number) => {
            return <FacilityScreen key={i} item={item} />;
          })}
        </div>
      </div>

      {/* Travel Car Screen */}
      <div className="w-full flex flex-col gap-y-8 py-8 pb-8 md:pb-12">
        <div className="w-full flex flex-col items-center md:px-56 gap-y-6">
          <h2 className="text-neutral-700 font-semibold text-[26px] md:text-[36px]">
            Armada Kendaraan Kami
          </h2>

          <p className="font-normal px-8 md:px-0 text-center text-neutral-700 text-[14px]">
            Nikmati berbagai fitur andalan Rama Trans dengan fasilitas modern,
            seperti kursi yang nyaman, AC, dan hiburan di dalam bus, yang
            membuka jalan bagi petualangan tak terlupakan dan solusi mobilitas
            yang lancar.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-5 px-16">
          {travelCars.map((item: any, i: number) => {
            return <TravelCarScreen key={i} item={item} />;
          })}
        </div>

        <div className="md:hidden grid grid-cols-1 gap-5">
          <MobileTravelCarScreen />
        </div>
      </div>

      {/* Travel Route Car Section */}
      <div className="w-full flex flex-col gap-y-8 pb-24">
        <div className="w-full flex flex-col items-center px-8 md:px-56 gap-y-6">
          <h2 className="text-neutral-700 font-semibold text-[26px] md:text-[36px]">
            Rute Armada Kami
          </h2>

          <p className="font-normal text-center text-neutral-700 text-[14px]">
            Rama Tranz menyediakan rental bus carter yang mudah dan efisien
            dengan armada modern dan pelayanan profesional Berikut rute yang
            kami tempuh untuk kenyamanan perjalanan Anda
          </p>
        </div>

        {/* <div className="travel-car-rows">
          <div className="destination-travel-car-lists">
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
        </div> */}

        {isMobile ? (
          <div className="mobile-travel-car-rows">
            <div className="mobile-destination-travel-car-lists">
              {routes.map((item, i) => (
                <MobileRouteTravelCar
                  key={i}
                  item={item}
                  isActive={i === activeIndex}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="travel-car-rows">
            <div className="destination-travel-car-lists">
              {routes.map((item, i) => (
                <RouteTravelCar
                  key={i}
                  item={item}
                  isActive={i === activeIndex}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>
        )}

        {/* <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 place-items-center gap-y-4 md:gap-y-0 md:gap-x-4 px-8 md:px-16">
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
        </div> */}
      </div>

      {/* Travel Route Section */}
      <div className="w-full flex flex-col gap-y-8 background-travel-route py-8 pb-8 md:pb-24">
        <div className="w-full flex flex-col items-start px-8 md:px-16 gap-y-4">
          <h2 className="text-neutral-700 font-semibold text-[26px] md:text-[36px]">
            Jelajahi Rute Perjalanan Kami
          </h2>

          <p className="font-normal text-start text-neutral-700 text-[14px]">
            Nikmati Rute Perjalanan Kami dari Jakarta ke Bandar Lampung dan
            Palembang, menawarkan pengalaman perjalanan yang unik dan menarik
          </p>
        </div>

        <div className="flex flex-row w-full md:mt-4 gap-x-2 md:gap-x-8 px-8 md:px-16">
          <Button className="bg-neutral-50 border border-neutral-700 py-4 md:py-6">
            Bandar Lampung
          </Button>
          <Button className="bg-neutral-50 border border-neutral-700 py-4 md:py-6">
            Palembang
          </Button>
          <Button className="bg-neutral-50 border border-neutral-700 py-4 md:py-6">
            Jakarta
          </Button>
        </div>

        <div className="hidden md:grid md:grid-cols-3 mt-6 gap-5 px-16">
          {travelRoutes.map((item: any, i: number) => {
            return <TravelRoute key={i} item={item} />;
          })}
        </div>

        <div className="md:hidden grid grid-cols-1 md:mt-6 gap-5 pl-8 md:px-16">
          <MobileTravelRoute />
        </div>
      </div>

      {/* Destination Section */}
      <div className="w-full flex flex-col gap-y-8 background-destination py-8 pb-8 md:pb-24">
        <div className="w-full flex flex-col items-start px-8 md:px-16 gap-y-4">
          <h2 className="text-neutral-700 font-semibold text-[26px] md:text-[36px]">
            Jelajahi Wisata Bersama Kami
          </h2>

          <p className="font-normal text-start text-neutral-700 text-[14px]">
            Nikmati Perjalanan Kami ke berabagai wisata yang terdapat di
            berbagai Kota besar seperti Lampung, Palembang dan Jakarta dengan
            pengalaman yang menyenangkan.
          </p>
        </div>

        <div className="flex flex-row w-full md:mt-4 gap-x-2 md:gap-x-8 px-8 md:px-16">
          <Button className="bg-neutral-50 border border-neutral-700 py-4 md:py-6">
            Bandar Lampung
          </Button>
          <Button className="bg-neutral-50 border border-neutral-700 py-4 md:py-6">
            Palembang
          </Button>
          <Button className="bg-neutral-50 border border-neutral-700 py-4 md:py-6">
            Jakarta
          </Button>
        </div>

        <div className="hidden md:grid md:grid-cols-3 mt-6 gap-5 px-16">
          {destinations.map((item: any, i: number) => {
            return <DestinationScreen key={i} item={item} />;
          })}
        </div>

        <div className="md:hidden grid grid-cols-1 md:mt-6 gap-5 pl-8 md:px-16">
          <MobileDestinationScreen />
        </div>

        <div className="hidden w-full md:flex md:flex-row self-center justify-center">
          <Button className="bg-primary-700 text-neutral-50 w-3/12 text-[16px] py-6">
            Lihat Semua Wisata
          </Button>
        </div>
      </div>

      {/* Hotel Section */}
      <div className="w-full flex flex-col gap-y-8 background-apartement py-8 pb-8 md:pb-24">
        <div className="w-full flex flex-col items-start px-8 md:px-16 gap-y-4">
          <h2 className="text-neutral-700 font-semibold text-[26px] md:text-[36px]">
            Temukan Penginapan Ideal Bersama Kami
          </h2>

          <p className="font-normal text-start text-neutral-700 text-[14px]">
            Nikmati pengalaman menginap yang tak terlupakan di berbagai lokasi
            pilihan
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 mt-6 gap-5 px-16">
          {hotels.map((item: any, i: number) => {
            return <ApartementScreen key={i} item={item} />;
          })}
        </div>

        <div className="md:hidden grid grid-cols-1 md:mt-6 gap-5 pl-8 md:px-16">
          <MobileApartementScreen />
        </div>
      </div>

      {/* Ticketing Maps Section */}
      <div className="w-full flex flex-col gap-y-8 py-8 pb-8 md:pb-24">
        <div className="w-full flex flex-col md:items-center px-8 md:px-16 gap-y-4">
          <h2 className="text-neutral-700 font-semibold text-center md:text-start text-[26px] md:text-[36px]">
            Ingin pesan tiket secara langsung?
          </h2>

          <p className="font-normal text-center text-neutral-700 text-[14px]">
            Kunjungi loket kami untuk layanan pemesanan tiket cepat dan ramah.
            Tim kami siap membantu Anda dengan segala kebutuhan perjalanan Anda.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 mt-6 gap-x-5 px-16">
          {travelMaps.map((item: any, i: number) => {
            return <TicketingMaps key={i} item={item} />;
          })}
        </div>

        <div className="md:hidden grid grid-cols-1 gap-x-5 px-8">
          <MobileTicketingMaps />
        </div>
      </div>

      {/* Question & Answer Section */}
      <div className="w-full flex flex-col md:mt-16 gap-y-8 border-t border-grey-100 py-8 pb-8 md:pb-16">
        <QuestionAnswer />
      </div>

      {/* Testimoni Section */}
      <div className="hidden w-full md:flex flex-col gap-y-8 background-testimoni py-8 pb-24">
        <TestimoniScreen />
      </div>

      <div className="md:hidden w-full flex flex-col gap-y-8 background-testimoni py-8 pb-8 md:pb-24">
        <MobileTestimoniScreen />
      </div>

      {/* Footer End */}
      <div className="w-full px-8 md:mb-72 md:px-16 flex flex-col md:flex-row pt-8 pb-8 md:pb-0 md:pt-20 gap-y-8 md:gap-y-0 md:gap-x-8 background-footer">
        <div className="w-full flex flex-col gap-y-4 md:gap-y-8">
          <h2 className="text-primary-700 font-bold text-[26px]">
            Download Aplikasi Rama Tranz
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
            className="hidden w-4/12 md:flex flex-row justify-center items-center bg-primary-700 hover:bg-primary-600 px-5 py-4 rounded-lg gap-x-5">
            <Play className="w-5 h-5 text-neutral-50" />

            <p className="text-neutral-50 font-normal text-[16px]">
              Download Sekarang
            </p>
          </Link>
        </div>

        <div className="w-5/12 md:w-6/12 md:block flex flex-col items-center self-center">
          <Image
            src={mobileFooter}
            alt="footer"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:hidden">
          <Link
            href={"/"}
            className="w-full flex flex-row justify-center items-center bg-primary-700 hover:bg-primary-600 px-5 py-3 rounded-lg gap-x-5">
            <Play className="w-5 h-5 text-neutral-50" />

            <p className="text-neutral-50 font-normal text-[16px]">
              Download Sekarang
            </p>
          </Link>
        </div>
      </div>

      <div className="md:hidden flex flex-col w-full">
        <Footer />
      </div>
    </main>
  );
}
