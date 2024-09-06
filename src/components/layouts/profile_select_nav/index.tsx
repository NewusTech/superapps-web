"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { profileSelects } from "@/constants/main";
import { useRouter } from "next/navigation";

export default function SelectProfileNav() {
  const router = useRouter();

  const handleSelectChange = (value: string) => {
    const urlMap: { [key: string]: string } = {
      Profile: "/profile",
      "Ubah Password": "/profile/change-user-password",
      "Riwayat Travel": "/profile/order-histories-travel",
      "Riwayat Rental": "/profile/order-histories-rental",
      "Riwayat Hotel": "/profile/order-histories-hotel",
      "Riwayat Paket": "profile/order-histories-paket",
    };

    const selectedUrl = urlMap[value];
    if (selectedUrl) {
      router.push(selectedUrl);
    }
  };

  return (
    <section className="w-full flex flex-col bg-neutral-50 border-b border-grey-100">
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-full text-[22px] font-semibold border-none outline-none rounded-none px-8 py-8">
          <SelectValue placeholder="Profile" />
        </SelectTrigger>
        <SelectContent className="w-11/12 bg-neutral-50 border border-grey-100 shadow-md">
          {profileSelects?.map((item: { value: string }, i: number) => (
            <SelectItem key={i} value={item.value}>
              {item?.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </section>
  );
}
