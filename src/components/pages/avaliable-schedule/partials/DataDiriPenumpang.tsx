"use client";
import ButtonCustom from "@/components/buttonCustom/ButtonCustom";
import Button from "@/components/buttonCustom/ButtonCustom";
import Card from "@/components/ui/card/Card";
import InputText from "@/components/ui/input/InputText";
import { stepItem } from "@/constants/rental";
import { formatCurrency, formatTimeString } from "@/helpers";
import {
  useTravelActions,
  useTravelbookingPayload,
  useTravelPassenger,
  useTravelPemesan,
  useTravelSchedule,
  useTravelStepPayloadPayload,
} from "@/store/useTravelStore";
import { Minus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronUp } from "react-icons/fa6";
import ModalSelectSeat from "../ModalSelectSeat";

export type DataDiriPenumpang = {};

export default function DataDiriPenumpang() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DataDiriPenumpang>();

  const [openDetailJadwal, setOpenDetailJadwal] = useState(true);
  const [openModalKursi, setOpenModalKursi] = useState(false);
  const [passengerIndex, setPassengerIndex] = useState(1);
  const [simpanPenumpangPertama, setSimpanPenumpangPertama] = useState(0);

  const { setStepTravelPayload, setPassenger, setPemesan } = useTravelActions();
  const travelSchedule = useTravelSchedule();
  const bookingPayload = useTravelbookingPayload();
  const passenger = useTravelPassenger();
  const pemesan = useTravelPemesan();

  const handleNextStep = () => {
    setStepTravelPayload(3);
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-col-reverse md:flex-row gap-4">
        {/* Left */}
        <Card className="w-full md:w-[60%]" header="Data Pemesan">
          <div className="flex flex-col gap-4 mt-4">
            <InputText
              label="Nama"
              placeholder="Masukan nama Anda"
              value={pemesan.nama}
              onChange={(e) => {
                setPemesan({ ...pemesan, nama: e.target.value });
              }}
            />
            <InputText
              label="No Identitas"
              placeholder="Masukan No  Identitas Anda"
              inputMode="numeric"
              value={pemesan.nik}
              onChange={(e) => {
                setPemesan({ ...pemesan, nik: e.target.value });
              }}
            />
            <InputText
              label="Email"
              placeholder="Masukan Email Anda"
              type="email"
              value={pemesan.email}
              onChange={(e) => {
                setPemesan({ ...pemesan, email: e.target.value });
              }}
            />
            <InputText
              label="Nomor Telefon"
              placeholder="+628"
              value={pemesan.no_telp}
              onChange={(e) => {
                setPemesan({ ...pemesan, no_telp: e.target.value });
              }}
            />
            <label className="flex flex-row items-center gap-x-2">
              <input
                type="checkbox"
                //  checked={simpanPenumpangPertama} onChange={(e)=> setSimpanPenumpangPertama(e.target.checked)}
                onChange={(e) => {
                  const passengerListTemp = passenger;
                  if (e.target.checked === true && passengerListTemp?.[0]) {
                    passengerListTemp[0].email = pemesan.email;
                    passengerListTemp[0].nama = pemesan.nama;
                    passengerListTemp[0].nik = pemesan.nik;
                    passengerListTemp[0].no_telp = pemesan.no_telp;
                  } else {
                    passengerListTemp[0].email = "";
                    passengerListTemp[0].nama = "Penumpang 1";
                    passengerListTemp[0].nik = "";
                    passengerListTemp[0].no_telp = "";
                  }

                  setPassenger(passengerListTemp);
                  setSimpanPenumpangPertama((prev) => prev + 1);
                }}
              />
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
              Rama Tranz Type A <Minus className="" />{" "}
              {travelSchedule?.carModel}
            </span>
            <span className="text-sm md:text-base">
              {formatTimeString(travelSchedule?.departureTime || "00:00:00")}
            </span>
          </div>
          {/* body */}
          {openDetailJadwal && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-row justify-between items-center mt-1">
                <span>Total Harga</span>{" "}
                <span className="text-primary-700 font-semibold text-lg">
                  {formatCurrency(travelSchedule?.price || 0)}
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
                    <p>{travelSchedule?.originCity}</p>
                    <p className="text-gray-500">{bookingPayload?.from}</p>
                    {/* <a href="#" className="font-semibold text-primary-700">
                      LIHAT MAPS
                    </a> */}
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>{travelSchedule?.destinationCity}</p>
                    <p className="text-gray-500">{bookingPayload?.to}</p>
                    {/* <a href="#" className="font-semibold text-primary-700">
                      LIHAT MAPS
                    </a> */}
                  </div>
                </div>
              </div>
              <p>
                {formatTimeString(travelSchedule?.departureTime || "00:00:00")}
              </p>
            </div>
          )}
        </Card>
      </div>
      {passenger.map((data, index) => {
        return (
          <Card
            key={
              index === 0
                ? data.no_kursi + simpanPenumpangPertama
                : data.no_kursi
            }
            className="w-full"
            header={
              <p className="px-6 py-3 bg-primary-700 text-white">
                Data Penumpang 1
              </p>
            }>
            <div className="flex flex-col gap-4 mt-4">
              <InputText
                label="Nama"
                placeholder="Masukan nama Anda"
                value={data.nama}
                onChange={(e) => {
                  const newPassengers = [...passenger];
                  newPassengers[index].nama = e.target.value;
                  setPassenger(newPassengers);
                }}
              />
              <InputText
                label="No Identitas"
                placeholder="Masukan No  Identitas Anda"
                inputMode="numeric"
                value={data.nik}
                onChange={(e) => {
                  const newPassengers = [...passenger];
                  newPassengers[index].nik = e.target.value;
                  setPassenger(newPassengers);
                }}
              />
              <InputText
                label="Email"
                placeholder="Masukan Email Anda"
                type="email"
                value={data.email}
                onChange={(e) => {
                  const newPassengers = [...passenger];
                  newPassengers[index].email = e.target.value;
                  setPassenger(newPassengers);
                }}
              />
              <InputText
                label="Nomor Telefon"
                placeholder="+628"
                value={data.no_telp}
                onChange={(e) => {
                  const newPassengers = [...passenger];
                  newPassengers[index].no_telp = e.target.value;
                  setPassenger(newPassengers);
                }}
              />
              <div className="mt-4 flex items-end justify-end">
                <ButtonCustom
                  onClick={() => {
                    setPassengerIndex(index);
                    setOpenModalKursi(true);
                  }}>
                  Kursi {data.no_kursi}
                </ButtonCustom>
              </div>
            </div>
          </Card>
        );
      })}

      <Button className="mt-4 w-[50%] mx-auto" onClick={handleNextStep}>
        Lanjut Pembayaran
      </Button>

      {/* Modals */}
      <ModalSelectSeat
        key={passengerIndex}
        visible={openModalKursi}
        setVisible={setOpenModalKursi}
        handleAfterSelectSeat={() => setOpenModalKursi(false)}
        passengerIndex={passengerIndex}
        selectAllSheats={false}
      />
    </section>
  );
}
