import Card from "@/components/ui/card/Card";
import { FaCheckCircle } from "react-icons/fa";
import React from "react";
import { Banknote } from "lucide-react";
import Button from "@/components/buttonCustom/ButtonCustom";
import { useTravelActions, useTravelStepPayloadPayload } from "@/store/useTravelStore";
import { stepItem } from "@/constants/rental";

export default function Bayar() {


  const {setStepTravelPayload} = useTravelActions()

  const useTravelStep = useTravelStepPayloadPayload()

    const handleNextStep = () => {
        if (useTravelStep > stepItem.length) return;
        setStepTravelPayload(useTravelStep + 1);
        window.scrollTo(0, 0)
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
        <p className="text-xl">Jadwal Travel Keberangkatan</p>
        <Card className="">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Keberangkatan : </p>
                <p className="font-semibold">Bandar Lampung</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Tujuan : </p>
                <p className="font-semibold">Palembang</p>
              </div>
            </div>
            <div className="w-full border-b" />
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">
                  Tanggal dan Jam Berangkat
                </p>
                <p className="font-semibold">23, Februari 2024</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Jumlah Penumpang</p>
                <p className="font-semibold">1 Penumpang</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      {/* 3 */}
      <div className="flex flex-col gap-y-2">
        <p className="text-xl">Data Penumpang</p>
        <Card className="">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Nama Penumpang</p>
                <p className="font-semibold">Irsyad Abi Izzulhaq</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">irsyadabiizzulhaq@gmail.com</p>
              </div>
            </div>
            <div className="w-full border-b" />
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">No Handphone</p>
                <p className="font-semibold">09877675768</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">Alamat</p>
                <p className="font-semibold">Jalan kebersihan Gedong Air</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      {/* 4 */}
      <div className="flex flex-col gap-y-2">
        <p className="text-xl">Metode Pembayaran</p>
        <Card className="">
          <label className="flex flex-row gap-2 border-b py-3">
            <input type="radio" name="payment" id="payment" />
            <span>Payment Gateway (gopay,Q-ris)</span>
            <div className="ml-auto">
              <Banknote />
            </div>
          </label>
          <label className="flex flex-row gap-2 border-b py-3">
            <input type="radio" name="payment" id="payment" />
            <span>Transfrer BRI</span>
            <div className="ml-auto">
              <Banknote />
            </div>
          </label>
        </Card>
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
          <Button className="mt-4 w-full" onClick={handleNextStep}>Lanjut Pembayaran</Button>
        </Card>
      </div>
    </section>
  );
}
