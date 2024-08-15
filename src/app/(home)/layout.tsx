"use client";

import BottomMenu from "@/components/layouts/bottom_menu";
import Footer from "@/components/layouts/footer";
import HamburgerMenu from "@/components/layouts/hamburger_menu";
import HomeNavigationBar from "@/components/layouts/home_navbar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Nunito_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const [isDelayComplete, setIsDelayComplete] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolledPast(true);
      } else {
        setIsScrolledPast(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <main
      className={`${nunito.className} w-full relative flex flex-col min-h-screen`}>
      {!isMobile ? (
        <div className="w-full relative flex flex-col h-full">
          <HomeNavigationBar
            isScrolledPast={isScrolledPast && isDelayComplete}
          />
          {children}
          <Toaster position="bottom-right" />
          <div className="w-full absolute bottom-0 bg-primary-50">
            <Footer />
          </div>
        </div>
      ) : (
        <div className="w-full relative flex flex-col min-h-screen">
          <HamburgerMenu />
          {children}
          <Toaster position="bottom-right" />
          {/* <div className="w-full absolute bottom-0 bg-primary-50">
            <Footer />
          </div> */}
          <div className="bottom-0 z-50 fixed w-full bg-primary-100 rounded-t-xl shadow-md">
            <BottomMenu />
          </div>
        </div>
      )}
    </main>
  );
}
