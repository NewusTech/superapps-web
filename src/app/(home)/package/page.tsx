"use client";

import PackageScreen from "@/components/pages/packages";
import { pakets } from "@/constants/main";
import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function PackagePage() {
  const [packages, setPackages] = useState<any>();

  useEffect(() => {
    setPackages(pakets);
  }, []);

  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="bg-white gap-y-10 flex flex-col p-3 w-11/12 md:w-5/12 mt-28 pb-8 border border-grey-50 shadow-md rounded-lg">
        <div className="w-full h-full">
          <Image
            src={packages?.banner}
            alt="Banner"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full flex flex-col px-5 md:px-8 gap-y-5">
          <PackageScreen item={packages?.firstContent} />

          <div className="min-w-[300px] h-0.5 bg-grey-50"></div>

          <PackageScreen item={packages?.secondContent} />
        </div>
      </div>
      <div className="bg-white gap-y-2 flex flex-col p-3 w-11/12 md:w-5/12 mt-4 pb-8 border border-grey-50 shadow-md rounded-lg justify-center items-center">
        <p className="font-bold text-center w-full">
          Silahkan hubungi admin kami
        </p>
        <Link
          href="https://wa.me/081315395019"
          target="_blank"
          className="flex flex-row gap-3"
        >
          <PhoneCall /> 081315395019
        </Link>
      </div>
    </section>
  );
}
