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
