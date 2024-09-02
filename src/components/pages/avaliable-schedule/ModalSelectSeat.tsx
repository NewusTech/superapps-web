import Modal from "@/components/modal/Modal";
import Image from "next/image";
import React, { useMemo } from "react";
import ramatranz from "@/../../public/assets/images/neededs/ramatranz.png";
import { Dot, Minus } from "lucide-react";
import CarSeat10 from "@/components/carSeat/CarSeat10";
import ButtonCustom from "@/components/buttonCustom/ButtonCustom";

export type ModalSelectSeatProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  handleAfterSelectSeat: () => void;
  index: number;
  sheats: number;
  selectAllSheats: boolean;
  passengerIndex:number
};

export default function ModalSelectSeat(props: ModalSelectSeatProps) {
  const {
    visible,
    setVisible,
    handleAfterSelectSeat,
    passengerIndex,
    sheats,
    selectAllSheats,
  } = props;


  // const getSeatTaken = useMemo(() => {
  //   let seatTakenTemp = traveSchedule?.seatTaken || [];

  //   passengerList.forEach((passenger, index) => {
  //     if (index !== passengerIndex) {
  //       seatTakenTemp = seatTakenTemp.concat(passenger.no_kursi);
  //     }
  //   });

  //   console.log(seatTakenTemp);

  //   return seatTakenTemp;
  // }, [passengerIndex, passengerList, traveSchedule?.seatTaken]);

  return (
    <Modal
      className="w-full md:w-1/2"
      visible={visible}
      setVisible={setVisible}
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
        <ButtonCustom className="h-1/2" onClick={handleAfterSelectSeat}>
          Pilih Kursi
        </ButtonCustom>
      </div>
    </Modal>
  );
}
