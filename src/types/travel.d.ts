import { z } from "zod";

export type TravelScheduleResponseSuccess = {
    data: {
      id: number;
      img_url: string;
      availableSeat: number;
      carModel: string;
      carSeat: number;
      departureTime: string;
      departureDate: string;
      destinationCity: string;
      destinationDepartureDate: string;
      originCity: string;
      originDepartureDate: string;
      price: number;
      facility: string;
      transitionCity: string;
      syarat_dan_ketentuan: string;
      seatTaken: string[];
    }[];
    message: string;
    success: boolean;
  };

  export const travelScheduleQuerySchema = z.object({
    from: z.string(),
    to: z.string(),
    date: z.date(),
    seats: z.number(),
  });
  export type TravelScheduleQuery = z.infer<typeof travelScheduleQuerySchema>;

  export const passengerSeatSchema = z.object({
    nama: z.string(),
    nik: z.string(),
    email: z.string().email(),
    no_telp: z.string(),
    no_kursi: z.string(),
  });
  export type PassengerSeat = z.infer<typeof passengerSeatSchema>;


  export type ResponseSucsessPostTravel = {
    success: true;
    data: {
      jadwal_id: number;
      master_titik_jemput_id: number;
      titik_antar_id: number;
      nama: string;
      no_telp: string;
      email: string;
      nik: string;
      user_id: number;
      status: string;
      kode_pesanan: string;
      updated_at: string;
      created_at: string;
      id: number;
      expired_at: string;
    };
    message: string;
  };

  export type OrderDetailResponseSuccess = {
    data: {
      pembayaran: {
        status: string;
        metode: string;
        kode_pembayaran: string;
        payment_link: string | null;
        created_at: string;
        expired_at: string;
        nominal: string;
        link_tiket: string;
        link_invoice: string;
        no_rek: string;
      };
      penumpang: [
        {
          nama: string;
          nik: string;
          no_telp: string;
          kursi: number;
          email:string
        },
      ];
      pesanan: {
        mobil: string;
        kode_pesanan: string;
        jam_berangkat: string;
        jam_tiba: string;
        estimasi: string;
        tanggal: string;
        kota_asal: string;
        kota_tujuan: string;
        titik_jemput: string;
        titik_antar: string;
        kursi: number[];
      };
    };
    message: string;
    success: boolean;
  };