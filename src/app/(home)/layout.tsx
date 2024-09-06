"use client";

import BottomMenu from "@/components/layouts/bottom_menu";
import Footer from "@/components/layouts/footer";
import HamburgerMenu from "@/components/layouts/hamburger_menu";
import HomeNavigationBar from "@/components/layouts/home_navbar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Nunito } from "next/font/google";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState, useRef } from "react";
import { Toaster } from "sonner";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const [isDelayComplete, setIsDelayComplete] = useState(false);

  // Create a ref to track the mounted status
  const isMountedRef = useRef(true);

  useEffect(() => {
    // Set the ref to true when the component is mounted
    isMountedRef.current = true;

    const handleScroll = () => {
      // Only update state if the component is still mounted
      if (isMountedRef.current) {
        if (window.scrollY > 100) {
          setIsScrolledPast(true);
        } else {
          setIsScrolledPast(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Set the ref to false when the component is unmounted
      isMountedRef.current = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Start a timer and check if the component is mounted before updating the state
    const timer = setTimeout(() => {
      if (isMountedRef.current) {
        setIsDelayComplete(true);
      }
    }, 2000);

    // Cleanup the timer when the component is unmounted
    return () => {
      isMountedRef.current = false;
      clearTimeout(timer);
    };
  }, []);

  const isMobile = useMediaQuery("(max-width: 767px)");

  const path = [
    "/profile",
    "/profile/change-user-password",
    "/profile/user-update-profile",
    "/profile/order-histories-rental",
    "/profile/order-histories-travel",
    "/profile/order-histories-hotel",
    "profile/order-histories-paket",
    "/rent/form-rent",
  ];

  const isProfile = () => {
    return path.some((p) => pathname.startsWith(p));
  };

  return (
    <main
      className={`${nunito.className} w-full relative flex flex-col min-h-screen`}>
      {!isMobile ? (
        <Suspense fallback={<div>Loading...</div>}>
          <HomeNavigationBar
            isScrolledPast={isScrolledPast && isDelayComplete}
          />
          <div className="flex-1 overflow-y-auto bg-primary-50">{children}</div>
          <Toaster position="bottom-right" />
          <div className="w-full absolute bottom-0 bg-primary-50">
            <Footer />
          </div>
        </Suspense>
      ) : (
        <div className="w-full relative flex flex-col min-h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            {!isProfile() && <HamburgerMenu />}

            {children}
            <Toaster position="bottom-right" />
            <div className="bottom-0 z-50 fixed w-full bg-neutral-50 rounded-t-xl shadow-md">
              <BottomMenu />
            </div>
          </Suspense>
        </div>
      )}
    </main>
  );
}
