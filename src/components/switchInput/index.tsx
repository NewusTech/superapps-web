import React from "react";

export default function SwitchInput({
  checked,
  onChange,
  className,
}: {
  checked?: boolean;
  onChange?: () => void;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center cursor-pointer ${className}`}>
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`w-11 h-6 bg-neutral-300 rounded-full peer peer-focus:ring-1 peer-focus:ring-neutral-300 dark:peer-focus:ring-neutral-300 peer-checked:after:translate-x-full peer-checked:after:border-neutral-50 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-neutral-50 after:border after:border-grey-100 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600`}></div>
    </div>
  );
}
