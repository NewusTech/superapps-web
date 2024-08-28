import React from "react";
import Card from "../ui/card/Card";
import { X } from "lucide-react";

export type ModalProps = {
  children: React.ReactNode;
  className: string;
  visible: boolean;
  setVisible: (p: boolean) => void;
};

export default function Modal(props: ModalProps) {
  const { children, className, visible, setVisible } = props;
  if (!visible) return;
  return (
    <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center z-[99]">
      <Card className={className}>
        <div className="absolute h-fit flex flex-row">
          <button className="flex justify-center items-center ml-auto" onClick={()=> setVisible(false)}>
            <X />
          </button>
        </div>
        {children}
      </Card>
    </div>
  );
}
