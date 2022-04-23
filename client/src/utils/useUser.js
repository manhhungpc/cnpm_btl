import { useState, useEffect } from "react";
import { useToken } from "./useToken";

export const useUser = () => {
  const [token] = useToken();

  const getPayload = (token) => {
    if (!token) return null;
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  };

  const [user, setUser] = useState(() => {
    if (!token) return null;
    return getPayload(token);
  });
  useEffect(() => {
    if (!token) setUser(null);
    setUser(getPayload(token));
  }, [token]);

  return user;
};
