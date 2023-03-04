import { createContext, useContext, useEffect, useState } from "react";
import type { Booking } from "../types/booking";
import {
  getLocalStorage,
  setLocalStorage,
} from "../utils/localStorage/localStorage";

export const BookingContext = createContext<Booking | null>(null);

// @TODO: we can further make this generic and
//   move this to a standard LocalStorageProvider
export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // As this is a booking, we need partials as they:
  //   1. Choose a sport/date
  //   2. Choose a venue/time
  //   3. Add their info/pull info from UserContext
  const [booking, setBooking] = useState(() =>
    getLocalStorage<Booking | null>("booking", null)
  );

  useEffect(() => {
    console.log('setLocalStorage');
    console.log(booking);

    setLocalStorage<Booking | null>("booking", booking);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [booking, booking?.details, booking?.location]);

  const resetBooking = (resetLocation = true, resetPersonalDetails = true) => {
    console.log('----- resetBooking ------');
    console.log(JSON.stringify({ resetLocation, resetPersonalDetails }));

    const tempBooking = booking;
  
    // @TODO: separate resetting
    if (resetLocation) {
      tempBooking.location = null;
    }

    if (resetPersonalDetails) {
      tempBooking.details = null;
    }

    console.log(tempBooking);

    setBooking(tempBooking);

    console.log(booking);

    // console.log('----- resetBooking - setLocalStorage --------')
    // setLocalStorage<Booking | null>("booking", tempBooking);
  };

  return (
    <BookingContext.Provider
      // @TODO: value needs to support Booking object, and utils such as set
      value={{
        ...booking,
        setBooking,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const booking = useContext(BookingContext);

  if (!booking) {
    throw new Error("Booking not set within BookingContext.Provider");
  }

  return booking;
};
