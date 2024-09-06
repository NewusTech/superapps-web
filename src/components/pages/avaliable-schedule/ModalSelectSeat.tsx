"use client";

import Modal from "@/components/modal/Modal";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import ramatranz from "@/../../public/assets/images/neededs/ramatranz.png";
import { Dot, Minus } from "lucide-react";
import CarSeat10 from "@/components/carSeat/CarSeat10";
import ButtonCustom from "@/components/buttonCustom/ButtonCustom";
import {
  useTravelActions,
  useTravelPassenger,
  useTravelSchedule,
} from "@/store/useTravelStore";
import { PassengerSeat } from "@/types/travel";

export type ModalSelectSeatProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  handleAfterSelectSeat?: () => void;
  selectAllSheats: boolean;
  passengerIndex: number;
  seats?: number;
};

export default function ModalSelectSeat(props: ModalSelectSeatProps) {
  const {
    visible,
    setVisible,
    handleAfterSelectSeat,
    passengerIndex,
    selectAllSheats = false,
    seats = 1,
  } = props;

  const { setPassenger } = useTravelActions();

  const [selectedSeats, setSelectedSeat] = useState<string[]>([]);
  const passengerList = useTravelPassenger();
  const traveSchedule = useTravelSchedule();

  const getSeatTaken = useMemo(() => {
    let seatTakenTemp = traveSchedule?.seatTaken || [];

    passengerList.forEach((passenger, index) => {
      if (index !== passengerIndex) {
        seatTakenTemp = seatTakenTemp.concat(passenger.no_kursi);
      }
    });

    return seatTakenTemp;
  }, [passengerIndex, passengerList, traveSchedule]);

  const handleSelectSeat = (seatNumber: string) => {
    const limit = seats;
    if (selectedSeats.find((seats) => seats === seatNumber)) {
      setSelectedSeat(selectedSeats.filter((seats) => seats !== seatNumber));
    } else {
      if (selectedSeats.length < limit) {
        setSelectedSeat([...selectedSeats, seatNumber]);
      }
    }
  };

  const handleAfterPilihKursi = () => {
    const passengerListTemp: PassengerSeat[] = passengerList;
    if (!selectAllSheats) {
      if (passengerListTemp?.[passengerIndex]) {
        passengerListTemp[passengerIndex].no_kursi = selectedSeats[0];
      }
    } else {
      selectedSeats
        .sort((a, b) => parseFloat(a) - parseFloat(b))
        .map((numberSheat, index) => {
          passengerListTemp[index] = {
            nama: "Penumpang " + (index + 1),
            no_telp: "",
            no_kursi: numberSheat,
            nik: "",
            email: "",
          };
        });
    }

    setPassenger(passengerListTemp);
    handleAfterSelectSeat!();
  };

  useEffect(() => {
    setSelectedSeat([]);
  }, [seats]);

  return (
    <Modal
      className="w-full md:w-1/2"
      visible={visible}
      setVisible={setVisible}>
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
        <CarSeat10
          filled={getSeatTaken}
          selected={selectedSeats.map((item) => item)}
          onSeatPress={handleSelectSeat}
        />
        <ButtonCustom
          className="h-1/2"
          onClick={handleAfterPilihKursi}
          disabled={selectedSeats.length !== seats}>
          Pilih Kursi
        </ButtonCustom>
      </div>
    </Modal>
  );
}
