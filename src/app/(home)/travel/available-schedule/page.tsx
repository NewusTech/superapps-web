"use client";

import Stepper from "@/components/stepper/Stepper";

import React, { useEffect } from "react";
import PilihTiket from "./partials/PilihTiket";
import {
  useTravelActions,
  useTravelStepPayloadPayload,
} from "@/store/useTravelStore";
import DataDiriPenumpang from "./partials/DataDiriPenumpang";
import Bayar from "./partials/Bayar";
import StatusPembayaran from "./partials/StatusPembayaran";
import { useSearchParams } from "next/navigation";

export const stepItem = [
  {
    id: 1,
    label: "Pilih Tiket",
  },
  {
    id: 2,
    label: "Isi Data",
  },
  {
    id: 3,
    label: "Bayar",
  },
  {
    id: 4,
    label: "Selesai",
  },
];

export default function AvaliableSchedule() {
  const { setStepTravelPayload } = useTravelActions();

  const stepTravel = useTravelStepPayloadPayload();

  const handlePrevStep = () => {
    if (stepTravel < 2) return;
    setStepTravelPayload(stepTravel - 1);
  };

  useEffect(() => {
      setStepTravelPayload(1);
  }, []);

  return (
    <section className="flex flex-col gap-5 md:w-full h-full md:mb-0 pb-80 px-1 md:px-[2rem] container">
      <div className="mt-32 w-full p-2">
        <Stepper position={stepTravel} item={stepItem} />
      </div>

      {stepTravel === 1 && <PilihTiket />}

      {stepTravel === 2 && <DataDiriPenumpang />}

      {stepTravel === 3 && <Bayar />}

      {stepTravel === 4 && <StatusPembayaran />}
    </section>
  );
}
