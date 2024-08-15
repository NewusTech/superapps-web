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

export default function RoundTripForm() {
  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    undefined
  );

  return (
    <div className="bg-neutral-50 flex flex-col w-11/12 min-h-[520px] rounded-3xl border border-grey-100 absolute top-[120px]">
      <div>
        <Tabs
          defaultValue="Sekali Jalan"
          className="w-full flex flex-col justify-center self-center items-center">
          <TabsList className="w-11/12 flex flex-row px-5 py-6 mt-4 border-b border-grey-100 pb-10 rounded-none">
            <TabsTrigger
              className="data-[state=active]:bg-primary-700 data-[state=active]:text-neutral-50 w-full py-3"
              value="Sekali Jalan">
              Sekali Jalan
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-primary-700 data-[state=active]:text-neutral-50 w-full py-3"
              value="Pulang Pergi">
              Pulang Pergi
            </TabsTrigger>
          </TabsList>

          <TabsContent
            className="flex flex-col w-full px-4 gap-y-10 mt-8"
            value="Sekali Jalan">
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
                <h6>Tanggal Berangkat</h6>

                <div className="w-full flex flex-row items-center gap-x-2">
                  <CalendarIcons className="w-6 h-6 text-primary-700" />

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="w-full justify-start text-left text-[14px]">
                        {departureDate
                          ? format(departureDate, "PPP")
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
                        selected={departureDate}
                        onSelect={setDepartureDate}
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

          <TabsContent value="Pulang Pergi">
            Change your password here.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
