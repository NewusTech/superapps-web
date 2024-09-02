"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid, FreeMode } from "swiper/modules";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Card from "@/components/ui/card/Card";
import { Minus } from "lucide-react";
import InputText from "@/components/ui/input/InputText";
import InputArea from "@/components/ui/input/InputArea";
import InputSelect from "@/components/ui/input/InputSelect";
import DateInput from "@/components/dateInnput/DateInput";
import ButtonCustom from "@/components/buttonCustom/ButtonCustom";
import FormInput from "@/components/formInput";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { areas } from "@/constants/main";
import { Check, Trash } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import DateFormInput from "@/components/dateFormInput/dateFormInput";
import { PaymentMenthodsInterface } from "@/types/interface";
import { getAllPaymentMethods } from "@/services/api";

export default function FormRental() {
  const router = useRouter();
  const dropRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageKTP, setImageKTP] = useState<File | null>(null);
  const [imageSwafoto, setImageSwafoto] = useState<File | null>(null);
  const [previewImageKTP, setPreviewImageKTP] = useState<string>("");
  const [previewImageSwafoto, setPreviewImageSwafoto] = useState<string>("");
  const [isChecked, setIsChecked] = useState(false);
  const [data, setData] = useState({
    nama: "",
    nik: "",
    email: "",
    no_telp: "",
    alamat: "",
    durasi_sewa: "",
    area: "",
    all_in: "",
    alamat_keberangkatan: "",
    tanggal_mulai_sewa: "",
    tanggal_akhir_sewa: "",
    username_fb: "",
    username_ig: "",
    catatan_sopir: "",
    image_ktp: "",
    image_swafoto: "",
    jam_keberangkatan: "",
  } as { [key: string]: any });
  const [payments, setPayments] = useState<PaymentMenthodsInterface>();
  const [detailImageActive, setDetailImageActive] = useState(
    "/assets/images/neededs/travel/travel-1.png"
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const [departureDate, setDepartureDate] = useState<Date>(new Date());
  const [returnDate, setReturnDate] = useState<Date>(new Date());

  const dummyImageRent = [
    {
      image: "/assets/images/neededs/about-image-1.png",
    },
    {
      image: "/assets/images/neededs/about-image-2.png",
    },
    {
      image: "/assets/images/neededs/about-image-3.png",
    },
    {
      image: "/assets/images/neededs/about-image-1.png",
    },
    {
      image: "/assets/images/neededs/about-image-2.png",
    },
    {
      image: "/assets/images/neededs/about-image-3.png",
    },
  ];

  const handleCheckboxChange = () => {
    const updateChecked = !isChecked;
    setIsChecked(updateChecked);
    setData({ ...data, all_in: updateChecked });
  };

  const handleImageKTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageKTP(file);
      setData({
        ...data,
        image_ktp: file.name,
      });
      const fileUrl = URL.createObjectURL(file);
      setPreviewImageKTP(fileUrl);
    }
  };

  const handleImageSwafotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageSwafoto(file);
      setData({
        ...data,
        image_swafoto: file.name,
      });
      const fileUrl = URL.createObjectURL(file);
      setPreviewImageSwafoto(fileUrl);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDropImageKTP = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const file = e.dataTransfer.files?.[0];
    if (file) {
      setImageKTP(file);
      setData({
        ...data,
        image_ktp: file.name,
      });
      const fileUrl = URL.createObjectURL(file);
      setPreviewImageKTP(fileUrl);
    }
  };

  const handleDropImageSwafoto = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const file = e.dataTransfer.files?.[0];
    if (file) {
      setImageSwafoto(file);
      setData({
        ...data,
        image_swafoto: file.name,
      });
      const fileUrl = URL.createObjectURL(file);
      setPreviewImageSwafoto(fileUrl);
    }
  };

  const handleRemoveImageKTP = () => {
    setImageKTP(null);
    setPreviewImageKTP("");
    setData({ ...data, image_ktp: "" });
  };

  const handleRemoveImageSwafoto = () => {
    setImageSwafoto(null);
    setPreviewImageSwafoto("");
    setData({ ...data, image_swafoto: "" });
  };

  const handleNewRent = () => {
    Object.keys(data)?.forEach((key: string) => {
      localStorage.setItem(key, data[key]);
    });

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/rent/payment-rent-order");
    }, 2000);
  };

  return (
    <section className="flex flex-col gap-5 md:w-full h-full md:mb-0 pb-80 px-1 md:px-[2rem] container">
      <div className="mt-32 w-full h-full min-h-svh p-2 flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row w-full gap-4 items-start justify-between">
          {/* Left */}
          <div className="flex flex-col w-full lg:w-1/2 gap-4">
            <div className="w-full h-[21rem] cursor-pointer ">
              <Image
                src={detailImageActive}
                alt="Ramatranz"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="grid grid-flow-col gap-4 h-[8rem] w-full overflow-x-auto cursor-grab"
              ref={scrollRef}>
              {dummyImageRent.map((data: any, i: number) => (
                <div
                  key={i}
                  className="w-[15rem] h-full overflow-hidden cursor-pointer">
                  <Image
                    src={data.image}
                    alt="Ramatranz"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                    onClick={() => setDetailImageActive(data.image)}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="flex flex-col gap-4 justify-between w-full lg:w-1/2 h-[30rem]">
            <Card className="flex flex-col gap-4 text-lg">
              <p className="text-xl font-bold p-2 border-b mb-7">
                Toyota Hiace Premio
              </p>
              <p className="text-gray-500">
                Nikmati berbagai fitur andalan Rama Trans dengan fasilitas
                modern, seperti kursi yang nyaman, AC, dan hiburan di dalam bus,
                yang membuka jalan bagi petualangan tak terlupakan dan solusi
                mobilitas yang lancar.
              </p>
            </Card>
            <Card className="flex flex-col gap-4">
              <p className="text-xl font-bold p-2 border-b mb-7">
                Spesifikasi - Toyota Hiace Premio:
              </p>
              <div className="flex flex-row gap-2">
                {/* left */}
                <div className="flex flex-col w-1/2 gap-3">
                  <div className="flex flex-row border-b p-1 justify-between">
                    <span className="text-gray-500">Body</span>
                    <span className="font-bold">:</span>
                    <span>Mini Bus</span>
                  </div>
                  <div className="flex flex-row border-b p-1 justify-between">
                    <span className="text-gray-500">Body</span>
                    <span className="font-bold">:</span>
                    <span>Mini Bus</span>
                  </div>
                  <div className="flex flex-row border-b p-1 justify-between">
                    <span className="text-gray-500">Body</span>
                    <span className="font-bold">:</span>
                    <span>Mini Bus</span>
                  </div>
                </div>
                {/* right */}
                <div className="flex flex-col w-1/2 gap-3">
                  <div className="flex flex-row border-b p-1 justify-between">
                    <span className="text-gray-500">Body</span>
                    <span className="font-bold">:</span>
                    <span>Mini Bus</span>
                  </div>
                  <div className="flex flex-row border-b p-1 justify-between">
                    <span className="text-gray-500">Body</span>
                    <span className="font-bold">:</span>
                    <span>Mini Bus</span>
                  </div>
                  <div className="flex flex-row border-b p-1 justify-between">
                    <span className="text-gray-500">Body</span>
                    <span className="font-bold">:</span>
                    <span>Mini Bus</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        {/* form penyewa */}
        <Card className="w-full" header="Data Pemesan">
          <div className="flex flex-col gap-4 mt-4">
            <div className="w-full flex flex-col">
              <FormInput
                name="nama"
                value={data.nama}
                onChange={(e) => setData({ ...data, nama: e.target.value })}
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
                value={data.nik}
                onChange={(e) => setData({ ...data, nik: e.target.value })}
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
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
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
                value={data.no_telp}
                onChange={(e) => setData({ ...data, no_telp: e.target.value })}
                id="no-telp"
                htmlFor="no-telp"
                label="Nomor Telepon"
                placeholder="Nomor Telepon"
                type="number"
                className="w-full"
                classLabel="text-neutral-700"
              />
            </div>

            <div className="w-full grid grid-cols-2 gap-x-5">
              <div className="w-full flex flex-col">
                <FormInput
                  name="username_ig"
                  value={data.username_ig}
                  onChange={(e) =>
                    setData({ ...data, username_ig: e.target.value })
                  }
                  id="username-ig"
                  htmlFor="username-ig"
                  label="Username Instagram"
                  placeholder="Username Instagram"
                  type="text"
                  className="w-full"
                  classLabel="text-neutral-700"
                />
              </div>

              <div className="w-full flex flex-col">
                <FormInput
                  name="username_fb"
                  value={data.username_fb}
                  onChange={(e) =>
                    setData({ ...data, username_fb: e.target.value })
                  }
                  id="username-fb"
                  htmlFor="username-fb"
                  label="Username FaceBook"
                  placeholder="Username FaceBook"
                  type="text"
                  className="w-full"
                  classLabel="text-neutral-700"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-3">
              <Label htmlFor="alamat" className="w-full">
                Alamat
              </Label>

              <div className="w-full">
                <Textarea
                  id="alamat"
                  name="alamat"
                  value={data.alamat}
                  onChange={(e) => setData({ ...data, alamat: e.target.value })}
                  placeholder="Alamat"
                  className="w-full h-40"
                />
              </div>
            </div>

            <div className="flex flex-col w-full h-full">
              <Label className="w-full">Upload Kartu Tanda Penduduk</Label>

              <div className="w-full flex flex-row">
                <div
                  ref={dropRef}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDropImageKTP}
                  className={`w-full ${
                    data?.image_ktp || previewImageKTP ? "md:w-8/12" : "w-full"
                  }  h-[100px] border-2 border-dashed rounded-xl mt-1 flex flex-col items-center justify-center`}>
                  <>
                    <input
                      type="file"
                      id="file-input-foto"
                      name="foto"
                      accept="image/*"
                      onChange={handleImageKTPChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="file-input-foto"
                      className="text-[16px] text-center text-neutral-600 p-2 md:p-4 font-light cursor-pointer">
                      Drag and drop file here or click to select file
                    </label>
                  </>
                </div>

                {(previewImageKTP || data?.image_ktp) && (
                  <div className="relative md:ml-4 w-full mt-1">
                    <div className="border-2 border-dashed flex justify-center rounded-xl p-2">
                      <div className="w-full h-full">
                        <Image
                          src={previewImageKTP || data?.image_ktp}
                          alt="Preview"
                          width={300}
                          height={300}
                          className="h-full rounded-xl p-4 md:p-4 w-full object-contain"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveImageKTP}
                        className="absolute bg-none -top-0 -right-0 md:-top-0 md:-right-0 text-neutral-800 p-1">
                        <Trash />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col w-full h-full">
              <Label className="w-full">Upload Swafoto atau Foto Selfie</Label>

              <div className="w-full flex flex-row">
                <div
                  ref={dropRef}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDropImageSwafoto}
                  className={`w-full ${
                    data?.image_swafoto || previewImageSwafoto
                      ? "md:w-8/12"
                      : "w-full"
                  }  h-[100px] border-2 border-dashed rounded-xl mt-1 flex flex-col items-center justify-center`}>
                  <>
                    <input
                      type="file"
                      id="file-input-foto-swafoto"
                      name="foto"
                      accept="image/*"
                      onChange={handleImageSwafotoChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="file-input-foto-swafoto"
                      className="text-[16px] text-center text-neutral-600 p-2 md:p-4 font-light cursor-pointer">
                      Drag and drop file here or click to select file
                    </label>
                  </>
                </div>

                {(previewImageSwafoto || data?.image_swafoto) && (
                  <div className="relative md:ml-4 w-full mt-1">
                    <div className="border-2 border-dashed flex justify-center rounded-xl p-2">
                      <div className="w-full h-full">
                        <Image
                          src={previewImageSwafoto || data?.image_swafoto}
                          alt="Preview"
                          width={300}
                          height={300}
                          className="h-full rounded-xl p-4 md:p-4 w-full object-contain"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveImageSwafoto}
                        className="absolute bg-none -top-0 -right-0 md:-top-0 md:-right-0 text-neutral-800 p-1">
                        <Trash />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
        {/* form Detail Sewa & Rental Mobil */}
        <Card className="w-full" header="Detail Sewa & Rental Mobil">
          <div className="flex flex-col gap-4 mt-4">
            <div className="w-full grid grid-cols-2 gap-x-5">
              <div className="w-full flex flex-col">
                <FormInput
                  name="durasi_sewa"
                  value={data.durasi_sewa}
                  onChange={(e) =>
                    setData({ ...data, durasi_sewa: e.target.value })
                  }
                  id="durasi sewa"
                  htmlFor="durasi sewa"
                  label="Durasi Sewa"
                  placeholder="Durasi Sewa"
                  type="number"
                  className="w-full"
                  classLabel="text-neutral-700"
                />
              </div>

              <div className="w-full flex flex-col">
                <FormInput
                  name="jam_keberangkatan"
                  value={data.jam_keberangkatan}
                  onChange={(e) =>
                    setData({ ...data, jam_keberangkatan: e.target.value })
                  }
                  id="jam-keberangkatan"
                  htmlFor="jam-keberangkatan"
                  label="Jam Keberangkatan"
                  placeholder="Jam Keberangkatan"
                  type="time"
                  className="w-full block"
                  classLabel="text-neutral-700"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-3">
              <Label className="w-full">Area Sewa</Label>

              <Select
                onValueChange={(value) => setData({ ...data, area: value })}>
                <SelectTrigger className="w-full border border-grey-100 rounded-lg outline-none text-[14px]">
                  <SelectValue placeholder="Pilih Area Sewa" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
                  {areas.map(
                    (item: { name: string; value: string }, i: number) => {
                      return (
                        <SelectItem key={i} value={item.value}>
                          {item.name}
                        </SelectItem>
                      );
                    }
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="w-full grid grid-cols-2 gap-x-5">
              <DateFormInput
                value={departureDate}
                setValue={setDepartureDate}
                label="Tanggal Mulai Sewa"
                className="w-full rounded-md"
                onChange={(value) =>
                  setData({ ...data, tanggal_mulai_sewa: value })
                }
              />

              <DateFormInput
                value={returnDate}
                setValue={setReturnDate}
                label="Tanggal Mulai Sewa"
                className="w-full rounded-md"
                onChange={(value) =>
                  setData({ ...data, tanggal_akhir_sewa: value })
                }
              />
            </div>

            <div className="w-full grid grid-cols-2 gap-x-5">
              <div className="w-full flex flex-col gap-y-3">
                <Label htmlFor="alamat-keberangkatan" className="w-full">
                  Alamat Penjemputan
                </Label>

                <div className="w-full">
                  <Textarea
                    id="alamat-keberangkatan"
                    name="alamat_keberangkatan"
                    value={data.alamat_keberangkatan}
                    onChange={(e) =>
                      setData({ ...data, alamat_keberangkatan: e.target.value })
                    }
                    placeholder="Alamat Penjemputan"
                    className="w-full h-40"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col gap-y-3">
                <Label htmlFor="catatan-sopir" className="w-full">
                  Catatan Sopir
                </Label>

                <div className="w-full">
                  <Textarea
                    id="catatan-sopir"
                    name="catatan_sopir"
                    value={data.catatan_sopir}
                    onChange={(e) =>
                      setData({ ...data, catatan_sopir: e.target.value })
                    }
                    placeholder="Masukkan Alamat Secara Rinci, Seperti: Blog Rumah, Gang, dan Nomor Rumah"
                    className="w-full h-40"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center w-full gap-y-3">
              <input
                type="checkbox"
                id="all-in"
                name="all-in"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="hidden"
              />
              <label
                htmlFor="all-in"
                className="flex items-center cursor-pointer select-none">
                <span
                  className={`w-5 h-5 rounded-full inline-block mr-2 border ${data.all_in ? "bg-success-700 border-success-700 text-neutral-50 flex items-center justify-center" : "bg-neutral-300 border-neutral-300 flex items-center justify-center"}`}>
                  {data.all_in ? (
                    <Check
                      size={16}
                      strokeWidth={3}
                      className="text-neutral-50"
                    />
                  ) : (
                    <Check
                      size={16}
                      strokeWidth={3}
                      className="text-neutral-50"
                    />
                  )}
                </span>
                <strong>All In</strong> (Biaya Tol, Kapal, dan BBM)
              </label>
            </div>
          </div>
        </Card>
        {/* Detail */}
        <Card className="" header="Rincian Harga">
          <div className="flex flex-col gap-4">
            <label className="flex flex-row items-center gap-2">
              <input type="checkbox" className="rounded-full" />
              <span>
                Saya Menyetujui{" "}
                <span className="text-primary-700">Syarat & Ketentuan</span>{" "}
                Rama Tranz
              </span>
            </label>
            <div className="p-3 bg-dange_light rounded-md flex flex-col w-full text-danger_base">
              <p>Catatan:</p>
              <p className="text-sm">
                Penyewa bertanggung jawab atas biaya makan dan akomodasi untuk
                pengemudi.
              </p>
            </div>
            <div className="flex flex-row items-center justify-between py-3 border-b">
              <p>Total Harga</p>
              <p className="text-primary-700 text-xl font-semibold">
                Rp.200.000
              </p>
            </div>
            <div className="w-full">
              <Button
                onClick={handleNewRent}
                type="submit"
                className="mt-4 w-full bg-primary-700 rounded-lg text-neutral-50">
                Lanjut Pembayaran
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
