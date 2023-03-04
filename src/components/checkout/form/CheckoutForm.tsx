import { useCheckoutForm } from "./CheckoutFormContext";
import { CheckoutDetailsForm } from "./CheckoutDetailsForm";
import { CheckoutPaymentForm } from "./CheckoutPaymentForm";

export const CheckoutForm = () => {
  const {
    checkoutForm: { step = 0 },
  } = useCheckoutForm();

  // multistep form
  return (
    <section className="self-start bg-white p-6">
      {step === 0 && <CheckoutDetailsForm />}
      {step === 1 && <CheckoutPaymentForm />}
    </section>
  );
};
