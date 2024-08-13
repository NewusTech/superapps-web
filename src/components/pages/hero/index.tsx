import { Bus, Hotel, Package, Search } from "lucide-react";
import { Calendar, Handbag, Seat } from "@phosphor-icons/react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function HeroScreen({ data }: any) {
  return (
    <section className="w-full justify-center items-center flex flex-col relative top-56 gap-y-24">
      <div className="w-6/12 flex flex-col justify-center items-center bg-neutral-50 bg-opacity-15 py-3 px-6 rounded-md border border-neutral-50">
        <div className="grid grid-cols-5 gap-x-2 mb-4">
          {data?.map((item: any, i: number) => {
            let icon;
            if (item?.title === "Travel") {
              icon = <Bus className="w-5 h-5 text-primary-700" />;
            } else if (item?.title === "Paket") {
              icon = <Package className="w-5 h-5 text-primary-700" />;
            } else if (item?.title === "Rental") {
              icon = <Bus className="w-5 h-5 text-primary-700" />;
            } else if (item?.title === "Oleh-oleh") {
              icon = <Handbag className="w-5 h-5 text-primary-700" />;
            } else {
              icon = <Hotel className="w-5 h-5 text-primary-700" />;
            }

            return (
              <div key={i} className="grid grid-rows-2 w-full gap-y-3">
                <div
                  className={`${item?.soon !== true ? "hidden" : "flex"} items-center text-primary-700`}>
                  <div className="bg-neutral-50 border border-neutral-50 px-3 py-2 rounded-md bg-opacity-70">
                    <p className="text-[14px]">Coming Soon</p>
                  </div>
                </div>
                <div
                  className={`${item?.soon !== true ? "justify-end row-span-2" : "justify-center"} flex flex-col items-center gap-y-2`}>
                  <div className="bg-neutral-50 rounded-full w-12 h-12 flex flex-row justify-center items-center">
                    {icon}
                  </div>

                  <p className="text-neutral-50">{item?.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-10/12 flex flex-row gap-x-5 p-5">
        <div className="w-full flex flex-row">
          <div className="flex flex-row w-full gap-y-3">
            <div className="flex flex-col w-full gap-y-3">
              <p className="text-neutral-50">Keberangkatan</p>

              <div className="flex flex-row items-center w-full bg-neutral-50 rounded-l-full py-2 px-3">
                <Bus className="w-6 h-6 text-primary-700" />

                <Select>
                  <SelectTrigger className="w-full border-none outline-none text-[14px]">
                    <SelectValue placeholder="Pilih..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

                <div className="w-0.5 border h-4"></div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-y-3">
              <p className="text-neutral-50">Tujuan</p>

              <div className="flex flex-row items-center w-full bg-neutral-50 py-2 px-3">
                <Bus className="w-6 h-6 text-primary-700" />

                <Select>
                  <SelectTrigger className="w-full border-none outline-none text-[14px]">
                    <SelectValue placeholder="Pilih..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

                <div className="w-0.5 border h-4"></div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-y-3">
              <p className="text-neutral-50">Pilih Kursi</p>

              <div className="flex flex-row items-center w-full bg-neutral-50 rounded-r-full py-2 px-3">
                <Seat className="w-6 h-6 text-primary-700" />

                <Select>
                  <SelectTrigger className="w-full border-none outline-none text-[14px]">
                    <SelectValue placeholder="Pilih..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
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

              <div className="flex flex-row items-center w-full bg-neutral-50 rounded-l-full py-2 px-3">
                <Calendar className="w-6 h-6 text-primary-700" />

                <Select>
                  <SelectTrigger className="w-full border-none outline-none text-[14px]">
                    <SelectValue placeholder="Pilih..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

                <div className="w-0.5 border h-4"></div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-y-3">
              <div className="flex flex-row w-full gap-x-3">
                <input type="checkbox" />

                <p className="text-neutral-50">Tanggal Pulang</p>
              </div>

              <div className="flex flex-row items-center w-full bg-neutral-50 rounded-r-full py-2 px-3">
                <Calendar className="w-6 h-6 text-primary-700" />

                <Select>
                  <SelectTrigger className="w-full border-none outline-none text-[14px]">
                    <SelectValue placeholder="Pilih..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-end">
            <Button className="rounded-2xl bg-neutral-50 px-6 py-7 border border-outline_border-100">
              <Search className="text-primary-700" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
