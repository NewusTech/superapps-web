import ButtonCustom from "@/components/buttonCustom/ButtonCustom";
import Card from "@/components/ui/card/Card";
import { Banknote } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function RentalPayment() {
  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full flex flex-col gap-y-20 pb-12 mt-32 container">
        <div className="flex flex-col gap-4 text-sm md:text-base">
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
            <p className="text-xl">Data Informasi Penyewa</p>
            <Card className="">
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="flex flex-row w-full items-center">
                  <div className="w-[50%]">
                    <p className="text-sm text-gray-500">Nama Penyewa : </p>
                    <p className="font-semibold">Irsyad Abi Izzulhaq</p>
                  </div>
                  <div className="w-[50%]">
                    <p className="text-sm text-gray-500">No Indentitas : </p>
                    <p className="font-semibold">183101393131121</p>
                  </div>
                </div>
                <div className="w-full border-b" />
                <div className="flex flex-row w-full items-center">
                  <div className="w-[50%]">
                    <p className="text-sm text-gray-500">Email :</p>
                    <p className="font-semibold">irsyadabiizzulhaq@gmail.com</p>
                  </div>
                  <div className="w-[50%]">
                    <p className="text-sm text-gray-500">No Handphone : </p>
                    <p className="font-semibold">08967354545454</p>
                  </div>
                </div>
                <div className="w-full border-b" />
                <div className="flex flex-col w-full justify-start items-start">
                  <p className="text-sm text-gray-500">Alamat :</p>
                  <p className="font-semibold">
                    Jalan kebersihan Gg. Lisna no 88
                  </p>
                </div>
              </div>
            </Card>
          </div>
          {/* 3 */}
          <div className="flex flex-col gap-y-2">
            <p className="text-xl">Detail Sewa Mobil</p>
            <Card className="">
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="flex flex-row w-full items-center">
                  <div className="w-[50%]">
                    <p className="text-sm text-gray-500">Durasi Sewa</p>
                    <p className="font-semibold">Bandar Lampung</p>
                  </div>
                  <div className="w-[50%]">
                    <p className="text-sm text-gray-500">Area Sewa</p>
                    <p className="font-semibold">Palembang</p>
                  </div>
                </div>
                <div className="w-full border-b" />
                <div className="flex flex-row w-full items-center">
                  <div className="w-[50%]">
                    <p className="text-sm text-gray-500">Rute Sewa</p>
                    <p className="font-semibold">
                      23, Feb 2024, Pukul 15:00 Wib
                    </p>
                  </div>
                  <div className="w-[50%]">
                    <p className="text-sm text-gray-500">Alamat Penjemputan</p>
                    <p className="font-semibold">
                      Jalan kebersihan Gg. Lisna no 88
                    </p>
                  </div>
                </div>
                <div className="w-full border-b" />
                <div className="flex flex-row w-full items-center">
                  <div className="w-[50%]">
                    <p className="text-sm text-gray-500">Tanggal Mulai Sewa</p>
                    <p className="font-semibold">
                      23, Feb 2024, Pukul 15:00 Wib
                    </p>
                  </div>
                  <div className="w-[50%]">
                    <p className="text-sm text-gray-500">
                      Tanggal Selesai Sewa
                    </p>
                    <p className="font-semibold">
                      26, Feb 2024, Pukul 15:00 Wib
                    </p>
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
                  <span className="text-primary-700">Syarat & Ketentuan</span>{" "}
                  Rama Tranz
                </span>
              </label>
              <div className="flex flex-row items-center justify-between py-3 border-b">
                <p>Total Harga</p>
                <p className="text-primary-700 text-xl font-semibold">
                  Rp.200.000
                </p>
              </div>
              <Link href={"/rent/status"}>
                <ButtonCustom className="mt-4 w-full">
                  Lanjut Pembayaran
                </ButtonCustom>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
