"use client";

import CardPassangerScreen from "@/components/pages/profile/card-history/travel/cardPassanger";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  formatCurrency,
  formatIndonesianDate,
  formatIndonesianTime,
  formatTanggalPanjang,
  formatTimeString,
} from "@/helpers";
import {
  createPaymentSProof,
  createTravelPaymentSProof,
  getOrderHistoryRentalDetail,
  getOrderHistoryTravelDetail,
} from "@/services/api";
import {
  HistoryRentalDetailInterface,
  PassengerTravelInterface,
  TravelDetailInterface,
} from "@/types/interface";
import { Download, Trash } from "@phosphor-icons/react";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

export default function HistoriesTravelDetailPage({
  params,
}: {
  params: { kode_pesanan: string };
}) {
  const router = useRouter();
  const dropRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentCode, setPaymentCode] = useState<string>("");
  const [detail, setDetail] = useState<TravelDetailInterface>();
  const [data, setData] = useState({
    bukti: "",
  });
  const [imageProof, setImageProof] = useState<File | null>(null);
  const [previewImageProof, setPreviewImageProof] = useState<string>("");

  useEffect(() => {
    const code = localStorage.getItem("kode_pembayaran");
    if (code) {
      setPaymentCode(code);
    }
  }, [paymentCode]);

  const fetchDetailHistoryRent = async (orderCode: string) => {
    try {
      const response = await getOrderHistoryTravelDetail(orderCode);

      setDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetailHistoryRent(params.kode_pesanan);
  }, [params.kode_pesanan]);

  let status;
  if (detail?.pembayaran?.status === "Sukses") {
    status = <p className="text-success-700">Pemesanan Sukses</p>;
  } else if (detail?.pembayaran?.status === "Gagal") {
    status = <p className="text-error-700">Pemesanan Gagal</p>;
  }

  const handleImageProofChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImageProof(file);
      setData({
        ...data,
        bukti: file.name,
      });
      const fileUrl = URL.createObjectURL(file);
      setPreviewImageProof(fileUrl);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDropImageProof = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const file = e.dataTransfer.files?.[0];
    if (file) {
      setImageProof(file);
      setData({
        ...data,
        bukti: file.name,
      });
      const fileUrl = URL.createObjectURL(file);
      setPreviewImageProof(fileUrl);
    }
  };

  const handleRemoveImageProof = () => {
    setImageProof(null);
    setPreviewImageProof("");
    setData({ ...data, bukti: "" });
  };

  const handleUploadImageProof = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();

    if (imageProof) {
      formData.append("bukti", imageProof);
    }

    formData.forEach((value, key) => {
      console.log(key, value);
    });

    try {
      const response = await createTravelPaymentSProof(
        detail?.pembayaran?.kode_pembayaran || "",
        formData
      );

      if (response.success === true) {
        setIsLoading(false);
        Swal.fire({
          icon: "success",
          title:
            "Berhasil upload bukti pembayaran, silahkan tunggu konfirmasi admin untuk mendapatkan invoice dan e-voucher!",
          timer: 2000,
          showConfirmButton: false,
          position: "center",
        });
        router.push(`/profile/order-histories-travel`);
      } else {
        Swal.fire({
          icon: "error",
          title: response.message,
          timer: 2000,
          showConfirmButton: false,
          position: "center",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRouterPayment = () => {
    localStorage.setItem("kode_pesanan", params.kode_pesanan);
    router.push(`/travel/available-schedule/bayar`);
  };

  return (
    <section className="flex flex-col gap-y-5 md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full flex flex-col mt-5 md:mt-32 gap-y-5">
        {detail && detail?.pembayaran?.kode_pembayaran !== null && (
          <form onSubmit={handleUploadImageProof}>
            <div className="w-full flex flex-col gap-y-3 border border-grey-100 rounded-lg shadow-md p-4">
              <div className="flex flex-col w-full h-full">
                <Label className="w-full text-xl">Upload Bukti Transfer</Label>

                <div className="w-full flex flex-col md:flex-row">
                  <div
                    ref={dropRef}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDropImageProof}
                    className={`w-full ${
                      data?.bukti || previewImageProof ? "md:w-8/12" : "w-full"
                    }  h-[100px] border-2 border-dashed rounded-xl mt-1 flex flex-col items-center justify-center`}>
                    <>
                      <input
                        type="file"
                        id="file-input-foto"
                        name="bukti"
                        accept="image/*"
                        onChange={handleImageProofChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="file-input-foto"
                        className="text-[16px] text-center text-neutral-600 p-2 md:p-4 font-light cursor-pointer">
                        Drag and drop file here or click to select file
                      </label>
                    </>
                  </div>

                  {(previewImageProof || data?.bukti) && (
                    <div className="relative md:ml-4 w-full mt-1">
                      <div className="border-2 border-dashed flex justify-center rounded-xl p-2">
                        <div className="w-full h-full">
                          <Image
                            src={previewImageProof || data?.bukti}
                            alt="Preview"
                            width={300}
                            height={300}
                            className="h-full rounded-xl p-4 md:p-4 w-full object-contain"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveImageProof}
                          className="absolute bg-none -top-0 -right-0 md:-top-0 md:-right-0 text-neutral-800 p-1">
                          <Trash />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full">
                <Button
                  type="submit"
                  disabled={isLoading ? true : false}
                  className="w-full bg-primary-700 hover:bg-primary-600 rounded-lg text-neutral-50">
                  {isLoading ? (
                    <Loader className="w-4 h-4 animate-spin" />
                  ) : (
                    "Upload"
                  )}
                </Button>
              </div>
            </div>
          </form>
        )}

        {detail &&
          detail?.pembayaran?.status === "Menunggu Pembayaran" &&
          detail?.pembayaran?.kode_pembayaran === null && (
            <div className="md:w-4/12 flex self-end">
              <Button
                onClick={handleRouterPayment}
                className="w-full bg-primary-700 hover:bg-primary-600 rounded-lg text-neutral-50">
                Lanjutkan Pembayaran
              </Button>
            </div>
          )}

        <div className="w-full rounded-lg flex px-5 flex-col border border-grey-100 shadow-md gap-y-3 p-4">
          {status}

          <div className="w-full grid grid-rows-5 gap-y-3">
            <div className="w-full grid grid-cols-2">
              <h5 className="text-primary-700 font-bold text-[26px]">Travel</h5>

              <p className="text-neutral-400">
                {detail && formatIndonesianDate(detail?.pesanan?.tanggal)}
              </p>
            </div>

            <div className="w-full grid grid-cols-2">
              <h5 className="text-neutral-400 font-normal text-[16px]">
                Nomor Pesanan
              </h5>

              <p className="text-neutral-700">
                {detail && detail?.pesanan?.kode_pesanan}
              </p>
            </div>

            <div className="w-full grid grid-cols-2">
              <h5 className="text-neutral-400 font-normal text-[16px]">
                Nama Pemesan
              </h5>

              <p className="text-neutral-700">
                {detail && detail?.pesanan?.nama}
              </p>
            </div>

            <div className="w-full grid grid-cols-2">
              <h5 className="text-neutral-400 font-normal text-[16px]">
                Sopir
              </h5>

              <p className="text-neutral-700">
                {detail && detail?.pesanan?.supir}
              </p>
            </div>

            <div className="w-full grid grid-cols-2">
              <h5 className="text-neutral-400 font-normal text-[16px]">
                Harga
              </h5>

              <p className="text-neutral-700">
                {detail && formatCurrency(Number(detail?.pembayaran?.nominal))}
              </p>
            </div>
          </div>

          {detail && detail?.pembayaran?.status === "Sukses" && (
            <div className="w-full grid grid-cols-2 gap-x-4 md:gap-x-16">
              <div className="w-full">
                <Button
                  onClick={() =>
                    (window.location.href = detail?.pembayaran?.link_tiket)
                  }
                  className="w-full flex gap-x-4 items-center bg-neutral-50 border border-grey-100 rounded-full shadow-md">
                  <Download className="w-5 h-5 text-primary-700" />

                  <p className="text-primary-700">E-Voucher</p>
                </Button>
              </div>

              <div className="w-full">
                <Button
                  onClick={() =>
                    (window.location.href = detail?.pembayaran?.link_invoice)
                  }
                  className="w-full flex gap-x-4 items-center bg-primary-700 border border-grey-100 rounded-full shadow-md">
                  <Download className="w-5 h-5 text-neutral-50" />

                  <p className="text-neutral-50">Invoice</p>
                </Button>
              </div>
            </div>
          )}
        </div>

        <h4 className="font-bold text-[24px] text-neutral-700">Perjalanan</h4>

        <div className="w-full rounded-lg flex px-5 flex-col border border-grey-100 shadow-md gap-y-3 p-4">
          <h4 className="text-neutral-700 font-bold text-[22px]">
            {detail && detail?.pesanan?.mobil}
          </h4>

          <div className="w-full flex flex-col gap-y-3">
            <div className="w-full grid grid-cols-2 gap-y-3">
              <div className="w-full grid grid-rows-2">
                <h5 className="text-neutral-400 font-normal text-[16px]">
                  Kota Asal
                </h5>

                <p className="text-neutral-700">
                  {detail && detail?.pesanan?.kota_asal}
                </p>
              </div>

              <div className="w-full grid grid-rows-2">
                <h5 className="text-neutral-400 font-normal text-[16px]">
                  Kota Tujuan
                </h5>

                <p className="text-neutral-700">
                  {detail && detail?.pesanan?.kota_tujuan}
                </p>
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-y-3">
              <div className="w-full grid grid-rows-2">
                <h5 className="text-neutral-400 font-normal text-[16px]">
                  Titik Antar
                </h5>

                <p className="text-neutral-700">
                  {detail && detail?.pesanan?.titik_antar}
                </p>
              </div>

              <div className="w-full grid grid-rows-2">
                <h5 className="text-neutral-400 font-normal text-[16px]">
                  Titik Jemput
                </h5>

                <p className="text-neutral-700">
                  {detail && detail?.pesanan?.titik_jemput}
                </p>
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-y-3">
              <div className="w-full grid grid-rows-2">
                <h5 className="text-neutral-400 font-normal text-[16px]">
                  Jam Keberangkatan
                </h5>

                <p className="text-neutral-700">
                  {detail && formatTimeString(detail?.pesanan?.jam_berangkat)}{" "}
                  WIB
                </p>
              </div>

              <div className="w-full grid grid-rows-2">
                <h5 className="text-neutral-400 font-normal text-[16px]">
                  Jam Tiba
                </h5>

                <p className="text-neutral-700">
                  {detail && formatTimeString(detail?.pesanan?.jam_tiba)} WIB
                </p>
              </div>
            </div>
          </div>
        </div>

        <h4 className="font-bold text-[24px] text-neutral-700">
          Data Penumpang
        </h4>

        <div className="w-full flex flex-col gap-y-3">
          {detail &&
            detail?.penumpang?.map(
              (item: PassengerTravelInterface, i: number) => {
                return <CardPassangerScreen key={i} item={item} />;
              }
            )}
        </div>
      </div>
    </section>
  );
}
