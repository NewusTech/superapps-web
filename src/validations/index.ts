"use client";

import { z } from "zod";

export const formSignInSchema = z
  .object({
    email: z
      .string({ message: "Email tidak boleh kosong!" })
      .email({ message: "Email tidak valid!" }),
    password: z
      .string({ message: "Kata Sandi tidak boleh kosong!" })
      .min(6, { message: "Kata Sandi harus lebih dari 6 karakter!" })
      .max(15, { message: "Kata Sandi tidak boleh lebih dari 15 karakter!" }),
  })
  .required();

export const formRegistrationSchema = z
  .object({
    nama: z.string({ message: "Nama Lengkap tidak boleh kosong!" }),
    email: z
      .string({ message: "Email tidak boleh kosong!" })
      .email({ message: "Email tidak valid!" }),
    no_telp: z
      .string({ message: "Nomor Telepon tidak boleh kosong!" })
      .min(10, { message: "Nomor Telepon tidak valid!" })
      .max(13, { message: "Nomor Telepon tidak valid!" }),
    password: z
      .string({ message: "Kata Sandi tidak boleh kosong!" })
      .min(6, { message: "Kata Sandi harus lebih dari 6 karakter!" })
      .max(15, { message: "Kata Sandi tidak boleh lebih dari 15 karakter!" }),
    confirmPassword: z.string({
      message:
        "Konfirmasi kata sandi tidak boleh kosong dan harus sama dengan kata sandi!",
    }),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Kata sandi dan konfirmasi kata sandi harus sama",
    path: ["confirmPassword"],
  });
