"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Seat, Van, Calendar as CalendarIcons } from "@phosphor-icons/react";
import { BranchesInterface, TitikJemputInterface } from "@/types/interface";
import {
  useTravelActions,
  useTravelbookingPayload,
} from "@/store/useTravelStore";
import { seatsTotal } from "@/constants/main";
import { useRouter } from "next/navigation";
import { isBeforeToday } from "@/helpers";

export type RoundTripFormProps = {
  branch: BranchesInterface[];
  pointsJempuput: TitikJemputInterface[];
  pointsAntar: TitikJemputInterface[];
};

export default function RoundTripForm(props: RoundTripFormProps) {
  const { branch, pointsAntar, pointsJempuput } = props;

  const { setBookingPayload, setPointToPointPayload } = useTravelActions();
  const bookingPayload = useTravelbookingPayload();

  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    undefined
  );

  const router = useRouter();

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

  const handleCariTiket = () => {
    router.push("/travel/available-schedule");
  };

  return (
    <div className="bg-neutral-50 flex flex-col w-11/12 min-h-[520px] rounded-3xl border border-grey-100 absolute -top-1">
      <div>
        <Tabs
          defaultValue="Sekali Jalan"
          className="w-full flex flex-col justify-center self-center items-center"
        >
          <TabsList className="w-11/12 flex flex-row px-5 py-6 mt-4 border-b border-grey-100 pb-10 rounded-none">
            <TabsTrigger
              className="data-[state=active]:bg-primary-700 data-[state=active]:text-neutral-50 w-full py-3"
              value="Sekali Jalan"
            >
              Sekali Jalan
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-primary-700 data-[state=active]:text-neutral-50 w-full py-3"
              value="Pulang Pergi"
              disabled
            >
              Pulang Pergi
            </TabsTrigger>
          </TabsList>

          <TabsContent
            className="flex flex-col w-full px-4 gap-y-10 mt-8"
            value="Sekali Jalan"
          >
            <div className="w-full flex flex-col gap-y-3">
              <div className="w-full flex flex-col border-b border-grey-100">
                <h6>Keberangkatan</h6>

                <div className="w-full flex flex-row items-center gap-x-2">
                  <Van className="w-6 h-6 text-primary-700" />

                  <Select
                    onValueChange={handleChangeKeberangkatan}
                    value={bookingPayload?.from}
                  >
                    <SelectTrigger className="w-full border-none outline-none text-[14px]">
                      <SelectValue placeholder="Pilih..." />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
                      {branch.map((item: BranchesInterface, i: number) => {
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

              <div className="w-full flex flex-col border-b border-grey-100">
                <h6>Tujuan</h6>

                <div className="w-full flex flex-row items-center gap-x-2">
                  <Van className="w-6 h-6 text-primary-700" />

                  <Select
                    onValueChange={handleChangeJutuan}
                    value={bookingPayload?.to}
                  >
                    <SelectTrigger className="w-full border-none outline-none text-[14px]">
                      <SelectValue placeholder="Pilih..." />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
                      {branch.map((item: BranchesInterface, i: number) => {
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

              <div className="w-full flex flex-col border-b border-grey-100">
                <h6>Jumlah Kursi</h6>

                <div className="w-full flex flex-row items-center gap-x-2">
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

                  <div className="w-0.5 border h-4"></div>
                </div>
              </div>

              <div className="w-full flex flex-col border-b border-grey-100">
                <h6>Tanggal Berangkat</h6>

                <div className="w-full flex flex-row items-center gap-x-2">
                  <CalendarIcons className="w-6 h-6 text-primary-700" />

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="w-full justify-start text-left text-[14px]">
                        {bookingPayload?.date
                          ? format(bookingPayload.date, "PPP")
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
                          day_today: `${bookingPayload?.date === new Date()?"bg-primary-700 text-neutral-50":"bg-primary-500 text-neutral-50"}`,
                          day_selected:"bg-primary-700 text-neutral-50",
                          day_disabled: "text-neutral-400 cursor-not-allowed bg-gray-200",
                        }}
                        mode="single"
                        selected={bookingPayload?.date}
                        onSelect={(date) =>
                          handleChangeDate(date || new Date())
                        }
                        disabled={(date) => isBeforeToday(date)} // Disable tanggal sebelum hari ini
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <div className="w-0.5 border h-4"></div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <Button
                className="bg-primary-700 py-6 text-[18px] w-full text-neutral-50"
                onClick={handleCariTiket}
              >
                Cari Tiket
              </Button>
            </div>
          </TabsContent>

          <TabsContent
            value="Pulang Pergi"
            className="flex flex-col w-full px-4 gap-y-10 mt-0"
          >
            <div className="w-full flex flex-col gap-y-3">
              <div className="w-full flex flex-col border-b border-grey-100">
                <h6>Keberangkatan</h6>

                <div className="w-full flex flex-row items-center gap-x-2">
                  <Van className="w-6 h-6 text-primary-700" />

                  <Select>
                    <SelectTrigger className="w-full border-none outline-none text-[14px]">
                      <SelectValue placeholder="Pilih..." />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="w-0.5 border h-4"></div>
                </div>
              </div>

              <div className="w-full flex flex-col border-b border-grey-100">
                <h6>Tujuan</h6>

                <div className="w-full flex flex-row items-center gap-x-2">
                  <Van className="w-6 h-6 text-primary-700" />

                  <Select>
                    <SelectTrigger className="w-full border-none outline-none text-[14px]">
                      <SelectValue placeholder="Pilih..." />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="w-0.5 border h-4"></div>
                </div>
              </div>

              <div className="w-full flex flex-col border-b border-grey-100">
                <h6>Jumlah Kursi</h6>

                <div className="w-full flex flex-row items-center gap-x-2">
                  <Seat className="w-6 h-6 text-primary-700" />

                  <Select>
                    <SelectTrigger className="w-full border-none outline-none text-[14px]">
                      <SelectValue placeholder="Pilih..." />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="w-0.5 border h-4"></div>
                </div>
              </div>

              <div className="w-full flex flex-col border-b border-grey-100">
                <h6>Tanggal Berangkat oy</h6>

                <div className="w-full flex flex-row items-center gap-x-2">
                  <CalendarIcons className="w-6 h-6 text-primary-700" />

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="w-full justify-start text-left text-[14px]">
                        {bookingPayload?.date
                          ? format(bookingPayload.date, "PPP")
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
                        selected={bookingPayload?.date}
                        onSelect={(date) =>
                          handleChangeDate(date || new Date())
                        }
                        disabled={(date) => isBeforeToday(date)} // Disable tanggal sebelum hari ini
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <div className="w-0.5 border h-4"></div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <Button className="bg-primary-700 py-6 text-[18px] w-full text-neutral-50">
                Cari Tiket
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
