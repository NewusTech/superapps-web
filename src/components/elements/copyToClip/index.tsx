"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "@phosphor-icons/react";
import React from "react";
import Swal from "sweetalert2";

interface CopyButtonProps {
  textToCopy: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      Swal.fire({
        icon: "success",
        title: "Berhasil menyalin teks ke clipboard!",
        timer: 2000,
        showConfirmButton: false,
        position: "center",
      });
    } catch (err) {
      console.error("Gagal menyalin teks ke clipboard", err);
    }
  };

  return (
    <Button onClick={handleCopyClick}>
      <Copy className="w-6 h-6 text-neutral-500" />
    </Button>
  );
};

export default CopyButton;
