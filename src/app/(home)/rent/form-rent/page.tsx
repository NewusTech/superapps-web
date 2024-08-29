"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid, FreeMode } from "swiper/modules";
import Card from "@/components/ui/card/Card";
import { Minus } from "lucide-react";
import InputText from "@/components/ui/input/InputText";
import InputArea from "@/components/ui/input/InputArea";
import InputSelect from "@/components/ui/input/InputSelect";
import DateInput from "@/components/dateInnput/DateInput";
import ButtonCustom from "@/components/buttonCustom/ButtonCustom";

export default function FormRental() {
  const [detailImageActive, setDetailImageActive] = useState(
    "/assets/images/neededs/travel/travel-1.png"
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  const [departureDate, setDepartureDate] = useState<Date>(new Date());

  const dummyImageRent = [
    {
      image: "/assets/images/neededs/about-image-1.png",
    },
    {
      image: "/assets/images/neededs/about-image-2.png",
    },
    {
      image: "/assets/images/neededs/about-image-3.png",
    },
    {
      image: "/assets/images/neededs/about-image-1.png",
    },
    {
      image: "/assets/images/neededs/about-image-2.png",
    },
    {
      image: "/assets/images/neededs/about-image-3.png",
    },
  ];

//   const handleMouseDown = (event: React.MouseEvent) => {
//     const slider = scrollRef.current;
//     if (slider) {
//       slider.style.cursor = "grabbing";
//       slider.style.scrollBehavior = "unset";
//       const startX = event.pageX - slider.offsetLeft;
//       const scrollLeft = slider.scrollLeft;

//       const mouseMoveHandler = (moveEvent: MouseEvent) => {
//         const x = moveEvent.pageX - slider.offsetLeft;
//         const walk = (x - startX) * 1; // scroll-fast
//         slider.scrollLeft = scrollLeft - walk;
//       };

//       const mouseUpHandler = () => {
//         slider.style.cursor = "grab";
//         slider.style.removeProperty("scrollBehavior");
//         window.removeEventListener("mousemove", mouseMoveHandler);
//         window.removeEventListener("mouseup", mouseUpHandler);
//       };

//       window.addEventListener("mousemove", mouseMoveHandler);
//       window.addEventListener("mouseup", mouseUpHandler);
//     }
//   };

  return (
    <section className="flex flex-col gap-5 md:w-full h-full md:mb-0 pb-80 px-1 md:px-[2rem] container">
      <div className="mt-32 w-full h-full min-h-svh p-2 flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row w-full gap-4 items-start justify-between">
          {/* Left */}
          <div className="flex flex-col w-full lg:w-1/2 gap-4">
            <div className="w-full h-[21rem] cursor-pointer ">
              <Image
                src={detailImageActive}
                alt="Ramatranz"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="grid grid-flow-col gap-4 h-[8rem] w-full overflow-x-auto cursor-grab"
              ref={scrollRef}
            //   onMouseDown={handleMouseDown}
            >
              {dummyImageRent.map((data) => (
                <div
                  key={data.image}
                  className="w-[15rem] h-full overflow-hidden cursor-pointer"
                >
                  <Image
                    src={data.image}
                    alt="Ramatranz"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                    onClick={() => setDetailImageActive(data.image)}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="flex flex-col gap-4 justify-between w-full lg:w-1/2 h-[30rem]">
            <Card className="flex flex-col gap-4 text-lg">
              <p className="text-xl font-bold p-2 border-b mb-7">
                Toyota Hiace Premio
              </p>
              <p className="text-gray-500">
                Nikmati berbagai fitur andalan Rama Trans dengan fasilitas
                modern, seperti kursi yang nyaman, AC, dan hiburan di dalam bus,
                yang membuka jalan bagi petualangan tak terlupakan dan solusi
                mobilitas yang lancar.
              </p>
            </Card>
            <Card className="flex flex-col gap-4">
              <p className="text-xl font-bold p-2 border-b mb-7">
                Spesifikasi - Toyota Hiace Premio:
              </p>
              <div className="flex flex-row gap-2">
                {/* left */}
                <div className="flex flex-col w-1/2 gap-3">
                  <div className="flex flex-row border-b p-1 justify-between">
                    <span className="text-gray-500">Body</span>
                    <span className="font-bold">:</span>
                    <span>Mini Bus</span>
                  </div>
                  <div className="flex flex-row border-b p-1 justify-between">
                    <span className="text-gray-500">Body</span>
                    <span className="font-bold">:</span>
                    <span>Mini Bus</span>
                  </div>
                  <div className="flex flex-row border-b p-1 justify-between">
                    <span className="text-gray-500">Body</span>
                    <span className="font-bold">:</span>
                    <span>Mini Bus</span>
                  </div>
                </div>
                {/* right */}
                <div className="flex flex-col w-1/2 gap-3">
                  <div className="flex flex-row border-b p-1 justify-between">
                    <span className="text-gray-500">Body</span>
                    <span className="font-bold">:</span>
                    <span>Mini Bus</span>
                  </div>
                  <div className="flex flex-row border-b p-1 justify-between">
                    <span className="text-gray-500">Body</span>
                    <span className="font-bold">:</span>
                    <span>Mini Bus</span>
                  </div>
                  <div className="flex flex-row border-b p-1 justify-between">
                    <span className="text-gray-500">Body</span>
                    <span className="font-bold">:</span>
                    <span>Mini Bus</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        {/* form penyewa */}
        <Card className="w-full" header="Data Pemesan">
          <div className="flex flex-col gap-4 mt-4">
            <InputText label="Nama" placeholder="Masukan nama Anda" />
            <InputText
              label="No Identitas"
              placeholder="Masukan No  Identitas Anda"
              inputMode="numeric"
            />
            <InputText
              label="Email"
              placeholder="Masukan Email Anda"
              type="email"
            />
            <InputText label="Nomor Telefon" placeholder="+628" />

            <InputArea
              label="Alamat"
              placeholder="Masukan alamat lengkap Anda"
            />
          </div>
        </Card>
        {/* form Detail Sewa & Rental Mobil */}
        <Card className="w-full" header="Detail Sewa & Rental Mobil">
          <div className="flex flex-col gap-4 mt-4">
            <InputSelect
              data={[]}
              value={""}
              label="Durasi Sewa"
              placeholder=""
              className="rounded-md"
            />
            <InputSelect
              data={[]}
              value={""}
              label="Area Sewa"
              placeholder=""
              className="rounded-md"
            />
            <DateInput
              value={departureDate}
              setValue={setDepartureDate}
              label="Tanggal Mulai Sewa"
              className="w-full rounded-md"
            />
            <DateInput
              value={departureDate}
              setValue={setDepartureDate}
              label="Tanggal Selesai Sewa"
              className="w-full rounded-md"
              disabled
            />
            <InputArea
              label="Alamat Penjemputan"
              placeholder="Masukan alamat lengkap Anda"
            />
          </div>
        </Card>
        {/* Detail */}
        <Card className="" header="Rincian Harga">
          <div className="flex flex-col gap-4">
            <label className="flex flex-row items-center gap-2">
              <input type="checkbox" className="rounded-full" />
              <span>
                Saya Menyetujui{" "}
                <span className="text-primary-700">Syarat & Ketentuan</span>{" "}
                Rama Tranz
              </span>
            </label>
            <div className="p-3 bg-dange_light rounded-md flex flex-col w-full text-danger_base">
              <p>Catatan:</p>
              <p className="text-sm">
                Penyewa bertanggung jawab atas biaya makan dan akomodasi untuk
                pengemudi.
              </p>
            </div>
            <div className="flex flex-row items-center justify-between py-3 border-b">
              <p>Total Harga</p>
              <p className="text-primary-700 text-xl font-semibold">
                Rp.200.000
              </p>
            </div>
            <ButtonCustom className="mt-4 w-full">
              Lanjut Pembayaran
            </ButtonCustom>
          </div>
        </Card>
      </div>
    </section>
  );
}
