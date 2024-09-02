import DateInput from "@/components/dateInnput/DateInput";
import MobilePencarianTiket from "@/components/pages/avaliable-schedule/MobilePencarianTiket";
import Button from "@/components/buttonCustom/ButtonCustom";
import Card from "@/components/ui/card/Card";
import InputSelect from "@/components/ui/input/InputSelect";
import { stepItem } from "@/constants/rental";
import {
  useTravelActions,
  useTravelStepPayloadPayload,
} from "@/store/useTravelStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Seat, Van } from "@phosphor-icons/react";
import { Bus, Dot, Minus, Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import CarSeat10 from "@/components/carSeat/CarSeat10";
import ramatranz from "@/../../public/assets/images/neededs/ramatranz.png";
import Modal from "@/components/modal/Modal";
import { useRouter } from "next/navigation";
import ModalSelectSeat from "../ModalSelectSeat";
import {
  TitikJemputInterface,
  TravelScheduleInterface,
} from "@/types/interface";
import CardTravelScheduleOrder from "@/components/elements/cardElementScheduleTravel";

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

export default function PilihTiket({
  schedules,
  points,
}: {
  schedules: TravelScheduleInterface[];
  points: TitikJemputInterface[];
}) {
  const maxChair = 8;
  const chairList = Array.from({ length: maxChair }, (v, i) => ({
    label: `${i + 1}`,
    id: `${i + 1}`,
  }));

  const router = useRouter();

  const [ubahPencarian, setUbahPencarian] = useState(false);
  const [returnDateEnabled, setReturnDateEnabled] = useState(false);

  const [openModalKursi, setOpenModalKursi] = useState(false);

  const [departureDate, setDepartureDate] = useState<Date>(new Date());

  const { setStepTravelPayload } = useTravelActions();

  const handleNextStep = () => {
    setOpenModalKursi(false);
    setStepTravelPayload(2);
    window.scrollTo(0, 0);
  };

  const handlePilihKursi = () => {
    setOpenModalKursi(true);
  };

  const handleDetailTravel = () => {
    router.push("/travel/detail-travel");
  };

  return (
    <section className="w-full mt-10">
      <Card className="">
        <div className="flex flex-row font-manrope justify-between">
          <div className="flex flex-col gap-2">
            <p className="flex flex-row items-center justify-center gap-2 font-semibold">
              Lampung <FaArrowRight /> Palembang
            </p>
            <p className="text-[12px] text-gray-500 ">
              Senin, 23 Februari 2024 - 1 kursi
            </p>
          </div>
          <Button
            className="bg-primary-700 hover:bg-primary-600 duration-300 text-white"
            onClick={() => setUbahPencarian(!ubahPencarian)}>
            Ubah Pencarian
          </Button>
        </div>
      </Card>
      <div className="hidden lg:block">
        {/* pencarian */}
        {ubahPencarian && (
          <Card className="mt-5">
            <div className="flex flex-col gap-4 font-manrope justify-between">
              <span className="font-medium">Tiket Travel dan Antar-Jemput</span>
              <div className="flex flex-row gap-4 justify-between">
                <InputSelect
                  data={dataDummy}
                  label="Keberangkatan"
                  leadIcon={<Bus className="text-primary-700" />}
                  value={"-"}
                />
                <InputSelect
                  data={dataDummy}
                  label="Tujuan"
                  leadIcon={<Bus className="text-primary-700" />}
                  value={"-"}
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
                  prefix="Kursi"
                  leadIcon={<Seat className="text-primary-700" />}
                  className="w-2/3"
                  value={"-"}
                />
                <Button className="bg-primary-700 hover:bg-primary-600 duration-300 text-white flex flex-row items-center justify-center gap-4 h-12 rounded-full w-2/4">
                  <Search className="text-white" />
                  <span>Cari Tiket</span>
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
      {/* Mobile ubah pencarian */}
      <div className="block lg:hidden mt-5">
        {ubahPencarian && <MobilePencarianTiket />}
      </div>
      <div className="flex flex-row mt-10 gap-5">
        {/* left */}
        <div className="flex flex-col w-full md:w-[70%] gap-4">
          {schedules?.map((item: TravelScheduleInterface, i: number) => {
            return <CardTravelScheduleOrder key={i} data={item} />;
          })}
        </div>
        {/* right */}
        <div className="w-[100%] md:w-[30%] pr-2 md:px-0 bg-white z-[2] md:relative md:bottom-auto md:block fixed bottom-[6.5rem] md:right-auto ">
          <Card
            className="bg-no-repeat bg-cover bg-left-bottom"
            style={{
              backgroundImage: `url('/assets/images/neededs/splash.jpg')`,
            }}>
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Mau naik dan turun dari mana</p>
              {/* <InputSelect
                data={dataDummy}
                placeholder="Naik dari mana?"
                leadIcon={<Bus />}
                className="w-full"
                value={"-"}
              />
              <InputSelect
                data={dataDummy}
                placeholder="Turun dimana?"
                leadIcon={<Bus />}
                className="w-full"
                value={"-"}
              /> */}
              <div className="flex flex-row items-center w-full rounded-lg bg-neutral-50 py-2 px-3">
                <Bus className="w-6 h-6 text-primary-700" />

                <Select
                  onValueChange={(value) =>
                    localStorage.setItem("naik", value)
                  }>
                  <SelectTrigger className="w-full border-none outline-none text-[14px]">
                    <SelectValue placeholder="Naik Dari Mana?" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
                    {points.map((item: TitikJemputInterface, i: number) => {
                      return (
                        <SelectItem key={i} value={item.id.toString()}>
                          {item.nama}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-row items-center w-full bg-neutral-50 rounded-lg py-2 px-3">
                <Bus className="w-6 h-6 text-primary-700" />

                <Select
                  onValueChange={(value) =>
                    localStorage.setItem("turun", value)
                  }>
                  <SelectTrigger className="w-full border-none outline-none text-[14px]">
                    <SelectValue placeholder="Turun Dimana?" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
                    {points.map((item: TitikJemputInterface, i: number) => {
                      return (
                        <SelectItem key={i} value={item.id.toString()}>
                          {item.nama}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </div>
      </div>
      {/* Modal Select Seat */}
      {/* <ModalSelectSeat
        visible={openModalKursi}
        setVisible={setOpenModalKursi}
        handleAfterSelectSeat={handleNextStep}
      /> */}
    </section>
  );
}
