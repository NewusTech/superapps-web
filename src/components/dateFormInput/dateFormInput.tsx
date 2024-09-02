import React from "react";
import { Calendar as CalendarIcons } from "@phosphor-icons/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

export type DateInputProps = {
  value: Date;
  setValue: (value: Date) => void;
  label: React.ReactNode | string;
  disabled?: boolean;
  className?: string;
  onChange?: (value: Date) => void;
};

export default function DateFormInput(props: DateInputProps) {
  const { value, setValue, label, disabled, onChange, ...rest } = props;

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setValue(selectedDate);
      if (onChange) {
        onChange(selectedDate);
      }
    }
  };

  return (
    <div className={twMerge(["flex flex-col w-full gap-y-2", rest.className])}>
      {typeof label !== "string" ? label : <p className="">{label}</p>}
      <div
        className={twMerge([
          `flex flex-row items-center w-full bg-neutral-50 border border-outline_border-100 rounded-full py-1 px-3 ${disabled ? "opacity-50" : ""}`,
          rest.className,
        ])}>
        <CalendarIcons className="w-6 h-6 text-primary-700" />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="w-full justify-start text-left text-[14px]"
              disabled={disabled}>
              {value ? format(value, "PPP") : "Pilih Tanggal"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Calendar
              classNames={{
                months:
                  "bg-neutral-50 flex flex-row justify-center items-center p-4",
                nav_button_previous:
                  "border border-primary-700 absolute left-1",
                nav_button_next: "border border-primary-700 absolute right-1",
                day_today: "bg-primary-700 text-neutral-50",
              }}
              mode="single"
              selected={value}
              onSelect={(v) => handleDateSelect(v || new Date())}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <ChevronDown size={16} />
      </div>
    </div>
  );
}
