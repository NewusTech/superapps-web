"use client";

import Stepper from "@/components/stepper/Stepper";

import React, { useEffect, useState } from "react";
import {
  useTravelActions,
  useTravelStepPayloadPayload,
} from "@/store/useTravelStore";

import { stepItem } from "@/constants/rental";
import PilihTiket from "@/components/pages/avaliable-schedule/partials/PilihTiket";
import Bayar from "@/components/pages/avaliable-schedule/partials/Bayar";
import StatusPembayaran from "@/components/pages/avaliable-schedule/partials/StatusPembayaran";
import DataDiriPenumpang from "@/components/pages/avaliable-schedule/partials/DataDiriPenumpang";
import {
  DataScheduleInterface,
  TitikJemputInterface,
  TravelScheduleInterface,
} from "@/types/interface";
import { getAllPointMasterJemput, getScheduleByRoute } from "@/services/api";

export default function AvaliableSchedule() {
  const [schedules, setSchedules] = useState<TravelScheduleInterface[]>();
  const [titikJemput, setTitikjemput] = useState<TitikJemputInterface[]>();
  const [data, setData] = useState({
    from: "",
    to: "",
    date: "",
    seats: "",
  });
  const { setStepTravelPayload } = useTravelActions();

  const stepTravel = useTravelStepPayloadPayload();

  useEffect(() => {
    const from = localStorage.getItem("from");
    const to = localStorage.getItem("to");
    const date = localStorage.getItem("departureDate");
    const seats = localStorage.getItem("jumlah_kursi");

    setData({
      from: from ? JSON.parse(from) : "",
      to: to ? JSON.parse(to) : "",
      date: date ? JSON.parse(date) : "",
      seats: seats ? JSON.parse(seats) : "",
    });
  }, []);

  const handlePrevStep = () => {
    if (stepTravel < 2) return;
    setStepTravelPayload(stepTravel - 1);
  };

  const fetchScheduleByRoute = async (
    from: string,
    to: string,
    date: string,
    seats: number
  ) => {
    try {
      const response = await getScheduleByRoute(from, to, date, seats);

      setSchedules(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTitikJemput = async () => {
    try {
      const response = await getAllPointMasterJemput();

      setTitikjemput(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchScheduleByRoute(data.from, data.to, data.date, Number(data.seats));
  }, [data.from, data.to, data.date, data.seats]);

  useEffect(() => {
    fetchTitikJemput();
  }, []);

  return (
    <section className="flex flex-col gap-5 md:w-full h-full md:mb-0 pb-80 px-1 md:px-[2rem] container">
      <div className="mt-32 w-full p-2">
        <Stepper position={stepTravel} item={stepItem} />
      </div>

      {stepTravel === 1 && schedules && titikJemput && (
        <PilihTiket schedules={schedules} points={titikJemput} />
      )}

      {stepTravel === 2 && <DataDiriPenumpang />}

      {stepTravel === 3 && (
        <Bayar
          keys={false}
          firstTitle="Jadwal Travel Keberangkatan"
          secondTitle="Data Penumpang"
          firstSubTitle={{
            name: "Keberangkatan",
            email: "Tujuan",
            nomor: "Tanggal & Jam Berangkat",
            etc: "Jumlah Penumpang",
          }}
          secondSubTitle={{
            name: "Nama Penumpang",
            email: "Email",
            nomor: "Nomor Telepon",
            etc: "Alamat",
          }}
        />
      )}

      {stepTravel === 4 && <StatusPembayaran />}
    </section>
  );
}
