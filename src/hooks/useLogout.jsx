import { useAuthcontext } from "./useAuthcontext";

export const useLogout = () => {
  const { dispatch } = useAuthcontext();

  const logout = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOG_OUT" });
  };

  return { logout };
};
