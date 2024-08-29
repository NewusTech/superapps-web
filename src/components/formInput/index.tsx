"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function FormInput({
  type,
  placeholder,
  id,
  name,
  htmlFor,
  className,
  label,
  classLabel,
  value,
  onChange,
}: {
  type?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  htmlFor?: string;
  className?: string;
  label?: string;
  classLabel?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-y-3">
      <Label className={classLabel} htmlFor={htmlFor}>
        {label}
      </Label>

      <Input
        className={className}
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
