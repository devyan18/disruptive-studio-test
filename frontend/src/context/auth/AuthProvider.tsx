import React, { createContext, useState, useContext, useEffect } from "react";
import { User } from "@/model/User";
import { getTokenFromLocalStorage } from "@/utilities/localstorage";
import { getUserFromToken } from "@/common/services/session.service";

type UserState = User | null | undefined;

type AuthState = {
  user: UserState,
  loading: boolean,
  handleUser: (user: UserState) => void
}

const initialState: AuthState = {
  user: null,
  loading: true,
  handleUser: () => {}
};

// This context will be used to manage the user state
const AuthContext = createContext<AuthState>(initialState);

type IProvider = {
  children: React.ReactNode
}

// This provider allows to manage the user state
export const AuthProvider = (props: IProvider) => {
  const [user, setUser] = useState<UserState>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  // This function will be used to set the user state
  const handleUser = (user: UserState) => {
    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    const token = getTokenFromLocalStorage();

    if (!token) {
      setLoading(false);
      setUser(null);
      return;
    }

    if (user === null || user === undefined) {
      getUserFromToken(token)
        .then((response) => {
          handleUser(response.data);
        })
        .catch((e) => {
          console.log(e);
          setUser(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, loading, handleUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useSession = () => useContext(AuthContext);
