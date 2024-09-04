"use client"

import Stepper from '@/components/stepper/Stepper';
import { useTravelStepPayloadPayload } from '@/store/useTravelStore';
import { stepItem } from "@/constants/rental";
import React from 'react'

export default function LayoutAvailableSchedule({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const stepTravel = useTravelStepPayloadPayload();

  return (
    <section className="flex flex-col gap-5 md:w-full h-full md:mb-0 pb-80 px-4 md:px-[2rem] container">
    <div className="mt-32 w-full p-2 ">
      <Stepper position={stepTravel} item={stepItem} />
    </div>
    {children}
  </section>
  )
}
