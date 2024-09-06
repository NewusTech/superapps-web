import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "../ui/drawer";

export type ModalProps = {
  children: React.ReactNode;
  className?: string;
  visible: boolean;
  title?: string;
  responsive?: boolean;
  setVisible: (visible: boolean) => void;
};

export default function Modal(props: ModalProps) {
  const { children, className, visible, setVisible, title="", responsive } = props;
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <Dialog open={visible} onOpenChange={setVisible}>
        <DialogContent className={cn("bg-white", className)}>
          <DialogHeader className={title?"":"hidden"}>
             <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
            {children}
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={visible} onOpenChange={setVisible}>
      <DrawerContent className={cn("bg-white pb-10 max-h-[70%]", className)}>
        <DrawerHeader className={cn("text-left",title?"":"hidden")}>
           <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  );
}
