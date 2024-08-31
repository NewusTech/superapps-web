export interface debounceInterface {
  value: string;
  delay: number;
}

export interface RegistrationUserInterface {
  nama: string;
  email: string;
  no_telp: string;
  password: string;
}

export interface LoginUserInterface {
  email: string;
  password: string;
}

export interface DataPariwisataInterface {
  success: boolean;
  message: string;
  data: PariwitasaInterface[];
}

export interface PariwitasaInterface {
  id: number;
  judul: string;
  slug: string;
  lokasi: string;
  rating: number;
  konten: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  sub_judul: string;
}

export interface DataRouteInterface {
  success: boolean;
  message: string;
  data: RouteInterface[];
}

export interface RouteInterface {
  id: number;
  kota_asal: string;
  kota_tujuan: string;
  harga: number;
  created_at: string;
  waktu_keberangkatan: string;
  image_url: string;
  deskripsi: string;
}

export interface BodyRouteInterface {
  from: string;
  to: string;
  date: string;
  seats: number;
}

export interface DataScheduleInterface {
  success: boolean;
  message: string;
  data: TravelScheduleInterface[];
}

export interface TravelScheduleInterface {
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
}

export interface TitikJemputInterface {
  id: string;
  nama: string;
}

export interface BranchesInterface {
  id: number;
  nama: string;
  alamat: string;
  created_at: string;
}

export interface TravelCarInterface {
  id: number;
  nopol: string;
  type: string;
  jumlah_kursi: string;
  fasilitas: string;
  image_url: string;
  mesin: string;
  transmisi: string;
  kapasitas_bagasi: string;
  bahan_bakar: string;
  biaya_sewa: string;
  deskripsi: string;
  created_at: string;
  biaya_all_in: string;
  bagasi: string;
}
