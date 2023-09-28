import { createContext } from "react";

export const Mycontext = createContext();

export const ContextProvider = ({ children }) => {
  return <Mycontext.Provider>{children}</Mycontext.Provider>;
};
