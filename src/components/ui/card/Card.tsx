import React from "react";
import { twMerge } from "tailwind-merge";

type CardProps = {
  children: React.ReactNode;
} & React.HtmlHTMLAttributes<any>;
export default function Card(props: CardProps) {
  const { children, className, ...rest } = props;
  return (
    <div
      className={twMerge(["w-full p-6 border rounded-xl", className])}
      {...rest}
    >
      {children}
    </div>
  );
}
