import { createContext, PropsWithChildren, useState } from "react";
import { UserType } from "@/types/user.ts";

export const AuthContext = createContext<{
  user: UserType | null;
  signIn: (user: UserType) => void;
  signOut: () => void;
} | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<UserType | null>(null);

  const signIn = (user: UserType) => setUser(user);
  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
