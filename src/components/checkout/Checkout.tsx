import { useBooking } from "../../state/booking";
import { useDebug } from "../../state/debug";
import { CheckoutDetails } from "./details/CheckoutDetails";
import { CheckoutForm } from "./form/CheckoutForm";
import { CheckoutFormProvider } from "./form/CheckoutFormContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = () => {
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
          <div className="max-w-800 mb-8 bg-white p-8">
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

// @TODO: move this to higher component rather than export default?
//   move booking provider here too? or move this up?
// eslint-disable-next-line react/display-name, import/no-anonymous-default-export
export default () => {
  const booking = useBooking();
  const { payment = null, setBooking } = booking;
  const { clientSecret = null } = payment || {};

  useEffect(() => {
    if (clientSecret) {
      return;
    }

    // @TODO: create PaymentIntent as soon as the page loads
    //   check if clientSecret already exists on booking (persisted on backend)
    //   if not, fetch,
    //   if it does, just reuse
    fetch("/api/v1/payment/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // @TODO: we need to sanitize data sent,
      //   only need totals/sub totals, booking ref doesnt exist yet
      //   can set booking ref in BE/API
      body: JSON.stringify({ booking }),
    })
      .then((res) => res.json())
      .then((data) => {
        const { clientSecret } = data;

        setBooking((prevState) => ({
          ...prevState,
          payment: {
            clientSecret,
          },
        }));
      });
  }, [clientSecret]);

  const options = {
    // passing the client secret obtained from the server
    clientSecret,
  };

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutFormProvider>
            <Checkout />
          </CheckoutFormProvider>
        </Elements>
      )}
    </>
  );
};
