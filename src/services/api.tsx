"use client";

import Cookies from "js-cookie";
import useSWR from "swr";
import { fetcher, fetcherWithoutAuth } from "@/constants/fetcher";
import { LoginType } from "@/types/types";
import {
  LoginUserInterface,
  RegistrationUserInterface,
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

// register user
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
