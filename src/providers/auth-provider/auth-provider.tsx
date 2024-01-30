import { createContext, PropsWithChildren, useState } from "react";
import { UserType } from "@/types/user.ts";

export const AuthContext = createContext<{
  user: UserType | null;
  session: SessionType;
  setUser: (user: UserType | null) => void;
  signIn: (user: UserType) => void;
  signOut: () => void;
} | null>(null);

type SessionType = "loading" | "authorize" | "unauthorize";

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<UserType | null>(null);
  const [session, setSession] = useState<SessionType>("loading");

  const signIn = (user: UserType) => {
    setUser(user);
    setSession("authorize");
  };

  const signOut = () => {
    setUser(null);
    setSession("unauthorize");
  };

  const value = {
    user,
    session,
    setUser,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
