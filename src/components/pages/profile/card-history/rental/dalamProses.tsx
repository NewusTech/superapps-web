"use client";

import stepper from "@/../../public/assets/icons/neededs/icon_donat_active.svg";
import CopyButton from "@/components/elements/copyToClip";
import Countdown from "@/components/elements/countDown";
import { Button } from "@/components/ui/button";
import { formatTanggalPanjang } from "@/helpers";
import { HistoryRentalInterface } from "@/types/interface";
import { Calendar, Notepad, Van } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

export default function OrderHistoryRentalStatusCard({
  data,
}: {
  data: HistoryRentalInterface;
}) {
  return (
    <div className="w-full flex flex-col gap-y-5 border border-grey-100 rounded-lg p-4">
      <div className="w-full flex flex-row">
        <div className="w-full flex flex-row gap-x-3">
          <div className="w-full flex flex-row items-center gap-x-2">
            <Notepad className="w-6 h-6 text-neutral-500" />

            <div className="w-full flex flex-row items-center gap-x-2">
              <p className="text-neutral-500 font-normal text-[16px]">
                No Pemesan: {data?.kode_pembayaran}
              </p>

              <CopyButton textToCopy={data?.kode_pembayaran} />
            </div>
          </div>

          <div className="w-0.5 h-full bg-grey-100"></div>

          <div className="w-full flex flex-row items-center gap-x-2">
            <Calendar className="w-6 h-6 text-neutral-500" />

            <p className="text-neutral-500 font-normal text-[16px]">
              Tanggal Pesan: {formatTanggalPanjang(data?.created_at)}
            </p>
          </div>
        </div>

        <Countdown expiredAt={data?.expired_at} />
      </div>

      <div className="w-full h-[1px] bg-grey-100"></div>

      <div className="w-full flex flex-col gap-y-4">
        <div className="w-full flex flex-row items-center gap-x-3">
          <p className="text-primary-700 font-normal text-[20px]">
            Rental Rama Tranz
          </p>

          <Van className="w-6 h-6 text-primary-700" />
        </div>

        <div className="w-full grid grid-cols-5">
          <div className="w-full flex flex-col gap-y-1">
            <p className="text-neutral-500 font-normal text-[14px]">Mobil</p>

            <p className="text-neutral-500 font-normal text-[16px]">
              {data?.mobil_type}
            </p>
          </div>

          <div className="w-full col-span-2 flex flex-col gap-y-2">
            <p className="text-neutral-500 font-normal text-[14px]">
              Tanggal Sewa
            </p>

            <p className="text-neutral-500 font-normal text-[16px]">
              {formatTanggalPanjang(data?.tanggal_awal_sewa)} -{" "}
              {formatTanggalPanjang(data?.tanggal_akhir_sewa)}
            </p>
          </div>

          <div className="w-full flex flex-col gap-y-2">
            <p className="text-neutral-500 font-normal text-[14px]">
              Area Sewa
            </p>

            <p className="text-neutral-500 font-normal text-[16px]">
              {data?.area}
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
