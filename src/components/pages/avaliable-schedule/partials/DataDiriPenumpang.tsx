import Button from "@/components/buttonCustom/ButtonCustom";
import Card from "@/components/ui/card/Card";
import InputText from "@/components/ui/input/InputText";
import { stepItem } from "@/constants/rental";
import { useTravelActions, useTravelStepPayloadPayload } from "@/store/useTravelStore";
import { Minus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronUp } from "react-icons/fa6";

export type DataDiriPenumpang = {};

export default function DataDiriPenumpang() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DataDiriPenumpang>();

  const [openDetailJadwal, setOpenDetailJadwal] = useState(true);

  const {setStepTravelPayload} = useTravelActions()

  const useTravelStep = useTravelStepPayloadPayload()

    const handleNextStep = () => {
        if (useTravelStep > stepItem.length) return;
        setStepTravelPayload(useTravelStep + 1);
        window.scrollTo(0, 0)
    };

  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-col-reverse md:flex-row gap-4">
        {/* Left */}
        <Card className="w-full md:w-[60%]" header="Data Pemesan">
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
            <label className="flex flex-row items-center gap-x-2">
              <input type="checkbox" />
              <p>Simpan sebagai Penumpang 1</p>
            </label>
          </div>
        </Card>
        {/* Right */}
        <Card className="w-full md:w-[40%] h-fit flex flex-col">
          {/* head */}
          <div className="flex flex-col gap-2 pb-4 border-b">
            <div className="flex flex-row justify-between items-center">
              <span>Jadwal Travel Berangkat</span>
              <button onClick={() => setOpenDetailJadwal(!openDetailJadwal)}>
                <FaChevronUp
                  className={`duration-300 ${openDetailJadwal ? "" : "rotate-[180deg]"}`}
                />
              </button>
            </div>
            <span className="flex flex-row items-center gap-2 text-sm md:text-base">
              Rama Tranz Type A <Minus className="" /> HIACE
            </span>
            <span className="text-sm md:text-base">15:00</span>
          </div>
          {/* body */}
          {openDetailJadwal && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-row justify-between items-center mt-1">
                <span>Total Harga</span>{" "}
                <span className="text-primary-700 font-semibold text-lg">
                  Rp. 200.000
                </span>
              </div>
              <div className="flex flex-row gap-4">
                {/* left */}
                <div className="flex flex-col items-center">
                  <Image
                    src={`/assets/icons/neededs/icon_donat_active.svg`}
                    height={18}
                    width={18}
                    alt="donat"
                    className="z-[1]"
                  />
                  <div className="h-[14rem] border-r border-primary-700 border-dashed" />
                  <Image
                    src={`/assets/icons/neededs/icon_donat_active.svg`}
                    height={18}
                    width={18}
                    alt="donat"
                    className="z-[1]"
                  />
                </div>
                {/* right */}
                <div className="flex flex-col items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <p>Jalan Jendral Sudirman</p>
                    <p className="text-gray-500">
                      l. Blora No.23, RT.2/RW.6, RT.2/RW.6, Dukuh Atas, Menteng,
                      Central Jakarta City, Jakarta 10310
                    </p>
                    <a href="#" className="font-semibold text-primary-700">
                      LIHAT MAPS
                    </a>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Jalan Soekarno Hatta</p>
                    <p className="text-gray-500">
                      ll. Blora No.23, RT.2/RW.6, RT.2/RW.6, Dukuh Atas,
                      Menteng, Central Jakarta City, Jakarta 10310
                    </p>
                    <a href="#" className="font-semibold text-primary-700">
                      LIHAT MAPS
                    </a>
                  </div>
                </div>
              </div>
              <p>23:00</p>
              <p>Palembang</p>
            </div>
          )}
        </Card>
      </div>
      <Card
        className="w-full"
        header={
          <p className="px-6 py-3 bg-primary-700 text-white">
            Data Penumpang 1
          </p>
        }
      >
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
        </div>
      </Card>
      <Button className="mt-4 w-[50%] mx-auto" onClick={handleNextStep}>Lanjut Pembayaran</Button>
    </section>
  );
}
