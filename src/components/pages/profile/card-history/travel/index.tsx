"use client";

import stepper from "@/../../public/assets/icons/neededs/icon_donat_active.svg";
import CopyButton from "@/components/elements/copyToClip";
import { Button } from "@/components/ui/button";
import { formatTanggalPanjang } from "@/helpers";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { HistoryTravelInterface } from "@/types/interface";
import { Calendar, Notepad, Van } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function OrderHistoryTravelCard({
  data,
}: {
  data: HistoryTravelInterface;
}) {
  console.log(data, "ini data");

  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = useRouter();

  let status;
  if (data?.status === "Sukses") {
    status = (
      <div className="w-full md:w-4/12 rounded-lg flex items-center justify-center py-3 bg-success-300">
        <p className="text-success-700 text-center">Sukses</p>
      </div>
    );
  } else if (data?.status === "Menunggu Pembayaran") {
    status = (
      <div className="w-full md:w-4/12 rounded-lg flex items-center justify-center py-3 bg-neutral-300">
        <p className="text-neutral-500 text-center">Menunggu</p>
      </div>
    );
  } else if (data?.status === "Menunggu Verifikasi") {
    status = (
      <div className="w-full md:w-4/12 rounded-lg flex items-center justify-center py-3 bg-thirtiary-300">
        <p className="text-thirtiary-600 text-center">Menunggu Verifikasi</p>
      </div>
    );
  } else if (data?.status === "Gagal") {
    status = (
      <div className="w-full md:w-4/12 rounded-lg flex items-center justify-center py-3 bg-error-400">
        <p className="text-error-700 text-center">Gagal</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-y-5 border border-grey-100 shadow-md rounded-lg p-4">
      <div className="w-full flex flex-col md:flex-row gap-y-3">
        {isMobile && status}

        <div className="w-full grid grid-rows-2 md:flex flex-col md:flex-row md:gap-x-3 gap-y-2">
          <div className="w-full flex flex-row items-center gap-x-2">
            <Notepad className="w-6 h-6 text-neutral-500" />

            <div className="w-full grid grid-cols-3 md:flex flex-row items-center gap-x-2">
              {!isMobile && (
                <p className="text-neutral-500 font-normal text-[16px]">
                  No Pemesan: {data?.kode_pesanan}
                </p>
              )}
              {isMobile && (
                <>
                  <p className="text-neutral-500 font-normal text-[14px] md:text-[16px]">
                    No Pemesan
                  </p>

                  <p className="text-neutral-500 col-span-2 font-normal text-[14px] md:text-[16px]">
                    : {data?.kode_pesanan}
                  </p>
                </>
              )}
              {!isMobile && <CopyButton textToCopy={data?.kode_pesanan} />}
            </div>
          </div>

          {!isMobile && <div className="w-0.5 h-full bg-grey-100"></div>}

          <div className="w-full flex flex-row items-center gap-x-2">
            <Calendar className="w-6 h-6 text-neutral-500" />

            {!isMobile && (
              <p className="text-neutral-500 font-normal text-[16px]">
                Tanggal Pesan: {formatTanggalPanjang(data?.created_at)}
              </p>
            )}
            {isMobile && (
              <>
                <p className="text-neutral-500 font-normal text-[14px] md:text-[16px]">
                  Tanggal Pesan:
                </p>

                <p className="text-neutral-500 font-normal text-[14px] md:text-[16px]">
                  : {formatTanggalPanjang(data?.created_at)}
                </p>
              </>
            )}
          </div>
        </div>

        {!isMobile && status}
      </div>

      <div className="w-full h-[1px] bg-grey-100"></div>

      <div className="w-full flex flex-col gap-y-4">
        <div className="w-full flex flex-row items-center gap-x-3">
          <p className="text-primary-700 font-normal text-[20px]">
            Travel Rama Tranz
          </p>

          <Van className="w-6 h-6 text-primary-700" />
        </div>

        <div className="w-full flex md:flex-row flex-col gap-y-3">
          <div className="w-full flex flex-row items-center">
            <div className="w-full flex flex-col gap-y-1">
              <p className="text-neutral-500 font-normal text-[14px]">
                {formatTanggalPanjang(data?.tanggal)}
              </p>

              <p className="text-neutral-500 font-normal text-[16px]">
                {data?.kota_asal}
              </p>
            </div>

            <div className="w-full flex flex-row items-center pr-4 md:pr-0">
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
                {formatTanggalPanjang(data?.tanggal)}
              </p>

              <p className="text-neutral-500 font-normal text-[16px]">
                {data?.kota_tujuan}
              </p>
            </div>
          </div>

          <div className="w-full md:w-5/12">
            <Button
              onClick={() =>
                router.push(
                  `/profile/order-histories-travel/histories-travel-detail/${data?.kode_pesanan}`
                )
              }
              className="w-full border border-primary-700 text-primary-700 py-6">
              Detail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
