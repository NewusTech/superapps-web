import React from "react";
import { twMerge } from "tailwind-merge";

export type InputAreaProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputArea(props: InputAreaProps) {
  const { label, placeholder , ...rest} = props;
  return (
    <label className="flex flex-col gap-2 w-full">
      {label && <span className="font-medium text-black">{label}</span>}
      <textarea  
        className={twMerge(["px-2 py-3 rounded-md border",rest.className])}
        placeholder={placeholder ?? "Input..."}
        // {...rest}
      />
    </label>
  );
}
