import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { FaChevronDown } from "react-icons/fa6";


export type InputProps = {
  label?: string;
  leadIcon?: React.ReactNode;
  data: { label: string; id: string }[];
  placeholder?: string;
  value: string;
  prefix?: string;
} & React.SelectHTMLAttributes<any>;

export default function InputSelect(props: InputProps) {
  const {
    onChange,
    value = "",
    data,
    label,
    leadIcon,
    placeholder,
    prefix,
    className,
    ...rest
  } = props;
  const refInput = useRef(null);
  return (
    <label className={cn(["w-full flex flex-col gap-2"])}>
      {label && <span className="font-medium"> {label} </span>}
      <div className={cn("border border-outline_border-100 rounded-full flex flex-row items-center overflow-hidden bg-white pl-3 pr-3 gap-2 h-12",className)}>
        {leadIcon && leadIcon}
        <select
          id="select-1"
          ref={refInput}
          className="w-full pt-2 pb-2"
          onChange={onChange}
          value={value}
        >
          <option id="" hidden selected>
            {placeholder ?? "---Select---"}
          </option>
          {data &&
            data.map((d) => (
              <option key={d.id} id={d.id}>
                {d.label} {prefix}
              </option>
            ))}
        </select>
      </div>
    </label>
  );
}
