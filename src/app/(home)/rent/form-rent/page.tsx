"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Card from "@/components/ui/card/Card";
import FormInput from "@/components/formInput";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { areas } from "@/constants/main";
import { Check } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import DateFormInput from "@/components/dateFormInput/dateFormInput";
import { formRentalSchema } from "@/validations";
import { calculateDaysBetweenDates, formatCurrency } from "@/helpers";
import {
  getDetailTravelCarId,
  getDisabledDate,
  getSyaratKetentuan,
} from "@/services/api";
import {
  DetailCarInterface,
  SyaratKetentuanInterface,
} from "@/types/interface";
import CardSpesificationScreen from "@/components/pages/rentals/cardSpesification";
import { RichTextDisplay } from "@/components/richTextDisplay";
import { Loader } from "lucide-react";

export default function FormRental() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedSyarat, setIsCheckedSyarat] = useState(false);
  const [disaledDates, setDisabledDates] = useState<string[]>([]);
  const [syarat, setSyarat] = useState<SyaratKetentuanInterface>();
  const [detailCar, setDetailCar] = useState<DetailCarInterface>();
  const [idCar, setIdCar] = useState<string>("");
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
    jam_keberangkatan: "",
  } as { [key: string]: any });
  const [detailImageActive, setDetailImageActive] = useState(
    "/assets/images/neededs/travel/travel-1.png"
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const [departureDate, setDepartureDate] = useState<Date>(new Date());
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [durationRent, setDurationRent] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const fetchDisabledDates = async (id: number) => {
    try {
      const response = await getDisabledDate(id);
      setDisabledDates(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDetailCarRent = async (id: number) => {
    try {
      const response = await getDetailTravelCarId(id);

      setDetailCar(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (idCar) {
      fetchDetailCarRent(Number(idCar));
      fetchDisabledDates(Number(idCar));
    }
  }, [idCar]);

  const fetchSyaratKetentuan = async (id: number) => {
    try {
      const response = await getSyaratKetentuan(id);
      setSyarat(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSyaratKetentuan(1);
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem("nama") ||
      localStorage.getItem("nik") ||
      localStorage.getItem("email") ||
      localStorage.getItem("no_telp") ||
      localStorage.getItem("alamat") ||
      localStorage.getItem("durasi_sewa") ||
      localStorage.getItem("area") ||
      localStorage.getItem("alamat_keberangkatan") ||
      localStorage.getItem("tanggal_mulai_sewa") ||
      localStorage.getItem("tanggal_akhir_sewa") ||
      localStorage.getItem("username_fb") ||
      localStorage.getItem("username_ig") ||
      localStorage.getItem("catatan_sopir") ||
      localStorage.getItem("jam_keberangkatan") ||
      localStorage.getItem("all_in") ||
      localStorage.getItem("travel_car_id")
    ) {
      let value = localStorage.getItem("all_in");
      let value_all_in;
      if (value === "true") {
        value_all_in = true;
      } else if (value === "false") {
        value_all_in = false;
      }

      let tanggalMulaiSewa = localStorage.getItem("tanggal_mulai_sewa");
      let tanggalAkhirSewa = localStorage.getItem("tanggal_akhir_sewa");
      if (tanggalMulaiSewa) {
        setDepartureDate(new Date(tanggalMulaiSewa));
      }
      if (tanggalAkhirSewa) {
        setReturnDate(new Date(tanggalAkhirSewa));
      }

      const id = localStorage.getItem("travel_car_id");
      if (id) {
        setIdCar(id);
      }

      setData({
        nama: localStorage.getItem("nama"),
        nik: localStorage.getItem("nik"),
        email: localStorage.getItem("email"),
        no_telp: localStorage.getItem("no_telp"),
        alamat: localStorage.getItem("alamat"),
        durasi_sewa: localStorage.getItem("durasi_sewa"),
        area: localStorage.getItem("area"),
        alamat_keberangkatan: localStorage.getItem("alamat_keberangkatan"),
        username_fb: localStorage.getItem("username_fb"),
        username_ig: localStorage.getItem("username_ig"),
        catatan_sopir: localStorage.getItem("catatan_sopir"),
        jam_keberangkatan: localStorage.getItem("jam_keberangkatan"),
        all_in: value_all_in,
      });
    }
  }, []);

  const handleCheckboxChange = () => {
    const updateChecked = !isChecked;
    setIsChecked(updateChecked);
    setData({ ...data, all_in: updateChecked });
  };

  useEffect(() => {
    const startDate = new Date(departureDate);
    const endDate = new Date(returnDate);

    const dayBetween = calculateDaysBetweenDates(startDate, endDate);
    setDurationRent(dayBetween.toString());
  }, [departureDate, returnDate]);

  const handleNewRent = () => {
    const parsedData = {
      ...data,
      tanggal_mulai_sewa: new Date(data.tanggal_mulai_sewa),
      tanggal_akhir_sewa: new Date(data.tanggal_akhir_sewa),
    };

    const result = formRentalSchema.safeParse(parsedData);
    if (!result.success) {
      const zodErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path.length > 0) {
          zodErrors[err.path[0]] = err.message;
        }
      });
      setErrors(zodErrors);
      return;
    }

    const formData: { [key: string]: string } = {
      ...data,
      durasi_sewa: durationRent,
      all_in: isChecked.toString(),
    };

    Object.keys(formData)?.forEach((key: string) => {
      localStorage.setItem(key, formData[key]);
    });

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/rent/payment-rent-order");
    }, 2000);
  };

  const handleCheckboxSyaratChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = event.target.checked;
    setIsCheckedSyarat(checked);
    if (checked) {
      setIsDialogOpen(true);
    }
  };

  const handleAgree = () => {
    setIsDialogOpen(false);
  };

  return (
    <section className="flex flex-col gap-5 w-full md:w-full h-full md:mb-0 pb-32 md:pb-80 md:px-[2rem]">
      <div className="md:mt-32 w-full h-full min-h-svh md:p-2 flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row w-full gap-4 items-start justify-between">
          {/* Left */}
          <div className="flex flex-col w-full md:w-1/2 gap-y-2 md:gap-4">
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
              className="grid grid-flow-col gap-x-2 md:gap-4 md:h-[8rem] w-full overflow-x-auto cursor-grab"
              ref={scrollRef}>
              {dummyImageRent.map((data: any, i: number) => (
                <div
                  key={i}
                  className="w-[8rem] md:w-[15rem] h-full overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <Image
                      src={data.image}
                      alt="Ramatranz"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      onClick={() => setDetailImageActive(data.image)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="flex flex-col gap-4 justify-between w-full lg:w-1/2 h-full px-2">
            <Card className="flex flex-col gap-4 text-lg">
              <p className="text-xl font-bold p-2 border-b mb-7">
                {detailCar && detailCar.type}
              </p>
              <p className="text-gray-500">
                {detailCar && detailCar.deskripsi}
              </p>
            </Card>
            <Card className="flex flex-col gap-4">
              <p className="text-xl font-bold p-2 border-b mb-7">
                Spesifikasi - {detailCar && detailCar.type}:
              </p>
              <div className="flex flex-row gap-2">
                {detailCar && <CardSpesificationScreen item={detailCar} />}
              </div>
            </Card>
          </div>
        </div>
        {/* form penyewa */}
        <div className="w-full flex flex-col px-2">
          <Card className="w-full" header="Data Pemesan">
            <div className="flex flex-col gap-4 mt-4">
              <div className="w-full flex flex-col">
                <FormInput
                  name="nama"
                  value={data.nama || ""}
                  onChange={(e) => setData({ ...data, nama: e.target.value })}
                  id="name"
                  htmlFor="name"
                  label="Nama Lengkap"
                  placeholder="Nama Lengkap"
                  type="text"
                  className={`${errors.nama ? "border border-error-700" : "border bg-grey-100"} bg-transparent w-full h-12`}
                  classLabel="text-neutral-700"
                />
                {errors.nama && (
                  <p className="text-error-700 text-sm">{errors.nama}</p>
                )}
              </div>

              <div className="w-full flex flex-col">
                <FormInput
                  name="nik"
                  value={data.nik || ""}
                  onChange={(e) => setData({ ...data, nik: e.target.value })}
                  id="nik"
                  htmlFor="nik"
                  label="Nomor Induk Kependudukan"
                  placeholder="Nomor Induk Kependudukan"
                  type="number"
                  className={`${errors.nik ? "border border-error-700" : "border bg-grey-100"} bg-transparent w-full h-12`}
                  classLabel="text-neutral-700"
                />
                {errors.nik && (
                  <p className="text-error-700 text-sm">{errors.nik}</p>
                )}
              </div>

              <div className="w-full flex flex-col">
                <FormInput
                  name="email"
                  value={data.email || ""}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  id="email"
                  htmlFor="email"
                  label="Email"
                  placeholder="Email"
                  type="email"
                  className={`${errors.email ? "border border-error-700" : "border bg-grey-100"} bg-transparent w-full h-12`}
                  classLabel="text-neutral-700"
                />
                {errors.email && (
                  <p className="text-error-700 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="w-full flex flex-col">
                <FormInput
                  name="no_telp"
                  value={data.no_telp || ""}
                  onChange={(e) =>
                    setData({ ...data, no_telp: e.target.value })
                  }
                  id="no-telp"
                  htmlFor="no-telp"
                  label="Nomor Telepon"
                  placeholder="Nomor Telepon"
                  type="number"
                  className={`${errors.no_telp ? "border border-error-700" : "border bg-grey-100"} bg-transparent w-full h-12`}
                  classLabel="text-neutral-700"
                />
                {errors.no_telp && (
                  <p className="text-error-700 text-sm">{errors.no_telp}</p>
                )}
              </div>

              <div className="w-full flex flex-col gap-y-4 md:grid grid-cols-2 gap-x-5">
                <div className="w-full flex flex-col">
                  <FormInput
                    name="username_ig"
                    value={data.username_ig || ""}
                    onChange={(e) =>
                      setData({ ...data, username_ig: e.target.value })
                    }
                    id="username-ig"
                    htmlFor="username-ig"
                    label="Username Instagram"
                    placeholder="Username Instagram"
                    type="text"
                    className={`${errors.username_ig ? "border border-error-700" : "border bg-grey-100"} bg-transparent w-full h-12`}
                    classLabel="text-neutral-700"
                  />
                  {errors.username_ig && (
                    <p className="text-error-700 text-sm">
                      {errors.username_ig}
                    </p>
                  )}
                </div>

                <div className="w-full flex flex-col">
                  <FormInput
                    name="username_fb"
                    value={data.username_fb || ""}
                    onChange={(e) =>
                      setData({ ...data, username_fb: e.target.value })
                    }
                    id="username-fb"
                    htmlFor="username-fb"
                    label="Username FaceBook"
                    placeholder="Username FaceBook"
                    type="text"
                    className={`${errors.username_fb ? "border border-error-700" : "border bg-grey-100"} bg-transparent w-full h-12`}
                    classLabel="text-neutral-700"
                  />
                  {errors.username_fb && (
                    <p className="text-error-700 text-sm">
                      {errors.username_fb}
                    </p>
                  )}
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
                    value={data.alamat || ""}
                    onChange={(e) =>
                      setData({ ...data, alamat: e.target.value })
                    }
                    placeholder="Alamat"
                    className={`${errors.alamat ? "border border-error-700" : "border bg-grey-100"} bg-transparent w-full h-40`}
                  />
                  {errors.alamat && (
                    <p className="text-error-700 text-sm">{errors.alamat}</p>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
        {/* form Detail Sewa & Rental Mobil */}
        <div className="w-full flex flex-col px-2">
          <Card className="w-full" header="Detail Sewa & Rental Mobil">
            <div className="flex flex-col gap-4 mt-4">
              <div className="w-full flex flex-col gap-y-4 md:grid grid-cols-2 gap-x-5">
                <div className="w-full flex flex-col">
                  <div className="flex flex-col gap-y-3">
                    <Label className="text-neutral-700">Durasi Sewa</Label>
                    <div className="w-full flex items-center pl-3 bg-transparent border border-grey-100 h-12 rounded-lg border-opacity-50">
                      <p className="text-neutral-300">{durationRent}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col">
                  <FormInput
                    name="jam_keberangkatan"
                    value={data.jam_keberangkatan || ""}
                    onChange={(e) =>
                      setData({ ...data, jam_keberangkatan: e.target.value })
                    }
                    id="jam-keberangkatan"
                    htmlFor="jam-keberangkatan"
                    label="Jam Keberangkatan"
                    placeholder="Jam Keberangkatan"
                    type="time"
                    className={`${errors.jam_keberangkatan ? "border border-error-700" : "border bg-grey-100"} bg-transparent w-full block h-12`}
                    classLabel="text-neutral-700"
                  />
                  {errors.jam_keberangkatan && (
                    <p className="text-error-700 text-sm">
                      {errors.jam_keberangkatan}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-col gap-y-3">
                <Label className="w-full">Area Sewa</Label>

                <Select
                  value={data?.area}
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

                {errors.area && (
                  <p className="text-error-700 text-sm">{errors.area}</p>
                )}
              </div>

              <div className="w-full flex flex-col gap-y-4 md:grid grid-cols-2 gap-x-5">
                <div className="w-full flex flex-col gap-y-2">
                  <DateFormInput
                    value={departureDate}
                    setValue={setDepartureDate}
                    label="Tanggal Mulai Sewa"
                    disabledDates={disaledDates}
                    className={`${errors.tanggal_mulai_sewa ? "text-error-700" : ""} bg-transparent w-full rounded-lg`}
                    onChange={(value) =>
                      setData({ ...data, tanggal_mulai_sewa: value })
                    }
                  />
                  {errors.tanggal_mulai_sewa && (
                    <p className="text-error-700 text-sm">
                      {errors.tanggal_mulai_sewa}
                    </p>
                  )}
                </div>

                <div className="w-full flex flex-col gap-y-2">
                  <DateFormInput
                    value={returnDate}
                    setValue={setReturnDate}
                    label="Tanggal Akhir Sewa"
                    disabledDates={disaledDates}
                    className={`${errors.tanggal_akhir_sewa ? "text-error-700" : ""} bg-transparent w-full rounded-lg`}
                    onChange={(value) =>
                      setData({ ...data, tanggal_akhir_sewa: value })
                    }
                  />
                  {errors.tanggal_akhir_sewa && (
                    <p className="text-error-700 text-sm">
                      {errors.tanggal_akhir_sewa}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-col gap-y-4 md:grid grid-cols-2 gap-x-5">
                <div className="w-full flex flex-col gap-y-3">
                  <Label htmlFor="alamat-keberangkatan" className="w-full">
                    Alamat Penjemputan
                  </Label>

                  <div className="w-full">
                    <Textarea
                      id="alamat-keberangkatan"
                      name="alamat_keberangkatan"
                      value={data.alamat_keberangkatan || ""}
                      onChange={(e) =>
                        setData({
                          ...data,
                          alamat_keberangkatan: e.target.value,
                        })
                      }
                      placeholder="Alamat Penjemputan"
                      className={`${errors.alamat_keberangkatan ? "border border-error-700" : "border bg-grey-100"} bg-transparent w-full h-40`}
                    />
                    {errors.alamat_keberangkatan && (
                      <p className="text-error-700 text-sm">
                        {errors.alamat_keberangkatan}
                      </p>
                    )}
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
                      value={data.catatan_sopir || ""}
                      onChange={(e) =>
                        setData({ ...data, catatan_sopir: e.target.value })
                      }
                      placeholder="Masukkan Alamat Secara Rinci, Seperti: Blog Rumah, Gang, dan Nomor Rumah"
                      className="bg-transparent w-full h-40"
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
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <strong>All In</strong> (Biaya Tol, Kapal, dan BBM)
                      </TooltipTrigger>
                      <TooltipContent className="mb-4 ml-20 w-5/12 p-4 bg-neutral-50 bg-opacity-70">
                        <p className="text-neutral-700">
                          Dengan layanan <strong>ALL IN</strong> Anda tidak
                          perlu khawatir tentang biaya tambahan selama
                          perjalanan.{" "}
                          <strong>
                            Semua biaya seperti tol, tiket kapal, dan bahan
                            bakar (BBM)
                          </strong>{" "}
                          sudah termasuk dalam satu harga yang Anda bayarkan.
                          Ini berarti Anda bisa menikmati perjalanan tanpa harus
                          memikirkan pengeluaran ekstra, sehingga lebih nyaman
                          dan praktis.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </label>
              </div>
            </div>
          </Card>
        </div>
        {/* Detail */}
        <div className="w-full flex flex-col px-2">
          <Card className="" header="Rincian Harga">
            <div className="flex flex-col gap-4">
              <div className="mt-4 flex flex-row gap-x-2">
                <Dialog open={isDialogOpen}>
                  <DialogTrigger className="flex items-center">
                    <input
                      type="checkbox"
                      name="term"
                      className="w-4 h-4"
                      checked={isCheckedSyarat}
                      onChange={handleCheckboxSyaratChange}
                    />
                  </DialogTrigger>
                  <DialogContent className="flex flex-col bg-neutral-50 rounded-xl p-1 justify-center items-center w-10/12 md:w-6/12 max-h-[700px]">
                    <DialogHeader className="mt-4">
                      <DialogTitle className="text-[26px] text-neutral-700">
                        Syarat dan Ketentuan
                      </DialogTitle>
                    </DialogHeader>
                    <div className="m-3 px-4 flex flex-col items-center w-full verticalScroll gap-y-6">
                      <div>
                        {syarat && (
                          <RichTextDisplay content={syarat.description} />
                        )}
                      </div>

                      <div
                        onClick={handleAgree}
                        className="bg-primary-700 text-center cursor-pointer w-4/12 rounded-full text-neutral-50 py-1 px-5">
                        Setuju
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="text-neutral-700 font-normal md:text-[16px]">
                  Saya menyetujui{" "}
                  <span className="font-semibold text-primary-700">
                    Syarat & Ketentuan
                  </span>{" "}
                  kami Rama Tarnz
                </div>
              </div>
              <div className="p-3 bg-dange_light rounded-md flex flex-col w-full text-danger_base">
                <p>Catatan:</p>
                <p className="text-sm">
                  Penyewa bertanggung jawab atas biaya makan dan akomodasi untuk
                  pengemudi.
                </p>
              </div>
              <div className="flex flex-row items-center justify-between py-3 border-b">
                <p className="text-14px] md:text-[16px]">Total Harga</p>
                <p className="text-primary-700 md:text-xl font-semibold">
                  {data?.all_in === true
                    ? formatCurrency(
                        Number(detailCar?.biaya_all_in) * Number(durationRent)
                      )
                    : formatCurrency(
                        Number(detailCar?.biaya_sewa) * Number(durationRent)
                      )}
                </p>
              </div>
              <Button
                disabled={isLoading ? true : false}
                onClick={handleNewRent}
                className="mt-4 w-full bg-primary-700 hover:bg-primary-600 text-neutral-50">
                {isLoading ? (
                  <Loader className="text-neutral-50 animate-spin" />
                ) : (
                  "Lanjutkan Pembayaran"
                )}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
