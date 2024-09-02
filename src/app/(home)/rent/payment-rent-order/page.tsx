"use client";

import Bayar from "@/components/pages/avaliable-schedule/partials/Bayar";
import { getAllPaymentMethods } from "@/services/api";
import { PaymentMenthodsInterface } from "@/types/interface";
import React, { useEffect, useState } from "react";

export default function PaymentRentOrderPage() {
  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full flex flex-col mt-32 px-20">
        <Bayar
          keys={true}
          firstTitle="Detail Informasi Penyewa"
          secondTitle="Detail Sewa Mobil"
          firstSubTitle={{
            name: "Nama Penyewa",
            email: "Nomor Induk Kependudukan",
            nomor: "Email",
            etc: "Nomor Telepon",
            etc2: "Alamat",
          }}
          secondSubTitle={{
            name: "Durasi Sewa",
            email: "Area Sewa",
            nomor: "Rute Sewa",
            etc: "Alamat Penjemputan",
            etc2: "Tanggal Mulai Sewa",
            etc3: "Tanggal Selesai Sewa",
          }}
        />
      </div>
    </section>
  );
}
