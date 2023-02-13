import { useState } from "react";
import { createPortal } from "react-dom";
import BookingModal from "../../booking/modal/BookingModal";
import { LocationBlock } from "./LocationBlock";

// @TODO: combine blocks for reusability (Arrow/Time)
const ArrowBlock = () => {
  return (
    <div className="flex w-20 flex-col justify-center bg-gray-400 p-4 text-center">
      <span className="text-white">
        {/* // @TODO: icon library needed */}
        {">"}
      </span>
    </div>
  );
};

const TimeBlock = ({
  from,
  to,
  price,
}: {
  from: string;
  to: string;
  price: number;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  // @TODO: move to util e.g. import currencyFormatter from ..
  const formattedPrice = new Intl.NumberFormat("en-GB", {
    style: "currency", // @TODO: const style
    currency: "GBP", // @TODO: currency const / user prefs or venue pref?
  }).format(price);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <div
        className="w-20 bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4 text-center"
        onClick={handleClick}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white">
            {from} - {to}
          </span>
          <span className="text-xs text-white">{formattedPrice}</span>
        </div>
      </div>
      {open &&
        createPortal(
          // should we handle this with a context, and reducer?
          <BookingModal handleClose={() => setOpen(false)} />,
          // best way to hook to document?
          document.getElementById("portal-root")
        )}
    </>
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
        <TimeBlock from="10:00" to="11:00" price={60} />
        <TimeBlock from="11:00" to="12:00" price={60} />
        <TimeBlock from="12:00" to="13:00" price={60} />
        <TimeBlock from="13:00" to="14:00" price={60} />
        <TimeBlock from="14:00" to="15:00" price={60} />
        <TimeBlock from="15:00" to="16:00" price={60} />
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
