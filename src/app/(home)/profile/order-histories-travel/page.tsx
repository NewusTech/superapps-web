"use client";

import { Notepad } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HistoryTravelInterface } from "@/types/interface";
import { getOrderHistoryTravel } from "@/services/api";
import OrderHistoryTravelCard from "@/components/pages/profile/card-history/travel";
import { statusFilters } from "@/constants/main";
import OrderHistoryTravelStatusCard from "@/components/pages/profile/card-history/travel/dalamProses";

export default function MyTrevelOrderHistories() {
  const [status, setStatus] = useState<string>("");
  const [travel, setTravel] = useState<HistoryTravelInterface[]>();
  const [waitingTravel, setWaitingTravel] =
    useState<HistoryTravelInterface[]>();

  const fetchGetTravelHistory = async (status: string) => {
    try {
      const response = await getOrderHistoryTravel(status);
      setTravel(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGetTravelHistory(status);
  }, [status]);

  const fetchGetTravelHistoryStatus = async (status: string) => {
    try {
      const response = await getOrderHistoryTravel(status);
      setWaitingTravel(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGetTravelHistoryStatus("Menunggu Pembayaran");
  }, []);

  const handleStatusChange = (value: string) => {
    setStatus(value);
  };

  return (
    <section className="flex flex-col gap-y-5 w-full md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full bg-white shadow-sm border px-5 py-3 border-grey-100 rounded-lg flex flex-row gap-x-3 mt-5 md:mt-32">
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
              <Select onValueChange={handleStatusChange}>
                <SelectTrigger className="w-full border-none px-2 md:px-4  py-6 outline-none text-[14px]">
                  <SelectValue placeholder="Filter Status" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
                  {statusFilters?.map(
                    (item: { id: number; value: string }, i: number) => {
                      return (
                        <SelectItem key={i} value={item.value}>
                          {item.value}
                        </SelectItem>
                      );
                    }
                  )}
                </SelectContent>
              </Select>
            </div>
          </TabsList>
          <TabsContent value="riwayat-travel" className="w-full flex flex-col">
            <div className="w-full h-screen overflow-y-auto scrollbar-hide flex flex-col gap-y-5">
              {travel &&
                travel
                  ?.filter(
                    (item: HistoryTravelInterface) =>
                      item.status !== "Menunggu Pembayaran"
                  )
                  ?.map((item: HistoryTravelInterface, i: number) => {
                    return <OrderHistoryTravelCard key={i} data={item} />;
                  })}
            </div>
          </TabsContent>
          <TabsContent
            value="dalam-proses-travel"
            className="w-full flex flex-col">
            <div className="w-full h-screen overflow-y-auto scrollbar-hide flex flex-col gap-y-5">
              {waitingTravel &&
                waitingTravel?.map(
                  (item: HistoryTravelInterface, i: number) => {
                    return <OrderHistoryTravelStatusCard key={i} data={item} />;
                  }
                )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
