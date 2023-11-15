import { useState } from "react";
import { useAuthcontext } from "./useAuthcontext";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthcontext();

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.errMsg);
      setIsLoading(false);
    } else {
      localStorage.setItem("user", JSON.stringify(json));
      setIsLoading(false);
      dispatch({ type: "LOG_IN", payload: json });
    }
  };
  return { error, isLoading, login };
};

export default useLogin;
