import React from "react";
import { twMerge } from "tailwind-merge";

export type myButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<any>;

export default function Button(props: myButtonProps) {
  const { children, variant = "primary", ...rest } = props;
  const getVariant = () => {};
  return (
    <button
      {...rest}
      className={twMerge([
        "py-2 px-2 sm:py-3 sm:px-5 rounded-md duration-300 text-white text-base",
        rest.className,
        `${variant === "primary" ? "bg-primary-700 hover:bg-primary-600" : "text-primary-700 border border-primary-700 hover:border-primary-600 hover:bg-primary-700 hover:text-white"}`,
      ])}
    >
      {children}
    </button>
  );
}
