import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { Select } from "../select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Label } from "../label";

export type InputProps = {
  label?: string;
  leadIcon?: React.ReactNode;
  data?: { label: string; id: string }[];
  placeholder?: string;
  value: string;
  prefix?: string;
  className: string;
  onChange?: (value: any) => void;
};

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
  return (
    <label className={cn(["w-full flex flex-col gap-2"])}>
      {label && <span className="font-medium"> {label} </span>}
      <div className={cn("border border-outline_border-100 rounded-full flex flex-row items-center overflow-hidden bg-white pl-3 pr-3 gap-2 h-12",className)}>
        {leadIcon && leadIcon}
        <select
          id="select-1"
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
  //   <Label className={cn("w-full flex flex-col gap-2")}>
  //   {label && <span className="font-medium">{label}</span>}
  //   <div className={cn("border border-outline_border-100 rounded-full flex items-center overflow-hidden bg-white px-3 gap-2 h-12", className)}>
  //     {leadIcon && leadIcon}
  //     <Select onValueChange={onChange} value={value}>
  //     <SelectTrigger className="w-full border-none outline-none text-[14px]">
  //         <SelectValue placeholder={placeholder ?? "---Select---"} />
  //       </SelectTrigger>
  //       <SelectContent className="bg-neutral-50 border border-outline_border-100 w-full">
  //         {data && data.map((d) => (
  //           <SelectItem key={d.id} value={d.id}>
  //             {d.label} {prefix}
  //           </SelectItem>
  //         ))}
  //       </SelectContent>
  //     </Select>
  //   </div>
  // </Label>
  );
}
