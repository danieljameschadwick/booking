import { useBooking } from "../../state/booking";
import { useDebug } from "../../state/debug";
import { CheckoutDetails } from "./details/CheckoutDetails";
import { CheckoutForm } from "./form/CheckoutForm";

export const Checkout = () => {
  const { debug } = useDebug();
  const booking = useBooking();

  return (
    <section>
      <h1 className="mt-5 mb-10 text-5xl font-extrabold tracking-tight text-white">
        Checkout
      </h1>

      {debug && (
        <>
          {/* // @TODO: debug whilst we setup form */}
          <div className="max-w-800 mb-8 bg-white">
            <pre>{JSON.stringify(booking, null, 2)}</pre>
          </div>
        </>
      )}

      <div className="grid grid-cols-2 gap-x-8">
        <CheckoutForm />

        <CheckoutDetails />
      </div>
    </section>
  );
};
