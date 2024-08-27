import Image from "next/image";
import { twMerge } from "tailwind-merge";

const StepperItem = ({
  isActive,
  isLast,
  label,
}: {
  isActive: boolean;
  isLast: boolean;
  label: string;
}) => (
  <div className="flex flex-col w-fit items-center gap-2">
    <div className="flex flex-row">
      <Image
        src={`/assets/icons/neededs/${isActive ? "icon_donat_active.svg" : "icon_donat_disable.svg"}`}
        height={32}
        width={32}
        alt="donat"
        className="z-[1]"
      />
      {!isLast && (
        <div className="absolute h-[2rem] w-[4rem]  md:w-[9rem]">
          <div
            className={twMerge([
              "h-[2px] relative mt-4 left-8",
              `${isActive ? "bg-primary-700" : "bg-grey-100"}`,
            ])}
          />
        </div>
      )}
    </div>
    <p
      className={twMerge([
        "font-manrope font-medium w-20 text-center line-clamp-1",
        `${isActive ? "text-primary-700" : "text-black"}`,
      ])}
    >
      {label}
    </p>
  </div>
);

export default StepperItem;
