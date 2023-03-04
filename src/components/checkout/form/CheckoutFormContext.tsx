import { createContext, useContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../../../utils/localStorage/localStorage";

interface CheckoutForm {
  step: number;
}

const initialState = {
  step: 0,
};

export const CheckoutFormContext = createContext<CheckoutForm>(initialState);

// @TODO: we can further make this generic and 
//   move this to a standard LocalStorageProvider
export const CheckoutFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ checkoutForm, setCheckoutForm ] = useState(() => getLocalStorage<CheckoutForm>("checkoutForm", initialState));

  useEffect(() => {
    setLocalStorage<CheckoutForm>("checkoutForm", checkoutForm);
  }, [checkoutForm]);

  const resetCheckoutForm = () => {
    setCheckoutForm(initialState);
  }

  return (
    <CheckoutFormContext.Provider
      // @TODO: value needs to support Booking object, and utils such as set 
      value={{
        checkoutForm,
        setCheckoutForm,
        resetCheckoutForm,
      }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
}

export const useCheckoutForm = () => {
  const debug = useContext(CheckoutFormContext);

  if (!debug) {
    throw new Error("CheckoutForm not set within CheckoutFormContext.Provider");
  }

  return debug;
};
