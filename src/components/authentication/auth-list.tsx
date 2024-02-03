import {
  EasyLogin,
  InformationLogin,
  SecureLogin,
} from "@/components/authentication/auth-icons.tsx";

export const AuthList = () => {
  return (
    <ul className="flex flex-col justify-start gap-2.5 text-xs tracking-tight sm:text-sm">
      <li className={"flex items-center gap-4"}>
        <EasyLogin />
        <p>
          Login with your{" "}
          <span className={"text-flower-500 underline underline-offset-4"}>
            Google Search Console
          </span>
          .
        </p>
      </li>
      <li className={"flex items-center gap-4"}>
        <InformationLogin />
        <p>Google will automatically fill in your details</p>
      </li>
      <li className={"flex items-center gap-4"}>
        <SecureLogin />
        It's quick, easy, and secure.
      </li>
    </ul>
  );
};
