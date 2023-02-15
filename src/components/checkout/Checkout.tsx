import { useBooking } from "../../state/booking";

export const Checkout = () => {
  const { name } = useBooking();

  return (
    <section>
      <h1 className="mb-10 text-5xl font-extrabold tracking-tight text-white">
        Checkout
      </h1>

      <h2 className="text-2xl text-white">{name}</h2>
    </section>
  );
};
