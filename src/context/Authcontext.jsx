import { createContext, useEffect, useReducer } from "react";

export const Authcontext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        user: action.payload,
      };
    case "LOG_OUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "LOG_IN", payload: user });
    }
  }, []);

  console.log("Authcontext state", state);

  return (
    <Authcontext.Provider value={{ ...state, dispatch }}>
      {children}
    </Authcontext.Provider>
  );
};
