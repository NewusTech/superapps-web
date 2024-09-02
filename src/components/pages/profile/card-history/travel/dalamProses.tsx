"use client";

import stepper from "@/../../public/assets/icons/neededs/icon_donat_active.svg";
import CopyButton from "@/components/elements/copyToClip";
import Countdown from "@/components/elements/countDown";
import { Button } from "@/components/ui/button";
import { formatTanggalPanjang } from "@/helpers";
import { HistoryTravelInterface } from "@/types/interface";
import { Calendar, Notepad, Van } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

export default function OrderHistoryTravelStatusCard({
  data,
}: {
  data: HistoryTravelInterface;
}) {
  return (
    <div className="w-full flex flex-col gap-y-5 border border-grey-100 shadow-md rounded-lg p-4">
      <div className="w-full flex flex-row">
        <div className="w-full flex flex-row gap-x-3">
          <div className="w-full flex flex-row items-center gap-x-2">
            <Notepad className="w-6 h-6 text-neutral-500" />

            <div className="w-full flex flex-row items-center gap-x-2">
              <p className="text-neutral-500 font-normal text-[16px]">
                No Pemesan: {data?.kode_pesanan}
              </p>

              <CopyButton textToCopy={data?.kode_pesanan} />
            </div>
          </div>

          <div className="w-0.5 h-full bg-grey-100"></div>

          <div className="w-full flex flex-row items-center gap-x-2">
            <Calendar className="w-6 h-6 text-neutral-500" />

            <p className="text-neutral-500 font-normal text-[16px]">
              Tanggal Pesan: {formatTanggalPanjang(data?.tanggal)}
            </p>
          </div>
        </div>

        <Countdown expiredAt={data?.expired_at} />
      </div>

      <div className="w-full h-[1px] bg-grey-100"></div>

      <div className="w-full flex flex-col gap-y-4">
        <div className="w-full flex flex-row items-center gap-x-3">
          <p className="text-primary-700 font-normal text-[20px]">
            Travel Rama Tranz
          </p>

          <Van className="w-6 h-6 text-primary-700" />
        </div>

        <div className="w-full flex flex-row">
          <div className="w-full flex flex-col gap-y-1">
            <p className="text-neutral-500 font-normal text-[14px]">
              {formatTanggalPanjang(data?.tanggal)}
            </p>

            <p className="text-neutral-500 font-normal text-[16px]">
              {data?.kota_asal}
            </p>
          </div>

          <div className="w-full flex flex-row items-center">
            <div className="flex flex-row items-center gap-2">
              <div className="w-3 h-3">
                <Image
                  src={stepper}
                  alt="Rute"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
              <div className="border-b border-dashed w-16" />
              <div className="w-3 h-3">
                <Image
                  src={stepper}
                  alt="Rute"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-y-2">
            <p className="text-neutral-500 font-normal text-[14px]">
              23 Februari 2024
            </p>

            <p className="text-neutral-500 font-normal text-[16px]">
              {data?.kota_tujuan}
            </p>
          </div>

          <div className="w-full">
            <Button className="w-full border border-primary-700 text-primary-700 py-6">
              Detail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
