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

export const formRentalSchema = z.object({
  nama: z
    .string({ message: "Nama tidak boleh kosong" })
    .min(3, { message: "Nama harus memiliki minimal 3 karakter" }),
  nik: z
    .string({ message: "NIK tidak boleh kosong" })
    .regex(/^\d+$/, { message: "NIK harus berupa angka" })
    .length(16, { message: "NIK harus tepat 16 digit" }),
  email: z
    .string({ message: "Email tidak boleh kosong" })
    .email({ message: "Format email tidak valid" }),
  no_telp: z
    .string({ message: "Nomor telepon tidak boleh kosong" })
    .regex(/^\d+$/, { message: "Nomor telepon harus berupa angka" })
    .min(10, { message: "Nomor telepon harus minimal 10 digit" })
    .max(13, {
      message: "Nomor telepon harus maksimal 13 digit",
    }),
  alamat: z
    .string({ message: "Alamat tidak boleh kosong" })
    .min(5, { message: "Alamat harus memiliki minimal 5 karakter" }),
  // durasi_sewa: z.string({ message: "Durasi sewa harus dipilih" }),
  area: z.enum(["Dalam Kota", "Luar Kota"], {
    message: "Area sewa harus dipilih",
  }),
  tanggal_mulai_sewa: z.date({
    message: "Tanggal mulai sewa harus berupa tanggal valid",
  }),
  tanggal_akhir_sewa: z.date({
    message: "Tanggal akhir sewa harus berupa tanggal valid",
  }),
  username_ig: z
    .string({ message: "Username Instagram minimal 3 karakter" })
    .min(3, {
      message: "Username Instagram harus memiliki minimal 5 karakter",
    }),
  username_fb: z
    .string({ message: "Username Facebook minimal 3 karakter" })
    .min(3, { message: "Username Facebook harus memiliki minimal 5 karakter" }),
  alamat_keberangkatan: z
    .string({
      message: "Alamat penjemputan tidak boleh kosong",
    })
    .min(5, {
      message: "Alamat penjemputan harus memiliki minimal 5 karakter",
    }),
  jam_keberangkatan: z
    .string({ message: "Jam keberangkatan tidak boleh kosong" })
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      message: "Jam keberangkatan harus dalam format HH:mm",
    }),
});

export const formEmailSubmitForgotPasswordSchema = z.object({
  email: z
    .string({ message: "Email tidak boleh kosong" })
    .email({ message: "Format email tidak valid" }),
});

export const formSubmitNewPasswordSchema = z.object({
  password: z
    .string({
      message: "Kata sandi tidak boleh kosong",
    })
    .min(6, { message: "Kata Sandi harus lebih dari 6 karakter!" })
    .max(15, { message: "Kata Sandi tidak boleh lebih dari 15 karakter!" }),
  password_confirmation: z.string({
    message:
      "Konfirmasi kata sandi tidak boleh kosong dan harus sama dengan kata sandi!",
  }),
});

export const formSubmitChangePasswordSchema = z.object({
  password: z
    .string({
      message: "Kata sandi tidak boleh kosong",
    })
    .min(6, { message: "Kata Sandi harus lebih dari 6 karakter!" })
    .max(15, { message: "Kata Sandi tidak boleh lebih dari 15 karakter!" }),
  new_password: z
    .string({
      message: "Kata sandi tidak boleh kosong",
    })
    .min(6, { message: "Kata Sandi harus lebih dari 6 karakter!" })
    .max(15, { message: "Kata Sandi tidak boleh lebih dari 15 karakter!" }),
  confirm_password: z.string({
    message:
      "Konfirmasi kata sandi tidak boleh kosong dan harus sama dengan kata sandi!",
  }),
});
