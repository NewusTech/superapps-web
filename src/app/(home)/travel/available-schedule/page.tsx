"use client";

import Stepper from "@/components/stepper/Stepper";

import React, { useEffect } from "react";
import {
  useTravelActions,
  useTravelStepPayloadPayload,
} from "@/store/useTravelStore";

import { stepItem } from "@/constants/rental";
import PilihTiket from "@/components/pages/avaliable-schedule/partials/PilihTiket";
import Bayar from "@/components/pages/avaliable-schedule/partials/Bayar";
import StatusPembayaran from "@/components/pages/avaliable-schedule/partials/StatusPembayaran";
import DataDiriPenumpang from "@/components/pages/avaliable-schedule/partials/DataDiriPenumpang"

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
