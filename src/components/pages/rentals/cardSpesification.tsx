import { DetailCarInterface } from "@/types/interface";
import React from "react";

export default function CardSpesificationScreen({
  item,
}: {
  item: DetailCarInterface;
}) {
  return (
    <div className="w-full grid grid-cols-2 gap-x-5 gap-y-3">
      <div className="w-full grid grid-cols-3 items-center place-content-center border-b border-grey-100">
        <p>Mesin</p>
        <p className="text-center">:</p>
        <p>{item?.mesin}</p>
      </div>

      <div className="w-full grid grid-cols-3 items-center place-content-center border-b border-grey-100">
        <p>Nomor Polisi</p>
        <p className="text-center">:</p>
        <p>{item?.nopol}</p>
      </div>

      <div className="w-full grid grid-cols-3 items-center place-content-center border-b border-grey-100">
        <p>Bahan Bakar</p>
        <p className="text-center">:</p>
        <p>{item?.bahan_bakar}</p>
      </div>

      <div className="w-full grid grid-cols-3 items-center place-content-center border-b border-grey-100">
        <p>Transmisi</p>
        <p className="text-center">:</p>
        <p>{item?.transmisi}</p>
      </div>

      <div className="w-full grid grid-cols-3 items-center place-content-center border-b border-grey-100">
        <p>Kapasitas Bagasi</p>
        <p className="text-center">:</p>
        <p>{item?.kapasitas_bagasi}</p>
      </div>

      <div className="w-full grid grid-cols-3 items-center place-content-center border-b border-grey-100">
        <p>Jumlah Kursi</p>
        <p className="text-center">:</p>
        <p>{item?.jumlah_kursi}</p>
      </div>
    </div>
  );
}
