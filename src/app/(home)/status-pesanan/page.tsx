"use client";

import Button from "@/components/buttonCustom/ButtonCustom";
import Card from "@/components/ui/card/Card";
import { formatCurrency, formatDate, formatDateToTime } from "@/helpers";
import { getOrderTravelDetail } from "@/services/api";
import { OrderDetailResponseSuccess } from "@/types/travel";
import { Download } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useMemo, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function StatusPembayaran() {
  const router = useRouter();

  const [data, setData] = useState<{
    no_pembayaran: string;
    metode_pembayaran: string;
    tanggal_pembayaran: string;
    waktu: string;
    nominal: string;
    status: string;
    invoice_link: string;
    tiket_link: string;
  }>();

  const searchParams = useSearchParams();

  const KodePesanan = searchParams.get("kode_pesanan") || "";
  const Tipe = searchParams.get("tipe") || "";

  const getData = useMemo(async () => {
    if (Tipe === "") return router.back();

    if (Tipe === "travel") {
      const response = (await getOrderTravelDetail(
        KodePesanan
      )) as OrderDetailResponseSuccess;
      if (!response) return router.back();
      setData({
        waktu: formatDateToTime(
          new Date(response.data.pembayaran.expired_at || "")
        ),
        invoice_link: response.data.pembayaran.link_invoice,
        metode_pembayaran: response.data.pembayaran.metode,
        no_pembayaran: response.data.pembayaran.kode_pembayaran,
        nominal: formatCurrency(
          Number.parseFloat(response.data.pembayaran.nominal)
        ),
        status: response.data.pembayaran.status,
        tanggal_pembayaran: formatDate(
          new Date(response.data.pembayaran.created_at || "")
        ),
        tiket_link: response.data.pembayaran.link_tiket,
      });
    }
  }, [KodePesanan, Tipe, router]);

  return (
    <section className="flex flex-col w-full mt-32 container">
      <Card>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold text-center">Status Pembayaran</p>
          <div className="flex flex-row items-center p-5 gap-2 w-full bg-primary-700/10 justify-center rounded-md">
            <FaCheckCircle className="text-primary-700" size={24} />
            <span>Pemesanan Anda telah dikonfirmasi.</span>
          </div>
          {/*  */}
          <p className="text-xl font-semibold">Ringkasan Pemesanan</p>
          {/*  */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">No Pembayaran</p>
                <p className="font-semibold">{data?.no_pembayaran}</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Metode Pembayaran</p>
                <p className="font-semibold">{data?.metode_pembayaran}</p>
              </div>
            </div>
            <div className="w-full border-b" />
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Tanggal</p>
                <p className="font-semibold">{data?.tanggal_pembayaran}</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Waktu</p>
                <p className="font-semibold">{data?.waktu}</p>
              </div>
            </div>
            <div className="w-full border-b" />
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Jumlah Dibayarkan</p>
                <p className="font-semibold">{data?.nominal}</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-semibold">{data?.status}</p>
              </div>
            </div>
          </div>
          {data?.status === "sukses" && (
            <div className="flex flex-row items-center justify-center gap-4 text-sm md:text-base">
              <Button
                className="flex flex-row gap-2 items-center justify-center rounded-full px-6"
                variant="primary"
              >
                <Download />
                Invoice
              </Button>
              <Button
                className="flex flex-row gap-2 items-center justify-center rounded-full px-6"
                variant="secondary"
              >
                <Download />
                E-Tiket
              </Button>
            </div>
          )}
        </div>
      </Card>
    </section>
  );
}
