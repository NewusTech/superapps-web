"use client";

import ramatranz from "@/../../public/assets/images/neededs/ramatranz.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Cloud,
  CreditCard,
  Eye,
  EyeOff,
  Github,
  Keyboard,
  LifeBuoy,
  Link,
  Loader,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import FollowFooter from "@/components/pages/footer";
import { formSignInSchema } from "@/validations";
import { z } from "zod";
import { loginUser, profileUser } from "@/services/api";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { followes } from "@/constants/main";
import { ProfileUserInterface } from "@/types/interface";

export default function HamburgerMenu() {
  const pathname = usePathname();

  const router = useRouter();

  const [errors, setErrors] = useState<any>({});
  const [seen, setSeen] = useState(true);
  const [loginModal, setLoginModal] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [firstLoading, setFirstLoading] = useState(false);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [profile, setProfile] = useState<ProfileUserInterface>();

  useEffect(() => {
    setToken(Cookies.get("Authorization"));
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
    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  const validateForm = async () => {
    try {
      await formSignInSchema.parseAsync(formLogin);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.format();
        setErrors(formattedErrors);
      }
      setFirstLoading(false);
      return false;
    }
  };

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSubmitted(true);

    const isValid = await validateForm();

    if (isValid) {
      setFirstLoading(true);

      try {
        const response = await loginUser(formLogin);

        if (response.success === true) {
          Cookies.set("Authorization", response?.data?.token);

          setToken(response?.data?.token);

          Swal.fire({
            icon: "success",
            title: "Login berhasil!",
            timer: 2000,
            showConfirmButton: false,
            position: "center",
          });
          if (response?.data?.alamat !== null) {
            return router.push("/");
          } else {
            return router.push("/profile");
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Login gagal. Periksa NIK dan password Anda.",
            timer: 2000,
            showConfirmButton: false,
            position: "center",
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setFirstLoading(false);
        setHasSubmitted(false);
        setLoginModal(false);
      }
    }
  };

  const handleRegister = () => {
    router.push("/register");
  };

  const handleLogout = () => {
    Cookies.remove("Authorization");
    setToken(undefined);
    Swal.fire({
      icon: "success",
      title: "Berhasil logout, silahkan login kembali!",
      timer: 2000,
      showConfirmButton: false,
      position: "center",
    });
    router.push("/");
  };

  return (
    <section className="flex flex-row top-8 px-8 justify-between bg-transparent w-full z-50 absolute">
      <div className="w-3/12">
        <Image
          src={ramatranz}
          alt="Lampung Timur"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="border-none outline-none ring-0">
              {pathname === "/hotel" ? (
                <Menu className="text-neutral-50 w-6 h-6" />
              ) : (
                <Menu className="text-neutral-700 w-6 h-6" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 bg-white"
            key={token || "no-token"}>
            {!token && (
              <>
                <DropdownMenuLabel>Auth</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <>
                    <AlertDialog open={loginModal} onOpenChange={setLoginModal}>
                      <AlertDialogTrigger className="text-sm pl-2">
                        Masuk
                      </AlertDialogTrigger>

                      <AlertDialogContent className="bg-white w-11/12 md:w-4/12 px-5 py-5 gap-y-5 overflow-hidden rounded-xl">
                        <div className="w-full flex flex-row justify-end py-3 md:py-0 items-center">
                          <AlertDialogFooter className="border-none h-0 outline-none">
                            <AlertDialogCancel className="border-none h-0 outline-none">
                              <X className="w-6 h-6" />
                            </AlertDialogCancel>
                          </AlertDialogFooter>
                        </div>

                        <AlertDialogTitle className="text-center border-b border-grey-100">
                          <p className="font-semibold text-[22px] text-neutral-700 pb-2">
                            Masuk akun Rama Tranz
                          </p>
                        </AlertDialogTitle>

                        <div className="w-full flex flex-col">
                          <form
                            onSubmit={handleSubmitLogin}
                            className="w-full flex flex-col gap-y-3">
                            <div className="w-full flex flex-col gap-y-5">
                              <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                                <Label
                                  htmlFor="name"
                                  className="focus-within:text-primary-700">
                                  Nama Lengkap
                                </Label>

                                <Input
                                  id="email"
                                  name="email"
                                  value={formLogin.email}
                                  onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                  ) =>
                                    setFormLogin({
                                      ...formLogin,
                                      email: e.target.value,
                                    })
                                  }
                                  type="email"
                                  className="w-full focus-visible:text-neutral-700 focus-visible:border focus-visible:border-primary-700"
                                  placeholder="Masukkan Email Anda"
                                />
                              </div>
                              {hasSubmitted && errors?.email?._errors && (
                                <div className="text-error-700 text-[12px] md:text-[14px]">
                                  {errors.email._errors[0]}
                                </div>
                              )}

                              <div className="w-full focus-within:text-primary-700 flex flex-col gap-y-2">
                                <Label
                                  htmlFor="password"
                                  className="focus-within:text-primary-700">
                                  Kata Sandi
                                </Label>

                                <div className="focus-within:border focus-within:border-primary-700 flex items-center mt-1 justify-between rounded-lg bg-transparent text-[14px] w-full h-[40px] font-normal border border-grey-50 placeholder:text-[14px] placeholder:text-neutral-700">
                                  <Input
                                    id="password"
                                    name="password"
                                    value={formLogin.password}
                                    onChange={(
                                      e: React.ChangeEvent<HTMLInputElement>
                                    ) =>
                                      setFormLogin({
                                        ...formLogin,
                                        password: e.target.value,
                                      })
                                    }
                                    type={!seen ? "text" : "password"}
                                    className="w-full focus-visible:text-neutral-700 border-none outline-none bg-transparent"
                                    placeholder="Masukkan Kata Sandi"
                                  />

                                  <div
                                    onClick={() => setSeen(!seen)}
                                    className="p-2 cursor-pointer">
                                    {seen ? (
                                      <EyeOff className="text-neutral-400 w-[20px] h-[20px]" />
                                    ) : (
                                      <Eye className="text-neutral-400 w-[20px] h-[20px]" />
                                    )}
                                  </div>
                                </div>
                              </div>
                              {hasSubmitted && errors?.password?._errors && (
                                <div className="text-error-700 text-[12px] md:text-[14px]">
                                  {errors.password._errors[0]}
                                </div>
                              )}
                            </div>

                            <div className="w-full flex flex-col gap-y-6">
                              <Link
                                href={"/forgot-password"}
                                className="text-end hover:underline hover:text-primary-600 text-primary-700 ">
                                Lupa Kata Sandi
                              </Link>

                              <div className="w-full flex flex-row">
                                <Button
                                  type="submit"
                                  disabled={firstLoading ? true : false}
                                  className="w-full bg-primary-700 text-neutral-50 text-[18px] py-6">
                                  {firstLoading ? (
                                    <Loader className="animate-spin" />
                                  ) : (
                                    "Masuk"
                                  )}
                                </Button>
                              </div>

                              <div className="w-full flex flex-row items-center gap-x-1">
                                <div className="w-full h-0.5 bg-neutral-400"></div>

                                <div className="w-full">
                                  <p className="text-neutral-400 text-center text-[12px]">
                                    Atau masuk dengan
                                  </p>
                                </div>

                                <div className="w-full h-0.5 bg-neutral-400"></div>
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="w-full flex flex-col gap-y-4">
                          <div className="w-full flex flex-row gap-x-3 justify-center">
                            {followes?.map((item: any, i: number) => {
                              return <FollowFooter key={i} item={item} />;
                            })}
                          </div>

                          <div className="text-neutral-700 flex flex-row gap-x-2 text-center">
                            Kamu belum punya akun?
                            <Link href="/register" className="text-primary-700">
                              Daftar
                            </Link>
                          </div>
                        </div>
                      </AlertDialogContent>
                    </AlertDialog>
                  </>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleRegister}>
                  Register
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </>
            )}
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => router.push("/travel")}>
              <span>Travel</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/package")}>
              <span>Paket</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/hotel")}>
              <span>Hotel</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/profile")}>
              <span>Rental</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/article")}>
              <span>Artikel</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Information</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => router.push("/about-us")}>
              <span>Tentang Ramatranz</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {token && (
              <>
                <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => router.push("/profile")}>
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
}
