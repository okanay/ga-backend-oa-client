import { twMerge } from "tailwind-merge";
import { m } from "framer-motion";

type Props = React.FC<{
  className: string;
  isInView: boolean;
  children: React.ReactNode;
}>;

export const FeatureItemWrapper: Props = ({
  children,
  isInView,
  className,
}) => {
  return (
    <m.div
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{
        type: "tween",
        ease: "easeIn",
        duration: 0.45,
      }}
      className={twMerge(
        className,
        "mb-8 flex flex-col space-y-4 text-flower-50 sm:mb-12"
      )}
    >
      {children}
    </m.div>
  );
};
