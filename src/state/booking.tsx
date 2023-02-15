import { createContext, useContext, useEffect, useState } from "react";
import type { Booking } from "../types/booking";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage/localStorage";

export const BookingContext = createContext<Booking | null>(null);

// @TODO: we can further make this generic and 
//   move this to a standard LocalStorageProvider
export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // As this is a booking, we need partials as they:
  //   1. Choose a sport/date
  //   2. Choose a venue/time
  //   3. Add their info/pull info from UserContext
  const [ booking, setBooking ] = useState(() => getLocalStorage<Booking | null>("booking", null));

  useEffect(() => {
    setLocalStorage<Booking | null>("booking", booking);
  }, [booking]);

  return (
    <BookingContext.Provider
      // @TODO: value needs to support Booking object, and utils such as set 
      value={{
        ...booking,
        setBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => {
  const booking = useContext(BookingContext);

  if (!booking) {
    throw new Error("Booking not set within BookingContext.Provider");
  }

  return booking;
};
