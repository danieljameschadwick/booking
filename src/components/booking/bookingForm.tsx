import { BOOKING_TYPE } from "../../constants/bookingType";
import { SportForm } from "./SportForm";

// should these come from specific modules? helps modularity, SoC?
// e.g. @booking/sports, @booking/movies, @booking/restaurant?
const BOOKING_FORM = {
  [BOOKING_TYPE.SPORT]: <SportForm />,
}

export const BookingForm = ({ type = BOOKING_TYPE.SPORT }) => {
  // rudimentary mapping for booking type
  // maybe even return React.createElement(BOOKING_FORM[type]), but use SportForm?
  const form = BOOKING_FORM[type];

  if (!form) return null;

  return form;
};
