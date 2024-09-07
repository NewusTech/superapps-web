"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitEmailForgotPassword } from "@/services/api";
import { z } from "zod";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { formEmailSubmitForgotPasswordSchema } from "@/validations";

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const validateFormEmailForgotPassword = async () => {
    try {
      await formEmailSubmitForgotPasswordSchema.parseAsync(form);
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
      validateFormEmailForgotPassword();
    }
  }, [form, hasSubmitted]);

  const handleSubmitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSubmitted(true);

    const isValid = await validateFormEmailForgotPassword();

    if (isValid) {
      setIsLoading(true);
      try {
        const response = await SubmitEmailForgotPassword(form);

        if (response.success === true) {
          setForm({
            email: "",
          });
          Swal.fire({
            icon: "success",
            title: "Silahkan cek email anda!",
            timer: 2000,
            showConfirmButton: false,
            position: "center",
          });
          router.push(`/register`);
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
      }
    }
  };

  return (
    <section className="w-full flex flex-col items-center bg-white h-full pt-32 pb-96">
      <div className="w-10/12 flex flex-col gap-y-5">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="font-semibold text-center text-neutral-700 text-[26px]">
            Selamat Datang di Website Rama Tranz
          </h2>
          <p className="text-center">
            Untuk mendapatkan notifikasi reset password harus isi email dan
            submit berdasarkan email yang terdaftar.
          </p>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-y-5">
          <h4 className="font-semibold text-neutral-700 text-[24px]">
            Halaman Lupa Kata Sandi
          </h4>

          <div className="w-full md:w-5/12 bg-white border border-grey-100 rounded-lg shadow-lg p-4 flex flex-col gap-y-5">
            <div className="w-full flex flex-col">
              <form
                onSubmit={handleSubmitEmail}
                className="w-full flex flex-col gap-y-3">
                <div className="w-full flex flex-col gap-y-5">
                  <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                    <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                      <Label
                        htmlFor="email"
                        className="focus-within:text-primary-700">
                        Email
                      </Label>

                      <Input
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setForm({
                            ...form,
                            email: e.target.value,
                          })
                        }
                        type="email"
                        className="w-full focus-visible:text-neutral-700 focus-visible:border focus-visible:border-primary-700"
                        placeholder="Masukkan Email"
                      />

                      {hasSubmitted && errors?.email?._errors && (
                        <div className="text-error-700 text-[12px] md:text-[14px]">
                          {errors.email._errors[0]}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-y-6">
                  <div className="w-full flex flex-row">
                    <Button
                      type="submit"
                      disabled={isLoading ? true : false}
                      className="w-full bg-primary-700 text-neutral-50 text-[18px] py-6">
                      {isLoading ? (
                        <Loader className="animate-spin" />
                      ) : (
                        "Kirim"
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
