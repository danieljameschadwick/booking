import type { Location } from "./location";

export interface Booking {
  id: string;
  date: Date;
  type: string;
  location: Location;
  details: Details;
}

export interface Details {
  fullName: string | null;
  email: string | null;
  phoneNumber: string | null;
}
