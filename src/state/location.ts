import { createContext, useContext } from "react";
import type { Location } from "../types/location";

export const LocationContext = createContext<Location | null>(null);
export const useLocation = () => {
  const location = useContext(LocationContext);

  if (!location) {
    throw new Error("Location not set within LocationContext.Provider");
  }

  return location;
};
