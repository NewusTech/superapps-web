"use client";

const ramatranz = require("@/../../public/assets/images/neededs/ramatranz.png");
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HomeNavigationBar({ isScrolledPast }: any) {
  return (
    <section
      className={`flex flex-row justify-center items-center self-center ${
        isScrolledPast
          ? "bg-neutral-50 shadow-md w-full"
          : "bg-transparent w-full border-b-[0.5px] border-neutral-50"
      } py-2 fixed z-50 transition-all duration-1000`}>
      <div className="w-full px-16 flex flex-row justify-between items-center">
        <Link href={"/"} className="w-1/12 h-full">
          <Image
            src={ramatranz}
            alt="Ramatranz"
            width={300}
            height={300}
            className="w-full h-full object-contain"
          />
        </Link>

        <div className="w-full flex flex-row gap-x-16">
          <div className="w-full flex flex-row justify-end items-center gap-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`${isScrolledPast ? "text-neutral-700" : "text-neutral-50"} flex flex-row gap-x-4 items-center text-neutral-50`}>
                <p>Tentang Kami</p>

                <ChevronDown className="w-5 h-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/travel"
              className={`${
                isScrolledPast ? "text-neutral-600" : "text-neutral-50"
              } font-normal text-[16px] hover:underline`}>
              Travel
            </Link>

            <Link
              href="/"
              className={`${
                isScrolledPast ? "text-neutral-600" : "text-neutral-50"
              } font-normal text-[16px] hover:underline`}>
              Paket
            </Link>

            <Link
              href="/"
              className={`${
                isScrolledPast ? "text-neutral-600" : "text-neutral-50"
              } font-normal text-[16px] hover:underline`}>
              Rental
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`${isScrolledPast ? "text-neutral-700" : "text-neutral-50"} flex flex-row gap-x-4 items-center border-none outline-none`}>
                <p>Informasi</p>

                <ChevronDown className="w-5 h-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex flex-row justify-end gap-x-3">
            <Link href={"/register"}>
              <Button
                className={`${
                  isScrolledPast
                    ? "bg-primary-700 text-neutral-50"
                    : "bg-primary-700 border border-neutral-50 text-neutral-50"
                }  px-8 py-4 w-full rounded-md`}>
                Daftar
              </Button>
            </Link>

            <Link href={"/login"}>
              <Button
                className={`${isScrolledPast ? "border border-primary-700 text-primary-700" : "border border-neutral-50 text-neutral-50"} px-8 py-4 w-full rounded-md`}>
                Masuk
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
