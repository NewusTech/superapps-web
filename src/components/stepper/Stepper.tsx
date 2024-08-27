import StepperItem from "./StepperItem";

const Stepper = ({
  item,
  position,
}: {
  item: { id: number; label: string }[];
  position: number;
}) => {
  return (
    <div className="flex flex-row items-center justify-center gap-[1rem] md:gap-[6rem]">
      {item.map((i) => (
        <StepperItem
          key={i.id}
          label={i.label}
          isActive={i.id <= position}
          isLast={i.id === item.length}
        />
      ))}
    </div>
  );
};

export default Stepper;
