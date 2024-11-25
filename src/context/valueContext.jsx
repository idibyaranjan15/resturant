import { createContext, useContext, useState } from "react";

// Create the context
export const valueContext = createContext();

// Hook to use the context
export const useValueContext = () => {
  const context = useContext(valueContext);
  if (!context) {
    throw new Error("Value Context is not provided");
  }
  return context; // Ensure the context value is returned
};

// Context Provider
export const ValueContextProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  console.log(value);

  return (
    <valueContext.Provider value={{ value, setValue }}>
      {children}
    </valueContext.Provider>
  );
};
