"use client";

import CopyButton from "@/components/elements/copyToClip";
import { Button } from "@/components/ui/button";
import { formatTanggalPanjang } from "@/helpers";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { HistoryRentalInterface } from "@/types/interface";
import { Calendar, Notepad, Van } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function OrderHistoryRentalCard({
  data,
}: {
  data: HistoryRentalInterface;
}) {
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
  } else if (data?.status === "Gagal") {
    status = (
      <div className="w-full md:w-4/12 rounded-lg flex items-center justify-center py-3 bg-error-400">
        <p className="text-error-700 text-center">Gagal</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-y-5 border border-grey-100 rounded-lg p-4">
      <div className="w-full flex flex-col md:flex-row gap-y-3">
        {isMobile && status}

        <div className="w-full grid grid-rows-2 md:flex flex-col md:flex-row md:gap-x-3 gap-y-2">
          <div className="w-full flex flex-row items-center gap-x-2">
            <Notepad className="w-6 h-6 text-neutral-500" />

            <div className="w-full grid grid-cols-3 md:flex flex-row items-center gap-x-2">
              {!isMobile && (
                <p className="text-neutral-500 font-normal text-[16px]">
                  No Pemesan: {data?.kode_pembayaran}
                </p>
              )}

              {isMobile && (
                <>
                  <p className="text-neutral-500 font-normal text-[14px] md:text-[16px]">
                    No Pemesan
                  </p>

                  <p className="text-neutral-500 col-span-2 font-normal text-[14px] md:text-[16px]">
                    : {data?.kode_pembayaran}
                  </p>
                </>
              )}

              {!isMobile && <CopyButton textToCopy={data?.kode_pembayaran} />}
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
            Rental Rama Tranz
          </p>

          <Van className="w-6 h-6 text-primary-700" />
        </div>

        <div className="w-full flex flex-col md:flex-row gap-y-3">
          <div className="w-full flex flex-row md:grid grid-cols-4">
            <div className="w-full flex flex-col gap-y-1">
              <p className="text-neutral-500 font-normal text-[14px]">Mobil</p>

              <p className="text-neutral-500 font-normal text-[16px]">
                {data?.mobil_type}
              </p>
            </div>

            {!isMobile && (
              <div className="w-full col-span-2 flex flex-col gap-y-2">
                <p className="text-neutral-500 font-normal text-[14px]">
                  Tanggal Sewa
                </p>

                <p className="text-neutral-500 font-normal text-[16px]">
                  {formatTanggalPanjang(data?.tanggal_awal_sewa)} -{" "}
                  {formatTanggalPanjang(data?.tanggal_akhir_sewa)}
                </p>
              </div>
            )}

            <div className="w-full flex flex-col gap-y-2">
              <p className="text-neutral-500 font-normal text-[14px]">
                Area Sewa
              </p>

              <p className="text-neutral-500 font-normal text-[16px]">
                {data?.area}
              </p>
            </div>
          </div>

          {isMobile && (
            <div className="w-full col-span-2 flex flex-col gap-y-2">
              <p className="text-neutral-500 font-normal text-[14px]">
                Tanggal Sewa
              </p>

              <p className="text-neutral-500 font-normal text-[16px]">
                {formatTanggalPanjang(data?.tanggal_awal_sewa)} -{" "}
                {formatTanggalPanjang(data?.tanggal_akhir_sewa)}
              </p>
            </div>
          )}

          <div className="w-full md:w-5/12">
            <Button
              onClick={() =>
                router.push(
                  `/profile/order-histories-rental/histories-rental-detail/${data?.kode_pembayaran}`
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
