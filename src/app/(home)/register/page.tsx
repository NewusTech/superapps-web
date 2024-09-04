"use client";

import FollowFooter from "@/components/pages/footer";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { followes } from "@/constants/main";
import { Eye, EyeOff, Loader, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser, registerUser } from "@/services/api";
import { formRegistrationSchema, formSignInSchema } from "@/validations";
import { z } from "zod";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

export default function RegisterScreen() {
  const router = useRouter();
  const [seen, setSeen] = useState(true);
  const [seenSecond, setSeenSecond] = useState(true);
  const [firstLoading, setFirstLoading] = useState(false);
  const [secondLoading, setSecondLoading] = useState(false);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [formRegister, setFormRegister] = useState({
    nama: "",
    email: "",
    no_telp: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [errorsRegister, setErrorsRegister] = useState<any>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasSubmittedRegister, setHasSubmittedRegister] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const validateFormRegister = async () => {
    try {
      await formRegistrationSchema.parseAsync(formRegister);
      setErrorsRegister({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.format();
        setErrorsRegister(formattedErrors);
      }
      setSecondLoading(false);
      return false;
    }
  };

  useEffect(() => {
    if (hasSubmittedRegister) {
      validateFormRegister();
    }
  }, [formRegister, hasSubmittedRegister]);

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

  const handleSubmitRegistration = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setHasSubmittedRegister(true);

    const isValid = await validateFormRegister();

    const { confirmPassword, ...dataToSubmit } = formRegister;

    if (isValid) {
      setSecondLoading(true);

      try {
        const response = await registerUser(dataToSubmit);

        console.log(response, "ini response");

        if (response.success === true) {
          setFormRegister({
            nama: "",
            email: "",
            no_telp: "",
            password: "",
            confirmPassword: "",
          });
          Swal.fire({
            icon: "success",
            title: "Berhasil membuat akun, Silahkan Login!",
            timer: 2000,
            showConfirmButton: false,
            position: "center",
          });
          setIsLoginPopupOpen(true);
        } else {
          Swal.fire({
            icon: "error",
            title: `${response.message} dan Gagal membuat akun!`,
            timer: 2000,
            showConfirmButton: false,
            position: "center",
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSecondLoading(false);
        setHasSubmittedRegister(false);
      }
    }
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
          Cookies.set("Authorization", response?.data?.token, { expires: 1 });
          setIsLoginPopupOpen(false);
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
      }
    }
  };

  const isPasswordMatching =
    formRegister.password === formRegister.confirmPassword;

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

          <div className="w-full md:w-5/12 bg-white border border-grey-100 rounded-lg shadow-lg p-4 flex flex-col gap-y-5">
            <div className="w-full flex flex-col">
              <form
                onSubmit={handleSubmitRegistration}
                className="w-full flex flex-col gap-y-3">
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
                      value={formRegister.nama}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormRegister({
                          ...formRegister,
                          nama: e.target.value,
                        })
                      }
                      type="text"
                      className="w-full focus-visible:text-neutral-700 focus-visible:border focus-visible:border-primary-700"
                      placeholder="Masukkan Nama Lengkap"
                    />
                    {hasSubmittedRegister && errorsRegister?.nama?._errors && (
                      <div className="text-error-700 text-[12px] md:text-[14px]">
                        {errorsRegister.nama._errors[0]}
                      </div>
                    )}
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
                      value={formRegister.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormRegister({
                          ...formRegister,
                          email: e.target.value,
                        })
                      }
                      type="email"
                      className="w-full focus-visible:text-neutral-700 focus-visible:border focus-visible:border-primary-700"
                      placeholder="Masukkan Email"
                    />

                    {hasSubmittedRegister && errorsRegister?.email?._errors && (
                      <div className="text-error-700 text-[12px] md:text-[14px]">
                        {errorsRegister.email._errors[0]}
                      </div>
                    )}
                  </div>

                  <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                    <Label
                      htmlFor="no-telp"
                      className="focus-within:text-primary-700">
                      Nomor Telepon
                    </Label>

                    <Input
                      id="no-telp"
                      name="no_telp"
                      value={formRegister.no_telp}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormRegister({
                          ...formRegister,
                          no_telp: e.target.value,
                        })
                      }
                      type="text"
                      inputMode="numeric"
                      className="w-full focus-visible:text-neutral-700 focus-visible:border focus-visible:border-primary-700"
                      placeholder="Masukkan Email"
                    />
                    {hasSubmittedRegister &&
                      errorsRegister?.no_telp?._errors && (
                        <div className="text-error-700 text-[12px] md:text-[14px]">
                          {errorsRegister.no_telp._errors[0]}
                        </div>
                      )}
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
                        autoComplete="true"
                        value={formRegister.password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFormRegister({
                            ...formRegister,
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

                    {hasSubmittedRegister &&
                      errorsRegister?.password?._errors && (
                        <div className="text-error-700 text-[12px] md:text-[14px]">
                          {errorsRegister.password._errors[0]}
                        </div>
                      )}
                  </div>

                  <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                    <Label
                      htmlFor="konfirmasi-password"
                      className="focus-within:text-primary-700">
                      Konfirmasi Kata Sandi
                    </Label>

                    <div className="focus-within:border focus-within:border-primary-700 flex items-center mt-1 justify-between rounded-lg bg-transparent text-[14px] w-full h-[40px] font-normal border border-grey-50 placeholder:text-[14px] placeholder:text-neutral-700">
                      <Input
                        id="konfirmasi-password"
                        name="konfirmasi_password"
                        autoComplete="true"
                        value={formRegister.confirmPassword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFormRegister({
                            ...formRegister,
                            confirmPassword: e.target.value,
                          })
                        }
                        type={!seenSecond ? "text" : "password"}
                        className="w-full focus-visible:text-neutral-700 border-none outline-none bg-transparent"
                        placeholder="Masukkan Konfirmasi Kata Sandi"
                      />

                      <div
                        onClick={() => setSeenSecond(!seenSecond)}
                        className="p-2 cursor-pointer">
                        {seenSecond ? (
                          <EyeOff className="text-neutral-400 w-[20px] h-[20px]" />
                        ) : (
                          <Eye className="text-neutral-400 w-[20px] h-[20px]" />
                        )}
                      </div>
                    </div>
                  </div>
                  {!isPasswordMatching && (
                    <div className="text-error-700 text-[12px] md:text-[14px]">
                      Kata sandi dan konfirmasi kata sandi tidak cocok.
                    </div>
                  )}

                  {hasSubmittedRegister &&
                    errorsRegister?.confirmPassword?._errors && (
                      <div className="text-error-700 text-[12px] md:text-[14px]">
                        {errorsRegister.confirmPassword._errors[0]}
                      </div>
                    )}
                </div>

                <div className="w-full flex flex-col gap-y-6">
                  <p className="text-end text-primary-700 ">Lupa Kata Sandi</p>

                  <div className="w-full flex flex-row">
                    <Button
                      type="submit"
                      disabled={!isPasswordMatching || secondLoading}
                      className="w-full bg-primary-700 text-neutral-50 text-[18px] py-6">
                      {secondLoading ? (
                        <Loader className="animate-spin" />
                      ) : (
                        "Daftar"
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
                Kamu sudah punya akun?{" "}
                <AlertDialog
                  open={isLoginPopupOpen}
                  onOpenChange={setIsLoginPopupOpen}>
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
                      <form
                        onSubmit={handleSubmitLogin}
                        className="w-full flex flex-col gap-y-3">
                        <div className="w-full flex flex-col gap-y-5">
                          <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                            <Label
                              htmlFor="email"
                              className="focus-within:text-primary-700">
                              Email
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
