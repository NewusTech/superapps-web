"use client";

import FormInput from "@/components/formInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function UserUpdateProfilePage() {
  const router = useRouter();
  const [seen, setSeen] = useState(true);
  const [seenSecond, setSeenSecond] = useState(true);
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full bg-neutral-50 border px-5 py-5 border-grey-100 rounded-lg flex flex-col mt-5 md:mt-32 gap-y-20 pb-12">
        <form>
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
                </div>

                <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                  <Label
                    htmlFor="confirm-password"
                    className="focus-within:text-primary-700">
                    Konfirmasi Kata Sandi
                  </Label>

                  <div className="focus-within:border focus-within:border-primary-700 flex items-center mt-1 justify-between rounded-lg bg-transparent text-[14px] w-full h-[40px] font-normal border border-grey-50 placeholder:text-[14px] placeholder:text-neutral-700">
                    <Input
                      id="confirm-password"
                      name="password"
                      autoComplete="true"
                      value={form.confirmPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setForm({
                          ...form,
                          confirmPassword: e.target.value,
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
                </div>
              </div>
            </div>

            <div className="w-4/12">
              <Button className="bg-primary-700 py-4 px-2 w-full text-neutral-50">
                Perbarui Kata Sandi
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
