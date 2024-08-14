import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavigationBar() {
  return (
    <section className="w-full flex flex-row justify-center bg-primary-300 mt-6 py-2 fixed">
      <div className="w-10/12 flex flex-row justify-between items-center">
        <div className="min-w-7 min-h-7">
          <Image
            src={"/hello.png"}
            alt="Ramatranz"
            width={300}
            height={300}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="w-full flex flex-row gap-x-3">
          <div className="w-full flex flex-row justify-end items-center gap-x-3">
            <Link href="/" className="text-neutral-50 font-normal text-[16px]">
              Travel
            </Link>
            <Link href="/" className="text-neutral-50 font-normal text-[16px]">
              Paket
            </Link>
            <Link href="/" className="text-neutral-50 font-normal text-[16px]">
              Rental
            </Link>
          </div>

          <div className="flex flex-row justify-end gap-x-3">
            <Button className="bg-primary-50 hover:bg-primary-100 px-8 py-4 w-full rounded-full text-primary-700">
              Masuk
            </Button>
            <Button className="bg-primary-700 hover:bg-primary-600 px-8 py-4 w-full rounded-full text-neutral-50">
              Daftar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
