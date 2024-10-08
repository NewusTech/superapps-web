"use client";

import { CarSimple, GasPump, GitBranch, Seat } from "@phosphor-icons/react";
import React from "react";

export default function MobileFeatureTravelCar({ car }: any) {
  let icon;
  if (car.iconName === "Heatback") {
    icon = <CarSimple className="text-primary-700 w-6 h-6" />;
  } else if (car.iconName === "Diesel") {
    icon = <GasPump className="text-primary-700 w-6 h-6" />;
  } else if (car.iconName === "16 Kursi") {
    icon = <Seat className="text-primary-700 w-6 h-6" />;
  } else if (car.iconName === "Manual") {
    icon = <GitBranch className="text-primary-700 w-6 h-6" />;
  }

  return (
    <div className="flex flex-row md:items-center md:justify-center w-full gap-x-3">
      <div>{icon}</div>

      <p>{car?.iconName}</p>
    </div>
  );
}
