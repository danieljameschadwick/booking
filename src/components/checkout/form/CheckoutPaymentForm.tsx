import { useCheckoutForm } from "./CheckoutFormContext";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useBooking } from "../../../state/booking";
import { useEffect, useState } from "react";

interface Form {
  fullName: string | null;
  email: string | null;
  phoneNumber: string | null;
}

export const CheckoutPaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { setBooking } = useBooking();
  const { setCheckoutForm } = useCheckoutForm();
  const [paymentMessage, setPaymentMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    // @TODO: debug
    console.log(clientSecret);

    if (!clientSecret) {
      console.log("no clientSecret");
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      console.log(paymentIntent);

      switch (paymentIntent.status) {
        // @TODO: paymentIntend.status constant
        case "succeeded":
          setPaymentMessage("Payment succeeded!");
          break;
        case "processing":
          setPaymentMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setPaymentMessage(
            "Your payment was not successful, please try again."
          );
          break;
        default:
          setPaymentMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleStep = () => {
    // do some logic to go to the next step
    // probably just paginate with a basic layout
    // e.g. step 1 /checkout/1, step 2 is /checkout/2

    // @TODO: add reducer to CheckoutForm
    setCheckoutForm((prevState) => ({
      ...prevState,
      step: 2,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      console.log("Stripe.js has not yet loaded.");

      return;
    }

    // @TODO: set successful/failed payment info
    // setBooking((prevState) => ({
    //   ...prevState,
    //   details: form,
    // }));

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${process.env.NEXT_PUBLIC_URL}/checkout/confirmation`,
      },
    });

    // @TODO: handleStep/resetStep should happen on the confirmation page,
    //   no further steps needed after this so it should reset booking state
    // handleStep();

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setPaymentMessage(error.message);
    } else {
      setPaymentMessage("An unexpected error occurred.");
    }
  };

  return (
    <>
      {/* step 2 */}
      <h3 className="mb-4 text-3xl">Payment</h3>

      <form className="flex flex-col" onSubmit={onSubmit}>
        <div className="mb-4">
          {/* @TODO: add alert styling */}
          {paymentMessage}
        </div>

        <div className="mb-4">
          <PaymentElement />
        </div>

        <button
          type="submit"
          className="focus:shadow-outline mt-2 rounded bg-[hsl(280,100%,70%)] py-2 px-4 font-bold text-white hover:bg-[hsl(280,100%,50%)] focus:outline-none"
        >
          Continue
        </button>
      </form>
    </>
  );
};
