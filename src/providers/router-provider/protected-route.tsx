import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/auth-provider/use-auth.tsx";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.user === null) {
      navigate("/", { replace: true });
    }
  }, [navigate, auth]);

  return children;
}
