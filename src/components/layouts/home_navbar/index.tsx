"use client";

import ramatranz from "@/../../public/assets/images/neededs/ramatranz.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ChevronDown, Eye, EyeOff, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import FollowFooter from "@/components/pages/footer";
import { followes } from "@/constants/main";

export default function HomeNavigationBar({ isScrolledPast }: any) {
  const pathname = usePathname();
  const [seen, setSeen] = useState(true);

  const path = ["/travel/available-schedule", "/about-us", "/register"];

  const navWhite = () => {
    return path.some((p) => pathname.startsWith(p));
  };

  return (
    <>
      {navWhite() ? (
        <section
          className={`flex flex-row justify-center items-center self-center bg-neutral-50 shadow-md w-full py-2 fixed z-50 transition-all duration-1000`}
        >
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
                {/* <DropdownMenu>
                  <DropdownMenuTrigger
                    className={`text-neutral-700 flex flex-row gap-x-4 items-center`}>
                    <p>Tentang Kami</p>

                    <ChevronDown className="w-5 h-5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> */}
                <Link
                  href="/about-us"
                  className={`text-neutral-700 font-normal text-[16px] hover:underline`}
                >
                  Tentang Kami
                </Link>

                <Link
                  href="/travel"
                  className={`text-neutral-700 font-normal text-[16px] hover:underline`}
                >
                  Travel
                </Link>

                <Link
                  href="/rent"
                  className={`text-neutral-600 font-normal text-[16px] hover:underline`}
                >
                  Rental
                </Link>

                <Link
                  href="/hotel"
                  className={`text-neutral-600 font-normal text-[16px] hover:underline`}
                >
                  Hotel
                </Link>

                <Link
                  href="/package"
                  className={`text-neutral-700 font-normal text-[16px] hover:underline`}
                >
                  Paket
                </Link>

                <Link
                  href="/article"
                  className={`text-neutral-700 font-normal text-[16px] hover:underline`}
                >
                  Artikel
                </Link>

                {/* <DropdownMenu>
                  <DropdownMenuTrigger
                    className={`text-neutral-700 flex flex-row gap-x-4 items-center border-none outline-none`}>
                    <p>Informasi</p>

                    <ChevronDown className="w-5 h-5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> */}
              </div>

              <div className="flex flex-row justify-end gap-x-3">
                <Link href={"/register"}>
                  <Button
                    className={`${
                      isScrolledPast
                        ? "bg-primary-700 text-neutral-50"
                        : "bg-primary-700 border border-neutral-50 text-neutral-50"
                    }  px-8 py-4 w-full rounded-md`}
                  >
                    Daftar
                  </Button>
                </Link>

                <AlertDialog>
                  <AlertDialogTrigger>
                    <div
                      className={`border border-primary-700 text-primary-700 px-8 py-1.5 w-full rounded-md`}
                    >
                      Masuk
                    </div>
                  </AlertDialogTrigger>

                  <AlertDialogContent className="bg-white w-4/12 px-5 py-5 gap-y-5">
                    {/* <div className="w-full flex flex-col py-3"> */}
                    <div className="w-full flex flex-row justify-end items-center">
                      <AlertDialogFooter className="border-none h-0 outline-none">
                        <AlertDialogCancel className="border-none h-0 outline-none">
                          <X className="w-6 h-6" />
                        </AlertDialogCancel>
                      </AlertDialogFooter>
                    </div>

                    <AlertDialogTitle className="text-center border-b border-grey-100">
                      <h3 className="font-semibold text-[22px] text-neutral-700 pb-2">
                        Masuk akun Rama Tranz
                      </h3>
                    </AlertDialogTitle>
                    {/* </div> */}

                    <div className="w-full flex flex-col">
                      <form className="w-full flex flex-col gap-y-3">
                        <div className="w-full flex flex-col gap-y-5">
                          <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                            <Label
                              htmlFor="name"
                              className="focus-within:text-primary-700"
                            >
                              Nama Lengkap
                            </Label>

                            <Input
                              id="name"
                              name="name"
                              type="text"
                              className="w-full focus-visible:text-neutral-700 focus-visible:border focus-visible:border-primary-700"
                              placeholder="Masukkan Nama Lengkap"
                            />
                          </div>

                          <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                            <Label
                              htmlFor="password"
                              className="focus-within:text-primary-700"
                            >
                              Kata Sandi
                            </Label>

                            <div className="focus-within:border focus-within:border-primary-700 flex items-center mt-1 justify-between rounded-lg bg-transparent text-[14px] w-full h-[40px] font-normal border border-grey-50 placeholder:text-[14px] placeholder:text-neutral-700">
                              <Input
                                id="password"
                                name="password"
                                type={!seen ? "text" : "password"}
                                className="w-full focus-visible:text-neutral-700 border-none outline-none bg-transparent"
                                placeholder="Masukkan Kata Sandi"
                              />

                              <div
                                onClick={() => setSeen(!seen)}
                                className="p-2 cursor-pointer"
                              >
                                {seen ? (
                                  <EyeOff className="text-neutral-400 w-[20px] h-[20px]" />
                                ) : (
                                  <Eye className="text-neutral-400 w-[20px] h-[20px]" />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w-full flex flex-col gap-y-6">
                          <p className="text-end text-primary-700 ">
                            Lupa Kata Sandi
                          </p>

                          <div className="w-full flex flex-row">
                            <Button className="w-full bg-primary-700 text-neutral-50 text-[18px] py-6">
                              Masuk
                            </Button>
                          </div>

                          <div className="w-full flex flex-row items-center gap-x-1">
                            <div className="w-full h-0.5 bg-neutral-400"></div>

                            <div className="w-full">
                              <p className="text-neutral-400 text-center text-[12px]">
                                Atau masuk dengan
                              </p>
                            </div>

                            <div className="w-full h-0.5 bg-neutral-400"></div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="w-full flex flex-col gap-y-4">
                      <div className="w-full flex flex-row gap-x-3 justify-center">
                        {followes?.map((item: any, i: number) => {
                          return <FollowFooter key={i} item={item} />;
                        })}
                      </div>

                      <p className="text-neutral-700 text-center">
                        Kamu belum punya akun?{" "}
                        <Link href={"/register"} className="text-primary-700">
                          Daftar
                        </Link>
                      </p>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section
          className={`flex flex-row justify-center items-center self-center ${
            isScrolledPast
              ? "bg-neutral-50 shadow-md w-full"
              : "bg-transparent w-full border-b-[0.5px] border-neutral-50"
          } py-2 fixed z-50 transition-all duration-1000`}
        >
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
                {/* <DropdownMenu>
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
                </DropdownMenu> */}

                <Link
                  href="/about-us"
                  className={`${
                    isScrolledPast ? "text-neutral-600" : "text-neutral-50"
                  } font-normal text-[16px] hover:underline`}
                >
                  Tentang Kami
                </Link>

                <Link
                  href="/travel"
                  className={`${
                    isScrolledPast ? "text-neutral-600" : "text-neutral-50"
                  } font-normal text-[16px] hover:underline`}
                >
                  Travel
                </Link>

                <Link
                  href="/rent"
                  className={`${
                    isScrolledPast ? "text-neutral-600" : "text-neutral-50"
                  } font-normal text-[16px] hover:underline`}
                >
                  Rental
                </Link>

                <Link
                  href="/hotel"
                  className={`${
                    isScrolledPast ? "text-neutral-600" : "text-neutral-50"
                  } font-normal text-[16px] hover:underline`}
                >
                  Hotel
                </Link>

                <Link
                  href="/package"
                  className={`${
                    isScrolledPast ? "text-neutral-600" : "text-neutral-50"
                  } font-normal text-[16px] hover:underline`}
                >
                  Paket
                </Link>

                <Link
                  href="/article"
                  className={`${
                    isScrolledPast ? "text-neutral-600" : "text-neutral-50"
                  } font-normal text-[16px] hover:underline`}
                >
                  Artikel
                </Link>

                {/* <DropdownMenu>
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
                </DropdownMenu> */}
              </div>

              <div className="flex flex-row justify-end gap-x-3">
                <Link href={"/register"}>
                  <Button
                    className={`${
                      isScrolledPast
                        ? "bg-primary-700 text-neutral-50"
                        : "bg-primary-700 border border-neutral-50 text-neutral-50"
                    }  px-8 py-4 w-full rounded-md`}
                  >
                    Daftar
                  </Button>
                </Link>

                <AlertDialog>
                  <AlertDialogTrigger>
                    <div
                      className={`${isScrolledPast ? "border border-primary-700 text-primary-700" : "border border-neutral-50 text-neutral-50"} px-8 py-1.5 w-full rounded-md`}
                    >
                      Masuk
                    </div>
                  </AlertDialogTrigger>

                  <AlertDialogContent className="bg-white w-4/12 px-5 py-5 gap-y-5">
                    {/* <div className="w-full flex flex-col py-3"> */}
                    <div className="w-full flex flex-row justify-end items-center">
                      <AlertDialogFooter className="border-none h-0 outline-none">
                        <AlertDialogCancel className="border-none h-0 outline-none">
                          <X className="w-6 h-6" />
                        </AlertDialogCancel>
                      </AlertDialogFooter>
                    </div>

                    <AlertDialogTitle className="text-center border-b border-grey-100">
                      <h3 className="font-semibold text-[22px] text-neutral-700 pb-2">
                        Masuk akun Rama Tranz
                      </h3>
                    </AlertDialogTitle>
                    {/* </div> */}

                    <div className="w-full flex flex-col">
                      <form className="w-full flex flex-col gap-y-3">
                        <div className="w-full flex flex-col gap-y-5">
                          <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                            <Label
                              htmlFor="name"
                              className="focus-within:text-primary-700"
                            >
                              Nama Lengkap
                            </Label>

                            <Input
                              id="name"
                              name="name"
                              type="text"
                              className="w-full focus-visible:text-neutral-700 focus-visible:border focus-visible:border-primary-700"
                              placeholder="Masukkan Nama Lengkap"
                            />
                          </div>

                          <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                            <Label
                              htmlFor="password"
                              className="focus-within:text-primary-700"
                            >
                              Kata Sandi
                            </Label>

                            <div className="focus-within:border focus-within:border-primary-700 flex items-center mt-1 justify-between rounded-lg bg-transparent text-[14px] w-full h-[40px] font-normal border border-grey-50 placeholder:text-[14px] placeholder:text-neutral-700">
                              <Input
                                id="password"
                                name="password"
                                type={!seen ? "text" : "password"}
                                className="w-full focus-visible:text-neutral-700 border-none outline-none bg-transparent"
                                placeholder="Masukkan Kata Sandi"
                              />

                              <div
                                onClick={() => setSeen(!seen)}
                                className="p-2 cursor-pointer"
                              >
                                {seen ? (
                                  <EyeOff className="text-neutral-400 w-[20px] h-[20px]" />
                                ) : (
                                  <Eye className="text-neutral-400 w-[20px] h-[20px]" />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w-full flex flex-col gap-y-6">
                          <p className="text-end text-primary-700 ">
                            Lupa Kata Sandi
                          </p>

                          <div className="w-full flex flex-row">
                            <Button className="w-full bg-primary-700 text-neutral-50 text-[18px] py-6">
                              Masuk
                            </Button>
                          </div>

                          <div className="w-full flex flex-row items-center gap-x-1">
                            <div className="w-full h-0.5 bg-neutral-400"></div>

                            <div className="w-full">
                              <p className="text-neutral-400 text-center text-[12px]">
                                Atau masuk dengan
                              </p>
                            </div>

                            <div className="w-full h-0.5 bg-neutral-400"></div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="w-full flex flex-col gap-y-4">
                      <div className="w-full flex flex-row gap-x-3 justify-center">
                        {followes?.map((item: any, i: number) => {
                          return <FollowFooter key={i} item={item} />;
                        })}
                      </div>

                      <p className="text-neutral-700 text-center">
                        Kamu belum punya akun?{" "}
                        <Link href={"/register"} className="text-primary-700">
                          Daftar
                        </Link>
                      </p>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
