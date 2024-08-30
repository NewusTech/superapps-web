import ProfilePage from "@/components/layouts/profile_side";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`${poppins.className} w-full relative flex flex-col min-h-screen`}>
      <div className="w-full flex flex-row gap-x-10 px-20">
        <ProfilePage />

        {children}
      </div>
      <Toaster position="bottom-right" />
    </main>
  );
}
