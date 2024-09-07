"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { patchPasswordUserChange } from "@/services/api";
import { formSubmitChangePasswordSchema } from "@/validations";
import { Eye, EyeOff, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { z } from "zod";

export default function UserUpdateProfilePage() {
  const router = useRouter();
  const [seen, setSeen] = useState(true);
  const [seenSecond, setSeenSecond] = useState(true);
  const [seenThird, setSeenThird] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [form, setForm] = useState({
    password: "",
    new_password: "",
    confirm_password: "",
  });

  const validateFormChangePassword = async () => {
    try {
      await formSubmitChangePasswordSchema.parseAsync(form);
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
      validateFormChangePassword();
    }
  }, [form, hasSubmitted]);

  const handleSubmitChangePassword = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setHasSubmitted(true);

    const isValid = await validateFormChangePassword();

    if (isValid) {
      setIsLoading(true);

      try {
        const response = await patchPasswordUserChange(form);

        if (response.success === true) {
          Swal.fire({
            icon: "success",
            title: "Berhasil mengganti kata sandi baru",
            timer: 2000,
            showConfirmButton: false,
            position: "center",
          });

          router.push("/profile");
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

  const isPasswordMatching = form.new_password === form.confirm_password;

  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full bg-neutral-50 border px-5 py-5 border-grey-100 rounded-lg flex flex-col mt-5 md:mt-32 gap-y-20 pb-12">
        <form onSubmit={handleSubmitChangePassword}>
          <div className="w-full flex flex-col gap-y-3">
            <div className="w-full flex flex-col gap-y-2">
              <h4 className="text-neutral-700 font-normal text-[20px]">
                Atur Kata Sandi Baru
              </h4>

              <p>
                Untuk keamanan akun Anda, mohon untuk tidak menyebarkan password
                Anda ke orang lain.
              </p>
            </div>

            <div className="w-full h-[1px] bg-grey-100"></div>

            <div className="w-full flex flex-col border border-grey-100 rounded-lg p-4 gap-y-5">
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
                    htmlFor="new-password"
                    className="focus-within:text-primary-700">
                    Kata Sandi Baru
                  </Label>

                  <div className="focus-within:border focus-within:border-primary-700 flex items-center mt-1 justify-between rounded-lg bg-transparent text-[14px] w-full h-[40px] font-normal border border-grey-50 placeholder:text-[14px] placeholder:text-neutral-700">
                    <Input
                      id="new-password"
                      name="new_password"
                      autoComplete="true"
                      value={form.new_password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setForm({
                          ...form,
                          new_password: e.target.value,
                        })
                      }
                      type={!seenSecond ? "text" : "password"}
                      className="w-full focus-visible:text-neutral-700 border-none outline-none bg-transparent"
                      placeholder="Masukkan Kata Sandi"
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

                  {hasSubmitted && errors?.new_password?._errors && (
                    <div className="text-error-700 text-[12px] md:text-[14px]">
                      {errors.new_password._errors[0]}
                    </div>
                  )}
                </div>

                <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                  <Label
                    htmlFor="confirm-password"
                    className="focus-within:text-primary-700">
                    Konfirmasi Kata Sandi Baru
                  </Label>

                  <div className="focus-within:border focus-within:border-primary-700 flex items-center mt-1 justify-between rounded-lg bg-transparent text-[14px] w-full h-[40px] font-normal border border-grey-50 placeholder:text-[14px] placeholder:text-neutral-700">
                    <Input
                      id="confirm-password"
                      name="confirm_password"
                      autoComplete="true"
                      value={form.confirm_password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setForm({
                          ...form,
                          confirm_password: e.target.value,
                        })
                      }
                      type={!seenThird ? "text" : "password"}
                      className="w-full focus-visible:text-neutral-700 border-none outline-none bg-transparent"
                      placeholder="Masukkan Kata Sandi"
                    />

                    <div
                      onClick={() => setSeenThird(!seenThird)}
                      className="p-2 cursor-pointer">
                      {seenThird ? (
                        <EyeOff className="text-neutral-400 w-[20px] h-[20px]" />
                      ) : (
                        <Eye className="text-neutral-400 w-[20px] h-[20px]" />
                      )}
                    </div>
                  </div>
                  {!isPasswordMatching && (
                    <div className="text-error-700 text-[12px] md:text-[14px]">
                      Kata sandi dan konfirmasi kata sandi tidak cocok.
                    </div>
                  )}

                  {hasSubmitted && errors?.confirm_password?._errors && (
                    <div className="text-error-700 text-[12px] md:text-[14px]">
                      {errors.confirm_password._errors[0]}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="w-4/12">
              <Button
                type="submit"
                disabled={!isPasswordMatching || isLoading}
                className="bg-primary-700 py-4 px-2 w-full text-neutral-50">
                {isLoading ? (
                  <Loader className="animate-spin" />
                ) : (
                  " Perbarui Kata Sandi"
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
