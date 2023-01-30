import { useRouter } from "next/router";
import locations from "../../../__mocks__/locations";

export const SportListing = () => {
  const router = useRouter();
  console.log(router.query); // @TODO: debug

  const handleBooking = (id: string) => {
    // router.push does not support target _blank
    // router.push({
    //   pathname: `/location/${id}`,
    // })

    // serialize query params to location,
    // potentially change to <Link target="_blank" />
    window.open(`/location/${id}`, "_blank");
  };

  return (
    <section className="flex flex-col gap-4">
      {locations.map((venue, index) => {
        const { id, name, address, image } = venue;

        // @TODO: split to component
        return (
          <div key={index} className="bg-white p-8">
            <div className="flex">
              {image && (
                <div className="">
                  <img src={image} className="max-w-sm" />
                </div>
              )}

              <div className="flex flex-col flex-1 px-4">
                <div className="mb-4 flex flex-1 flex-col">
                  <span className="mb-1 text-xl font-semibold">{name}</span>

                  <span className="text-base">{address}</span>
                </div>

                <div className="flex flex-row-reverse">
                  <button
                    type="submit"
                    className="focus:shadow-outline rounded bg-[hsl(280,100%,70%)] py-2 px-4 font-bold text-white hover:bg-[hsl(280,100%,50%)] focus:outline-none"
                    onClick={() => handleBooking(id)}
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
