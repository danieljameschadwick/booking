import { createContext, useContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage/localStorage";

export const DebugContext = createContext<boolean>(false);

// @TODO: we can further make this generic and 
//   move this to a standard LocalStorageProvider
export const DebugProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ debug, setDebug ] = useState(() => getLocalStorage<boolean>("debug", false));

  useEffect(() => {
    setLocalStorage<boolean>("debug", debug);
  }, [debug]);

  return (
    <DebugContext.Provider
      // @TODO: value needs to support Booking object, and utils such as set 
      value={{
        debug,
        setDebug,
      }}
    >
      {children}
    </DebugContext.Provider>
  );
}

export const useDebug = () => {
  const debug = useContext(DebugContext);

  if (!debug) {
    throw new Error("Debug not set within DebugContext.Provider");
  }

  return debug;
};
