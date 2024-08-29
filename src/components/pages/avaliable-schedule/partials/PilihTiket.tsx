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
import { Seat } from "@phosphor-icons/react";
import { Bus, Dot, Minus, Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import CarSeat10 from "@/components/carSeat/CarSeat10";
import ramatranz from "@/../../public/assets/images/neededs/ramatranz.png";
import Modal from "@/components/modal/Modal";
import { useRouter } from "next/navigation";

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

export default function PilihTiket() {
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

  const useTravelStep = useTravelStepPayloadPayload();

  const handleNextStep = () => {
    if (useTravelStep > stepItem.length) return;
    setOpenModalKursi(false);
    setStepTravelPayload(useTravelStep + 1);
    window.scrollTo(0, 0);
  };

  const handlePilihKursi = () => {
    setOpenModalKursi(true);
  };

  const handleDetailTravel = ()=>{
    router.push("/travel/detail-travel")
  }

  return (
    <section className="w-full mt-10">
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
          {dataDummy.map((d) => (
            <Card key={d.id}>
              <div className="flex flex-col gap-5 text-sm md:text-base">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <span className="flex flex-row items-center gap-2 text-sm md:text-base">
                      Rama Tranz Type A <Minus className="" /> HIACE
                    </span>
                    <span className="text-primary-700 flex flex-row items-center">
                      <Dot /> Tersedia 5 Kursi
                    </span>
                  </div>
                  <Button className="h-fit" variant="secondary" onClick={handleDetailTravel}>
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
                    <Button className="h-fit" onClick={handlePilihKursi}>
                      Pilih Kursi
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        {/* right */}
        <div className="w-[100%] md:w-[30%] pr-2 md:px-0 bg-white z-[2] md:relative md:bottom-auto md:block fixed bottom-[6.5rem] md:right-auto ">
          <Card
            className="bg-no-repeat bg-cover bg-left-bottom"
            style={{
              backgroundImage: `url('/assets/images/neededs/splash.jpg')`,
            }}
          >
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Mau naik dan turun dari mana</p>
              <InputSelect
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
              />
            </div>
          </Card>
        </div>
      </div>

      <Modal
        className="w-1/2"
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
          <Button className="h-1/2" onClick={handleNextStep}>
            Pilih Kursi
          </Button>
        </div>
      </Modal>
    </section>
  );
}
