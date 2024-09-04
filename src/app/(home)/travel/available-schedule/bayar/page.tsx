"use client";

import PaymentMethods from "@/components/paymentMethod";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card/Card";
import { formatCurrency, formatDate, formatTimeString } from "@/helpers";
import {
  createPostPembayaranTravel,
  getAllPaymentMethods,
  getOrderTravelDetail,
} from "@/services/api";
import {
  useTravelActions,
  useTravelbookingPayload,
  useTravelPassenger,
  useTravelPemesan,
  useTravelSchedule,
  useTravelStepPayloadPayload,
} from "@/store/useTravelStore";
import {
  PaymentDetailInterface,
  PaymentMenthodsInterface,
} from "@/types/interface";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { OrderDetailResponseSuccess } from "@/types/travel";
import ButtonCustom from "@/components/buttonCustom/ButtonCustom";
import Countdown from "@/components/elements/countDown";
import Swal from "sweetalert2";
import { Loader } from "lucide-react";

export default function PageBayar() {
  const [payments, setPayments] = useState<PaymentMenthodsInterface>();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [tncCheck, setTncCheck] = useState(false);

  const { setStepTravelPayload } = useTravelActions();

  const KodePesanan = searchParams.get("kode_pesanan") || "";

  const [detailOrder, setDetailOrder] =
    useState<OrderDetailResponseSuccess["data"]>();

  const getDetailOrder = useMemo(async () => {
    const response = await getOrderTravelDetail(KodePesanan);

    if (!response.data) {
      router.replace("/");
      return;
    }
    setStepTravelPayload(3);
    setDetailOrder(response.data);
  }, [KodePesanan, router, setStepTravelPayload]);

  const handlePaymentMethodChange = (metode_id: number) => {
    setSelectedPaymentMethod(metode_id.toString());
  };

  const fetchPaymentMethods = async () => {
    try {
      const response = await getAllPaymentMethods();

      setPayments(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextStep = async () => {
    try {
      setIsLoading(true);
      const payload: any = {
        orderCode: KodePesanan,
        metode_id: selectedPaymentMethod,
      };

      console.log(payload);

      const response = await createPostPembayaranTravel(payload);

      console.log("Response :", response.data);

      if (!response.data) {
        console.error("Response Error :", response.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.message,
        });
        return;
      }
      if (response.data.payment_url) {
        router.replace(
          `/status-pesanan?kode_pesanan=${KodePesanan}&tipe=travel`
        );
        window.open(response.data.payment_url, "_blank");
      }
    } catch (error) {
      console.error("error m ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {/* <Countdown expiredAt={detailOrder?.pembayaran.expired_at || ""} /> */}
      <div className="flex flex-col gap-y-2">
        <p className="text-xl">Ringkasan Pesanan</p>
        <Card className="">
          <div className="flex flex-row items-center gap-x-2">
            <FaCheckCircle className="text-primary-700" size={24} />
            <span>
              Periksa data yang diinput untuk memastikan kebenaran dan
              kelengkapan sebelum melanjutkan ke langkah berikutnya.
            </span>
          </div>
        </Card>
      </div>
      {/* 2 */}
      <div className="flex flex-col gap-y-2">
        <p className="text-xl">Jadwal Keberangkatan</p>
        <Card className="">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Keberangkatan : </p>
                <p className="font-semibold">
                  {detailOrder?.pesanan.kota_asal}
                </p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Tujuan : </p>
                <p className="font-semibold">
                  {detailOrder?.pesanan?.kota_tujuan}
                </p>
              </div>
            </div>
            <div className="w-full border-b" />
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">
                  Tanggal dan Jam Berangkat
                </p>
                <p className="font-semibold">
                  {formatDate(new Date(detailOrder?.pesanan.tanggal || ""))} -{" "}
                  {formatTimeString(
                    detailOrder?.pesanan.jam_berangkat || "00:00:00"
                  )}
                </p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Jumlah Penumpang</p>
                <p className="font-semibold">
                  {detailOrder?.penumpang.length} Penumpang
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      {/* 3 */}
      {detailOrder?.penumpang.map((data, index) => (
        <div className="flex flex-col gap-y-2" key={data.kursi}>
          <p className="text-xl">Data Penumpang {index + 1}</p>
          <Card className="">
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex flex-row w-full items-center">
                <div className="w-[50%]">
                  <p className="text-sm text-gray-500">Nama</p>
                  <p className="font-semibold">{data.nama}</p>
                </div>
                <div className="w-[50%]">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold">{data.email || "-"}</p>
                </div>
              </div>
              <div className="w-full border-b" />
              <div className="flex flex-row w-full items-center">
                <div className="w-[50%]">
                  <p className="text-sm text-gray-500">Nomor Telepon</p>
                  <p className="font-semibold">{data.no_telp}</p>
                </div>
                <div className="w-[50%]">
                  <p className="text-sm text-gray-500">Alamat </p>
                  <p className="font-semibold">
                    {detailOrder.pesanan.titik_jemput}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}

      {/* 4 */}
      <div className="flex flex-col gap-y-2">
        <p className="text-xl">Metode Pembayaran</p>
        <PaymentMethods
          payments={
            payments as {
              payment_gateway?: PaymentDetailInterface[] | undefined;
              bank_transfer?: PaymentDetailInterface[] | undefined;
              cash?: PaymentDetailInterface[] | undefined;
            }
          }
          selectedPaymentMethod={Number(selectedPaymentMethod)}
          onPaymentMethodChange={handlePaymentMethodChange}
        />
      </div>
      {/* 5 */}
      <div className="flex flex-col gap-y-2">
        <p className="text-xl">Rincian Harga</p>
        <Card className="">
          <label className="flex flex-row items-center gap-2">
            <input
              type="checkbox"
              className="rounded-full"
              checked={tncCheck}
              onChange={(e) => setTncCheck(e.target.checked)}
            />
            <span>
              Saya Menyetujui{" "}
              <span className="text-primary-700">Syarat & Ketentuan</span> Rama
              Tranz
            </span>
          </label>
          <div className="flex flex-row items-center justify-between py-3 border-b">
            <p>Total Harga</p>
            <p className="text-primary-700 text-xl font-semibold">
              {formatCurrency(
                Number.parseFloat(detailOrder?.pembayaran.nominal || "0")
              )}
            </p>
          </div>
          <ButtonCustom
            className="w-full justify-start items-center flex"
            onClick={handleNextStep}
            disabled={
              !tncCheck || selectedPaymentMethod.trim() === "" || isLoading
            }
          >
            {isLoading ? (
              <Loader className="animate-spin" />
            ) : (
              "Lanjut Pembayaran"
            )}
          </ButtonCustom>
        </Card>
      </div>
    </div>
  );
}
