"use client";

import fotoProfile from "@/../../public/assets/images/neededs/foto-profile.jpg";
import {
  Building,
  Bus,
  Camera,
  Notepad,
  Package,
  UserCircle,
} from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <section className="flex flex-col md:w-4/12 h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full flex flex-col mt-32 gap-y-20 pb-12">
        <div className="w-full py-5 border bg-white shadow-md border-grey-100 rounded-lg">
          <div className="w-full flex flex-col gap-y-3">
            <div className="w-full flex flex-col items-center relative">
              <div className="w-24 h-24">
                <Image
                  src={fotoProfile}
                  alt="User Profile"
                  width={100}
                  height={100}
                  className="w-full h-full rounded-full"
                />
              </div>

              <div className="bg-neutral-50 p-0.5 rounded-full absolute top-16 right-32">
                <div className="w-7 h-7 flex flex-col items-center justify-center rounded-full bg-primary-700">
                  <Camera className="w-4 h-4 text-neutral-50" />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col items-center gap-y-1">
              <h5 className="text-neutral-700 font-normal text-[18px]">
                Arma Yoga Pratama
              </h5>

              <p className="text-neutral-700 font-normal text-[16px]">
                Bandar Lampung
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-grey-100 mt-5 mb-2"></div>

          <div className="w-full flex flex-col">
            <Accordion className="w-full" type="single" collapsible>
              <AccordionItem
                className="w-full h-full border-none flex flex-col"
                value={`item-1`}>
                <AccordionTrigger className="px-4 bg-white font-normal text-neutral-700 text-[16px] text-start h-[50px] md:h-full pr-4">
                  <div className="w-full flex flex-row items-center gap-x-2">
                    <Notepad
                      weight="fill"
                      className="w-6 h-6 text-neutral-500"
                    />

                    <p>Pesanan Saya</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="md:text-start text-justify w-full h-full px-4">
                  <div className="w-full grid grid-rows-4 gap-y-3">
                    <Link
                      href={"/profile/order-histories-travel"}
                      className="w-full py-2 flex items-center justify-center">
                      <div className="w-10/12 flex flex-row items-center gap-x-2">
                        <Bus className="w-5 h-5 text-neutral-400" />

                        <p>Travel</p>
                      </div>
                    </Link>

                    <div className="w-full py-2 flex items-center justify-center">
                      <Link
                        href={"/profile/order-histories-rental"}
                        className="w-full py-2 flex items-center justify-center">
                        <div className="w-10/12 flex flex-row items-center gap-x-2">
                          <Bus className="w-5 h-5 text-neutral-400" />

                          <p>Rental</p>
                        </div>
                      </Link>
                    </div>

                    <div className="w-full py-2 flex items-center justify-center">
                      <Link
                        href={"/profile/order-histories-hotel"}
                        className="w-full py-2 flex items-center justify-center">
                        <div className="w-10/12 flex flex-row items-center gap-x-2">
                          <Building className="w-5 h-5 text-neutral-400" />

                          <p>Hotel</p>
                        </div>
                      </Link>
                    </div>

                    <div className="w-full py-2 flex items-center justify-center">
                      <Link
                        href={"/profile/order-histories-paket"}
                        className="w-full py-2 flex items-center justify-center">
                        <div className="w-10/12 flex flex-row items-center gap-x-2">
                          <Package className="w-5 h-5 text-neutral-400" />

                          <p>Paket</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="w-full flex flex-col">
            <Accordion className="w-full" type="single" collapsible>
              <AccordionItem
                className="w-full h-full border-none flex flex-col"
                value={`item-1`}>
                <AccordionTrigger className="px-4 bg-white font-normal text-neutral-700 text-[16px] text-start h-[50px] md:h-full pr-4">
                  <div className="w-full flex flex-row items-center gap-x-2">
                    <UserCircle
                      weight="fill"
                      className="w-6 h-6 text-neutral-500"
                    />

                    <p>Akun Saya</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="md:text-start text-justify w-full h-full px-4">
                  <div className="w-full grid grid-rows-2 gap-y-3">
                    <Link
                      href={"/profile"}
                      className="w-full py-2 flex items-center justify-center">
                      <div className="w-10/12 flex flex-row items-center gap-x-2">
                        <p>Profile</p>
                      </div>
                    </Link>

                    <Link
                      href={"/profile/change-user-password"}
                      className="w-full py-2 flex items-center justify-center">
                      <div className="w-10/12 flex flex-row items-center gap-x-2">
                        <p>Ubah Password</p>
                      </div>
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
