import { LocationBlock } from "./LocationBlock";

const TimeView = ({ from, to }: { from: string; to: string }) => {
  return (
    <div className="w-20 bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4 text-center">
      <span className="flex flex-col text-white">
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
        <TimeView from="10:00" to="11:00" />
        <TimeView from="11:00" to="12:00" />
        <TimeView from="12:00" to="13:00" />
      </div>
    </div>
  );
};

// one component per file, however WIP calendar
const AvailabilityCalendar = () => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <DayView date="31/01" />
        <DayView date="01/01" />
        <DayView date="02/01" />
      </div>
    </>
  );
};

export const AvailabilityBlock = () => {
  return (
    <LocationBlock title="Availabilty">
      <AvailabilityCalendar />
    </LocationBlock>
  );
};
