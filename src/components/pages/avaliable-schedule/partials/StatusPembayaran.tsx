"use client";

import Button from "@/components/buttonCustom/ButtonCustom";
import Card from "@/components/ui/card/Card";
import { Download } from "lucide-react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function StatusPembayaran() {
  return (
    <section className="flex flex-col w-full">
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
                <p className="font-semibold">INV5678924OUI</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Metode Pembayaran</p>
                <p className="font-semibold">Bank Transfer</p>
              </div>
            </div>
            <div className="w-full border-b" />
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Tanggal</p>
                <p className="font-semibold">Senin, 23 Februari 2023</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Waktu</p>
                <p className="font-semibold">09:41 AM</p>
              </div>
            </div>
            <div className="w-full border-b" />
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Jumlah Dibayarkan</p>
                <p className="font-semibold">Rp. 200.000</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-semibold">Successful</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 text-sm md:text-base">
            <Button
              className="flex flex-row gap-2 items-center justify-center rounded-full px-6"
              variant="primary">
              <Download />
              Invoice
            </Button>
            <Button
              className="flex flex-row gap-2 items-center justify-center rounded-full px-6"
              variant="secondary">
              <Download />
              E-Tiket
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
