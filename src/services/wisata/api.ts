export type wisataProps = {
  id: number;
  judul: string;
  slug: string;
  lokasi: string;
  rating: null | number;
  konten: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  sub_judul: string;
};

export type wisataResponse = {
  success: true;
  message: "Berhasil get data";
  data: wisataProps[];
};

export const getAllWisata = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pariwisata`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  return await response.json();
};
export const getWisataBySlug = async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pariwisata/${slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  return await response.json();
};
