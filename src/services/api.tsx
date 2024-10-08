"use client";

import Cookies from "js-cookie";
import useSWR from "swr";
import { fetcher } from "@/constants/fetcher";
import {
  ChangePasswordUserInterface,
  EmailForgotPasswordInterface,
  LoginUserInterface,
  NewPasswordInterface,
  RegistrationUserInterface,
  UpdateProfileUser,
} from "@/types/interface";

// get

export function useCarousel() {
  const { data, isLoading } = useSWR(
    `${process.env.EXPO_PUBLIC_API_URL}/carousel/get`,
    fetcher
  );

  return {
    data,
    isLoading,
  };
}

// get user profile
export const profileUser = async () => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/user-profile`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
};

// get user profile
export const updateProfileUser = async (data: UpdateProfileUser) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/update-profile`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  return await response.json();
};

// get profile Foto
export const updateProfileImage = async (data: FormData) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/profile-photo/update`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
      cache: "no-store",
    }
  );

  return await response.json();
};

// register forgot password
export const registerUser = async (data: RegistrationUserInterface) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  return await response.json();
};

// register new password
export const newPassword = async (data: NewPasswordInterface) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/password/reset`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  return await response.json();
};

// login user
export const loginUser = async (data: LoginUserInterface) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  return await response.json();
};

// login user
export const SubmitEmailForgotPassword = async (
  data: EmailForgotPasswordInterface
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/lupa-password`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  return await response.json();
};

// get histories order travel
export const getOrderHistoryTravel = async (status: string) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pesanan/riwayat?status=${status}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
};

// get histories order Rental
export const getOrderHistoryRental = async (status: string) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rental/riwayat?status=${status}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
};

// api get all rute
export const getAllRute = async () => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rute/master_rute`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
};

// api get all cabang
export const getAllBranches = async () => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/cabang/master_cabang`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
};

// api get all Titik Jemput
export const getAllPointMasterJemput = async ({
  cabang,
}: {
  cabang: string;
}) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/titik_jemput/master_titik_jemput?cabang=${cabang}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // cache: "no-store",
    }
  );

  return await response.json();
};

// api get all rental car
export const getAllTravelCar = async () => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rental/mobil`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
};

// api get detail rental car
export const getDetailTravelCarId = async (id: number) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rental/mobil/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
};

// api get syarat ketentuan
export const getSyaratKetentuan = async (id: number) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/syarat-ketentuan/syarat-ketentuan/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
};

// api get date disbaled
export const getDisabledDate = async (id: number) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rental/booked-dates?mobil_id=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
};

// get all paymentMethods

export const getAllPaymentMethods = async () => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pembayaran/metode-pembayaran`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
};

export const getScheduleByRoute = async (
  from: string,
  to: string,
  date: string,
  seats: number
) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jadwal/jadwal_by_rute?from=${from}&to=${to}&date=${date}&seats=${seats}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
};

// api get all pariwisata
export const getAllPariwisata = async () => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pariwisata`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  return await response.json();
};

// get histories order Rental detail
export const getOrderHistoryRentalDetail = async (kodePembayaran: string) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rental/riwayat/${kodePembayaran}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
};

// post rental
export const createNewRent = async (data: FormData) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rental/process-payment`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
      cache: "no-store",
    }
  );

  return await response.json();
};

// post bukti pembayaran Rental
export const createPaymentSProof = async (
  kode_pembayaran: string,
  data: FormData
) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rental/pembayaran/upload-bukti/${kode_pembayaran}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
      cache: "no-store",
    }
  );

  return await response.json();
};

// get histories order Travel detail
export const getOrderHistoryTravelDetail = async (kodePesanan: string) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pesanan/riwayat/${kodePesanan}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
};

// post bukti pembayaran Travel
export const createTravelPaymentSProof = async (
  kode_pembayaran: string,
  data: FormData
) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pembayaran/upload-bukti/${kode_pembayaran}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
      cache: "no-store",
    }
  );

  return await response.json();
};

// get articles blog

export const getAllArticles = async (limit: number) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/artikel/artikel?limit=${limit}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
};

// post pesanan Travel
export const createPostPesananTravel = async (data: any) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pesanan/pesanan`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // Ensure the server knows the content type
      },
      body: JSON.stringify(data), // Convert the data to JSON string
      cache: "no-store",
    }
  );

  return await response.json();
};

// post pembayaran Travel
export const createPostPembayaranTravel = async (data: any) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pembayaran/proses_pembayaran`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // Ensure the server knows the content type
      },
      body: JSON.stringify(data), // Convert the data to JSON string
      cache: "no-store",
    }
  );

  return await response.json();
};

// get detail travel
export const getOrderTravelDetail = async (kode_pesanan: string) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pesanan/riwayat/${kode_pesanan}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
};

// patch change password

export const patchPasswordUserChange = async (
  data: ChangePasswordUserInterface
) => {
  const token = Cookies.get("Authorization");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/change-password`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  return await response.json();
};
