import { useBooking } from "../../../state/booking";

export const CheckoutDetails = () => {
  const { date, location } = useBooking();

  return (
    <section className="flex flex-col bg-white p-6">
      {/* CheckoutDetailsLocation */}
      {location && (
        <>
          <div className="mb-4 flex flex-col">
            {/* // image */}
            {location?.image && (
              <div className="mb-2">
                {/* // @TODO: to be replaced with location.thumbnailImage / location.baseImage */}
                <img src={location.image} />
              </div>
            )}

            {/* // venue name */}
            <h3 className="text-2xl">{location.name}</h3>

            {/* // address */}
            <span>{location.address}</span>
          </div>

          <hr />
        </>
      )}

      <div className="my-4 flex flex-col">
        {/* // booking type */}
        <p>
          <strong>Type: </strong> <span>Basketball</span>
        </p>
      </div>

      {/* common component each block with <hr /> ?? */}
      <div className="my-4 flex flex-col">
        {/* // date time info */}
        <p>
          {/* <strong>Date: </strong> <span>Thursday, 17th December 2023</span> */}
          <strong>Date: </strong> <span>{date}</span>
        </p>

        <p>
          <strong>Time:</strong> <span>10am - 11am</span>
        </p>
      </div>

      <hr />

      <div className="my-4 flex flex-col">
        {/* // pricing for venue */}
        <p>
          <strong>Price:</strong> <span>£60.00</span>
        </p>
      </div>

      <hr />

      <div className="mt-4 flex flex-row justify-between">
        <h4>Total:</h4>

        <span>£65.00</span>
      </div>

      <div className="mt-4 flex flex-col">
        {/* this is enabled when we have the details from the form submitted */}
        <button
          type="submit"
          className="focus:shadow-outline mt-2 rounded bg-[hsl(280,100%,70%)] py-2 px-4 font-bold text-white hover:bg-[hsl(280,100%,50%)] focus:outline-none"
          disabled
        >
          Checkout
        </button>

        <button
          type="submit"
          className="focus:shadow-outline mt-2 rounded bg-[hsl(280,100%,70%)] py-2 px-4 font-bold text-white hover:bg-[hsl(280,100%,50%)] focus:outline-none"
          disabled
        >
          Cancel
        </button>

        {/* // Terms & conditions copyright */}
      </div>
    </section>
  );
};
