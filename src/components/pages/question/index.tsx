"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/main";

export default function QuestionAnswer() {
  return (
    <>
      <div className="w-full flex flex-row justify-center">
        <h2 className="text-neutral-700 px-8 md:px-0 text-center font-semibold text-[26px] md:text-[36px]">
          Pertanyaan yang sering diajukan
        </h2>
      </div>

      <div className="flex flex-col md:w-full justify-center gap-[8px] md:mt-[16px] px-[30px] md:px-[70px]">
        <Accordion type="single" collapsible>
          {faqs &&
            faqs.map((faq: any, index: number) => {
              return (
                <AccordionItem
                  key={index}
                  className="w-full h-full mb-2"
                  value={`item-${index}`}>
                  <AccordionTrigger className="text-[14px] md:text-[16px] text-start h-[50px] md:h-full">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="md:text-start text-justify w-full h-full">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
        </Accordion>
      </div>
    </>
  );
}
