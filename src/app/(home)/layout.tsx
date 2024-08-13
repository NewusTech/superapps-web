"use client";

import Footer from "@/components/layouts/footer";
import HomeNavigationBar from "@/components/layouts/home_navbar";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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

  return (
    <main
      className={`${poppins.className} w-full relative flex flex-col min-h-screen`}>
      <HomeNavigationBar isScrolledPast={isScrolledPast && isDelayComplete} />
      {children}
      <Toaster position="bottom-right" />
      <div className="w-full absolute bottom-0 bg-primary-50">
        <Footer />
      </div>
    </main>
  );
}
