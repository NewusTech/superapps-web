"use client";

import {
  Bluetooth,
  CarSimple,
  GasPump,
  GitBranch,
  Radio,
  Seat,
  Usb,
} from "@phosphor-icons/react";
import { AirVent, Pointer } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function FeatureTravelCar({ item }: any) {
  let icon;
  if (item.trim() == "Heatback") {
    icon = <CarSimple className="text-primary-700 w-6 h-6" />;
  } else if (item.trim() == "Diesel") {
    icon = <GasPump className="text-primary-700 w-6 h-6" />;
  } else if (item.trim() == "16 Kursi") {
    icon = <Seat className="text-primary-700 w-6 h-6" />;
  } else if (item.trim() == "Manual") {
    icon = <GitBranch className="text-primary-700 w-6 h-6" />;
  } else if (item.trim() == "AC") {
    icon = <AirVent className="text-primary-700 w-6 h-6" />;
  } else if (item.trim() == "Radio") {
    icon = <Radio className="text-primary-700 w-6 h-6" />;
  } else if (item.trim() == "USB") {
    icon = <Usb className="text-primary-700 w-6 h-6" />;
  } else if (item.trim() == "Bluetooth") {
    icon = <Bluetooth className="text-primary-700 w-6 h-6" />;
  } else {
    icon = <Pointer className="text-primary-700 w-6 h-6" />;
  }

  return (
    <div className="flex flex-row items-center justify-center w-full gap-x-3">
      <div>{icon}</div>

      <p>{item}</p>
    </div>
  );
}
