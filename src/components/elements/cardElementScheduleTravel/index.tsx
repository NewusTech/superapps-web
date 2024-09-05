"use client";

import Button from "@/components/buttonCustom/ButtonCustom";
import ModalSelectSeat from "@/components/pages/avaliable-schedule/ModalSelectSeat";
import Card from "@/components/ui/card/Card";
import { formatCurrency, formatTime } from "@/helpers";
import {
  useTravelActions,
  useTravelbookingPayload,
} from "@/store/useTravelStore";
import { TravelScheduleInterface } from "@/types/interface";
import { Dot, Minus } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CardTravelScheduleOrder({
  data,
  disable,
}: {
  data: TravelScheduleInterface;
  disable?: boolean;
}) {
  console.log(data, "ini data ");

  const router = useRouter();
  const [openModalKursi, setOpenModalKursi] = useState(false);

  const bookingPayload = useTravelbookingPayload();
  const { setStepTravelPayload, setTravelSchedule } = useTravelActions();
  const seats = bookingPayload?.seats || 1;

  const handleNextStep = () => {
    setOpenModalKursi(false);
    setTravelSchedule(data);
    setStepTravelPayload(2);
    router.push("/travel/available-schedule/data-penumpang/");
  };

  const handleDetailTravel = () => {
    setTravelSchedule(data);
    setOpenModalKursi(false);
    router.push("/travel/detail-travel");
  };

  const handlePilihKursi = () => {
    setTravelSchedule(data);
    setOpenModalKursi(true);
  };

  return (
    <>
      <Card>
        <div className="flex flex-col gap-5 text-sm md:text-base">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <span className="flex flex-row items-center gap-2 text-sm md:text-base">
                Rama Tranz Type A <Minus className="" /> {data?.carModel}
              </span>
              <span className="text-primary-700 flex flex-row items-center">
                <Dot /> Tersedia {data?.availableSeat} Kursi
              </span>
            </div>
            <Button
              disabled={disable}
              className="h-fit"
              variant="secondary"
              onClick={handleDetailTravel}
            >
              Detail Tiket
            </Button>
          </div>
          <hr />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-row gap-4 w-full items-center justify-between">
              <p className="flex flex-col gap-2">
                {data?.originCity}
                <span className="text-gray-500">
                  {formatTime(data?.departureTime)}
                </span>
              </p>
              <div className="flex flex-col items-center">
                <p className="text-primary-700">8 Jam</p>
                <div className="flex flex-row items-center gap-2">
                  <Image
                    src={`/assets/icons/neededs/icon_donat_active.svg`}
                    height={18}
                    width={18}
                    alt="donat"
                    className="z-[1]"
                  />
                  <div className="border-b border-dashed w-16" />
                  <Image
                    src={`/assets/icons/neededs/icon_donat_active.svg`}
                    height={18}
                    width={18}
                    alt="donat"
                    className="z-[1]"
                  />
                </div>
              </div>
              <p className="flex flex-col gap-2">
                {data?.destinationCity}
                <span className="text-gray-500">
                  {" "}
                  {formatTime(data?.departureTime)}
                </span>
              </p>
            </div>
            <div className="w-[1px] h-16 border-r hidden lg:block" />
            <div className="flex flex-row gap-4 items-center justify-between w-full">
              <p className="text-primary-700 font-bold text-xl">
                {formatCurrency(data.price)}
                <span className="font-normal text-black">/kursi</span>
              </p>
              <Button
                className="h-fit"
                onClick={handlePilihKursi}
                disabled={disable}
              >
                Pilih Kursi
              </Button>
            </div>
          </div>
        </div>
      </Card>
      <ModalSelectSeat
        seats={seats}
        visible={openModalKursi}
        setVisible={setOpenModalKursi}
        handleAfterSelectSeat={handleNextStep}
        passengerIndex={1}
        selectAllSheats={true}
      />
    </>
  );
}
