import React from "react";
import { twMerge } from "tailwind-merge";

export type InputTextProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputText(props: InputTextProps) {
  const { label, placeholder , ...rest} = props;
  return (
    <label className="flex flex-col gap-2 w-full">
      {label && <span className="font-medium text-black">{label}</span>}
      <input
        className={twMerge(["px-2 py-3 rounded-md border",rest.className])}
        placeholder={placeholder ?? "Input..."}
        {...rest}
      />
    </label>
  );
}
