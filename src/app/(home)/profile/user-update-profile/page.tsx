"use client";

import FormInput from "@/components/formInput";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profileUser, updateProfileUser } from "@/services/api";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function UserUpdateProfilePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    // kota: "",
    email: "",
    nik: "",
    no_telp: "",
    alamat: "",
  });

  const fetchUserProfile = async () => {
    try {
      const response = await profileUser();

      setForm(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleUpdateUserProfile = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await updateProfileUser(form);

      if (response.success === true) {
        setForm({
          nama: "",
          email: "",
          no_telp: "",
          alamat: "",
          nik: "",
        });
        Swal.fire({
          icon: "success",
          title: "Berhasil memperbarui profil!",
          timer: 2000,
          showConfirmButton: false,
          position: "center",
        });
        router.push("/profile");
      } else {
        Swal.fire({
          icon: "error",
          title: `${response.message} dan Gagal memperbarui profil!`,
          timer: 2000,
          showConfirmButton: false,
          position: "center",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full bg-neutral-50 border px-5 py-5 border-grey-100 rounded-lg flex flex-col mt-32 gap-y-20 pb-12">
        <form onSubmit={handleUpdateUserProfile}>
          <div className="w-full flex flex-col gap-y-3">
            <div className="w-full flex flex-col gap-y-2">
              <h4 className="text-neutral-700 font-normal text-[20px]">
                Profile Saya
              </h4>

              <p>
                Kelola informasi profil Anda untuk mengontrol, melindungi dan
                mengamankan akun
              </p>
            </div>

            <div className="w-full h-[1px] bg-grey-100"></div>

            <div className="w-full flex flex-col border border-grey-100 rounded-lg p-4 gap-y-5">
              <h4 className="text-neutral-700 font-normal text-[20px]">
                Informasi Pribadi
              </h4>

              <div className="w-full flex flex-col gap-y-5">
                <div className="w-full flex flex-col">
                  <FormInput
                    name="name"
                    value={form.nama}
                    onChange={(e) => setForm({ ...form, nama: e.target.value })}
                    id="name"
                    htmlFor="name"
                    label="Nama Lengkap"
                    placeholder="Nama Lengkap"
                    type="text"
                    className="w-full"
                    classLabel="text-neutral-700"
                  />
                </div>

                {/* <div className="w-full flex flex-col">
                  <FormInput
                    name="kota"
                    value={form.kota}
                    onChange={(e) => setForm({ ...form, kota: e.target.value })}
                    id="kota"
                    htmlFor="kota"
                    label="Kota"
                    placeholder="Kota"
                    type="text"
                    className="w-full"
                    classLabel="text-neutral-700"
                  />
                </div> */}

                <div className="w-full flex flex-col">
                  <FormInput
                    name="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    id="email"
                    htmlFor="email"
                    label="Email"
                    placeholder="Email"
                    type="email"
                    className="w-full"
                    classLabel="text-neutral-700"
                  />
                </div>

                <div className="w-full flex flex-col">
                  <FormInput
                    name="nik"
                    value={form.nik}
                    onChange={(e) => setForm({ ...form, nik: e.target.value })}
                    id="nik"
                    htmlFor="nik"
                    label="Nomor Induk Kependudukan"
                    placeholder="Nomor Induk Kependudukan"
                    type="text"
                    className="w-full"
                    classLabel="text-neutral-700"
                  />
                </div>

                <div className="w-full flex flex-col">
                  <FormInput
                    name="no_telp"
                    value={form.no_telp}
                    onChange={(e) =>
                      setForm({ ...form, no_telp: e.target.value })
                    }
                    id="no-telp"
                    htmlFor="no-telp"
                    label="Nomor Telepon"
                    placeholder="Nomor Telepon"
                    type="number"
                    className="w-full"
                    classLabel="text-neutral-700"
                  />
                </div>

                <div className="w-full flex flex-col gap-y-3">
                  <Label htmlFor="alamat" className="w-full">
                    Alamat
                  </Label>

                  <div className="w-full">
                    <Textarea
                      id="alamat"
                      name="alamat"
                      value={form.alamat}
                      onChange={(e) =>
                        setForm({ ...form, alamat: e.target.value })
                      }
                      placeholder="Alamat"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-3/12">
              <Button
                type="submit"
                disabled={isLoading ? true : false}
                className="bg-primary-700 py-4 px-2 w-full text-neutral-50">
                {isLoading ? (
                  <Loader className="animate-spin" />
                ) : (
                  "Simpan Data"
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
