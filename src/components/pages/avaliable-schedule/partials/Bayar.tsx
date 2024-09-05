"use client";

import Card from "@/components/ui/card/Card";
import { FaCheckCircle } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { Banknote } from "lucide-react";
import Button from "@/components/buttonCustom/ButtonCustom";
import {
  useTravelActions,
  useTravelStepPayloadPayload,
} from "@/store/useTravelStore";
import { stepItem } from "@/constants/rental";
import {
  PaymentDetailInterface,
  PaymentMenthodsInterface,
} from "@/types/interface";
import { createNewRent, getAllPaymentMethods } from "@/services/api";
import PaymentMethods from "@/components/paymentMethod";
import { formattedDate } from "@/helpers";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Trash } from "@phosphor-icons/react";

export default function Bayar({
  firstTitle,
  secondTitle,
  firstSubTitle,
  secondSubTitle,
  keys,
}: {
  firstTitle: string;
  secondTitle: string;
  firstSubTitle: {
    name: string;
    email: string;
    nomor: string;
    etc: string;
    etc2?: string;
    etc3?: string;
  };
  secondSubTitle: {
    name: string;
    email: string;
    nomor: string;
    etc: string;
    etc2?: string;
    etc3?: string;
  };
  keys: boolean;
}) {
  const dropRef = useRef<HTMLDivElement>(null);
  const { setStepTravelPayload } = useTravelActions();
  const [imageKTP, setImageKTP] = useState<File | null>(null);
  const [imageSwafoto, setImageSwafoto] = useState<File | null>(null);
  const [previewImageKTP, setPreviewImageKTP] = useState<string>("");
  const [previewImageSwafoto, setPreviewImageSwafoto] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const useTravelStep = useTravelStepPayloadPayload();
  const [payments, setPayments] = useState<PaymentMenthodsInterface>();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  const [data, setData] = useState({
    metode_id: "",
  });
  const [dataKtp, setDataKtp] = useState({
    lastModified: 0,
    name: "",
    size: 0,
    type: "",
  });
  const [dataSwafoto, setDataSwafoto] = useState({
    lastModified: 0,
    name: "",
    size: 0,
    type: "",
  });
  const [detail, setDetail] = useState<any>({
    nama: "",
    email: "",
    nik: "",
    no_telp: "",
    alamat: "",
    username_ig: "",
    username_fb: "",
    image_ktp: "",
    image_swafoto: "",
    area: "",
    durasi_sewa: "",
    alamat_keberangkatan: "",
    tanggal_mulai_sewa: "",
    tanggal_akhir_sewa: "",
    catatan_sopir: "",
    all_in: "",
    jam_keberangkatan: "",
  });

  useEffect(() => {
    let tgl_mulai_sewa;
    if (localStorage.getItem("tanggal_mulai_sewa")) {
      tgl_mulai_sewa = formattedDate(
        localStorage?.getItem("tanggal_mulai_sewa") || ""
      );
    }

    let tgl_akhir_sewa;
    if (localStorage.getItem("tanggal_akhir_sewa")) {
      tgl_akhir_sewa = formattedDate(
        localStorage?.getItem("tanggal_akhir_sewa") || ""
      );
    }

    setDetail({
      nama: localStorage.getItem("nama"),
      email: localStorage.getItem("email"),
      nik: localStorage.getItem("nik"),
      no_telp: localStorage.getItem("no_telp"),
      alamat: localStorage.getItem("alamat"),
      username_ig: localStorage.getItem("username_ig"),
      username_fb: localStorage.getItem("username_fb"),
      area: localStorage.getItem("area"),
      durasi_sewa: localStorage.getItem("durasi_sewa"),
      alamat_keberangkatan: localStorage.getItem("alamat_keberangkatan"),
      tanggal_mulai_sewa: tgl_mulai_sewa,
      tanggal_akhir_sewa: tgl_akhir_sewa,
      catatan_sopir: localStorage.getItem("catatan_sopir"),
      all_in: localStorage.getItem("all_in"),
      jam_keberangkatan: localStorage.getItem("jam_keberangkatan"),
    });

    setDataKtp(
      localStorage.getItem("image_ktp")
        ? JSON.parse(localStorage.getItem("image_ktp") || "")
        : ""
    );

    setDataSwafoto(
      localStorage.getItem("image_swafoto")
        ? JSON.parse(localStorage.getItem("image_swafoto") || "")
        : ""
    );
  }, []);

  const fetchPaymentMethods = async () => {
    try {
      const response = await getAllPaymentMethods();

      setPayments(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  const jsonToFile = (jsonObject: {
    lastModified: number;
    name: string;
    size: number;
    type: string;
  }) => {
    const { lastModified, name, type } = jsonObject;

    const file = new File([""], name, { type, lastModified });

    return file;
  };

  const handleImageKTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImageKTP(file);
      const fileInfo = {
        lastModified: file.lastModified,
        name: file.name,
        size: file.size,
        type: file.type,
      };
      setDataKtp(fileInfo);
      setDetail({
        ...detail,
        image_ktp: JSON.stringify(fileInfo),
      });
      const fileUrl = URL.createObjectURL(file);
      setPreviewImageKTP(fileUrl);
    }
  };

  const handleImageSwafotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageSwafoto(file);
      const fileInfo = {
        lastModified: file.lastModified,
        name: file.name,
        size: file.size,
        type: file.type,
      };
      setDataSwafoto(fileInfo);
      setDetail({
        ...detail,
        image_swafoto: JSON.stringify(fileInfo),
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
      setDetail({
        ...detail,
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
      setDetail({
        ...detail,
        image_swafoto: file.name,
      });
      const fileUrl = URL.createObjectURL(file);
      setPreviewImageSwafoto(fileUrl);
    }
  };

  const handleRemoveImageKTP = () => {
    setImageKTP(null);
    setPreviewImageKTP("");
    setDetail({ ...detail, image_ktp: "" });
  };

  const handleRemoveImageSwafoto = () => {
    setImageSwafoto(null);
    setPreviewImageSwafoto("");
    setDetail({ ...detail, image_swafoto: "" });
  };

  const handlePaymentMethodChange = (metode_id: number) => {
    setSelectedPaymentMethod(metode_id.toString());
    setData({ ...data, metode_id: metode_id.toString() });
  };

  const handleNextStep = () => {
    if (useTravelStep > stepItem.length) return;
    setStepTravelPayload(useTravelStep + 1);
    window.scrollTo(0, 0);
  };

  const handleNewRent = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    let isAllIn;
    if (detail.all_in === "true") {
      isAllIn = "1";
    } else if (detail.all_in === "false") {
      isAllIn = "0";
    }

    const formData = new FormData();

    formData.append("nama", detail.nama);
    formData.append("email", detail.email);
    formData.append("nik", detail.nik);
    formData.append("no_telp", detail.no_telp);
    formData.append("alamat", detail.alamat);
    formData.append("username_ig", detail.username_ig);
    formData.append("username_fb", detail.username_fb);
    // console.log(JSON.stringify(dataKtp.name), "ini ktp");
    // console.log(JSON.stringify(dataSwafoto.name), "ini swafoto");

    // const dataFileKtp = jsonToFile(dataKtp);
    // const dataFileSwafoto = jsonToFile(dataSwafoto);

    if (imageKTP) {
      formData.append("image_ktp", imageKTP);
    }

    if (imageSwafoto) {
      formData.append("image_swafoto", imageSwafoto);
    }

    // if (dataKtp && dataKtp.name) {
    //   const dataFileKtp = jsonToFile(dataKtp);
    //   formData.append("image_ktp", dataFileKtp);
    // }

    // if (dataSwafoto && dataSwafoto.name) {
    //   const dataFileSwafoto = jsonToFile(dataSwafoto);
    //   formData.append("image_swafoto", dataFileSwafoto);
    // }
    // let name = dataKtp.name;
    // name = name.replace(/\"/g, "");
    // const ktpBlob = new Blob(
    //   [
    //     JSON.stringify({
    //       ...dataKtp,
    //       name: name,
    //     }),
    //   ],
    //   { type: dataKtp.type }
    // );
    // if (dataKtp) {
    //   formData.append("image_ktp", ktpBlob, name);
    // }
    // let swafoto = dataKtp.name;
    // swafoto = name.replace(/\"/g, "");
    // const swafotoBlob = new Blob(
    //   [
    //     JSON.stringify({
    //       ...dataSwafoto,
    //       name: swafoto,
    //     }),
    //   ],
    //   {
    //     type: dataSwafoto.type,
    //   }
    // );
    // if (dataSwafoto) {
    //   formData.append("image_swafoto", swafotoBlob, swafoto);
    // }
    // formData.append("image_ktp", ktpBlob, dataKtp.name);
    // formData.append("image_swafoto", swafotoBlob, dataSwafoto.name);
    formData.append("area", detail.area);
    formData.append("durasi_sewa", detail.durasi_sewa);
    formData.append("alamat_keberangkatan", detail.alamat_keberangkatan);
    formData.append("tanggal_mulai_sewa", detail.tanggal_mulai_sewa);
    formData.append("tanggal_akhir_sewa", detail.tanggal_akhir_sewa);
    formData.append("catatan_sopir", detail.catatan_sopir);
    if (detail.all_in) {
      formData.append("all_in", String(isAllIn));
    }
    formData.append("jam_keberangkatan", detail.jam_keberangkatan);
    formData.append("metode_id", data.metode_id);
    formData.append("mobil_rental_id", "1");

    // formData.forEach((value, key) => {
    //   console.log(key, value);
    // });

    try {
      const response = await createNewRent(formData);

      // if(response.success === true) {

      // }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col gap-4 text-sm md:text-base">
      <div className="flex flex-col gap-y-2">
        <p className="text-xl">Ringkasan Pesanan</p>
        <Card className="">
          <div className="flex flex-row items-center gap-x-2">
            <FaCheckCircle className="text-primary-700" size={24} />
            <span>
              Periksa data yang diinput untuk memastikan kebenaran dan
              kelengkapan sebelum melanjutkan ke langkah berikutnya.
            </span>
          </div>
        </Card>
      </div>
      {/* 2 */}
      <div className="flex flex-col gap-y-2">
        <p className="text-xl">{firstTitle}</p>
        <Card className="">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">{firstSubTitle.name} : </p>
                <p className="font-semibold">Bandar Lampung</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">
                  {firstSubTitle.email} :{" "}
                </p>
                <p className="font-semibold">Palembang</p>
              </div>
            </div>
            <div className="w-full border-b" />
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">{firstSubTitle.nomor}</p>
                <p className="font-semibold">23, Februari 2024</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">{firstSubTitle.etc}</p>
                <p className="font-semibold">1 Penumpang</p>
              </div>
            </div>
            {keys === true ? (
              <>
                <div className="w-full border-b" />
                <div className="flex flex-row w-full items-center">
                  <div className="w-[50%]">
                    <p className="text-sm text-gray-500">
                      {firstSubTitle.etc2}
                    </p>
                    <p className="font-semibold">1 Penumpang</p>
                  </div>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </Card>
      </div>
      {/* 3 */}
      <div className="flex flex-col gap-y-2">
        <p className="text-xl">{secondTitle}</p>
        <Card className="">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">{secondSubTitle.name}</p>
                <p className="font-semibold">Irsyad Abi Izzulhaq</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">{secondSubTitle.email}</p>
                <p className="font-semibold">irsyadabiizzulhaq@gmail.com</p>
              </div>
            </div>
            <div className="w-full border-b" />
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">{secondSubTitle.nomor}</p>
                <p className="font-semibold">09877675768</p>
              </div>
              <div className="w-[50%]">
                <p className="text-sm text-gray-500">{secondSubTitle.etc}</p>
                <p className="font-semibold">Jalan kebersihan Gedong Air</p>
              </div>
            </div>
            {keys === true ? (
              <>
                <div className="w-full border-b" />
                <div className="flex flex-row w-full items-center">
                  <div className="w-[50%]">
                    <p className="text-sm text-gray-500">
                      {secondSubTitle.etc2}
                    </p>
                    <p className="font-semibold">09877675768</p>
                  </div>
                  <div className="w-[50%]">
                    <p className="text-sm text-gray-500">
                      {secondSubTitle.etc2}
                    </p>
                    <p className="font-semibold">Jalan kebersihan Gedong Air</p>
                  </div>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </Card>
      </div>
      <div className="w-full">
        <div className="flex flex-col w-full h-full">
          <Label className="w-full">Upload Kartu Tanda Penduduk</Label>

          <div className="w-full flex flex-row">
            <div
              ref={dropRef}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDropImageKTP}
              className={`w-full ${
                detail?.image_ktp || previewImageKTP ? "md:w-8/12" : "w-full"
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

            {(previewImageKTP || detail?.image_ktp) && (
              <div className="relative md:ml-4 w-full mt-1">
                <div className="border-2 border-dashed flex justify-center rounded-xl p-2">
                  <div className="w-full h-full">
                    <Image
                      src={previewImageKTP || detail?.image_ktp}
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
                detail?.image_swafoto || previewImageSwafoto
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

            {(previewImageSwafoto || detail?.image_swafoto) && (
              <div className="relative md:ml-4 w-full mt-1">
                <div className="border-2 border-dashed flex justify-center rounded-xl p-2">
                  <div className="w-full h-full">
                    <Image
                      src={previewImageSwafoto || detail?.image_swafoto}
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
      {/* 4 */}
      <div className="flex flex-col gap-y-2">
        <p className="text-xl">Metode Pembayaran</p>
        <PaymentMethods
          payments={
            payments as {
              payment_gateway?: PaymentDetailInterface[] | undefined;
              bank_transfer?: PaymentDetailInterface[] | undefined;
              cash?: PaymentDetailInterface[] | undefined;
            }
          }
          selectedPaymentMethod={Number(selectedPaymentMethod)}
          onPaymentMethodChange={handlePaymentMethodChange}
        />
      </div>
      {/* 5 */}
      <div className="flex flex-col gap-y-2">
        <p className="text-xl">Rincian Harga</p>
        <Card className="">
          <label className="flex flex-row items-center gap-2">
            <input type="checkbox" className="rounded-full" />
            <span>
              Saya Menyetujui{" "}
              <span className="text-primary-700">Syarat & Ketentuan</span> Rama
              Tranz
            </span>
          </label>
          <div className="flex flex-row items-center justify-between py-3 border-b">
            <p>Total Harga</p>
            <p className="text-primary-700 text-xl font-semibold">Rp.200.000</p>
          </div>
          <form onSubmit={handleNewRent}>
            <Button className="mt-4 w-full">Lanjut Pembayaran</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
