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
import { HistoryRentalInterface } from "@/types/interface";
import { getOrderHistoryRental } from "@/services/api";
import { statusFilters } from "@/constants/main";
import OrderHistoryRentalCard from "@/components/pages/profile/card-history/rental";
import OrderHistoryRentalStatusCard from "@/components/pages/profile/card-history/rental/dalamProses";
// import { useSearchParams } from "next/navigation";

export default function MyRentOrderHistories() {
  // const searchParams = useSearchParams();
  // const [isTabs, setIsTabs] = useState<string>("riwayat-travel");
  const [status, setStatus] = useState<string>("");
  const [rental, setRental] = useState<HistoryRentalInterface[]>();
  const [waitingRent, setWaitingRent] = useState<HistoryRentalInterface[]>();

  // const searchTabs = searchParams.get("tabs");

  // useEffect(() => {
  //   if (searchTabs == "riwayat-travel") {
  //     setIsTabs("riwayat-travel");
  //   } else if (searchTabs == "dalam-proses-travel") {
  //     setIsTabs("dalam-proses-travel");
  //   }
  // }, [isTabs]);

  const fetchGetRentalHistory = async (status: string) => {
    try {
      const response = await getOrderHistoryRental(status);
      setRental(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGetRentalHistory(status);
  }, [status]);

  const fetchGetRentalHistoryStatus = async (status: string) => {
    try {
      const response = await getOrderHistoryRental(status);
      setWaitingRent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGetRentalHistoryStatus("Menunggu Pembayaran");
  }, []);

  const handleStatusChange = (value: string) => {
    setStatus(value);
  };

  return (
    <section className="flex flex-col gap-y-5 md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full bg-white shadow-sm border px-5 py-3 border-grey-100 rounded-lg flex flex-row gap-x-3 mt-5 md:mt-32">
        <Notepad className="w-6 h-6 text-neutral-500" />

        <h5>Pesanan Saya</h5>
      </div>

      <div className="w-full flex flex-row">
        <Tabs
          // value={isTabs ? isTabs : "riwayat-travel"}
          // onValueChange={(value) => setIsTabs(value)}
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
                <SelectTrigger className="w-full border-none py-6 outline-none text-[14px]">
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
              {rental &&
                rental
                  ?.filter(
                    (item: HistoryRentalInterface) =>
                      item.status !== "Menunggu Pembayaran"
                  )
                  ?.map((item: HistoryRentalInterface, i: number) => {
                    return <OrderHistoryRentalCard key={i} data={item} />;
                  })}
            </div>
          </TabsContent>
          <TabsContent
            value="dalam-proses-travel"
            className="w-full flex flex-col">
            <div className="w-full h-screen overflow-y-auto scrollbar-hide flex flex-col gap-y-5">
              {waitingRent &&
                waitingRent?.map((item: HistoryRentalInterface, i: number) => {
                  return <OrderHistoryRentalStatusCard key={i} data={item} />;
                })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
