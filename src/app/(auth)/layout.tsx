import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en" className={`${poppins.className} h-screen w-screen`}>
      <div className="w-full">
        {children}
        <Toaster position="bottom-right" />
      </div>
    </main>
  );
}
