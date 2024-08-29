import StatusPembayaran from "@/components/pages/avaliable-schedule/partials/StatusPembayaran";
import React from "react";

export default function PaymentRentStatusPage() {
  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-9/12 flex flex-col mt-32">
        <StatusPembayaran />
      </div>
    </section>
  );
}
