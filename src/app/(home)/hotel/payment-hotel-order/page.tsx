"use client";

import Bayar from "@/components/pages/avaliable-schedule/partials/Bayar";
import React from "react";

export default function PaymentHotelOrderPage() {
  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full flex flex-col mt-32 px-20">
        <Bayar
          keys={false}
          firstTitle="Detail Penginapan"
          secondTitle="Data Penginap"
          firstSubTitle={{
            name: "Hotel",
            email: "Kamar & Hari",
            nomor: "Tanggal Check In",
            etc: "Tanggal Check Out",
          }}
          secondSubTitle={{
            name: "Nama Penginap",
            email: "Email",
            nomor: "Nomor Telepon",
            etc: "Alamat",
          }}
        />
      </div>
    </section>
  );
}
