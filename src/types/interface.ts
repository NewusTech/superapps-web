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

export interface EmailForgotPasswordInterface {
  email: string;
}

export interface NewPasswordInterface {
  password: string;
  password_confirmation: string;
  token: string;
  email: string;
}

export interface ProfileImageUpdateInterface {
  image_url: string;
}

export interface ProfileUserInterface {
  id: number;
  nama: string;
  email: string;
  kota: string;
  no_telp: string;
  image_url: string;
  master_cabang_id: string;
  role_id: number;
  created_at: string;
  nik: string;
  alamat: string;
}

export interface UpdateProfileUser {
  nama: string;
  email: string;
  no_telp: string;
  alamat: string;
  nik: string;
}

export interface HistoryTravelInterface {
  created_at: string;
  expired_at: string;
  kode_pesanan: string;
  kota_asal: string;
  kota_tujuan: string;
  tanggal: string;
  jam: string;
  status: string;
}

export interface HistoryRentalInterface {
  nama: string;
  durasi_sewa: number;
  created_at: string;
  expired_at: string;
  kode_pembayaran: string;
  mobil_type: string;
  area: string;
  tanggal_awal_sewa: string;
  tanggal_akhir_sewa: string;
  harga: number;
  status: string;
}

export interface HistoryRentalDetailInterface {
  created_at: string;
  kode_pembayaran: string;
  mobil_type: string;
  metode: string;
  no_rek: string;
  link_tiket: string;
  link_invoice: string;
  nominal: string;
  payment_link: string;
  bukti_url: string;
  expired_at: string;
  area: string;
  tanggal_awal_sewa: string;
  tanggal_akhir_sewa: string;
  status: string;
  durasi_sewa: number;
  alamat_keberangkatan: string;
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

export interface PaymentDetailInterface {
  id: number;
  nama: string;
  keterangan: string;
  kode: number;
  img: string;
}

export interface PaymentMenthodsInterface {
  payment_gateway: PaymentDetailInterface[];
  bank_transfer: PaymentDetailInterface[];
  // cash: PaymentDetailInterface[];
}

export interface ArticleBlogInterface {
  id: number;
  judul: string;
  image_url: string;
  konten: string;
  created_at: string;
}

export interface DetailCarInterface {
  id: number;
  bahan_bakar: string;
  biaya_all_in: string;
  biaya_sewa: string;
  created_at: string;
  deskripsi: string;
  fasilitas: string;
  image_url: string;
  jumlah_kursi: string;
  kapasitas_bagasi: string;
  mesin: string;
  nopol: string;
  transmisi: string;
  type: string;
}

export interface SyaratKetentuanInterface {
  id: number;
  description: string;
}

export interface PaymentTravelInterface {
  bukti_url: string;
  created_at: string;
  expired_at: string;
  kode_pembayaran: string;
  link_invoice: string;
  link_tiket: string;
  metode: string;
  no_rek: string;
  nominal: string;
  payment_link: string;
  status: string;
}

export interface PassengerTravelInterface {
  email: string;
  kursi: number;
  nama: string;
  nik: string;
  no_telp: string;
}

export interface OrderTravelInterface {
  estimasi: number;
  jam_berangkat: string;
  jam_tiba: string;
  kode_pesanan: string;
  kota_asal: string;
  kota_tujuan: string;
  kursi: number[];
  mobil: string;
  nama: string;
  no_telp: string;
  supir: string;
  tanggal: string;
  titik_antar: string;
  titik_jemput: string;
}

export interface TravelDetailInterface {
  pembayaran: PaymentTravelInterface;
  penumpang: PassengerTravelInterface[];
  pesanan: OrderTravelInterface;
}
