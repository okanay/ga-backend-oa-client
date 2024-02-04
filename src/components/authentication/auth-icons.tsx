import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

interface IconsProps {
  className?: string;
}

interface BrandProps extends IconsProps {
  to?: string;
}

export const BrandLogo = ({ className, to = "/" }: BrandProps) => {
  return (
    <Link to={to}>
      <img
        src="/svgs/logo.svg"
        alt="Google icon"
        width="128"
        height="128"
        loading={"lazy"}
        className={twMerge("size-20", className)}
      />
    </Link>
  );
};

export const GoogleIcon = ({ className }: IconsProps) => {
  return (
    <img
      src="/svgs/google.svg"
      alt="Google icon"
      width="128"
      height="128"
      loading={"lazy"}
      className={twMerge("size-5", className)}
    />
  );
};

export const EasyLogin = ({ className }: IconsProps) => {
  return (
    <img
      src="/svgs/easy-login.svg"
      alt="Google icon"
      width="128"
      height="128"
      loading={"lazy"}
      className={twMerge("size-4", className)}
    />
  );
};

export const SecureLogin = ({ className }: IconsProps) => {
  return (
    <img
      src="/svgs/secure.svg"
      alt="Google icon"
      width="128"
      height="128"
      loading={"lazy"}
      className={twMerge("size-4", className)}
    />
  );
};

export const InformationLogin = ({ className }: IconsProps) => {
  return (
    <img
      src="/svgs/information.svg"
      alt="Google icon"
      width="128"
      height="128"
      loading={"lazy"}
      className={twMerge("size-4", className)}
    />
  );
};
