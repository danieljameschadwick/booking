import { useState } from "react";
import { useBooking } from "../../../state/booking";
import { useCheckoutForm } from "./CheckoutFormContext";

interface Form {
  fullName: string | null;
  email: string | null;
  phoneNumber: string | null;
}

export const CheckoutDetailsForm = () => {
  const { details: defaultDetails = null, setBooking } = useBooking();
  const { setCheckoutForm } = useCheckoutForm();
  const {
    fullName: defaultFullName = null,
    email: defaultEmail = null,
    phoneNumber: defaultPhoneNumber = null,
  } = defaultDetails || {};
  const [form, setForm] = useState<Form>({
    fullName: defaultFullName,
    email: defaultEmail,
    phoneNumber: defaultPhoneNumber,
  });

  const handleStep = () => {
    // do some logic to go to the next step
    // probably just paginate with a basic layout
    // e.g. step 1 /checkout/1, step 2 is /checkout/2

    // @TODO: add reducer to CheckoutForm
    setCheckoutForm((prevState) => ({
      ...prevState,
      step: 1,
    }));
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setBooking((prevState) => ({
      ...prevState,
      details: form,
    }));

    handleStep();
  };

  return (
    <>
      {/* step 1 */}
      <h3 className="mb-4 text-3xl">Continue as a guest</h3>

      <form className="flex flex-col" onSubmit={onSubmit}>
        {/* // @TODO: make an input component */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm">Full name:</label>
          <input
            type="text"
            name="full-name"
            className="focus:shadow-outline mb-4 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            required
            onChange={(event) =>
              setForm((prevState) => ({
                ...prevState,
                fullName: event.target.value,
              }))
            }
            defaultValue={defaultFullName}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-sm">Email:</label>
          <input
            type="text"
            name="email"
            className="focus:shadow-outline mb-4 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            required
            onChange={(event) =>
              setForm((prevState) => ({
                ...prevState,
                email: event.target.value,
              }))
            }
            defaultValue={defaultEmail}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-sm">Phone number:</label>
          <input
            type="text"
            name="phone-number"
            className="focus:shadow-outline mb-4 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            required
            onChange={(event) =>
              setForm((prevState) => ({
                ...prevState,
                phoneNumber: event.target.value,
              }))
            }
            defaultValue={defaultPhoneNumber}
          />
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
