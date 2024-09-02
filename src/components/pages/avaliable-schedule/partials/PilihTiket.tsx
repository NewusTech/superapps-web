import DateInput from "@/components/dateInnput/DateInput";
import MobilePencarianTiket from "@/components/pages/avaliable-schedule/MobilePencarianTiket";
import Button from "@/components/buttonCustom/ButtonCustom";
import Card from "@/components/ui/card/Card";
import InputSelect from "@/components/ui/input/InputSelect";
import { stepItem } from "@/constants/rental";
import {
  useTravelActions,
  useTravelbookingPayload,
  useTravelPointToPointPayload,
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
import React, { useEffect, useMemo, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import CarSeat10 from "@/components/carSeat/CarSeat10";
import ramatranz from "@/../../public/assets/images/neededs/ramatranz.png";
import Modal from "@/components/modal/Modal";
import { useRouter } from "next/navigation";
import ModalSelectSeat from "../ModalSelectSeat";
import {
  BranchesInterface,
  TitikJemputInterface,
  TravelScheduleInterface,
} from "@/types/interface";
import CardTravelScheduleOrder from "@/components/elements/cardElementScheduleTravel";
import {
  getAllBranches,
  getAllPointMasterJemput,
  getScheduleByRoute,
} from "@/services/api";
import { formatDate } from "@/helpers";
import { seatsTotal } from "@/constants/main";

export default function PilihTiket() {
  const [schedules, setSchedules] = useState<TravelScheduleInterface[]>([]);
  const [pointsJempuput, setPointsJempuut] = useState<TitikJemputInterface[]>([]);
  const [pointsAntar, setPointsAntar] = useState<TitikJemputInterface[]>([]);
  const [branches, setBranches] = useState<BranchesInterface[]>();

  const [ubahPencarian, setUbahPencarian] = useState(false);
  const [returnDateEnabled, setReturnDateEnabled] = useState(false);

  const [openModalKursi, setOpenModalKursi] = useState(false);

  const [departureDate, setDepartureDate] = useState<Date>(new Date());

  const pointToPoint = useTravelPointToPointPayload();
  const { setPointToPointPayload } = useTravelActions();

  const bookingPayload = useTravelbookingPayload();

  const { setStepTravelPayload, setBookingPayload } = useTravelActions();

  const router = useRouter();

  const maxChair = 8;

  const fetchTitikJemput = useMemo(async () => {
    try {
    const response = await getAllPointMasterJemput({cabang:bookingPayload?.from||""});

    setPointsJempuut(response.data);
    } catch (error) {
      setPointsJempuut([]);
      console.log(error);
    }
  },[bookingPayload?.from])
  const fetchTitikAntar = useMemo(async () => {
    try {
    const response = await getAllPointMasterJemput({cabang:bookingPayload?.to||""});
    setPointsAntar(response.data);
    console.log("Titik Antar ",response.data)
    } catch (error) {
      setPointsAntar([]);
      console.log(error);
    }
  },[bookingPayload?.to]);

  const fetchAllBranches = async () => {
    try {
      const response = await getAllBranches();
      console.log(response.data);
      setBranches(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetailTravel = () => {
    router.push("/travel/detail-travel");
  };

  useEffect(() => {
    fetchAllBranches();
  }, []);

  const fetchScheduleByRoute = async (
    from: string,
    to: string,
    date: string,
    seats: number
  ) => {
    try {
      const response = await getScheduleByRoute(from, to, date, seats);
      console.log(response.data);
      setSchedules(response.data);
    } catch (error) {
      setSchedules([]);
      console.log(error);
    }
  };

  const handleChangeKeberangkatan = (value: string) => {
    setBookingPayload({
      date: bookingPayload?.date || new Date(),
      from: value,
      to: bookingPayload?.to || "",
      seats: bookingPayload?.seats || 1,
    });
  };
  const handleChangeJutuan = (value: string) => {
    setBookingPayload({
      date: bookingPayload?.date || new Date(),
      from: bookingPayload?.from || "",
      to: value,
      seats: bookingPayload?.seats || 1,
    });
  };
  const handleChangeDate = (value: Date) => {
    setBookingPayload({
      date: value,
      from: bookingPayload?.from || "",
      to: bookingPayload?.to || "",
      seats: bookingPayload?.seats || 1,
    });
  };
  const handleChangeKursi = (value: string) => {
    setBookingPayload({
      date: bookingPayload?.date || new Date(),
      from: bookingPayload?.from || "",
      to: bookingPayload?.to || "",
      seats: Number.parseInt(value),
    });
  };

  useEffect(() => {
    if (
      bookingPayload &&
      bookingPayload.date &&
      bookingPayload.from &&
      bookingPayload?.to &&
      bookingPayload.seats
    ) {
      fetchScheduleByRoute(
        bookingPayload?.from,
        bookingPayload?.to,
        formatDate(bookingPayload?.date),
        bookingPayload?.seats
      );
    }
  }, [bookingPayload]);

  // if(schedules?.length < 1 || points.length < 1 ) return router.push("/travel")

  return (
    <section className="w-full mt-10">
      <Card className="">
        <div className="flex flex-row font-manrope justify-between">
          <div className="flex flex-col gap-2">
            <p className="flex flex-row items-center justify-start gap-2 font-semibold">
          {bookingPayload?.from || "Pilih Kota Asal"} <FaArrowRight /> {bookingPayload?.to || "Pilih Kota Tujuan"}
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
                <div className="flex flex-col w-full gap-y-3">
                  <p className="text-black">Keberangkatan</p>
                  <div className="flex flex-row items-center bg-neutral-50 border border-outline_border-100 rounded-full py-2 px-3">
                    <Bus className="w-6 h-6 text-primary-700" />

                    <Select
                      onValueChange={handleChangeKeberangkatan}
                      value={bookingPayload?.from}
                    >
                      <SelectTrigger className="border-none outline-none text-[14px]">
                        <SelectValue placeholder="Pilih..." />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
                        {branches &&
                          branches.map((item: BranchesInterface, i: number) => {
                            return (
                              <SelectItem key={i} value={item.nama}>
                                {item.nama}
                              </SelectItem>
                            );
                          })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-y-3">
                  <p className="text-black">Tujuan</p>
                  <div className="flex flex-row items-center bg-neutral-50 border border-outline_border-100 rounded-full py-2 px-3">
                    <Bus className="w-6 h-6 text-primary-700" />

                    <Select
                      onValueChange={handleChangeJutuan}
                      value={bookingPayload?.to}
                    >
                      <SelectTrigger className="border-none outline-none text-[14px]">
                        <SelectValue placeholder="Pilih..." />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
                        {branches &&
                          branches.map((item: BranchesInterface, i: number) => {
                            return (
                              <SelectItem key={i} value={item.nama}>
                                {item.nama}
                              </SelectItem>
                            );
                          })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-end justify-between">
                <DateInput
                  value={bookingPayload?.date || new Date()}
                  setValue={handleChangeDate}
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
                <div className="flex flex-col w-2/3 gap-y-3">
                  <p className="text-neutral-50">Pilih Kursi</p>

                  <div className="flex flex-row items-center w-2/3 bg-neutral-50 border border-outline_border-100 rounded-full py-2 px-3">
                    <Seat className="w-6 h-6 text-primary-700" />

                    <Select onValueChange={handleChangeKursi}>
                      <SelectTrigger className="w-full border-none outline-none text-[14px]">
                        <SelectValue placeholder="Pilih..." />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
                        {seatsTotal.map(
                          (
                            item: { id: number; seat: string; jumlah: number },
                            i: number
                          ) => {
                            return (
                              <SelectItem
                                key={i}
                                value={item.jumlah.toString()}
                              >
                                {item.seat}
                              </SelectItem>
                            );
                          }
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
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
          {schedules &&
            schedules?.map((item: TravelScheduleInterface, i: number) => {
              return <CardTravelScheduleOrder key={i} data={item} />;
            })}
            {!schedules && schedules < 1 && (
              <p className="w-full p-2 font-bold">Belum Ada Jadwal Yang Tersedia</p>
            )}
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
              <div className="flex flex-row items-center w-full rounded-lg bg-neutral-50 py-2 px-3">
                <Bus className="w-6 h-6 text-primary-700" />

                <Select
                  onValueChange={(value) =>
                    setPointToPointPayload({ ...pointToPoint, from: value })
                  }
                  value={pointToPoint?.from || ""}
                >
                  <SelectTrigger className="w-full border-none outline-none text-[14px]">
                    <SelectValue placeholder="Naik Dari Mana?" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
                    {pointsAntar &&
                      pointsAntar?.map((item: TitikJemputInterface, i: number) => {
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
                    setPointToPointPayload({
                      ...pointToPoint,
                      to: value,
                    })
                  }
                  value={pointToPoint?.to}
                >
                  <SelectTrigger className="w-full border-none outline-none text-[14px]">
                    <SelectValue placeholder="Turun Dimana?" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
                    {pointsJempuput &&
                      pointsJempuput?.map((item: TitikJemputInterface, i: number) => {
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
