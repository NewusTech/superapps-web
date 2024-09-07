"use client";

import FollowFooter from "@/components/pages/footer";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useToken from "@/hooks/useToken";
import { loginUser } from "@/services/api";
import { formSignInSchema } from "@/validations";
import { House, Package, UserCircle, Van } from "@phosphor-icons/react";
import { Eye, EyeOff, Loader, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { z } from "zod";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { followes } from "@/constants/main";

export default function BottomMenu() {
  const pathName = usePathname();

  const [loginModal, setLoginModal] = useState(false);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [firstLoading, setFirstLoading] = useState(false);
  const [seen, setSeen] = useState(true);

  const token = useToken();
  const router = useRouter();

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

  const handleProfile = () => {
    if (token) return router.push("/profile");
    setLoginModal(true)
  };

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

          Swal.fire({
            icon: "success",
            title: "Login berhasil!",
            timer: 2000,
            showConfirmButton: false,
            position: "center",
          });
          if (response?.data?.alamat !== null) {
            return router.push("/");
          } else {
            return router.push("/profile");
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Login gagal. Email dan password Anda.",
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
        setLoginModal(false);
      }
    }
  };

  return (
    <section className="grid grid-cols-5 rounded-t-xl border border-grey-100 place-items-center w-full px-2 py-4">
      <Link
        href={"/"}
        className={`${
          pathName === "/" ? "bg-primary-700 rounded-xl" : ""
        } grid grid-rows-2 place-items-center gap-y-2 w-full p-2`}
      >
        <House
          className={`w-5 h-5 ${
            pathName === "/" ? "text-neutral-50" : "text-primary-700"
          } `}
        />

        <p
          className={`${
            pathName === "/" ? "text-neutral-50" : "text-primary-700"
          } font-normal text-[12px]`}
        >
          Home
        </p>
      </Link>

      <Link
        href={"/travel"}
        className={`${
          pathName === "/travel" ? "bg-primary-700 rounded-xl" : ""
        } grid grid-rows-2 place-items-center gap-y-2 w-full p-2`}
      >
        <Van
          className={`w-5 h-5 ${
            pathName === "/travel" ? "text-neutral-50" : "text-primary-700"
          }`}
        />

        <p
          className={`${
            pathName === "/travel" ? "text-neutral-50" : "text-primary-700"
          } font-normal text-[12px]`}
        >
          Travel
        </p>
      </Link>

      <Link
        href={"/package"}
        className={`${
          pathName === "/package" ? "bg-primary-700 rounded-xl" : ""
        } grid grid-rows-2 place-items-center gap-y-2 w-full p-2`}
      >
        <Package
          className={`w-5 h-5 ${
            pathName === "/package" ? "text-neutral-50" : "text-primary-700"
          }`}
        />

        <p
          className={`${
            pathName === "/package" ? "text-neutral-50" : "text-primary-700"
          } font-normal text-[12px]`}
        >
          Paket
        </p>
      </Link>

      <Link
        href={"/rent"}
        className={`${
          pathName === "/rent" ? "bg-primary-700 rounded-xl" : ""
        } grid grid-rows-2 place-items-center gap-y-2 w-full p-2`}
      >
        <Van
          className={`w-5 h-5 ${
            pathName === "/rent" ? "text-neutral-50" : "text-primary-700"
          }`}
        />

        <p
          className={`${
            pathName === "/rent"
              ? "text-neutral-50 rounded-xl"
              : "text-primary-700"
          } font-normal text-[12px]`}
        >
          Rental
        </p>
      </Link>

      <div
        onClick={handleProfile}
        className={`${
          pathName === "/profile" ? "bg-primary-700 rounded-xl" : ""
        } grid grid-rows-2 place-items-center gap-y-2 w-full p-2`}
      >
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
          } font-normal text-[12px]`}
        >
          Profile
        </p>
      </div>
      <AlertDialog open={loginModal} onOpenChange={setLoginModal}>
        <AlertDialogContent className="bg-white w-[90%] md:w-4/12 px-5 py-5 gap-y-5">
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
              className="w-full flex flex-col gap-y-3"
            >
              <div className="w-full flex flex-col gap-y-5">
                <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                  <Label
                    htmlFor="name"
                    className="focus-within:text-primary-700"
                  >
                    Nama Lengkap
                  </Label>

                  <Input
                    id="email"
                    name="email"
                    value={formLogin.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
                    className="focus-within:text-primary-700"
                  >
                    Kata Sandi
                  </Label>

                  <div className="focus-within:border focus-within:border-primary-700 flex items-center mt-1 justify-between rounded-lg bg-transparent text-[14px] w-full h-[40px] font-normal border border-grey-50 placeholder:text-[14px] placeholder:text-neutral-700">
                    <Input
                      id="password"
                      name="password"
                      value={formLogin.password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
                {hasSubmitted && errors?.password?._errors && (
                  <div className="text-error-700 text-[12px] md:text-[14px]">
                    {errors.password._errors[0]}
                  </div>
                )}
              </div>

              <div className="w-full flex flex-col gap-y-6">
                <Link
                  href={"/forgot-password"}
                  className="text-end hover:underline hover:text-primary-600 text-primary-700 "
                >
                  Lupa Kata Sandi
                </Link>

                <div className="w-full flex flex-row">
                  <Button
                    type="submit"
                    disabled={firstLoading ? true : false}
                    className="w-full bg-primary-700 text-neutral-50 text-[18px] py-6"
                  >
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
    </section>
  );
}
