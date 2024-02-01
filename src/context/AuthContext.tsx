import { setToken, getToken, removeToken } from "@/api/token";
import React, { useState, createContext, useEffect } from "react";
import { useUser } from "@/hooks";
import { IAuthContext, handleError } from "@/utils";

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext>({
  auth: undefined,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = (props: Props) => {
  const { children } = props;
  const [auth, setAuth] = useState<IAuthContext["auth"]>(undefined);
  const { getMyInfo } = useUser();

  async function setAuthInfo(token: string) {
    try {
      const myInfo = await getMyInfo(token);
      setAuth({ token, myInfo: myInfo.data });
    } catch (error) {
      handleError(error);
    }
  }

  const getInitialData = async () => {
    const token = getToken();
    if (token) {
      return setAuthInfo(token);
    }
    setAuth(null);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  const login = async (token: string) => {
    setToken(token);
    setAuthInfo(token);
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
    }
  };

  const initialContextValues = {
    auth,
    login,
    logout,
  };

  if (auth === undefined) {
    return null;
  }

  return (
    <AuthContext.Provider value={initialContextValues}>
      {children}
    </AuthContext.Provider>
  );
};
