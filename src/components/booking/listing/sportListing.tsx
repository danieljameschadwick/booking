import locations from "../../../__mocks__/locations";

export const SportListing = () => {
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
                  {/* @TODO: convert to <Image /> */}
                  <img src={image} className="max-w-sm" />
                </div>
              )}

              <div className="flex flex-col flex-1 px-4">
                <div className="mb-4 flex flex-1 flex-col">
                  <span className="mb-1 text-xl font-semibold">{name}</span>

                  <span className="text-base">{address}</span>
                </div>

                <div className="flex flex-row-reverse">
                  {/* // @TODO: convert to <Link /> */}
                  <a
                    href={`/location/${id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="focus:shadow-outline rounded bg-[hsl(280,100%,70%)] py-2 px-4 font-bold text-white hover:bg-[hsl(280,100%,50%)] focus:outline-none"
                  >
                    Book
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
