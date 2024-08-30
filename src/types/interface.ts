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
