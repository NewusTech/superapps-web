"use client";

import { ArrowRight, CalendarDots } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import { ArticleBlogInterface } from "@/types/interface";
import wrapText, { formatTanggalPanjang, truncateContent } from "@/helpers";

export default function ArticleScreen({
  item,
}: {
  item: ArticleBlogInterface;
}) {
  const truncateContents = truncateContent(item?.konten, 200);

  return (
    <div className="w-full flex flex-col bg-neutral-50 border border-grey-100 shadow-md rounded-xl gap-y-4">
      <div className="w-full min-h-[240px]">
        <Image
          src={item?.image_url}
          alt={item?.judul}
          width={400}
          height={400}
          className="w-full h-full rounded-t-xl"
        />
      </div>

      <div className="w-full flex flex-col gap-y-2 px-5">
        <div className="w-full flex flex-row gap-x-3">
          <CalendarDots className="w-6 h-6 text-neutral-400" />

          <p className="font-normal text-[14px] text-neutral-400">
            {formatTanggalPanjang(item?.created_at)}
          </p>
        </div>

        <div className="w-full flex flex-row">
          <p className="font-bold text-neutral-700 text-[17px]">
            {item?.judul}
          </p>
        </div>

        <div className="text-[14px] text-neutral-700 min-h-[120px] font-normal mt-2">
          {item && parse(truncateContents)}
        </div>
      </div>

      <div className="w-full flex flex-col items-center py-2 rounded-lg mb-4 mt-2">
        <Link
          href={"/article"}
          className="flex flex-row items-center gap-x-3 text-center text-neutral-700 font-normal text-[16px]">
          <p className="font-semibold text-neutral-700 text-[18px]">
            Lihat Selengkapnya
          </p>

          <ArrowRight className="w-6 h-6 text-neutral-700" />
        </Link>
      </div>
    </div>
  );
}
