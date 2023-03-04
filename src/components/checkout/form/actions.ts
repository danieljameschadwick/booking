import type { Booking } from "../../../types/booking";

export const saveBooking = async (booking: Booking) => {
  // @TODO: to be replaced with tRPC, so fetch temporariliy
  const response = await fetch('/api/v1/booking', {
    method: 'POST',
    body: JSON.stringify(booking),
  });

  return await response.json() as Booking;
};
