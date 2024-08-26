"use client";

import Stepper from "@/components/stepper/Stepper";
import Card from "@/components/ui/card/Card";
import { FaArrowRight } from "react-icons/fa6";
import React, { useState } from "react";
import Button from "@/components/ui/button/Button";
import InputSelect from "@/components/ui/input/InputSelect";
import { Bus, Dot, Minus, Search } from "lucide-react";
import DateInput from "@/components/dateInnput/DateInput";
import { Seat } from "@phosphor-icons/react";
import Image from "next/image";

export default function AvaliableSchedule() {
  const stepItem = [
    {
      id: 1,
      label: "Pilih Tiket",
    },
    {
      id: 2,
      label: "Isi Data",
    },
    {
      id: 3,
      label: "Bayar",
    },
    {
      id: 4,
      label: "Selesai",
    },
  ];

  const dataDummy = [
    {
      id: "1",
      label: "dummy 1",
    },
    {
      id: "2",
      label: "dummy 2",
    },
    {
      id: "3",
      label: "dummy 3",
    },
    {
      id: "4",
      label: "dummy 4",
    },
  ];

  const maxChair = 8;

  const chairList = Array.from({ length: maxChair }, (v, i) => ({
    label: `${i + 1}`,
    id: `${i + 1}`,
  }));

  const [positionStep, setPositionStep] = useState(1);
  const [ubahPencarian, setUbahPencarian] = useState(true);
  const [returnDateEnabled, setReturnDateEnabled] = useState(false);

  const [departureDate, setDepartureDate] = useState<Date>(new Date());

  const handleNextStep = () => {
    if (positionStep > stepItem.length) return;
    setPositionStep(positionStep + 1);
  };
  const handlePrevStep = () => {
    if (positionStep < 2) return;
    setPositionStep(positionStep - 1);
  };

  return (
    <section className="flex flex-col gap-5 md:w-full h-full md:mb-0 pb-80 container">
      <div className="mt-32 w-full p-2">
        <Stepper position={positionStep} item={stepItem} />
        {/* <div className="mt-20">
          <Button onClick={handlePrevStep}>prev</Button>
          <Button onClick={handleNextStep}>next</Button>
        </div> */}
      </div>
      <div className="w-full mt-10">
        <Card className="">
          <div className="flex flex-row font-manrope justify-between">
            <div className="flex flex-col gap-2">
              <p className="flex flex-row gap-2 font-semibold">
                Lampung <FaArrowRight /> Palembang
              </p>
              <p className="text-[12px] text-gray-500 ">
                Senin, 23 Februari 2024 - 1 kursi
              </p>
            </div>
            <Button
              className="bg-primary-700 hover:bg-primary-600 duration-300 text-white"
              onClick={() => setUbahPencarian(!ubahPencarian)}
            >
              Ubah Pencarian
            </Button>
          </div>
        </Card>
        {ubahPencarian && (
          <Card className="mt-5">
            <div className="flex flex-col gap-4 font-manrope justify-between">
              <span className="font-medium">Tiket Travel dan Antar-Jemput</span>
              <div className="flex flex-row gap-4 justify-between">
                <InputSelect
                  data={dataDummy}
                  label="Keberangkatan"
                  leadIcon={<Bus className="text-primary-700" />}
                />
                <InputSelect
                  data={dataDummy}
                  label="Tujuan"
                  leadIcon={<Bus className="text-primary-700" />}
                />
              </div>
              <div className="flex flex-row gap-4 items-end justify-between">
                <DateInput
                  value={departureDate}
                  setValue={setDepartureDate}
                  label="Tanggal Berangkat"
                  className="w-full"
                />
                <DateInput
                  value={departureDate}
                  setValue={setDepartureDate}
                  label={
                    <label className="flex flex-row gap-2 items-center">
                      <input
                        type="checkbox"
                        checked={returnDateEnabled}
                        onChange={(e) => setReturnDateEnabled(e.target.checked)}
                      />
                      Tanggal Pulang
                    </label>
                  }
                  disabled={!returnDateEnabled}
                  className="w-full"
                />
                <InputSelect
                  data={chairList}
                  label="Jumlah Kursi"
                  leadIcon={<Seat className="text-primary-700" />}
                  className="w-2/3"
                />
                <Button className="bg-primary-700 hover:bg-primary-600 duration-300 text-white flex flex-row items-center justify-center gap-4 h-12 rounded-full w-2/4">
                  <Search className="text-white" />
                  <span>Cari Tiket</span>
                </Button>
              </div>
            </div>
          </Card>
        )}
        <div className="flex flex-row mt-10 gap-5">
          {/* left */}
          <div className="flex flex-col w-[70%]">
            <Card>
              <div className="flex flex-col gap-5">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <span className="flex flex-row items-center gap-2">
                      Rama Tranz Type A <Minus className="" /> HIACE
                    </span>
                    <span className="text-primary-700 flex flex-row items-center">
                      <Dot /> Tersedia 5 Kursi
                    </span>
                  </div>
                  <Button className="h-fit" variant="secondary">
                    Detail Tiket
                  </Button>
                </div>
                <hr />
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                  <div className="flex flex-row gap-4 w-full items-center justify-between">
                    <p className="flex flex-col gap-2">
                      Bandar Lampung
                      <span className="text-gray-500">15:00</span>
                    </p>
                    <div className="flex flex-col items-center">
                      <p className="text-primary-700">8 Jam</p>
                      <div className="flex flex-row items-center gap-2">
                        <Image
                          src={`/assets/icons/neededs/icon_donat_active.svg`}
                          height={18}
                          width={18}
                          alt="donat"
                          className="z-[1]"
                        />
                        <div className="border-b border-dashed w-16" />
                        <Image
                          src={`/assets/icons/neededs/icon_donat_active.svg`}
                          height={18}
                          width={18}
                          alt="donat"
                          className="z-[1]"
                        />
                      </div>
                    </div>
                    <p className="flex flex-col gap-2">
                      Bandar Lampung
                      <span className="text-gray-500">15:00</span>
                    </p>
                  </div>
                  <div className="w-[1px] h-16 border-r hidden lg:block" />
                  <div className="flex flex-row gap-4 items-center justify-between w-full">
                    <p className="text-primary-700 font-bold text-xl">
                      Rp. 200.000{" "}
                      <span className="font-normal text-black">/kursi</span>
                    </p>
                    <Button>Pilih Kursi</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* right */}
          <div className="w-[30%]">
            <Card>
              <div className="flex flex-col gap-4">
                <p>Mau naik dari mana</p>
                <InputSelect
                  data={[]}
                  placeholder="Naik dari mana?"
                  leadIcon={<Bus />}
                  className="w-2/3"
                  value=""
                />
                <InputSelect
                  data={[]}
                  placeholder="Turun dimana?"
                  leadIcon={<Bus />}
                  className="w-2/3"
                  value=""
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
