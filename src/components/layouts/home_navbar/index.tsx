"use client";

import ramatranz from "@/../../public/assets/images/neededs/ramatranz.png";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Loader, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import FollowFooter from "@/components/pages/footer";
import { followes } from "@/constants/main";
import { formSignInSchema } from "@/validations";
import { z } from "zod";
import { loginUser, profileUser } from "@/services/api";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { ProfileUserInterface } from "@/types/interface";

export default function HomeNavigationBar({ isScrolledPast }: any) {
  const pathname = usePathname();
  const router = useRouter();
  const [token, setToken] = useState<string | undefined>(undefined);
  const [seen, setSeen] = useState(true);
  const [firstLoading, setFirstLoading] = useState(false);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [profile, setProfile] = useState<ProfileUserInterface>();

  useEffect(() => {
    setToken(Cookies.get("Authorization"));
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await profileUser();
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  const path = [
    "/travel/available-schedule",
    "/about-us",
    "/register",
    "/article",
    "/rent",
    "/package",
    "/hotel/detail",
    "/hotel/order-hotel",
    "/hotel/payment-hotel-order",
    "/hotel/payment-status",
    "/travel/detail-travel",
    "/profile",
  ];

  const navWhite = () => {
    return path.some((p) => pathname.startsWith(p));
  };

  const validateForm = async () => {
    try {
      await formSignInSchema.parseAsync(formLogin);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.format();
        setErrors(formattedErrors);
      }
      setFirstLoading(false);
      return false;
    }
  };

  useEffect(() => {
    if (hasSubmitted) {
      validateForm();
    }
  }, [formLogin, hasSubmitted]);

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSubmitted(true);

    const isValid = await validateForm();

    if (isValid) {
      setFirstLoading(true);

      try {
        const response = await loginUser(formLogin);

        if (response.success === true) {
          Cookies.set("Authorization", response?.data?.token);

          setToken(response?.data?.token)

          Swal.fire({
            icon: "success",
            title: "Login berhasil!",
            timer: 2000,
            showConfirmButton: false,
            position: "center",
          });
          setIsLoginPopupOpen(true);
          if (response?.data?.alamat !== null) {
            return router.push("/");
          } else {
            return router.push("/profile");
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Login gagal. Periksa NIK dan password Anda.",
            timer: 2000,
            showConfirmButton: false,
            position: "center",
          });
        }

      } catch (error) {
        console.log(error);
      } finally {
        setFirstLoading(false);
        setHasSubmitted(false);
        setIsLoginPopupOpen(false)
        setLoginModal(false)
      }
    }
  };

  return (
    <>
      {navWhite() ? (
        <section
          className={`flex flex-row justify-center items-center self-center bg-neutral-50 shadow-md w-full py-2 fixed z-50 transition-all duration-1000`}>
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

            <div className="w-full flex flex-row justify-end gap-x-6">
              <div className="w-full flex flex-row justify-end items-center gap-x-5">
                <Link
                  href="/about-us"
                  className={`text-neutral-700 font-normal text-[16px] px-2 hover:bg-black hover:py-2 hover:bg-opacity-30 hover:rounded-md`}>
                  Tentang Kami
                </Link>

                <Link
                  href="/travel"
                  className={`text-neutral-700 font-normal text-[16px] hover:bg-black hover:py-2 px-2 hover:bg-opacity-30 hover:rounded-md`}>
                  Travel
                </Link>

                <Link
                  href="/rent"
                  className={`text-neutral-600 font-normal text-[16px] hover:bg-black hover:py-2 px-2 hover:bg-opacity-30 hover:rounded-md`}>
                  Rental
                </Link>

                <Link
                  href="/hotel"
                  className={`text-neutral-600 font-normal text-[16px] hover:bg-black hover:py-2 px-2 hover:bg-opacity-30 hover:rounded-md`}>
                  Hotel
                </Link>

                <Link
                  href="/package"
                  className={`text-neutral-700 font-normal text-[16px] hover:bg-black hover:py-2 px-2 hover:bg-opacity-30 hover:rounded-md`}>
                  Paket
                </Link>

                <Link
                  href="/article"
                  className={`text-neutral-700 font-normal text-[16px] hover:bg-black hover:py-2 px-2 hover:bg-opacity-30 hover:rounded-md`}>
                  Artikel
                </Link>
              </div>

              {token ? (
                <Link
                  href={"/profile"}
                  className="w-3/12 flex flex-row items-center border border-grey-100 rounded-lg px-3 py-1 gap-x-3">
                  <div className="w-3/12">
                    {profile && (
                      <div className="w-10 h-10">
                        <Image
                          src={profile.image_url}
                          alt="User Profile"
                          width={100}
                          height={100}
                          className="w-full h-full rounded-full"
                        />
                      </div>
                    )}
                  </div>

                  <div className="w-full">
                    <p className="text-neutral-700 hover:underline">
                      {profile && profile?.nama}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="flex flex-row justify-end gap-x-3">
                  <Link href={"/register"}>
                    <Button
                      className={`${
                        isScrolledPast
                          ? "bg-primary-700 text-neutral-50"
                          : "bg-primary-700 border border-neutral-50 text-neutral-50"
                      }  px-8 py-4 w-full rounded-md hover:bg-primary-600`}>
                      Daftar
                    </Button>
                  </Link>

                  <AlertDialog
                    open={isLoginPopupOpen}
                    onOpenChange={setIsLoginPopupOpen}>
                    <AlertDialogTrigger>
                      <div
                        className={`hover:bg-primary-600 border border-primary-700 text-primary-700 px-8 py-1.5 w-full rounded-md`}>
                        Masuk
                      </div>
                    </AlertDialogTrigger>

                    <AlertDialogContent className="bg-white w-4/12 px-5 py-5 gap-y-5">
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
                        <form
                          onSubmit={handleSubmitLogin}
                          className="w-full flex flex-col gap-y-3">
                          <div className="w-full flex flex-col gap-y-5">
                            <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                              <Label
                                htmlFor="name"
                                className="focus-within:text-primary-700">
                                Nama Lengkap
                              </Label>

                              <Input
                                id="email"
                                name="email"
                                value={formLogin.email}
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                  setFormLogin({
                                    ...formLogin,
                                    email: e.target.value,
                                  })
                                }
                                type="email"
                                className="w-full focus-visible:text-neutral-700 focus-visible:border focus-visible:border-primary-700"
                                placeholder="Masukkan Email Anda"
                              />
                            </div>
                            {hasSubmitted && errors?.email?._errors && (
                              <div className="text-error-700 text-[12px] md:text-[14px]">
                                {errors.email._errors[0]}
                              </div>
                            )}

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
                                  value={formLogin.password}
                                  onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                  ) =>
                                    setFormLogin({
                                      ...formLogin,
                                      password: e.target.value,
                                    })
                                  }
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
                            {hasSubmitted && errors?.password?._errors && (
                              <div className="text-error-700 text-[12px] md:text-[14px]">
                                {errors.password._errors[0]}
                              </div>
                            )}
                          </div>

                          <div className="w-full flex flex-col gap-y-6">
                            <p className="text-end text-primary-700 ">
                              Lupa Kata Sandi
                            </p>

                            <div className="w-full flex flex-row">
                              <Button
                                type="submit"
                                disabled={firstLoading ? true : false}
                                className="w-full bg-primary-700 text-neutral-50 text-[18px] py-6">
                                {firstLoading ? (
                                  <Loader className="animate-spin" />
                                ) : (
                                  "Masuk"
                                )}
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

                        <div className="text-neutral-700 text-center">
                          Kamu belum punya akun?{" "}
                          <Link href={"/register"} className="text-primary-700">
                            Daftar
                          </Link>
                        </div>
                      </div>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
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

            <div className="w-full flex flex-row gap-x-8" key={token}>
              <div className="w-full flex flex-row justify-end items-center gap-x-8">
                <Link
                  href="/about-us"
                  className={`${
                    isScrolledPast ? "text-neutral-600" : "text-neutral-50"
                  } font-normal text-[16px] hover:bg-black hover:py-2 px-2 hover:bg-opacity-30 hover:rounded-md`}>
                  Tentang Kami
                </Link>

                <Link
                  href="/travel"
                  className={`${
                    isScrolledPast ? "text-neutral-600" : "text-neutral-50"
                  } font-normal text-[16px] hover:bg-black hover:py-2 px-2 hover:bg-opacity-30 hover:rounded-md`}>
                  Travel
                </Link>

                <Link
                  href="/rent"
                  className={`${
                    isScrolledPast ? "text-neutral-600" : "text-neutral-50"
                  } font-normal text-[16px] hover:bg-black hover:py-2 px-2 hover:bg-opacity-30 hover:rounded-md`}>
                  Rental
                </Link>

                <Link
                  href="/hotel"
                  className={`${
                    isScrolledPast ? "text-neutral-600" : "text-neutral-50"
                  } font-normal text-[16px] hover:bg-black hover:py-2 px-2 hover:bg-opacity-30 hover:rounded-md`}>
                  Hotel
                </Link>

                <Link
                  href="/package"
                  className={`${
                    isScrolledPast ? "text-neutral-600" : "text-neutral-50"
                  } font-normal text-[16px] hover:bg-black hover:py-2 px-2 hover:bg-opacity-30 hover:rounded-md`}>
                  Paket
                </Link>

                <Link
                  href="/article"
                  className={`${
                    isScrolledPast ? "text-neutral-600" : "text-neutral-50"
                  } font-normal text-[16px] hover:bg-black hover:py-2 px-2 hover:bg-opacity-30 hover:rounded-md`}>
                  Artikel
                </Link>
              </div>

              {token ? (
                <Link
                  href={"/profile"}
                  className="w-3/12 flex flex-row items-center border border-grey-100 rounded-lg px-3 py-1 gap-x-3">
                  <div className="w-3/12">
                    {profile && (
                      <div className="w-10 h-10">
                        <Image
                          src={profile?.image_url}
                          alt="User Profile"
                          width={100}
                          height={100}
                          className="w-full h-full rounded-full"
                        />
                      </div>
                    )}
                  </div>

                  <div className="w-full">
                    <p
                      className={`${isScrolledPast ? "text-neutral-700" : "text-neutral-50"} hover:underline`}>
                      {profile && profile?.nama}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="flex flex-row justify-end gap-x-3">
                  <Link href={"/register"}>
                    <Button
                      className={`${
                        isScrolledPast
                          ? "bg-primary-700 text-neutral-50"
                          : "bg-primary-700 border border-neutral-50 text-neutral-50"
                      }  px-8 py-4 w-full rounded-md hover:bg-primary-600`}>
                      Daftar
                    </Button>
                  </Link>

                  <AlertDialog open={loginModal} onOpenChange={setLoginModal}>
                    <AlertDialogTrigger>
                      <div
                        className={`${isScrolledPast ? "border border-primary-700 text-primary-700" : "border border-neutral-50 text-neutral-50"} px-8 py-1.5 w-full hover:bg-primary-600 rounded-md`}>
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
                        <form
                          onSubmit={handleSubmitLogin}
                          className="w-full flex flex-col gap-y-3">
                          <div className="w-full flex flex-col gap-y-5">
                            <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                              <Label
                                htmlFor="name"
                                className="focus-within:text-primary-700">
                                Nama Lengkap
                              </Label>

                              <Input
                                id="email"
                                name="email"
                                value={formLogin.email}
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                  setFormLogin({
                                    ...formLogin,
                                    email: e.target.value,
                                  })
                                }
                                type="email"
                                className="w-full focus-visible:text-neutral-700 focus-visible:border focus-visible:border-primary-700"
                                placeholder="Masukkan Email Anda"
                              />
                            </div>
                            {hasSubmitted && errors?.email?._errors && (
                              <div className="text-error-700 text-[12px] md:text-[14px]">
                                {errors.email._errors[0]}
                              </div>
                            )}

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
                                  value={formLogin.password}
                                  onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                  ) =>
                                    setFormLogin({
                                      ...formLogin,
                                      password: e.target.value,
                                    })
                                  }
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
                            {hasSubmitted && errors?.password?._errors && (
                              <div className="text-error-700 text-[12px] md:text-[14px]">
                                {errors.password._errors[0]}
                              </div>
                            )}
                          </div>

                          <div className="w-full flex flex-col gap-y-6">
                            <p className="text-end text-primary-700 ">
                              Lupa Kata Sandi
                            </p>

                            <div className="w-full flex flex-row">
                              <Button
                                type="submit"
                                disabled={firstLoading ? true : false}
                                className="w-full bg-primary-700 text-neutral-50 text-[18px] py-6">
                                {firstLoading ? (
                                  <Loader className="animate-spin" />
                                ) : (
                                  "Masuk"
                                )}
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
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
