"use client";

import SelectProfileNav from "@/components/layouts/profile_select_nav";
import ProfilePage from "@/components/layouts/profile_side";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Nunito } from "next/font/google";
import { Toaster } from "sonner";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <main className={`${nunito.className} w-full relative flex flex-col`}>
      {isMobile && <SelectProfileNav />}
      <div className="w-full flex flex-row gap-x-10 px-3 md:px-20">
        {!isMobile && <ProfilePage />}

        {children}
      </div>
      <Toaster position="bottom-right" />
    </main>
  );
}
