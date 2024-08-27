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