import { LocationBlock } from "./LocationBlock";

const DayView = () => {
  return (
    <div>
      
    </div>
  );
}

export const AvailabilityBlock = () => {
  return (
    <LocationBlock title="Availabilty">
      <div className="flex flex-col md:flex-row">
        <div className="lg:w-9/12"></div>

        <div className="flex flex-col gap-1 lg:w-3/12">
          {/* time picker */}
          <div className="bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4 text-center">
            <span className="text-white">10:00 - 11:00</span>
          </div>

          <div className="bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4 text-center">
            <span className="text-white">11:00 - 12:00</span>
          </div>
        </div>
      </div>
    </LocationBlock>
  );
};
