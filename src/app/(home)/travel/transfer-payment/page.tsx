"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { paymentTransferSteps } from "@/constants/main";
import { useRouter } from "next/navigation";
import CopyToKeyboard from "@/components/elements/copyToKey";

export default function TransferPaymentTravelPage() {
  const router = useRouter();
  const [orderCode, setorderCode] = useState<string>("");
  const [bankName, setBankName] = useState<string>("");
  const [rekeningNumber, setRekeningNumber] = useState<string>("");

  useEffect(() => {
    if (
      localStorage.getItem(
        "order_code" ||
          localStorage.getItem("bank_method") ||
          localStorage.getItem("rekening_number")
      )
    ) {
      setorderCode(localStorage.getItem("order_code") || "");
      setBankName(localStorage.getItem("bank_method") || "");
      setRekeningNumber(localStorage.getItem("rekening_number") || "");
    }
  }, []);

  const handleRouterHistory = () => {
    router.push(
      `/profile/order-histories-travel/histories-travel-detail/${orderCode}`
    );
    localStorage.clear();
  };

  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full flex flex-col mt-32 px-5 md:px-20 gap-y-5">
        <div className="w-full rounded-lg flex px-5 flex-col border border-grey-100 shadow-md gap-y-3">
          <div className="w-full flex flex-col py-2">
            <p className="font-bold text-neutral-700 text-[20px] md:text-[22px]">
              Bank {bankName && bankName}
            </p>
          </div>

          <div className="w-full h-0.5 bg-grey-100"></div>

          <div className="w-full flex flex-col gap-y-2 py-4">
            <p className="text-neutral-700 text-[18px] md:text-[20px]">
              No. Rekening
            </p>

            <div className="w-full flex flex-row justify-between">
              <p className="text-primary-700 text-[22px] md:text-[26px]">
                {rekeningNumber && rekeningNumber}
              </p>

              {rekeningNumber && <CopyToKeyboard textToCopy={rekeningNumber} />}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col border border-grey-100 rounded-lg shadow-md">
          <Accordion type="single" collapsible>
            {paymentTransferSteps &&
              paymentTransferSteps?.map((item: any, index: number) => {
                return (
                  <AccordionItem
                    key={index}
                    className="w-full h-full flex flex-col"
                    value={`item-${index}`}>
                    <AccordionTrigger className="w-full text-neutral-700 rounded-lg text-[14px] md:text-[16px] text-start h-[50px] md:h-full pr-4">
                      <div className="w-full flex flex-row gap-x-3 px-3">
                        <p className="text-neutral-700">{item.title}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="md:text-start text-justify w-full h-full px-10 py-2 rounded-lg">
                      <ul className="list-decimal flex flex-col gap-y-3">
                        {item?.value?.map((list: any, i: number) => {
                          return <li key={i}>{list.nilai}</li>;
                        })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
          </Accordion>
        </div>

        <div className="w-full">
          <Button
            onClick={handleRouterHistory}
            className="w-full bg-primary-700 hover:bg-primary-600 rounded-lg py-2 text-neutral-50">
            Riwayat Pemesanan
          </Button>
        </div>
      </div>
    </section>
  );
}
