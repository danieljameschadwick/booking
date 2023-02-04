import { useLocation } from "../../state/location";
import { LocationHeader } from "./header/LocationHeader";
import { AvailabilityBlock } from "./blocks/AvailabilityBlock";
import { BulkBookingBlock } from "./blocks/BulkBookingBlock";
import { DescriptionBlock } from "./blocks/DescriptionBlock";
import { ImageBlock } from "./blocks/ImageBlock";

const mockDescription =
  "Located in the heart of London, our state-of-the-art sports hall is the perfect venue for basketball enthusiasts. With a full-sized court, regulation hoops and professional-grade flooring, you'll feel like a pro on the court. Whether you're looking for a pick-up game, or a fully organized tournament, we've got you covered. Our facilities also include changing rooms, showers and ample parking, making it easy for you to focus on the game. Book now for a thrilling basketball experience in the heart of the city.";

export const Location = () => {
  const { image = null } = useLocation();

  return (
    <section>
      <LocationHeader />

      <div className="flex max-w-screen-lg flex-col flex-wrap items-start gap-4 lg:flex-row lg:flex-nowrap">
        <div className="container flex flex-col bg-white p-4 lg:w-8/12">
          {/* // @TODO: when we have the content system, add a slider */}
          {/* probably prop drill for the time being, need baseimage/images block for slider */}
          {image && <ImageBlock image={image} />}

          <AvailabilityBlock />
          <DescriptionBlock description={mockDescription} />
        </div>

        <div className="container flex flex-col bg-white p-4 lg:w-4/12">
          <BulkBookingBlock />
        </div>
      </div>
    </section>
  );
};
