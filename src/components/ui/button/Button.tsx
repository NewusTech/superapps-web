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
        "pl-5 pr-5 pt-3 pb-3 rounded-md duration-300 text-white",
        rest.className,
        `${variant === "primary" ? "bg-primary-700 hover:bg-primary-600" : "text-primary-700 border border-primary-700 hover:border-primary-600 hover:bg-primary-700 hover:text-white"}`,
      ])}
    >
      {children}
    </button>
  );
}
