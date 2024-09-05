"use client";

import ticket from "@/../../public/assets/images/neededs/ticket-round.png";
import RoundTripForm from "@/components/mobile_pages/mobile_round_trip";
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
import {
  getAllBranches,
  getAllPointMasterJemput,
} from "@/services/api";
import { useTravelbookingPayload } from "@/store/useTravelStore";
import { BranchesInterface, TitikJemputInterface } from "@/types/interface";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

export default function TravelPage() {
  const [branches, setBranches] = useState<BranchesInterface[]>();
  const [pointsJempuput, setPointsJempuut] = useState<TitikJemputInterface[]>(
    []
  );
  const [pointsAntar, setPointsAntar] = useState<TitikJemputInterface[]>([]);

  const bookingPayload = useTravelbookingPayload();

  const fetchAllBranches = async () => {
    try {
      const response = await getAllBranches();

      setBranches(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTitikJemput = useMemo(async () => {
    try {
      const response = await getAllPointMasterJemput({
        cabang: bookingPayload?.from || "",
      });

      setPointsJempuut(response.data);
    } catch (error) {
      setPointsJempuut([]);
      console.log(error);
    }
  }, [bookingPayload?.from]);

  const fetchTitikAntar = useMemo(async () => {
    try {
      const response = await getAllPointMasterJemput({
        cabang: bookingPayload?.to || "",
      });
      setPointsAntar(response.data);
    } catch (error) {
      setPointsAntar([]);
      console.log(error);
    }
  }, [bookingPayload?.to]);

  useEffect(() => {
    fetchAllBranches();
  }, []);


  useEffect(() => {
    fetchAllBranches();
  }, []);

  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-32 md:pb-80">
      <div className="flex flex-col items-center justify-between relative background-blend w-screen min-h-96 md:min-h-screen">
        <div className="md:w-full relative flex self-center justify-center items-center">
          {branches && <HeroScreen data={heroIcons} branches={branches} />}
        </div>
      </div>

      <div className="w-full min-h-[320px] absolute top-[250px] rounded-t-xl flex flex-row md:hidden justify-center bg-gradient-to-r from-[#CA1D76] from-[-100%] to-[#082167] to-[100%]">
        <div className="flex flex-row px-8 pt-6 items-start justify-start gap-x-5 ">
          <div className="w-[5rem] h-[5rem]">
            <Image
              src={ticket}
              alt="Ticket"
              width={600}
              height={600}
              className="w-full h-full object-contain object-center"
            />
          </div>

          <h4 className="font-semibold text-neutral-50 text-[16px] pt-3 align-text-top">
            Partner Resmi dan Terpercaya. Tiket dijamin resmi, bebas khawatir!
          </h4>
        </div>
      </div>

      <div className="w-full flex flex-col md:hidden items-center justify-center relative">
        <RoundTripForm
          branch={branches || []}
          pointsAntar={pointsAntar}
          pointsJempuput={pointsJempuput}
        />
      </div>

      <div className="w-full flex flex-col px-4 md:px-16 background-travel-route gap-y-6 py-10 mt-[35rem] md:mt-0">
        <h3 className="text-neutral-700 font-semibold text-[26px]">
          Banyak keungulan yang didapatkan pesan tiket di Rama Tranz
        </h3>

        <div className="grid grid-cols-2 gap-8 w-full">
          {profits?.map((item: any, i: number) => {
            return <ProfitScreen key={i} item={item} />;
          })}
        </div>
      </div>

      <div className="w-full flex flex-col px-4 md:px-16 gap-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {requirements?.map((item: any, i: number) => {
            return <BookingAndRequirementScreen key={i} item={item} />;
          })}
        </div>
      </div>

      <div className="w-full flex flex-col px-4 md:px-16 gap-y-3 md:py-10">
        <h3 className="text-neutral-700 font-semibold text-[26px]">
          Keunggulan pesan tiket Online di Rama Tranz
        </h3>

        <div className="w-full flex flex-col gap-y-6 py-5 md:py-10">
          {travel_tickets?.map((item: any, i: number) => {
            return <TravelTicketingScreen key={i} item={item} index={i} />;
          })}
        </div>
      </div>

      <div className="w-full flex flex-col px-4 md:px-16 gap-y-3">
        <h3 className="text-neutral-700 font-semibold text-[26px]">
          Kenali Lebih Jauh Kelas Travel di Rama Tranz
        </h3>

        <div className="w-full flex flex-col gap-y-6 py-5 md:py-10">
          {introductions?.map((item: any, i: number) => {
            return <IntroductionScreen key={i} item={item} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}
