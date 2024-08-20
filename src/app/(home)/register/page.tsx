"use client";

import FollowFooter from "@/components/pages/footer";
import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { followes } from "@/constants/main";
import { Eye, EyeOff, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function RegisterScreen() {
  const [seen, setSeen] = useState(true);

  return (
    <section className="w-full flex flex-col items-center bg-white h-full pt-32 pb-96">
      <div className="w-10/12 flex flex-col gap-y-5">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="font-semibold text-neutral-700 text-[26px]">
            Selamat Datang di Website Rama Tranz
          </h2>
          <p className="text-center">
            Login untuk melanjutkan dan mendapatkan pengalaman terbaik <br />{" "}
            dari layanan kami.
          </p>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-y-5">
          <h4 className="font-semibold text-neutral-700 text-[24px]">
            Daftar akun Rama Tranz
          </h4>

          <div className="w-5/12 bg-white border border-grey-100 rounded-lg shadow-lg p-4 flex flex-col gap-y-5">
            <div className="w-full flex flex-col">
              <form className="w-full flex flex-col gap-y-3">
                <div className="w-full flex flex-col gap-y-5">
                  <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                    <Label
                      htmlFor="name"
                      className="focus-within:text-primary-700">
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
                      htmlFor="email"
                      className="focus-within:text-primary-700">
                      Email
                    </Label>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full focus-visible:text-neutral-700 focus-visible:border focus-visible:border-primary-700"
                      placeholder="Masukkan Email"
                    />
                  </div>

                  <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                    <Label
                      htmlFor="password"
                      className="focus-within:text-primary-700">
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
                        className="p-2 cursor-pointer">
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
                  <p className="text-end text-primary-700 ">Lupa Kata Sandi</p>

                  <div className="w-full flex flex-row">
                    <Button className="w-full bg-primary-700 text-neutral-50 text-[18px] py-6">
                      Daftar
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
                Kamu sudah punya akun?{" "}
                <AlertDialog>
                  <AlertDialogTrigger>
                    <p className={`text-primary-700`}>Masuk</p>
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
                              className="focus-within:text-primary-700">
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
                              className="focus-within:text-primary-700">
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
                                className="p-2 cursor-pointer">
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
