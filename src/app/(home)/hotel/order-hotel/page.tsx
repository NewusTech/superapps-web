"use client";

import FormInput from "@/components/formInput";
import SwitchInput from "@/components/switchInput";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AirVent } from "lucide-react";
import { WifiHigh } from "@phosphor-icons/react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function OrderHotelPage() {
  const router = useRouter();
  const [form, setForm] = useState<any>({
    name: "",
    nik: "",
    email: "",
    no_telp: "",
  });
  const [copyToPessanger, setCopyToPessanger] = useState<any>(false);

  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full flex flex-col mt-24 px-20">
        <form>
          <div className="w-full flex flex-col items-center mt-8 gap-y-5">
            <h4 className="w-full text-neutral-700 font-normal text-[24px]">
              Data Pemesan
            </h4>

            <div className="w-full flex flex-row gap-x-9">
              <div className="w-full flex flex-col border border-grey-100 rounded-lg shadow-md">
                <div className="w-full px-8 py-4 border-b border-grey-100">
                  <p className="text-neutral-700 font-normal text-[18px]">
                    Data Pemesan
                  </p>
                </div>

                <div className="w-full px-8 py-5 flex flex-col gap-y-8">
                  <div className="w-full flex flex-col">
                    <FormInput
                      name="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      id="name"
                      htmlFor="name"
                      label="Nama Lengkap"
                      placeholder="Nama Lengkap"
                      type="text"
                      className="w-full"
                      classLabel="text-neutral-700"
                    />
                  </div>

                  <div className="w-full flex flex-col">
                    <FormInput
                      name="nik"
                      value={form.nik}
                      onChange={(e) =>
                        setForm({ ...form, nik: e.target.value })
                      }
                      id="nik"
                      htmlFor="nik"
                      label="Nomor Induk Kependudukan"
                      placeholder="Nomor Induk Kependudukan"
                      type="number"
                      className="w-full"
                      classLabel="text-neutral-700"
                    />
                  </div>

                  <div className="w-full flex flex-col">
                    <FormInput
                      name="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      id="email"
                      htmlFor="email"
                      label="Email"
                      placeholder="Email"
                      type="email"
                      className="w-full"
                      classLabel="text-neutral-700"
                    />
                  </div>

                  <div className="w-full flex flex-col">
                    <FormInput
                      name="no_telp"
                      value={form.no_telp}
                      onChange={(e) =>
                        setForm({ ...form, no_telp: e.target.value })
                      }
                      id="no-telp"
                      htmlFor="no-telp"
                      label="Nomor Telepon"
                      placeholder="Nomor Telepon"
                      type="number"
                      className="w-full"
                      classLabel="text-neutral-700"
                    />
                  </div>

                  <div className="w-full flex flex-row gap-x-3">
                    <SwitchInput />
                    <p>Sama Dengan Pemesan</p>
                  </div>
                </div>
              </div>

              <div className="w-6/12">
                <Accordion type="single" collapsible>
                  <AccordionItem
                    className="w-full h-full border border-grey-100 rounded-xl flex flex-col"
                    value={`item-1`}>
                    <AccordionTrigger className="bg-neutral-50 text-neutral-700 rounded-xl text-[14px] md:text-[16px] text-start h-[50px] md:h-full pr-4">
                      <div className="w-full flex flex-row gap-x-3 px-3">
                        <p className="text-neutral-700 text-[20px]">
                          Pemesan Hotel
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="md:text-start text-justify w-full h-full px-4">
                      <div className="w-full flex flex-col">
                        <div className="w-full flex flex-col gap-y-5">
                          <h5 className="text-neutral-700 font-semibold text-[18px]">
                            Podomoro Golf View
                          </h5>

                          <div className="w-full flex flex-col gap-y-3">
                            <div className="w-full grid grid-cols-2">
                              <div className="w-full flex flex-row gap-x-4">
                                <p>CheckIn</p>

                                <p>: 23/09/2024</p>
                              </div>

                              <div className="w-full flex flex-row gap-x-4">
                                <p>Hari</p>

                                <p>: 23/09/2024</p>
                              </div>
                            </div>

                            <div className="w-full grid grid-cols-2">
                              <div className="w-full flex flex-row gap-x-4">
                                <p>CheckOut</p>

                                <p>: 23/09/2024</p>
                              </div>

                              <div className="w-full flex flex-row gap-x-4">
                                <p>Total</p>

                                <p>: 23/09/2024</p>
                              </div>
                            </div>
                          </div>

                          <div className="w-full flex flex-col gap-y-3">
                            <h5 className="text-neutral-700 font-semibold text-[18px]">
                              Fasiltitas
                            </h5>

                            <div className="w-full flex flex-row"></div>
                            <div className="w-full flex flex-col">
                              <div className="w-full grid grid-cols-2">
                                <div className="w-full flex flex-row items-center gap-x-3">
                                  <AirVent className="w-4 h-4 text-neutral-400" />

                                  <p>Air Conditioning</p>
                                </div>

                                <div className="w-full flex flex-row gap-x-3">
                                  <WifiHigh className="w-4 h-4 text-neutral-400" />

                                  <p>Internet & Wifi</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="w-full flex flex-row gap-x-9">
              <div className="w-full flex flex-col rounded-t-xl border border-grey-100 rounded-lg shadow-md gap-y-5">
                <div className="w-full px-8 py-4 rounded-t-xl bg-primary-700">
                  <p className="text-neutral-50 font-normal text-[18px]">
                    Data Pemesan
                  </p>
                </div>

                <div className="w-full px-8 py-5 flex flex-col gap-y-8 pb-10">
                  <div className="w-full grid grid-cols-2 gap-x-5">
                    <div className="w-full flex flex-col">
                      <FormInput
                        name="name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        id="name"
                        htmlFor="name"
                        label="Nama Lengkap"
                        placeholder="Nama Lengkap"
                        type="text"
                        className="w-full"
                        classLabel="text-neutral-700"
                      />
                    </div>

                    <div className="w-full flex flex-col">
                      <FormInput
                        name="nik"
                        value={form.nik}
                        onChange={(e) =>
                          setForm({ ...form, nik: e.target.value })
                        }
                        id="nik"
                        htmlFor="nik"
                        label="Nomor Induk Kependudukan"
                        placeholder="Nomor Induk Kependudukan"
                        type="number"
                        className="w-full"
                        classLabel="text-neutral-700"
                      />
                    </div>
                  </div>

                  <div className="w-full grid grid-cols-2 gap-x-5">
                    <div className="w-full flex flex-col">
                      <FormInput
                        name="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        id="email"
                        htmlFor="email"
                        label="Email"
                        placeholder="Email"
                        type="email"
                        className="w-full"
                        classLabel="text-neutral-700"
                      />
                    </div>

                    <div className="w-full flex flex-col">
                      <div className="flex flex-col gap-y-3">
                        <Label className="w-full">Hari</Label>

                        <div className="w-full flex items-center h-10 border pl-4 border-grey-100 bg-neutral-100 rounded-lg">
                          <p>4 Malam</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-3/12 flex flex-col items-center justify-center">
              <Button className="w-full bg-primary-700 hover:bg-primary-600 text-neutral-50 rounded-lg">
                Lanjut Form Pembayaran
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
