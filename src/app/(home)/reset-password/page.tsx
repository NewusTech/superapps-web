"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Loader, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { newPassword } from "@/services/api";
import { formSubmitNewPasswordSchema } from "@/validations";
import { z } from "zod";
import Swal from "sweetalert2";

export default function NewPasswordScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [seen, setSeen] = useState(true);
  const [seenSecond, setSeenSecond] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    password: "",
    password_confirmation: "",
    token: "",
    email: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [data, setData] = useState({
    token: "",
    email: "",
  });

  const token = searchParams.get("token");
  const email = searchParams.get("email");
  useEffect(() => {
    if (token && email) {
      setData({
        token: token || "",
        email: email || "",
      });
    }
  }, [searchParams]);

  const validateFormNewPassword = async () => {
    try {
      await formSubmitNewPasswordSchema.parseAsync(form);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.format();
        setErrors(formattedErrors);
      }
      setIsLoading(false);
      return false;
    }
  };

  useEffect(() => {
    if (hasSubmitted) {
      validateFormNewPassword();
    }
  }, [form, hasSubmitted]);

  const handleSubmitNewPassword = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setHasSubmitted(true);

    const isValid = await validateFormNewPassword();

    if (isValid) {
      setIsLoading(true);

      try {
        const response = await newPassword({
          ...form,
          token: data.token,
          email: data.email,
        });

        if (response.success === true) {
          Swal.fire({
            icon: "success",
            title:
              "Berhasil mengganti kata sandi baru, silahkan login kembali!",
            timer: 2000,
            showConfirmButton: false,
            position: "center",
          });

          router.push("/register");
        } else {
          Swal.fire({
            icon: "error",
            title: `${response.message}`,
            timer: 2000,
            showConfirmButton: false,
            position: "center",
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        setHasSubmitted(false);
      }
    }
  };

  const isPasswordMatching = form.password === form.password_confirmation;

  return (
    <section className="w-full flex flex-col items-center bg-white h-full pt-32 pb-96">
      <div className="w-10/12 flex flex-col gap-y-5">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="font-semibold text-neutral-700 text-[26px]">
            Selamat Datang di Website Rama Tranz
          </h2>
          <p className="text-center">Silahkan ganti kata sandi baru anda.</p>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-y-5">
          <h4 className="font-semibold text-neutral-700 text-[24px]">
            Halaman Reset Kata Sandi
          </h4>

          <div className="w-full md:w-5/12 bg-white border border-grey-100 rounded-lg shadow-lg p-4 flex flex-col gap-y-5">
            <div className="w-full flex flex-col">
              <form
                onSubmit={handleSubmitNewPassword}
                className="w-full flex flex-col gap-y-3">
                <div className="w-full flex flex-col gap-y-5">
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
                        value={form.password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setForm({
                            ...form,
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

                    {hasSubmitted && errors?.password?._errors && (
                      <div className="text-error-700 text-[12px] md:text-[14px]">
                        {errors.password._errors[0]}
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
                        name="password_confirmation"
                        autoComplete="true"
                        value={form.password_confirmation}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setForm({
                            ...form,
                            password_confirmation: e.target.value,
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

                  {hasSubmitted && errors?.password_confirmation?._errors && (
                    <div className="text-error-700 text-[12px] md:text-[14px]">
                      {errors.password_confirmation._errors[0]}
                    </div>
                  )}
                </div>

                <div className="w-full flex flex-col gap-y-6">
                  <div className="w-full flex flex-row">
                    <Button
                      type="submit"
                      disabled={!isPasswordMatching || isLoading}
                      className="w-full bg-primary-700 text-neutral-50 text-[18px] py-6">
                      {isLoading ? (
                        <Loader className="animate-spin" />
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
