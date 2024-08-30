"use client";

import stepper from "@/../../public/assets/icons/neededs/icon_donat_active.svg";
import { Bus, Calendar, Notepad, Van } from "@phosphor-icons/react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MyTrevelOrderHistories() {
  return (
    <section className="flex flex-col gap-y-5 md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full bg-white shadow-sm border px-5 py-3 border-grey-100 rounded-lg flex flex-row gap-x-3 mt-32">
        <Notepad className="w-6 h-6 text-neutral-500" />

        <h5>Pesanan Saya</h5>
      </div>

      <div className="w-full flex flex-row">
        <Tabs
          defaultValue="riwayat-travel"
          className="w-full flex flex-col gap-y-4">
          <TabsList className="w-full px-0 py-6 flex flex-row border border-grey-100">
            <TabsTrigger
              className="w-full py-4 rounded-s-lg data-[state=active]:bg-primary-600 data-[state=active]:text-neutral-50"
              value="riwayat-travel">
              Riwayat
            </TabsTrigger>
            <TabsTrigger
              className="w-full py-4 border-r border-grey-100 data-[state=active]:bg-primary-600 data-[state=active]:text-neutral-50"
              value="dalam-proses-travel">
              Dalam Proses
            </TabsTrigger>
            <div className="w-full">
              <Select>
                <SelectTrigger className="w-full border-none py-6 outline-none text-[14px]">
                  <SelectValue placeholder="Filter Status" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsList>
          <TabsContent
            value="riwayat-travel"
            className="w-full flex flex-col gap-y-5 border border-grey-100 rounded-lg p-4">
            <div className="w-full flex flex-row">
              <div className="w-full flex flex-row gap-x-3">
                <div className="w-full flex flex-row items-center gap-x-2">
                  <Notepad className="w-6 h-6 text-neutral-500" />

                  <p className="text-neutral-500 font-normal text-[16px]">
                    No Pemesan: 1314917131
                  </p>
                </div>

                <div className="w-0.5 h-full bg-grey-100"></div>

                <div className="w-full flex flex-row items-center gap-x-2">
                  <Calendar className="w-6 h-6 text-neutral-500" />

                  <p className="text-neutral-500 font-normal text-[16px]">
                    Tanggal Pesan: 23 Januari 2024
                  </p>
                </div>
              </div>

              <div className="w-4/12 rounded-lg flex items-center justify-center py-3 bg-success-300">
                <p className="text-success-700 text-center">Pembelian Sukses</p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-grey-100"></div>

            <div className="w-full flex flex-col gap-y-4">
              <div className="w-full flex flex-row items-center gap-x-3">
                <p className="text-primary-700 font-normal text-[20px]">
                  Travel Rama Tranz
                </p>

                <Van className="w-6 h-6 text-primary-700" />
              </div>

              <div className="w-full flex flex-row">
                <div className="w-full flex flex-col gap-y-1">
                  <p className="text-neutral-500 font-normal text-[14px]">
                    23 Februari 2024
                  </p>

                  <p className="text-neutral-500 font-normal text-[16px]">
                    Bandar Lampung
                  </p>
                </div>

                <div className="w-full flex flex-row items-center">
                  <div className="flex flex-row items-center gap-2">
                    <div className="w-3 h-3">
                      <Image
                        src={stepper}
                        alt="Rute"
                        width={100}
                        height={100}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="border-b border-dashed w-16" />
                    <div className="w-3 h-3">
                      <Image
                        src={stepper}
                        alt="Rute"
                        width={100}
                        height={100}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-y-2">
                  <p className="text-neutral-500 font-normal text-[14px]">
                    23 Februari 2024
                  </p>

                  <p className="text-neutral-500 font-normal text-[16px]">
                    Palembang
                  </p>
                </div>

                <div className="w-full">
                  <Button className="w-full border border-primary-700 text-primary-700 py-6">
                    Detail
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="dalam-proses-travel"
            className="w-full flex flex-col gap-y-5 border border-grey-100 rounded-lg p-4">
            <div className="w-full flex flex-row">
              <div className="w-full flex flex-row gap-x-3">
                <div className="w-full flex flex-row items-center gap-x-2">
                  <Notepad className="w-6 h-6 text-neutral-500" />

                  <p className="text-neutral-500 font-normal text-[16px]">
                    No Pemesan: 1314917131
                  </p>
                </div>

                <div className="w-0.5 h-full bg-grey-100"></div>

                <div className="w-full flex flex-row items-center gap-x-2">
                  <Calendar className="w-6 h-6 text-neutral-500" />

                  <p className="text-neutral-500 font-normal text-[16px]">
                    Tanggal Pesan: 23 Januari 2024
                  </p>
                </div>
              </div>

              <div className="w-4/12 rounded-lg flex items-center justify-center py-3 bg-success-300">
                <p className="text-success-700 text-center">Pembelian Sukses</p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-grey-100"></div>

            <div className="w-full flex flex-col gap-y-4">
              <div className="w-full flex flex-row items-center gap-x-3">
                <p className="text-primary-700 font-normal text-[20px]">
                  Travel Rama Tranz
                </p>

                <Van className="w-6 h-6 text-primary-700" />
              </div>

              <div className="w-full flex flex-row">
                <div className="w-full flex flex-col gap-y-1">
                  <p className="text-neutral-500 font-normal text-[14px]">
                    23 Februari 2024
                  </p>

                  <p className="text-neutral-500 font-normal text-[16px]">
                    Bandar Lampung
                  </p>
                </div>

                <div className="w-full flex flex-row items-center">
                  <div className="flex flex-row items-center gap-2">
                    <div className="w-3 h-3">
                      <Image
                        src={stepper}
                        alt="Rute"
                        width={100}
                        height={100}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="border-b border-dashed w-16" />
                    <div className="w-3 h-3">
                      <Image
                        src={stepper}
                        alt="Rute"
                        width={100}
                        height={100}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-y-2">
                  <p className="text-neutral-500 font-normal text-[14px]">
                    23 Februari 2024
                  </p>

                  <p className="text-neutral-500 font-normal text-[16px]">
                    Palembang
                  </p>
                </div>

                <div className="w-full">
                  <Button className="w-full border border-primary-700 text-primary-700 py-6">
                    Detail
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
