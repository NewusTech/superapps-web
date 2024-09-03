"use client";

import {
  Building,
  Bus,
  Camera,
  Notepad,
  Package,
  UserCircle,
  X,
} from "@phosphor-icons/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { ProfileUserInterface } from "@/types/interface";
import { profileUser, updateProfileImage } from "@/services/api";
import { usePathname, useRouter } from "next/navigation";
import { Loader, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { Label } from "@/components/ui/label";

export default function ProfilePage() {
  const router = useRouter();
  const pathName = usePathname();
  const dropRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState<ProfileUserInterface>();
  const [fotoProfile, setFotoProfile] = useState<File | null>(null);
  const [newProfileImage, setNewProfileImage] = useState({
    image_url: "",
  });
  const [previewPPImage, setPreviewPPImage] = useState<string>("");
  const [activeAccordionValue, setActiveAccordionValue] = useState("account");

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

  useEffect(() => {
    if (pathName.includes("/order-histories")) {
      setActiveAccordionValue("orders");
    } else {
      setActiveAccordionValue("account");
    }
  }, [pathName]);

  const handleLogout = () => {
    Cookies.remove("Authorization");
    Swal.fire({
      icon: "success",
      title: "Berhasil logout, silahkan login kembali!",
      timer: 2000,
      showConfirmButton: false,
      position: "center",
    });
    router.push("/");
  };

  const handleFilePPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFotoProfile(file);
      setNewProfileImage({
        ...newProfileImage,
        image_url: file.name,
      });
      const fileUrl = URL.createObjectURL(file);
      setPreviewPPImage(fileUrl);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDropPP = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const file = e.dataTransfer.files?.[0];
    if (file) {
      setFotoProfile(file);
      setNewProfileImage({
        ...newProfileImage,
        image_url: file.name,
      });
      const fileUrl = URL.createObjectURL(file);
      setPreviewPPImage(fileUrl);
    }
  };

  const handleNewUpdateImageProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    if (fotoProfile) {
      formData.append("image_url", fotoProfile);
    }

    try {
      const response = await updateProfileImage(formData);

      if (response.success === true) {
        Swal.fire({
          icon: "success",
          title: "Berhasil mengupdate foto profile!",
          text: "Berhasil mengupdate foto profile!",
          timer: 2000,
          showConfirmButton: false,
          position: "center",
        });
        setIsOpen(false);
        setIsLoading(false);
        fetchUserProfile();
      } else {
        setIsOpen(true);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col md:w-4/12 h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full flex flex-col mt-32 gap-y-20 pb-12">
        <div className="w-full py-5 border bg-white shadow-md border-grey-100 rounded-lg">
          {profile && (
            <div className="w-full flex flex-col gap-y-3">
              <div className="w-full flex flex-col items-center relative">
                <div className="w-24 h-24 relative">
                  <Image
                    src={profile?.image_url}
                    alt={profile?.nama}
                    width={100}
                    height={100}
                    className="w-full h-full outline outline-primary-700 rounded-full"
                  />
                  <div className="bg-neutral-50 p-0.5 rounded-full absolute bottom-0 right-0">
                    {/* camera */}
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                      <DialogTrigger asChild>
                        <div
                          onClick={() => setIsOpen(true)}
                          className="w-7 h-7 flex items-center justify-center rounded-full bg-primary-700">
                          <Camera className="w-4 h-4 text-neutral-50" />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="flex flex-col justify-between w-10/12 md:w-6/12 bg-neutral-50 rounded-xl">
                        <DialogHeader>
                          <DialogTitle>
                            <div className="flex flex-row w-full justify-between">
                              <Label className="text-[20px] md:text-[32px] text-neutral-900 font-semibold text-start mb-2">
                                Foto Profil
                              </Label>

                              <X
                                onClick={() => setIsOpen(false)}
                                className="w-6 h-6 md:w-10 md:h-10 cursor-pointer"
                              />
                            </div>
                          </DialogTitle>
                        </DialogHeader>
                        <form
                          onSubmit={handleNewUpdateImageProfile}
                          className="flex flex-col w-full mt-2 md:mt-4">
                          <div className="flex flex-col w-full h-full mt-2 px-4">
                            <div className="flex flex-col w-full gap-y-5">
                              {(previewPPImage || profile.image_url) && (
                                <div className="relative flex justify-center items-center self-center w-[150px] md:w-[200px] h-[150px] md:h-[200px] border-2 border-dashed border-neutral-800 rounded-full">
                                  <Image
                                    src={previewPPImage || profile?.image_url}
                                    alt="Preview"
                                    width={200}
                                    height={200}
                                    className="h-full rounded-full w-full object-cover object-center"
                                  />
                                </div>
                              )}

                              <div
                                ref={dropRef}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDropPP}
                                className={`w-full h-[100px] border-2 border-dashed border-neutral-800 rounded-xl mt-1 flex flex-col items-center justify-center `}>
                                <>
                                  <input
                                    type="file"
                                    id="file-input-pp"
                                    name="imaga_url"
                                    accept="image/*"
                                    onChange={handleFilePPChange}
                                    className="hidden"
                                  />
                                  <label
                                    htmlFor="file-input-pp"
                                    className="text-[16px] md:text-[20px] text-center text-neutral-800 p-2 md:p-4 font-light cursor-pointer">
                                    Drag and drop file here or click to select
                                    file
                                  </label>
                                </>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center items-end self-end w-4/12 md:self-center my-4 md:pb-[30px] mt-4 pr-2 md:pr-0">
                            <Button
                              className="w-full bg-primary-700 text-neutral-50 h-[30px] md:h-[40px] text-[12px] md:text-[16px]"
                              type="submit"
                              disabled={isLoading ? true : false}>
                              {isLoading ? (
                                <Loader className="animate-spin" />
                              ) : (
                                "Simpan"
                              )}
                            </Button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-center gap-y-1">
                <h5 className="text-neutral-700 font-normal text-[18px]">
                  {profile.nama}
                </h5>

                <p className="text-neutral-700 font-normal text-[16px]">
                  {profile?.kota}
                </p>
              </div>
            </div>
          )}

          <div className="w-full h-[1px] bg-grey-100 mt-5 mb-2"></div>

          <div className="w-full flex flex-col">
            <Accordion
              className="w-full"
              type="single"
              collapsible
              value={activeAccordionValue}
              onValueChange={(value) => setActiveAccordionValue(value)}>
              <AccordionItem
                className="w-full h-full border-none flex flex-col"
                value="orders">
                <AccordionTrigger className="px-4 bg-white font-normal text-neutral-700 text-[16px] text-start h-[50px] md:h-full pr-4">
                  <div className="w-full flex flex-row items-center gap-x-2">
                    <Notepad
                      weight="fill"
                      className="w-6 h-6 text-neutral-500"
                    />

                    <p>Pesanan Saya</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="md:text-start text-justify w-full h-full pb-0">
                  <div className="w-full grid grid-rows-4">
                    <Link
                      href={"/profile/order-histories-travel"}
                      className={`w-full py-4 flex items-center justify-center ${
                        pathName === "/profile/order-histories-travel" &&
                        "bg-profile_route-100 bg-opacity-50 text-neutral-700"
                      }`}>
                      <div className="w-10/12 flex flex-row items-center gap-x-2">
                        <Bus
                          className={`w-5 h-5 ${
                            pathName === "/profile/order-histories-travel" &&
                            "text-neutral-700"
                          }`}
                        />

                        <p>Travel</p>
                      </div>
                    </Link>

                    <Link
                      href={"/profile/order-histories-rental"}
                      className={`w-full py-4 flex items-center justify-center ${
                        pathName === "/profile/order-histories-rental" &&
                        "bg-profile_route-100 bg-opacity-50 text-neutral-700"
                      }`}>
                      <div className="w-10/12 flex flex-row items-center gap-x-2">
                        <Bus
                          className={`w-5 h-5 ${
                            pathName === "/profile/order-histories-rental" &&
                            "text-neutral-700"
                          }`}
                        />

                        <p>Rental</p>
                      </div>
                    </Link>

                    <Link
                      href={"/profile/order-histories-hotel"}
                      className={`w-full py-4 flex items-center justify-center ${
                        pathName === "/profile/order-histories-hotel" &&
                        "bg-profile_route-100 bg-opacity-50 text-neutral-700"
                      }`}>
                      <div className="w-10/12 flex flex-row items-center gap-x-2">
                        <Building
                          className={`w-5 h-5 ${
                            pathName === "/profile/order-histories-hotel" &&
                            "text-neutral-700"
                          }`}
                        />

                        <p>Hotel</p>
                      </div>
                    </Link>

                    <Link
                      href={"/profile/order-histories-paket"}
                      className={`w-full py-4 flex items-center justify-center ${
                        pathName === "/profile/order-histories-paket" &&
                        "bg-profile_route-100 bg-opacity-50 text-neutral-700"
                      }`}>
                      <div className="w-10/12 flex flex-row items-center gap-x-2">
                        <Package
                          className={`w-5 h-5 ${
                            pathName === "/profile/order-histories-paket" &&
                            "text-neutral-700"
                          }`}
                        />

                        <p>Paket</p>
                      </div>
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                className="w-full h-full border-none flex flex-col"
                value="account">
                <AccordionTrigger className="px-4 bg-white font-normal text-neutral-700 text-[16px] text-start h-[50px] md:h-full pr-4">
                  <div className="w-full flex flex-row items-center gap-x-2">
                    <UserCircle
                      weight="fill"
                      className="w-6 h-6 text-neutral-500"
                    />

                    <p>Akun Saya</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="md:text-start text-justify w-full h-full">
                  <div className="w-full grid grid-rows-2 gap-y-3">
                    <Link
                      href={"/profile"}
                      className={`w-full py-4 flex items-center justify-center ${
                        pathName === "/profile" &&
                        "bg-profile_route-100 bg-opacity-50 text-neutral-700"
                      }`}>
                      <div className="w-10/12 flex flex-row items-center gap-x-2">
                        <p>Profile</p>
                      </div>
                    </Link>

                    <Link
                      href={"/profile/change-user-password"}
                      className={`w-full py-4 flex items-center justify-center ${
                        pathName === "/profile/change-user-password" &&
                        "bg-profile_route-100 bg-opacity-50 text-neutral-700"
                      }`}>
                      <div className="w-10/12 flex flex-row items-center gap-x-2">
                        <p>Ubah Password</p>
                      </div>
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="w-full h-[1px] bg-grey-100 mt-5 mb-2"></div>

          <div className="w-full flex flex-row justify-start px-1">
            <Button
              onClick={handleLogout}
              className="flex flex-row gap-x-3 group">
              <LogOut className="w-5 h-5 text-neutral-500 group-hover:text-error-700" />

              <p className="text-neutral-700 text-[16px] group-hover:text-error-700 hover:underline">
                Log Out
              </p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
