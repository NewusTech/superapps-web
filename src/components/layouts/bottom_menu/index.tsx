import { House, Package, UserCircle, Van } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function BottomMenu() {
  const pathName = usePathname();

  return (
    <section className="grid grid-cols-5 place-items-center w-full px-2 py-4">
      <Link
        href={"/"}
        className={`${
          pathName === "/" ? "bg-primary-700 rounded-xl" : ""
        } grid grid-rows-2 place-items-center gap-y-2 w-full p-2`}>
        <House
          className={`w-5 h-5 ${
            pathName === "/" ? "text-neutral-50" : "text-primary-700"
          } `}
        />

        <p
          className={`${
            pathName === "/" ? "text-neutral-50" : "text-primary-700"
          } font-normal text-[12px]`}>
          Home
        </p>
      </Link>

      <Link
        href={"/mpp/tentang-mpp"}
        className={`${
          pathName === "/mpp/tentang-mpp" ? "bg-primary-700 rounded-xl" : ""
        } grid grid-rows-2 place-items-center gap-y-2 w-full p-2`}>
        <Van
          className={`w-5 h-5 ${
            pathName === "/mpp/tentang-mpp"
              ? "text-neutral-50"
              : "text-primary-700"
          }`}
        />

        <p
          className={`${
            pathName === "/mpp/tentang-mpp"
              ? "text-neutral-50"
              : "text-primary-700"
          } font-normal text-[12px]`}>
          Travel
        </p>
      </Link>

      <Link
        href={"/instansi"}
        className={`${
          pathName === "/instansi" ? "bg-primary-700 rounded-xl" : ""
        } grid grid-rows-2 place-items-center gap-y-2 w-full p-2`}>
        <Package
          className={`w-5 h-5 ${
            pathName === "/instansi" ? "text-neutral-50" : "text-primary-700"
          }`}
        />

        <p
          className={`${
            pathName === "/instansi" ? "text-neutral-50" : "text-primary-700"
          } font-normal text-[12px]`}>
          Paket
        </p>
      </Link>

      <Link
        href={"/profile"}
        className={`${
          pathName === "/profile" ? "bg-primary-700 rounded-xl" : ""
        } grid grid-rows-2 place-items-center gap-y-2 w-full p-2`}>
        <Van
          className={`w-5 h-5 ${
            pathName === "/profile" ? "text-neutral-50" : "text-primary-700"
          }`}
        />

        <p
          className={`${
            pathName === "/profile"
              ? "text-neutral-50 rounded-xl"
              : "text-primary-700"
          } font-normal text-[12px]`}>
          Rental
        </p>
      </Link>

      <Link
        href={"/profile"}
        className={`${
          pathName === "/profile" ? "bg-primary-700 rounded-xl" : ""
        } grid grid-rows-2 place-items-center gap-y-2 w-full p-2`}>
        <UserCircle
          className={`w-5 h-5 ${
            pathName === "/profile" ? "text-neutral-50" : "text-primary-700"
          }`}
        />

        <p
          className={`${
            pathName === "/profile"
              ? "text-neutral-50 rounded-xl"
              : "text-primary-700"
          } font-normal text-[12px]`}>
          Profile
        </p>
      </Link>
    </section>
  );
}
