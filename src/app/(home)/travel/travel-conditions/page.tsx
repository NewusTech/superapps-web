"use client";

import banner from "@/../../public/assets/images/neededs/banner-travel-ticketing-conditions.png";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TravelConditionDatas } from "@/constants/main";
import { Bus, ExclamationMark, Suitcase } from "@phosphor-icons/react";

export default function TravelConditionScreen() {
  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-80">
      <div className="w-full h-full">
        <Image
          src={banner}
          alt="Banner"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full flex flex-col items-center gap-y-10 mt-10 px-16">
        <h2 className="text-neutral-700 font-semibold text-[26px]">
          Persyaratan Perjalanan
        </h2>

        <div className="w-full flex flex-col">
          <Accordion type="single" collapsible>
            {TravelConditionDatas &&
              TravelConditionDatas?.map((item: any, index: number) => {
                let icon;
                if (item?.keys === "bus") {
                  icon = <Bus className="text-neutral-50 w-6 h-6" />;
                } else if (item?.keys === "suitcase") {
                  icon = <Suitcase className="text-neutral-50 w-6 h-6" />;
                } else if (item?.keys === "exclamationmark") {
                  icon = (
                    <ExclamationMark className="text-neutral-50 w-6 h-6" />
                  );
                }

                return (
                  <AccordionItem
                    key={index}
                    className="w-full h-full mb-8 flex flex-col gap-y-10"
                    value={`item-${index}`}>
                    <AccordionTrigger className="bg-gradient-to-l from-[#000099] from-[10%] to-[#CA1D76] to-[100%] text-neutral-50 rounded-lg text-[14px] md:text-[16px] text-start h-[50px] md:h-full pr-4">
                      <div className="w-full flex flex-row gap-x-3 px-3">
                        <div>{icon}</div>

                        <p className="text-neutral-50">{item.question}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="md:text-start text-justify w-full h-full border border-grey-100 p-4 rounded-lg">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
