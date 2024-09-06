"use client";

import Card from "@/components/ui/card/Card";
import { FaCheckCircle } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/buttonCustom/ButtonCustom";
import {
  DetailCarInterface,
  PaymentDetailInterface,
  PaymentMenthodsInterface,
  SyaratKetentuanInterface,
} from "@/types/interface";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  createNewRent,
  getAllPaymentMethods,
  getDetailTravelCarId,
  getSyaratKetentuan,
} from "@/services/api";
import PaymentMethods from "@/components/paymentMethod";
import { formatCurrency, formatTanggalPanjang, formattedDate } from "@/helpers";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Trash } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { RichTextDisplay } from "@/components/richTextDisplay";
import { Loader } from "lucide-react";
import Cookies from "js-cookie";

export default function PaymentRentOrderPage() {
  const router = useRouter();
  const dropRef = useRef<HTMLDivElement>(null);
  const [syarat, setSyarat] = useState<SyaratKetentuanInterface>();
  const [detailCar, setDetailCar] = useState<DetailCarInterface>();
  const [idCar, setIdCar] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [imageKTP, setImageKTP] = useState<File | null>(null);
  const [imageSwafoto, setImageSwafoto] = useState<File | null>(null);
  const [previewImageKTP, setPreviewImageKTP] = useState<string>("");
  const [previewImageSwafoto, setPreviewImageSwafoto] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckedSyarat, setIsCheckedSyarat] = useState(false);
  const [payments, setPayments] = useState<PaymentMenthodsInterface>();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  const [data, setData] = useState({
    metode_id: "",
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
    mobil_rental_id: "",
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

    const id = localStorage.getItem("travel_car_id");
    if (id) {
      setIdCar(id);
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
      mobil_rental_id: localStorage.getItem("travel_car_id"),
    });
  }, []);

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
    }
  }, [idCar]);

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

  const handleImageKTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

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

  const handleImageSwafotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
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

  const handleNewRent = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const isLogin = Cookies.get("Authorization");
    if (!isLogin) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Silahkan Login Terlebih Dahulu",
      });
      return;
    }

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
    if (imageKTP) {
      formData.append("image_ktp", imageKTP);
    }
    if (imageSwafoto) {
      formData.append("image_swafoto", imageSwafoto);
    }
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
    formData.append("mobil_rental_id", detail?.mobil_rental_id);

    // formData.forEach((value, key) => {
    //   console.log(key, value);
    // });

    try {
      const response = await createNewRent(formData);

      if (response.success === true) {
        Swal.fire({
          icon: "success",
          title: "Berhasil Membuat Pemesanan, Silahkan melakukan pembayaran!",
          timer: 2000,
          showConfirmButton: false,
          position: "center",
        });
        localStorage.clear();
        if (response?.data?.kode === 1) {
          window.location.href = response?.data?.payment_url;
        } else if (response?.data?.kode === 2) {
          router.push("/rent/transfer-payment");
          localStorage.setItem("payment_code", response?.data?.kode_pembayaran);
          localStorage.setItem("bank_method", response?.data?.metode);
          localStorage.setItem(
            "rekening_number",
            response?.data?.nomor_rekening
          );
        }
      } else {
        Swal.fire({
          icon: "error",
          title: response.message,
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
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full flex flex-col mt-32 px-5 md:px-20">
        <section className="flex flex-col gap-4 text-sm md:text-base">
          <div className="flex flex-col gap-y-2">
            <p className="text-[16px] md:text-xl">Ringkasan Pesanan</p>
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
            <p className="text-[16px] md:text-xl">Detail Informasi Penyewa</p>
            <Card className="">
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="grid grid-cols-2 md:flex flex-row w-full items-center">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Nama Penyewa : </p>
                    <p className="font-semibold">{detail?.nama}</p>
                  </div>
                  <div className="w-full">
                    <p className="text-sm text-gray-500">
                      Nomor Induk Kependudukan :{" "}
                    </p>
                    <p className="font-semibold">{detail?.nik}</p>
                  </div>
                </div>
                <div className="w-full border-b" />
                <div className="grid grid-cols-2 md:flex flex-row w-full items-center">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold">{detail?.email}</p>
                  </div>
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Nomor Telepon</p>
                    <p className="font-semibold">{detail?.no_telp}</p>
                  </div>
                </div>

                <div className="w-full border-b" />
                <div className="flex flex-row w-full items-center">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Alamat</p>
                    <p className="font-semibold">{detail?.alamat}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* 3 */}
          <div className="flex flex-col gap-y-2">
            <p className="text-[16px] md:text-xl">Detail Sewa Mobil</p>
            <Card className="">
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="grid grid-cols-2 md:flex flex-row w-full items-center">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Durasi Sewa</p>
                    <p className="font-semibold">{detail?.durasi_sewa}</p>
                  </div>
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Area Sewa</p>
                    <p className="font-semibold">{detail?.area}</p>
                  </div>
                </div>
                <div className="w-full border-b" />
                <div className="grid grid-cols-2 md:flex flex-row w-full items-center">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">
                      Jam Keberangkatan Sewa
                    </p>
                    <p className="font-semibold">
                      {detail?.jam_keberangkatan} WIB
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Alamat Penjemputan</p>
                    <p className="font-semibold">
                      {detail?.alamat_keberangkatan}
                    </p>
                  </div>
                </div>

                <div className="w-full border-b" />
                <div className="grid grid-cols-2 md:flex flex-row w-full items-center">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Tanggal Mulai Sewa</p>
                    <p className="font-semibold">
                      {formatTanggalPanjang(detail?.tanggal_mulai_sewa)}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-sm text-gray-500">
                      Tanggal Selesai Sewa
                    </p>
                    <p className="font-semibold">
                      {" "}
                      {formatTanggalPanjang(detail?.tanggal_akhir_sewa)}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="w-full flex flex-col gap-y-4 md:gap-y-0">
            <div className="flex flex-col w-full h-full">
              <div className="w-full flex flex-col">
                <Label className="w-full text-[16px] md:text-xl flex items-center">
                  <span className="">Upload Kartu Tanda Penduduk</span>
                  <span className="text-error-700">*</span>
                </Label>
                <p className="text-sm text-gray-500 mt-1">
                  File harus berupa gambar dan tidak boleh lebih dari 1 MB.
                </p>
              </div>

              <div className="w-full flex flex-col gap-y-3 md:flex-row">
                <div
                  ref={dropRef}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDropImageKTP}
                  className={`w-full ${
                    detail?.image_ktp || previewImageKTP
                      ? "md:w-8/12"
                      : "w-full"
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
              <div className="w-full flex flex-col">
                <Label className="w-full text-[16px] md:text-xl flex items-center">
                  <span className=""> Upload Swafoto atau Foto Selfie</span>
                  <span className="text-error-700">*</span>
                </Label>
                <p className="text-sm text-gray-500 mt-1">
                  File harus berupa gambar dan tidak boleh lebih dari 1 MB.
                </p>
              </div>

              <div className="w-full flex flex-col gap-y-3 md:flex-row">
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
            <p className="text-[16px] md:text-xl">Metode Pembayaran</p>
            <PaymentMethods
              payments={
                payments as {
                  payment_gateway?: PaymentDetailInterface[] | undefined;
                  bank_transfer?: PaymentDetailInterface[] | undefined;
                  // cash?: PaymentDetailInterface[] | undefined;
                }
              }
              selectedPaymentMethod={Number(selectedPaymentMethod)}
              onPaymentMethodChange={handlePaymentMethodChange}
            />
          </div>
          {/* 5 */}
          <div className="flex flex-col gap-y-2">
            <p className="text-[16px] md:text-xl">Rincian Harga</p>
            <Card className="">
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
              <div className="p-3 mt-3 bg-dange_light rounded-md flex flex-col w-full text-danger_base">
                <p>Catatan:</p>
                <p className="text-sm">
                  Penyewa bertanggung jawab atas biaya makan dan akomodasi untuk
                  pengemudi.
                </p>
              </div>
              <div className="flex flex-row items-center justify-between py-3 border-b">
                <p className="text-[14px] md:text-[16px]">Total Harga</p>
                <p className="text-primary-700 md:text-xl font-semibold">
                  {detail?.all_in === "true"
                    ? formatCurrency(
                        Number(detailCar?.biaya_all_in) *
                          Number(detail?.durasi_sewa)
                      )
                    : formatCurrency(
                        Number(detailCar?.biaya_sewa) *
                          Number(detail?.durasi_sewa)
                      )}
                </p>
              </div>
              <form onSubmit={handleNewRent}>
                <Button
                  disabled={isLoading ? true : false}
                  className="mt-4 w-full flex items-center justify-center">
                  {isLoading ? (
                    <Loader className="w-5 h-5 animate-spin" />
                  ) : (
                    " Lanjut Pembayaran"
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </div>
    </section>
  );
}
