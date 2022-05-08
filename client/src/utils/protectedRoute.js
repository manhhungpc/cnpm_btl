import { Route, Navigate } from "react-router-dom";
import { useUser } from "./useUser";

export const ProtectedRoute = ({ children }) => {
  const auth = useUser();
  if (!auth) return <Navigate replace to="/login" />;
  return children;
};
