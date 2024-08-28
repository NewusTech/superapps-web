"use client";

import ButtonCustom from "@/components/buttonCustom/ButtonCustom";
import Modal from "@/components/modal/Modal";
import Card from "@/components/ui/card/Card";
import { ExclamationMark, Seat, Suitcase } from "@phosphor-icons/react";
import { Bus, ChevronDown, Dot, Minus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ramatranz from "@/../../public/assets/images/neededs/ramatranz.png";
import CarSeat10 from "@/components/carSeat/CarSeat10";
import {
  useTravelActions,
  useTravelStepPayloadPayload,
} from "@/store/useTravelStore";
import { stepItem } from "@/constants/rental";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { TravelConditionDatas } from "@/constants/main";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DetailTravel() {
  const dummyImage = [
    {
      image: "/assets/images/neededs/travel/travel-1.png",
    },
    {
      image: "/assets/images/neededs/travel/travel-2.png",
    },
    {
      image: "/assets/images/neededs/travel/travel-3.png",
    },
    {
      image: "/assets/images/neededs/travel/travel-4.png",
    },
    {
      image: "/assets/images/neededs/travel/travel-5.png",
    },
  ];

  const dummySpesifikasi = [
    "8 Kursi",
    "Charger HP",
    "Televisi",
    "Full AC",
    "Snack",
  ];

  const tabDetail = [
    {
      id: 1,
      title: "Dekripsi",
    },
    {
      id: 2,
      title: "Rute Perjalanan",
    },
    {
      id: 3,
      title: "Syarat & Ketentuan",
    },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const [openModalKursi, setOpenModalKursi] = useState(false);

  const router = useRouter();

  const { setStepTravelPayload } = useTravelActions();

  const useTravelStep = useTravelStepPayloadPayload();

  const handleNextStep = () => {
    if (useTravelStep > stepItem.length) return;
    setOpenModalKursi(false);
    router.push("/travel/available-schedule");
    setStepTravelPayload(2);
    window.scrollTo(0, 0);
  };

  return (
    <section className="flex flex-col gap-5 md:w-full h-full md:mb-0 pb-80 px-1 md:px-[2rem] container">
      <div className="mt-32 w-full h-full min-h-svh p-2 flex flex-col">
        <div className="flex flex-row w-full h-[31rem] gap-4 overflow-hidden">
          {/* <div className="absolute w-full z-10 flex bg-red-300">
            <button className="flex flex-row items-center bg-white p-2 ml-auto h-fit w-fit">
              Lihat Semua Foto
            </button>
          </div> */}
          <div className="w-full md:w-1/2 h-[31rem]">
            <Image
              src={"/assets/images/neededs/travel/travel-1.png"}
              alt="Ramatranz"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className=" w-1/2 h-auto hidden md:grid grid-cols-1 lg:grid-cols-2 gap-2 items-stretch justify-between">
            {dummyImage.slice(0, -1).map((data) => (
              <div
                key={data.image}
                className="w-[20rem] h-[15rem] object-cover overflow-hidden "
              >
                <Image
                  src={data.image}
                  alt="Ramatranz"
                  width={300}
                  height={300}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
        <Card className="mt-10">
          <div className="flex flex-row gap-4">
            {tabDetail.map((data) => (
              <button
                key={data.id}
                className={cn([
                  "duration-300 p-2 md:p-4 bg-gray-500 border border-gray-500 text-white rounded-md text-sm md:text-base",
                  data.id != activeTab && "bg-white text-gray-500",
                ])}
                onClick={() => setActiveTab(data.id)}
              >
                {data.title}
              </button>
            ))}
          </div>
        </Card>

        <span className="flex flex-row items-center gap-2 text-sm md:text-base mt-10">
          Rama Tranz Type A <Minus className="" /> HIACE
        </span>
        <div className="flex flex-col lg:flex-row gap-6 mt-3">
          {/* left */}
          {activeTab === 1 && (
            <Card className="w-full lg:w-[70%]">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {dummySpesifikasi.map((data) => (
                  <span key={data} className="flex flex-row gap-2 items-center">
                    <Dot /> {data}
                  </span>
                ))}
              </div>
            </Card>
          )}
          {activeTab === 2 && (
            <Card className="w-full lg:w-[70%]">
              <div className="flex flex-col gap-4">
                <span className="flex flex-row items-center gap-2 text-sm md:text-base">
                  Rama Tranz Type A <Minus className="" /> HIACE
                </span>
                <p>15:00</p>
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
                        l. Blora No.23, RT.2/RW.6, RT.2/RW.6, Dukuh Atas,
                        Menteng, Central Jakarta City, Jakarta 10310
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
            </Card>
          )}
          {activeTab === 3 && (
            <Card className="flex flex-col gap-3">
              <Accordion type="single" collapsible>
                <AccordionItem
                  className="w-full h-full flex flex-col gap-y-1 border rounded-md"
                  value={`item-1`}
                >
                  <AccordionTrigger className="bg-white text-black rounded-lg text-[14px] md:text-[16px] text-start h-[50px] md:h-full pr-4">
                    <div className="w-full flex flex-row gap-x-3 px-3">
                      <p className="">Syarat & Ketentuan</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="md:text-start text-justify w-full h-full border border-grey-100 p-4 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam magnam impedit porro id esse expedita earum
                    consequuntur beatae dolore a sequi reiciendis, iste
                    eligendi. Tenetur cum nesciunt distinctio sed maiores nisi,
                    voluptatibus soluta iste eum veniam atque harum rem, error
                    saepe hic culpa magnam, doloremque et! Asperiores saepe,
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  className="w-full h-full flex flex-col gap-y-1 border rounded-md mt-2"
                  value={`item-2`}
                >
                  <AccordionTrigger className="bg-white text-black rounded-lg text-[14px] md:text-[16px] text-start h-[50px] md:h-full pr-4">
                    <div className="w-full flex flex-row gap-x-3 px-3">
                      <p className="">Keberangkatan</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="md:text-start text-justify w-full h-full border border-grey-100 p-4 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam magnam impedit porro id esse expedita earum
                    consequuntur beatae dolore a sequi reiciendis, iste
                    eligendi. Tenetur cum nesciunt distinctio sed maiores nisi,
                    voluptatibus soluta iste eum veniam atque harum rem, error
                    saepe hic culpa magnam, doloremque et! Asperiores saepe,
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  className="w-full h-full flex flex-col gap-y-1 border rounded-md mt-2"
                  value={`item-3`}
                >
                  <AccordionTrigger className="bg-white text-black rounded-lg text-[14px] md:text-[16px] text-start h-[50px] md:h-full pr-4">
                    <div className="w-full flex flex-row gap-x-3 px-3">
                      <p className="">Barang Bawaan</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="md:text-start text-justify w-full h-full border border-grey-100 p-4 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam magnam impedit porro id esse expedita earum
                    consequuntur beatae dolore a sequi reiciendis, iste
                    eligendi. Tenetur cum nesciunt distinctio sed maiores nisi,
                    voluptatibus soluta iste eum veniam atque harum rem, error
                    saepe hic culpa magnam, doloremque et! Asperiores saepe,
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          )}
          {/* right */}
          <Card className="w-full lg:w-[30%] h-fit flex flex-col gap-4 items-center justify-center">
            <span className="font-semibold text-lg w-full text-center">
              Rp. 200.000
            </span>
            <button
              className="flex flex-row gap-4 px-2 py-4 w-full items-center justify-center bg-white border border-gray-500 rounded-md"
              onClick={() => setOpenModalKursi(true)}
            >
              <Seat />
              Silahkan Pilih Kursi
              <ChevronDown />
            </button>
          </Card>
        </div>
      </div>

      {/* modals */}
      <Modal
        className="w-full md:w-1/2"
        visible={openModalKursi}
        setVisible={setOpenModalKursi}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={ramatranz}
              alt="Ramatranz"
              width={300}
              height={300}
              className="w-[5rem] h-[5rem] object-contain"
            />
            <span className="flex flex-row items-center gap-2 text-sm md:text-base">
              Rama Tranz Type A <Minus className="" /> HIACE
            </span>
            <span className="flex flex-row items-center gap-2 text-sm md:text-base">
              Senin, 23 Februari 2024 <Dot className="" /> 15:00 - 23:00
            </span>
            <div className="flex flex-row gap-5">
              <div className="flex flex-row gap-2">
                <div className="h-[1rem] w-[1rem] bg-primary-700 border border-primary-700" />
                Dipilih
              </div>
              <div className="flex flex-row gap-2">
                <div className="h-[1rem] w-[1rem] bg-white border border-gray-500" />
                Tersedia
              </div>
              <div className="flex flex-row gap-2">
                <div className="h-[1rem] w-[1rem] bg-gray-500 border-gray-500" />
                Tidak Tersedia
              </div>
            </div>
          </div>
          <div className="bg-dange_light text-danger_base p-2">
            WAJIB BELI UNTUK ANAK DIATAS USIA 7 TAHUN{" "}
          </div>
          <CarSeat10 />
          <ButtonCustom className="h-1/2" onClick={handleNextStep}>
            Pilih Kursi
          </ButtonCustom>
        </div>
      </Modal>
    </section>
  );
}
