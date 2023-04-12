import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../features/auth/authSlice";
import { useMemo } from "react";

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  console.log("Token", token)
  return useMemo(() => ({ user }), [user]);
};
