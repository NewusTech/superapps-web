"use client";

import { Calendar, Star } from "@phosphor-icons/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { wisataProps } from "@/services/wisata/api";
import parser from "html-react-parser";
import { truncateContent } from "@/helpers";
import ButtonCustom from "@/components/buttonCustom/ButtonCustom";
import Modal from "@/components/modal/Modal";

export type DetinationScreenProps = {
  item: wisataProps;
};

export default function DestinationScreen(props: DetinationScreenProps) {
  const { item } = props;
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="w-full h-[27rem] flex flex-col justify-center items-center bg-neutral-50 shadow-md rounded-xl gap-y-4 overflow-hidden pb-4 relative">
        <div className="w-full h-[25rem] overflow-hidden mb-auto">
          <Image
            src={item?.image_url}
            alt={item?.slug}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-full h-fit top-0">
          <p className="bg-primary-700 rounded-br-xl px-5 py-3 text-neutral-50 font-normal text-[14px] w-[10rem] text-center">
            {item?.lokasi}
          </p>
        </div>

        <div className="w-full h-full flex flex-col gap-y-1 px-2">
          <div className="w-full flex flex-row justify-between">
            <p className="font-normal text-neutral-700 text-[17px]">
              {item?.judul}
            </p>

            <Star className="w-6 h-6 text-neutral-700" />
          </div>

          <div className="w-full flex flex-row gap-x-3">
            <p className="font-normal text-[14px] text-neutral-400">
              {item?.sub_judul}
            </p>
          </div>

          <p className="text-[14px] text-neutral-700 font-normal mt-4 pb-4">
            {truncateContent(item?.konten, 200)}
          </p>
          <div className="mt-auto">
            <ButtonCustom
              className="w-full hidden md:block"
              onClick={() => setOpenModal((prev) => !prev)}>
              Lihat Selengkapnya
            </ButtonCustom>
            <ButtonCustom className="w-full block md:hidden">
              Lihat Selengkapnya
            </ButtonCustom>
          </div>
        </div>
      </div>
      <AlertDialog open={openModal} onOpenChange={setOpenModal}>
        <AlertDialogContent className="w-10/12 p-0">
          <div className="w-full flex flex-row">
            <div className="w-full h-full">
              <Image
                src={item?.image_url}
                alt={item?.slug}
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-s-lg"
              />
            </div>

            <div className="w-full flex flex-col gap-y-5 bg-neutral-50 p-5">
              <div className="w-full flex flex-col gap-y-5">
                <div className="w-full flex flex-row items-center border-b border-outline_border-100 justify-between">
                  <h3 className="font-semibold text-[18px] text-neutral-700">
                    {item.judul}
                  </h3>

                  <AlertDialogFooter className="w-1/12">
                    <AlertDialogCancel className="border-none outline-none">
                      <X className="w-6 h-6 text-neutral-700" />
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </div>

                <p className="text-neutral-700 font-normal text-[14px]">
                  {item.sub_judul}
                </p>

                {parser(item.konten)}
              </div>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
