import { LocationBlock } from "./LocationBlock";

// @TODO: combine blocks for reusability (Arrow/Time)
const ArrowBlock = () => {
  return (
    <div className="bg-gray-400 flex w-20 flex-col justify-center p-4 text-center">
      <span className="text-white">
        {/* // @TODO: icon library needed */}
        {">"}
      </span>
    </div>
  );
};

const TimeBlock = ({ from, to }: { from: string; to: string }) => {
  return (
    <div className="w-20 bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4 text-center">
      <span className="flex flex-col items-center text-white">
        {from} - {to}
      </span>
    </div>
  );
};

// one component per file, however WIP calendar
// convert date to Date, and format with date-fns?
const DayView = ({ date }: { date: string }) => {
  return (
    <div className="flex flex-row">
      <div className="align-center flex w-16 items-center justify-center">
        <span className="text-md font-semibold">{date}</span>
      </div>

      <div className="flex flex-row gap-1">
        <TimeBlock from="10:00" to="11:00" />
        <TimeBlock from="11:00" to="12:00" />
        <TimeBlock from="12:00" to="13:00" />
        <TimeBlock from="13:00" to="14:00" />
        <TimeBlock from="14:00" to="15:00" />
        <TimeBlock from="15:00" to="16:00" />
      </div>
    </div>
  );
};

// one component per file, however WIP calendar
const AvailabilityCalendar = () => {
  return (
    <div className="flex flex-row flex-nowrap gap-2">
      <div className="flex flex-col gap-1">
        <DayView date="31/01" />
        <DayView date="01/01" />
        <DayView date="02/01" />
      </div>
      <ArrowBlock />
    </div>
  );
};

export const AvailabilityBlock = () => {
  return (
    <LocationBlock title="Availabilty">
      <AvailabilityCalendar />
    </LocationBlock>
  );
};
