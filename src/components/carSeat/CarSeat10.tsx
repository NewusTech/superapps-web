import React from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { cn } from "@/lib/utils";
import Card from "../ui/card/Card";

export type CarSeat10Props = {
  filled: string[];
  selected: string[];
  onSeatPress: (seatNumber: string) => void;
};

export default function CarSeat10(props: CarSeat10Props) {
  const { filled = [], selected = [], onSeatPress = () => {} } = props;

  const getSeatStatus = (seatNumber: string): SeatItemProps["status"] => {
    if (filled.find((item) => item.toString() === seatNumber)) return "filled";

    if (selected.find((item) => item.toString() === seatNumber))
      return "selected";

    return "available";
  };

  return (
    <Card className="w-fit">
      <div className="flex flex-row gap-2">
        <div className="py-2 px-3 border h-[7rem] w-1 my-auto border-black"></div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center justify-between">
            <SeatItem
              seatNumber="1"
              status={getSeatStatus("1")}
              onClick={() => onSeatPress("1")}
            />
            <SeatItem seatNumber="driver" status="driver" />
          </div>
          <div className="flex flex-row items-center justify-end">
            <SeatItem
              seatNumber="4"
              status={getSeatStatus("4")}
              onClick={() => onSeatPress("4")}
            />
            <SeatItem
              seatNumber="3"
              status={getSeatStatus("3")}
              onClick={() => onSeatPress("3")}
            />
            <SeatItem
              seatNumber="2"
              status={getSeatStatus("2")}
              onClick={() => onSeatPress("2")}
            />
          </div>
          <div className="flex flex-row items-center">
            <SeatItem
              seatNumber="7"
              status={getSeatStatus("7")}
              className="mr-[2rem]"
              onClick={() => onSeatPress("7")}
            />
            <SeatItem
              seatNumber="6"
              status={getSeatStatus("6")}
              onClick={() => onSeatPress("6")}
            />
            <SeatItem
              seatNumber="5"
              status={getSeatStatus("5")}
              onClick={() => onSeatPress("5")}
            />
          </div>
          <div className="flex flex-row items-center">
            <SeatItem
              seatNumber="10"
              status={getSeatStatus("10")}
              className="mr-[2rem]"
              onClick={() => onSeatPress("10")}
            />
            <SeatItem
              seatNumber="9"
              status={getSeatStatus("9")}
              onClick={() => onSeatPress("9")}
            />
            <SeatItem
              seatNumber="8"
              status={getSeatStatus("8")}
              onClick={() => onSeatPress("8")}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

type SeatItemProps = {
  seatNumber: string;
  status: "filled" | "selected" | "available" | "driver" | "unavaliable";
} & React.ButtonHTMLAttributes<any>;
function SeatItem(props: SeatItemProps) {
  const { seatNumber, status, disabled, className, ...rest } = props;

  return (
    <button
      disabled={status === "filled"}
      className={cn([
        "h-[4rem] w-[4rem] flex items-center justify-center border roundedn-md text-black",
        className,
        status === "driver"
          ? "bg-transparent"
          : status === "filled"
            ? "bg-gray-500"
            : status === "available"
              ? "bg-transparent"
              : "bg-primary-700 text-white",
      ])}
      {...rest}
    >
      {status === "driver" ? (
        <GiSteeringWheel size={32} />
      ) : (
        <span>{seatNumber}</span>
      )}
    </button>
  );
}
