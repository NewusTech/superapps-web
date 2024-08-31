"use client";

import Card from "@/components/ui/card/Card";
import { FaCheckCircle } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Banknote } from "lucide-react";
import Button from "@/components/buttonCustom/ButtonCustom";
import {
  useTravelActions,
  useTravelStepPayloadPayload,
} from "@/store/useTravelStore";
import { stepItem } from "@/constants/rental";
import {
  PaymentDetailInterface,
  PaymentMenthodsInterface,
} from "@/types/interface";
import { getAllPaymentMethods } from "@/services/api";
import PaymentMethods from "@/components/paymentMethod";

export default function Bayar({
  firstTitle,
  secondTitle,
  firstSubTitle,
  secondSubTitle,
  keys,
}: {
  firstTitle: string;
  secondTitle: string;
  firstSubTitle: {
    name: string;
    email: string;
    nomor: string;
    etc: string;
    etc2?: string;
    etc3?: string;
  };
  secondSubTitle: {
    name: string;
    email: string;
    nomor: string;
    etc: string;
    etc2?: string;
    etc3?: string;
  };
  keys: boolean;
}) {
  const { setStepTravelPayload } = useTravelActions();

  const useTravelStep = useTravelStepPayloadPayload();
  const [payments, setPayments] = useState<PaymentMenthodsInterface>();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  const [data, setData] = useState({
    metode_id: "",
  });

  const fetchPaymentMethods = async () => {
    try {
      const response = await getAllPaymentMethods();

      setPayments(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  console.log(payments, "ini paymant");

  const handlePaymentMethodChange = (metode_id: number) => {
    setSelectedPaymentMethod(metode_id.toString());
    setData({ ...data, metode_id: metode_id.toString() });
  };

  const handleNextStep = () => {
    if (useTravelStep > stepItem.length) return;
    setStepTravelPayload(useTravelStep + 1);
    window.scrollTo(0, 0);
  };

  return (
    <section className="flex flex-col gap-4 text-sm md:text-base">
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
        <p className="text-xl">{firstTitle}</p>
        <Card className="">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">{firstSubTitle.name} : </p>
                <p className="font-semibold">Bandar Lampung</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">
                  {firstSubTitle.email} :{" "}
                </p>
                <p className="font-semibold">Palembang</p>
              </div>
            </div>
            <div className="w-full border-b" />
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">{firstSubTitle.nomor}</p>
                <p className="font-semibold">23, Februari 2024</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">{firstSubTitle.etc}</p>
                <p className="font-semibold">1 Penumpang</p>
              </div>
            </div>
            {keys === true ? (
              <>
                <div className="w-full border-b" />
                <div className="flex flex-row w-full items-center">
                  <div className="w-[50%]">
                    <p className="text-sm text-gray-500">
                      {firstSubTitle.etc2}
                    </p>
                    <p className="font-semibold">1 Penumpang</p>
                  </div>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </Card>
      </div>
      {/* 3 */}
      <div className="flex flex-col gap-y-2">
        <p className="text-xl">{secondTitle}</p>
        <Card className="">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">{secondSubTitle.name}</p>
                <p className="font-semibold">Irsyad Abi Izzulhaq</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">{secondSubTitle.email}</p>
                <p className="font-semibold">irsyadabiizzulhaq@gmail.com</p>
              </div>
            </div>
            <div className="w-full border-b" />
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">{secondSubTitle.nomor}</p>
                <p className="font-semibold">09877675768</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">{secondSubTitle.etc}</p>
                <p className="font-semibold">Jalan kebersihan Gedong Air</p>
              </div>
            </div>
            {keys === true ? (
              <>
                <div className="w-full border-b" />
                <div className="flex flex-row w-full items-center">
                  <div className="w-[50%]">
                    <p className="text-sm text-gray-500">
                      {secondSubTitle.etc2}
                    </p>
                    <p className="font-semibold">09877675768</p>
                  </div>
                  <div className="w-[50%]">
                    <p className="text-sm text-gray-500">
                      {secondSubTitle.etc2}
                    </p>
                    <p className="font-semibold">Jalan kebersihan Gedong Air</p>
                  </div>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </Card>
      </div>
      {/* 4 */}
      <div className="flex flex-col gap-y-2">
        <p className="text-xl">Metode Pembayaran</p>
        <PaymentMethods
          // payments={payments}
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
            <input type="checkbox" className="rounded-full" />
            <span>
              Saya Menyetujui{" "}
              <span className="text-primary-700">Syarat & Ketentuan</span> Rama
              Tranz
            </span>
          </label>
          <div className="flex flex-row items-center justify-between py-3 border-b">
            <p>Total Harga</p>
            <p className="text-primary-700 text-xl font-semibold">Rp.200.000</p>
          </div>
          <Button className="mt-4 w-full" onClick={handleNextStep}>
            Lanjut Pembayaran
          </Button>
        </Card>
      </div>
    </section>
  );
}
