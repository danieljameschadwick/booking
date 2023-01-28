import format from "date-fns/format";
import { useRouter } from "next/router";
import { useState } from "react";
import { BOOKING_TYPE } from "../../constants/bookingType";

/**
 * Pass default type to props, or context?
 */
const bookingType = BOOKING_TYPE.SPORT;

interface Booking {
  date: Date;
  location: string | null;
  sport: string;
}

const SPORT_TYPE = {
  BASKETBALL: "basketball",
  FOOTBALL: "football",
  NETBALL: "netball",
};

export const SportForm = () => {
  const router = useRouter();
  const [form, setForm] = useState<Booking>({
    date: new Date(),
    location: null,
    sport: SPORT_TYPE.BASKETBALL,
  });
  const date = format(form.date, "yyyy-MM-dd");

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    console.log("handleSubmit");
    console.log(form);

    router.push({
      pathname: `/listing/${bookingType}`,
      query: {
        ...form,
        date: format(form.date, "yyyy-MM-dd"),
      },
    });
  };

  return (
    <form
      className="mb-4 flex flex-col rounded bg-white px-8 pt-6 pb-8 shadow-md"
      onSubmit={handleSubmit}
    >
      <label className="mb-2 text-sm">Date:</label>
      <input
        type="date"
        name="date"
        className="focus:shadow-outline mb-4 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        onChange={(event) =>
          setForm((prevState) => ({
            ...prevState,
            date: new Date(event.target.value),
          }))
        }
        defaultValue={date}
      />

      <label className="mb-2 text-sm">Location:</label>
      <input
        type="text"
        name="location"
        className="focus:shadow-outline mb-4 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        onChange={(event) =>
          setForm((prevState) => ({
            ...prevState,
            location: event.target.value,
          }))
        }
        defaultValue={form.location ?? ""}
      />

      <label className="mb-2 text-sm">Sport:</label>
      <select
        className="focus:shadow-outline mb-4 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        onChange={(event) =>
          setForm((prevState) => ({
            ...prevState,
            sport: event.target.value,
          }))
        }
        defaultValue={form.sport}
      >
        <option value={SPORT_TYPE.BASKETBALL}>Basketball</option>
        <option value={SPORT_TYPE.FOOTBALL}>Football</option>
        <option value={SPORT_TYPE.NETBALL}>Netball</option>
      </select>

      <button
        type="submit"
        className="focus:shadow-outline rounded bg-[hsl(280,100%,70%)] py-2 px-4 font-bold text-white hover:bg-[hsl(280,100%,50%)] focus:outline-none"
      >
        Book
      </button>
    </form>
  );
};
