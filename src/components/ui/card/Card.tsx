import React from "react";
import { twMerge } from "tailwind-merge";

type CardProps = {
  children: React.ReactNode;
  header?: string | React.ReactNode;
} & React.HtmlHTMLAttributes<any>;
export default function Card(props: CardProps) {
  const { children, className, header, ...rest } = props;
  return (
    <div
      className={twMerge([
        "w-full border rounded-xl overflow-hidden bg-white",
        className,
      ])}
      {...rest}
    >
      {typeof header !== "string" ? (
        header
      ) : (
        <div className="px-6 py-4 border-b font-semibold">{header}</div>
      )}
      <div className="p-6 w-full">{children}</div>
    </div>
  );
}
