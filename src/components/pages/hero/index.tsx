"use client";

import { Bus, Hotel, Package, Search } from "lucide-react";
import {
  Calendar as CalendarIcons,
  Handbag,
  Seat,
} from "@phosphor-icons/react";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BranchesInterface, RouteInterface } from "@/types/interface";
import { seatsTotal } from "@/constants/main";
import { formatDate } from "@/helpers";
import {
  useTravelActions,
  useTravelbookingPayload,
} from "@/store/useTravelStore";
import DateInput from "@/components/dateInnput/DateInput";

export default function HeroScreen({
  data,
  branches,
}: {
  branches: BranchesInterface[];
  data: any;
}) {
  // const [form, setForm] = useState({
  //   from: "",
  //   to: "",
  //   jumlah_kursi: "",
  //   departureDate: "",
  //   returnDate: "",
  // });

  const bookingPayload = useTravelbookingPayload();

  const { setBookingPayload } = useTravelActions();

  const [returnDateEnabled, setReturnDateEnabled] = useState(false);
  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    undefined
  );
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);

  const router = useRouter();

  const saveToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const dateFormatDepartureDate = departureDate
    ? formatDate(new Date(departureDate))
    : undefined;

  const handleChangeKeberangkatan = (value: string) => {
    setBookingPayload({
      date: bookingPayload?.date || new Date(),
      to: bookingPayload?.to || "",
      seats: bookingPayload?.seats || 1,
      from: value,
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

  const handleToSearchTravel = () => {
    // saveToLocalStorage("from", form.from);
    // saveToLocalStorage("to", form.to);
    // saveToLocalStorage("jumlah_kursi", form.jumlah_kursi);
    // saveToLocalStorage(
    //   "departureDate",
    //   form.departureDate ? formatDate(new Date(form.departureDate)) : ""
    // );
    // saveToLocalStorage(
    //   "returnDate",
    //   form.returnDate ? formatDate(new Date(form.returnDate)) : ""
    // );

    router.push("/travel/available-schedule");
  };

  return (
    <section className="md:w-full md:h-screen justify-center items-center flex flex-col relative top-28 md:top-10 gap-y-24">
      <div className="w-full md:w-6/12 flex flex-col justify-center items-center py-3 md:py-8 px-3 md:px-4 rounded-md border bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20border-gray-100 border-neutral-50">
        <div className="grid grid-cols-5 gap-x-2 md:gap-x-12 mb-4 md:mb-0">
          {data?.map((item: any, i: number) => {
            let icon;
            let link;
            if (item?.soon === false) {
              if (item?.title === "Travel") {
                icon = (
                  <Bus className="w-5 h-5 text-primary-700 group-hover:text-neutral-50" />
                );
                link = "/travel";
              } else if (item?.title === "Paket") {
                icon = (
                  <Package className="w-5 h-5 text-primary-700 group-hover:text-neutral-50" />
                );
                link = "/package";
              } else if (item?.title === "Rental") {
                icon = (
                  <Bus className="w-5 h-5 text-primary-700 group-hover:text-neutral-50" />
                );
                link = "/rent";
              } else if (item?.title === "Hotel") {
                icon = (
                  <Hotel className="w-5 h-5 text-primary-700 group-hover:text-neutral-50" />
                );
                link = "/hotel";
              } else {
                icon = (
                  <Handbag className="w-5 h-5 text-primary-700 group-hover:text-neutral-50" />
                );
                link = "/oleh-oleh";
              }
            } else {
              if (item?.title === "Travel") {
                icon = <Bus className="w-5 h-5 text-neutral-200" />;
                link = "/travel";
              } else if (item?.title === "Paket") {
                icon = <Package className="w-5 h-5 text-neutral-200" />;
                link = "/package";
              } else if (item?.title === "Rental") {
                icon = <Bus className="w-5 h-5 text-neutral-200" />;
                link = "/rent";
              } else if (item?.title === "Hotel") {
                icon = <Hotel className="w-5 h-5 text-neutral-200" />;
                link = "/hotel";
              } else {
                icon = <Handbag className="w-5 h-5 text-neutral-200" />;
                link = "/oleh-oleh";
              }
            }

            return (
              <div
                key={i}
                className="grid grid-rows-1 md:justify-center w-full gap-y-3"
              >
                {item?.soon === false ? (
                  <Link
                    href={link}
                    className={`flex flex-col items-center gap-y-2`}
                  >
                    <div className="bg-neutral-50 group hover:bg-black hover:bg-opacity-20 rounded-full w-12 h-12 flex flex-row justify-center items-center">
                      {icon}
                    </div>

                    <p className="text-neutral-50 text-[12px] md:text-[14px]">
                      {item?.title}
                    </p>
                  </Link>
                ) : (
                  <div className={`flex flex-col items-center gap-y-2`}>
                    <div className="bg-neutral-50 rounded-full w-12 h-12 flex flex-row justify-center items-center">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>{icon}</TooltipTrigger>
                          <TooltipContent className="mb-7 bg-neutral-50 bg-opacity-70">
                            <p className="text-primary-700">Coming Soon</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <p className="text-neutral-50 text-[12px] md:text-[14px]">
                      {item?.title}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden md:w-10/12 md:flex md:flex-row gap-x-5 p-5">
        <div className="w-full flex flex-row">
          <div className="flex flex-row w-full gap-y-3">
            <div className="flex flex-col w-full gap-y-3">
              <p className="text-neutral-50">Keberangkatan</p>

              <div className="flex flex-row items-center w-full bg-neutral-50 border-l border-y border-outline_border-100 rounded-l-full py-2 px-3">
                <Bus className="w-6 h-6 text-primary-700" />

                <Select
                  onValueChange={handleChangeKeberangkatan}
                  value={bookingPayload?.from}
                >
                  <SelectTrigger className="w-full border-none outline-none text-[14px]">
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

                <div className="w-0.5 border h-4"></div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-y-3">
              <p className="text-neutral-50">Tujuan</p>

              <div className="flex flex-row items-center w-full bg-neutral-50 border-y border-outline_border-100 py-2 px-3">
                <Bus className="w-6 h-6 text-primary-700" />

                <Select
                  onValueChange={handleChangeJutuan}
                  value={bookingPayload?.to}
                >
                  <SelectTrigger className="w-full border-none outline-none text-[14px]">
                    <SelectValue placeholder="Pilih..." />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
                    {branches.map((item: BranchesInterface, i: number) => {
                      return (
                        <SelectItem key={i} value={item.nama}>
                          {item.nama}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>

                <div className="w-0.5 border h-4"></div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-y-3">
              <p className="text-neutral-50">Pilih Kursi</p>

              <div className="flex flex-row items-center w-full bg-neutral-50 border-r border-y border-outline_border-100 rounded-r-full py-2 px-3">
                <Seat className="w-6 h-6 text-primary-700" />

                <Select
                  onValueChange={handleChangeKursi}
                  value={bookingPayload?.seats.toString() || "1"}
                >
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
                          <SelectItem key={i} value={item.jumlah.toString()}>
                            {item.seat}
                          </SelectItem>
                        );
                      }
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row gap-x-3">
          <div className="flex flex-row w-full gap-y-3">
            <div className="flex flex-col w-full gap-y-3">
              <p className="text-neutral-50">Tanggal Berangkat</p>

              <div className="flex flex-row items-center w-full bg-neutral-50 border-l border-y border-outline_border-100 rounded-l-full py-2 px-3">
                <CalendarIcons className="w-6 h-6 text-primary-700" />

                <Popover>
                  <PopoverTrigger asChild>
                    <Button className="w-full justify-start text-left text-[14px]">
                      {bookingPayload?.date
                        ? format(bookingPayload?.date, "PPP")
                        : "Pilih Tanggal"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      classNames={{
                        months:
                          "bg-neutral-50 flex flex-row justify-center items-center p-4",
                        nav_button_previous:
                          "border border-primary-700 absolute left-1",
                        nav_button_next:
                          "border border-primary-700 absolute right-1",
                        day_today: "bg-primary-700 text-neutral-50",
                      }}
                      mode="single"
                      selected={bookingPayload?.date || new Date()}
                      onSelect={(date) => handleChangeDate(date||new Date())}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <div className="w-0.5 border h-4"></div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-y-3">
              <div className="flex flex-row w-full gap-x-3">
                <input
                  type="checkbox"
                  checked={returnDateEnabled}
                  onChange={(e) => setReturnDateEnabled(e.target.checked)}
                />

                <p className="text-neutral-50">Tanggal Pulang</p>
              </div>

              <div
                className={`flex flex-row items-center w-full bg-neutral-50 border-r border-y border-outline_border-100 rounded-r-full py-2 px-3 ${!returnDateEnabled ? "opacity-50" : ""}`}
              >
                <CalendarIcons
                  className={`w-6 h-6 ${returnDateEnabled ? "text-primary-700" : "text-outline_border-100"}`}
                />

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      className="w-full justify-start text-left text-[14px]"
                      disabled={!returnDateEnabled}
                    >
                      {returnDate ? format(returnDate, "PPP") : "Pilih Tanggal"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      classNames={{
                        months:
                          "bg-neutral-50 flex flex-row justify-center items-center p-4",
                        nav_button_previous:
                          "border border-primary-700 absolute left-1",
                        nav_button_next:
                          "border border-primary-700 absolute right-1",
                        day_today: "bg-primary-700 text-neutral-50",
                      }}
                      mode="single"
                      selected={returnDate}
                      onSelect={(date) => handleChangeDate(data)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-end">
            <Button
              onClick={handleToSearchTravel}
              className="rounded-2xl bg-neutral-50 px-6 py-7 border border-outline_border-100"
            >
              <Search className="text-primary-700" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
