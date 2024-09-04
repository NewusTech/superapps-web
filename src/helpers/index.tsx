"use client";

import { differenceInDays } from "date-fns";

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formattedDate = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const formatTime = (time: string): string => {
  const [hour, minute] = time.split(":");

  return `${hour}.${minute} WIB`;
};

export const formatCurrency = (amount: number): string => {
  const formattedAmount: string = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

  return formattedAmount.replace(/\s/g, "");
};

export const formatTanggalPanjang = (tanggalString: string) => {
  const bulanIndonesia = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const tanggal = new Date(tanggalString);

  const hari = tanggal.getDate();
  const bulan = bulanIndonesia[tanggal.getMonth()];
  const tahun = tanggal.getFullYear();

  return `${hari} ${bulan} ${tahun}`;
};

export default function wrapText(str: string, maxLength: number = 10) {
  let result = "";
  let line = "";

  for (let i = 0; i < str.length; i++) {
    line += str[i];
    if (line.length === maxLength) {
      result += line + "\n";
      line = "";
    }
  }

  if (line.length > 0) {
    result += line;
  }

  return result;
}

// export function truncateTitle(title: string, maxLength = 35) {
//   if (title.length > maxLength) {
//     return title.slice(0, maxLength) + "...";
//   } else {
//     return title;
//   }
// }

export function truncateContent(title: string, maxLength = 35) {
  const titleWithSpaces = title.replace(/\n/g, " ");

  if (titleWithSpaces.length > maxLength) {
    return titleWithSpaces.slice(0, maxLength) + "...";
  } else {
    return titleWithSpaces;
  }
}

export function formatTimeString(timeString: string) {
  // Memisahkan jam dan menit dari string waktu
  const [hours, minutes] = timeString.split(":");

  // Menggabungkan jam dan menit dengan format yang diinginkan
  return `${hours}.${minutes}`;
}

export function calculateDaysBetweenDates(
  startDate: Date,
  endDate: Date
): number {
  // if (endDate < startDate) {
  //   throw new Error("End date must be after start date");
  // }

  const daysDifference = differenceInDays(endDate, startDate);
  return daysDifference;
}

export function formatIndonesianDate(dateString: string): string {
  const days: string[] = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  const months: string[] = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const date: Date = new Date(dateString);
  const dayName: string = days[date.getDay()];
  const day: string = String(date.getDate()).padStart(2, "0");
  const monthName: string = months[date.getMonth()];
  const year: number = date.getFullYear();

  return `${dayName}, ${day} ${monthName} ${year}`;
}

export function formatIndonesianTime(dateString: string): string {
  const date: Date = new Date(dateString);
  const hours: string = String(date.getHours()).padStart(2, "0");
  const minutes: string = String(date.getMinutes()).padStart(2, "0");

  return `${hours}.${minutes} WIB`;
}
