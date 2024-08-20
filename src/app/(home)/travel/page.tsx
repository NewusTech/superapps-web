import BookingAndRequirementScreen from "@/components/pages/booking_and_requirement";
import HeroScreen from "@/components/pages/hero";
import IntroductionScreen from "@/components/pages/introduction";
import ProfitScreen from "@/components/pages/profit";
import TravelTicketingScreen from "@/components/pages/travel_ticketing";
import {
  heroIcons,
  introductions,
  profits,
  requirements,
  travel_tickets,
} from "@/constants/main";
import React from "react";

export default function TravelPage() {
  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-80">
      <div className="flex flex-col items-center justify-between relative background-blend w-screen min-h-96 md:min-h-screen">
        <div className="md:w-full relative flex self-center justify-center items-center">
          <HeroScreen data={heroIcons} />
        </div>
      </div>

      <div className="w-full flex flex-col px-16 background-travel-route gap-y-6 py-10">
        <h3 className="text-neutral-700 font-semibold text-[26px]">
          Banyak keungulan yang didapatkan pesan tiket di Rama Tranz
        </h3>

        <div className="grid grid-cols-2 gap-y-8 w-full">
          {profits?.map((item: any, i: number) => {
            return <ProfitScreen key={i} item={item} />;
          })}
        </div>
      </div>

      <div className="w-full flex flex-col px-16 gap-y-6 py-10">
        <div className="grid grid-cols-2 gap-x-10 w-full">
          {requirements?.map((item: any, i: number) => {
            return <BookingAndRequirementScreen key={i} item={item} />;
          })}
        </div>
      </div>

      <div className="w-full flex flex-col px-16 gap-y-3 py-10">
        <h3 className="text-neutral-700 font-semibold text-[26px]">
          Keunggulan pesan tiket Online di Rama Tranz
        </h3>

        <div className="w-full flex flex-col gap-y-6 py-10">
          {travel_tickets?.map((item: any, i: number) => {
            return <TravelTicketingScreen key={i} item={item} index={i} />;
          })}
        </div>
      </div>

      <div className="w-full flex flex-col px-16 gap-y-3">
        <h3 className="text-neutral-700 font-semibold text-[26px]">
          Kenali Lebih Jauh Kelas Travel di Rama Tranz
        </h3>

        <div className="w-full flex flex-col gap-y-6 py-10">
          {introductions?.map((item: any, i: number) => {
            return <IntroductionScreen key={i} item={item} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}
