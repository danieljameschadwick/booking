import { SportForm } from "./sportForm";

const BOOKING_TYPE = {
  SPORT: 'sport',
};

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
