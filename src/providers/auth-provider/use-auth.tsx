import { useContext } from "react";
import { AuthContext } from "@/providers/auth-provider/auth-provider.tsx";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("This hook must be used within an auth-provider");
  }

  return context;
};
