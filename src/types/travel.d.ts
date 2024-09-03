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