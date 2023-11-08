import { useContext } from "react";
import { Authcontext } from "../context/Authcontext";

export const useAuthcontext = () => {
  const context = useContext(Authcontext);

  if (!context) {
    throw Error("Context needs to be used in the AuthContextProvider");
  }

  return context;
};
