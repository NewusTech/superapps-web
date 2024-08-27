import React, { useRef } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

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
    ...rest
  } = props;
  const refInput = useRef(null);
  return (
    <label className={twMerge(["w-full flex flex-col gap-2", rest.className])}>
      {label && <span className="font-medium"> {label} </span>}
      <div className="border border-outline_border-100 rounded-full flex flex-row items-center overflow-hidden bg-white pl-3 pr-3 gap-2 h-12">
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
