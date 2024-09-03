"use client";

import Modal from "@/components/modal/Modal";
import Card from "@/components/ui/card/Card";
import { Seat } from "@phosphor-icons/react";
import { ChevronDown, Dot, Minus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useTravelActions } from "@/store/useTravelStore";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { CgMenuGridO } from "react-icons/cg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ModalSelectSeat from "@/components/pages/avaliable-schedule/ModalSelectSeat";
import { useMediaQuery } from "@/hooks/useMediaQuery";

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
  const [openModalDetailImage, setOpenModalDetailImage] = useState(false);
  const [openModalViewAllImage, setOpenModalViewAllImage] = useState(false);
  const [detailImageActive, setDetailImageActive] = useState(
    "/assets/images/neededs/travel/travel-1.png"
  );

  const router = useRouter();

  const isDesktop = useMediaQuery("(min-width: 1020px)");

  const displayCard = isDesktop ? 5 : 3;

  const { setStepTravelPayload } = useTravelActions();

  const handleNextStep = () => {
    setOpenModalKursi(false);
    router.push("/travel/available-schedule");
    setStepTravelPayload(2);
    window.scrollTo(0, 0);
  };

  const handleOnClickIamge = (img: string) => {
    setDetailImageActive(img);
    setOpenModalDetailImage(true);
  };

  return (
    <section className="flex flex-col gap-5 md:w-full h-full md:mb-0 pb-80 px-1 md:px-[2rem]">
      <div className="mt-32 w-full h-full min-h-svh p-2 flex flex-col">
        <div className="flex flex-row w-full h-[31rem] gap-4 overflow-hidden">
          <div className="w-full md:w-1/2 h-[31rem] cursor-pointer ">
            <Image
              src={"/assets/images/neededs/travel/travel-1.png"}
              alt="Ramatranz"
              width={300}
              height={300}
              className="w-full h-full object-cover"
              onClick={() => handleOnClickIamge(dummyImage[0].image)}
            />
          </div>

          <div className=" w-1/2 h-[100%] hidden md:grid grid-rows-2 grid-cols-1 lg:grid-cols-2 gap-2 items-center content-between justify-between">
            {dummyImage.slice(1, displayCard).map((data) => (
              <div
                key={data.image}
                className="w-[50%%] h-[100%] overflow-hidden cursor-pointer"
              >
                <Image
                  src={data.image}
                  alt="Ramatranz"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  onClick={() => handleOnClickIamge(data.image)}
                />
              </div>
            ))}
          </div>
          <div className="absolute w-[90%] h-[29rem] z-10 flex pointer-events-none">
            <button
              className="flex flex-row gap-2 items-center bg-white p-2 ml-auto mt-auto h-fit w-fit pointer-events-auto"
              onClick={() => setOpenModalViewAllImage(true)}
            >
              <CgMenuGridO className="text-black" /> Lihat Semua Foto
            </button>
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

      {/* modal pilih kursi */}
      <ModalSelectSeat
        passengerIndex={1}
        selectAllSheats={false}
        visible={openModalKursi}
        setVisible={setOpenModalKursi}
        handleAfterSelectSeat={handleNextStep}
      />
      {/* modal lihat foto */}
      <Modal
        visible={openModalDetailImage}
        setVisible={setOpenModalDetailImage}
        className="h-1/2 w-full"
      >
        <Image
          src={detailImageActive}
          alt="Ramatranz"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </Modal>
      <Modal
        visible={openModalViewAllImage}
        setVisible={setOpenModalViewAllImage}
        className="w-full h-full overflow-auto"
      >
        <div className="flex flex-col gap-2">
          {dummyImage.map((data) => (
            <div
              key={data.image}
              className="w-full h-[15rem] overflow-hidden cursor-pointer"
            >
              <Image
                src={data.image}
                alt="Ramatranz"
                width={300}
                height={300}
                className="w-full h-full object-cover"
                onClick={() => handleOnClickIamge(data.image)}
              />
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
}
