"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { profileUser } from "@/services/api";
import { ProfileUserInterface } from "@/types/interface";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function UserProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileUserInterface>();

  useEffect(() => {
    const auth = Cookies.get("Authorization");

    if (!auth) {
      redirect("/");
    }
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await profileUser();

      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="md:w-full bg-neutral-50 border px-5 py-5 border-grey-100 rounded-lg flex flex-col mt-5 md:mt-32 gap-y-20 pb-12">
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

            {profile && (
              <div className="w-full flex flex-col gap-y-5">
                <div className="w-full flex flex-col gap-y-3">
                  <Label className="w-full">Nama Lengkap</Label>

                  <div className="w-full flex items-center h-12 border border-grey-100 rounded-md bg-neutral-50 px-3 py-2">
                    <p>{profile.nama || "Update Data Diri Anda"}</p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-y-3">
                  <Label className="w-full">Kota</Label>

                  <div className="w-full flex items-center h-12 border border-grey-100 rounded-md bg-neutral-50 px-3 py-2">
                    {/* Kota harus nya ada dalam inputan */}
                    <p>{profile.kota || "Update Data Diri Anda"}</p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-y-3">
                  <Label className="w-full">Email</Label>

                  <div className="w-full flex items-center h-12 border border-grey-100 rounded-md bg-neutral-50 px-3 py-2">
                    <p>{profile.email || "Update Data Diri Anda"}</p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-y-3">
                  <Label className="w-full">Nomor Induk Kependudukan</Label>

                  <div className="w-full flex items-center h-12 border border-grey-100 rounded-md bg-neutral-50 px-3 py-2">
                    <p>{profile.nik || "Update Data Diri Anda"}</p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-y-3">
                  <Label className="w-full">Nomor Telepon</Label>

                  <div className="w-full flex items-center h-12 border border-grey-100 rounded-md bg-neutral-50 px-3 py-2">
                    <p>{profile.no_telp || "Update Data Diri Anda"}</p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-y-3">
                  <Label className="w-full">Alamat</Label>

                  <div className="w-full flex h-32 border border-grey-100 rounded-md bg-neutral-50 px-3 py-2">
                    <p>{profile.alamat || "Update Data Diri Anda"}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-3/12">
            <Button
              onClick={() => router.push("/profile/user-update-profile")}
              className="bg-primary-700 py-4 px-2 w-full text-neutral-50">
              edit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
